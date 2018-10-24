
    import url from '../index';
    const { getParamByName,parseQueryString } = url;

    describe("url测试", () => {
      
      describe("<p>获取url参数</p> getParamByName", () => {
    
        test("getParamByName(\"a\", \"http://www.baidu.com?a=1&b=aaa\")返回\"1\"",() => {
          expect(getParamByName("a", "http://www.baidu.com?a=1&b=aaa")).toEqual("1");
        })
      
        test("getParamByName(\"b\", \"http://www.baidu.com?a=1&b=aaa\")返回\"aaa\"",() => {
          expect(getParamByName("b", "http://www.baidu.com?a=1&b=aaa")).toEqual("aaa");
        })
      
        test("getParamByName(\"c\", \"http://www.baidu.com?a=1&b=aaa\")返回\"\"",() => {
          expect(getParamByName("c", "http://www.baidu.com?a=1&b=aaa")).toEqual("");
        })
      
        test("getParamByName(\"c\")返回\"ccc\"",() => {
          expect(getParamByName("c")).toEqual("ccc");
        })
      
      })
    
      describe("<p>解析url</p> parseQueryString", () => {
    
        test("parseQueryString(\"http://www.baidu.com?a=1&b=aaa\")返回{a:'1',b:'aaa'}",() => {
          expect(parseQueryString("http://www.baidu.com?a=1&b=aaa")).toEqual({a:'1',b:'aaa'});
        })
      
      })
    
    })

  