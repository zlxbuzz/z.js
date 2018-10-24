const fse = require("fs-extra");
const jsdoc2md = require("jsdoc-to-markdown");
const path = require("path");
const baseDir = path.resolve(process.cwd(), "src");
const js2mdConfig = path.resolve(process.cwd(), "jsdoc2md.json");
const dir = fse.readdirSync(baseDir);
const fileReg = /^index\.ts$/;

if (dir.length) {
  dir.forEach(v => {
    const fPath = path.resolve(baseDir, v);
    const stats = fse.statSync(fPath);
    if (stats.isDirectory()) {
      const f = fse.readdirSync(fPath).filter(file => {
        return file.match(fileReg);
      });
      if (f[0]) {
        const realF = path.resolve(fPath, f[0]);
        jsdoc2md
          .getTemplateData({ files: realF, configure: js2mdConfig })
          .then(comments => {
            renderTest(fPath, comments);
            renderDoc(v, comments);
          });
      }
    }
  });
}

function templateTest(func) {
  let test = "";
  func.forEach(f => {
    if (!f.examples) {
      return;
    }
    test += `
      describe("${f.desc} ${f.name}", () => {
    `;
    f.examples.forEach(example => {
      var index = example.lastIndexOf("//");
      var fun = example.substr(0, index).trim();
      var res = example.substr(index + 2).trim();
      const msg = JSON.stringify(`${fun}返回${res}`);
      //todo 不同的数据做断言条件判断
      test += `
        test(${msg},() => {
          expect(${fun}).toEqual(${res});
        })
      `;
    });
    test += `
      })
    `;
  });
  return test || "";
}
function templateCase(funcModule, func) {
  const test = templateTest(func);
  const funcNames = func.map(f => {
    return f.name;
  });
  return `
    import ${funcModule} from '../index';
    const { ${funcNames.join(`,`)} } = ${funcModule};

    describe("${funcModule}测试", () => {
      ${test}
    })

  `;
}
function renderDoc(type, comments) {
  const file = path.resolve(process.cwd(), "docs", `${type}.md`);
  const mdData = jsdoc2md.renderSync({
    data: comments.map(v => {
      //过滤父级
      delete v.memberof;
      return v;
    }),
    configure: js2mdConfig
  });
  fse.outputFileSync(file, mdData);
  console.log(`${file} 生成完毕`);
}
function renderTest(fPath, comments) {
  const func = [];
  let funcModule;
  let needTest = false;
  comments.forEach(comment => {
    funcModule = comment.memberof;
    if (comment.examples) {
      needTest = true;
    }
    func.push({
      name: comment.name,
      desc: comment.description,
      params: comment.params,
      examples: comment.examples
    });
  });
  if (needTest) {
    const res = templateCase(funcModule, func);
    const file = path.resolve(fPath, "__test__/index.test.ts");
    fse.outputFile(file, res).then(() => {
      console.log(`${file}生成完毕`);
    });
  }
}
