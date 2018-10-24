
    import verification from '../index';
    const { isCode,isEmail,isPhone } = verification;

    describe("verification测试", () => {
      
      describe("<p>判断是否是验证码</p> isCode", () => {
    
        test("isCode(123123)返回true",() => {
          expect(isCode(123123)).toEqual(true);
        })
      
        test("isCode(3123)返回false",() => {
          expect(isCode(3123)).toEqual(false);
        })
      
      })
    
      describe("<p>判断是否为邮箱</p> isEmail", () => {
    
        test("isEmail(\"aaa@qq.com\")返回true",() => {
          expect(isEmail("aaa@qq.com")).toEqual(true);
        })
      
        test("isEmail(\"aaqq.com\")返回false",() => {
          expect(isEmail("aaqq.com")).toEqual(false);
        })
      
      })
    
      describe("<p>判断是否为手机号码</p> isPhone", () => {
    
        test("isPhone(13311112222)返回true",() => {
          expect(isPhone(13311112222)).toEqual(true);
        })
      
        test("isPhone(2)返回false",() => {
          expect(isPhone(2)).toEqual(false);
        })
      
      })
    
    })

  