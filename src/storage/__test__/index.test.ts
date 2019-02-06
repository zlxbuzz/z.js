
    import storage from '../index';
    const { set,get,remove,clear } = storage;

    describe("storage测试", () => {
      
      describe("<p>设置storage</p> set", () => {
    
        test("set(\"token\", \"123\")返回undefined",() => {
          expect(set("token", "123")).toEqual(undefined);
        })
      
        test("get(\"token\")返回\"123\"",() => {
          expect(get("token")).toEqual("123");
        })
      
      })
    
      describe("<p>获取storage</p> get", () => {
    
        test("get(\"token\")返回\"123\"",() => {
          expect(get("token")).toEqual("123");
        })
      
      })
    
      describe("<p>移除storage</p> remove", () => {
    
        test("remove(\"token\")返回undefined",() => {
          expect(remove("token")).toEqual(undefined);
        })
      
        test("get(\"token\")返回null",() => {
          expect(get("token")).toEqual(null);
        })
      
      })
    
      describe("<p>移除所有storage</p> clear", () => {
    
        test("clear()返回undefined",() => {
          expect(clear()).toEqual(undefined);
        })
      
        test("get(\"token\")返回null",() => {
          expect(get("token")).toEqual(null);
        })
      
      })
    
    })

  