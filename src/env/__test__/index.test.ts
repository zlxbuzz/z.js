
    import env from '../index';
    const { iOS,Weixin,Android,isBrowser,isMara,isMini,isMobile } = env;

    describe("env测试", () => {
      
      describe("<p>ios环境</p> iOS", () => {
    
        test("iOS('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')返回true",() => {
          expect(iOS('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1')).toEqual(true);
        })
      
      })
    
      describe("<p>android环境</p> Android", () => {
    
        test("Android('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36')返回true",() => {
          expect(Android('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36')).toEqual(true);
        })
      
      })
    
      describe("<p>mobile环境</p> isMobile", () => {
    
        test("isMobile('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)')返回true",() => {
          expect(isMobile('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)')).toEqual(true);
        })
      
      })
    
    })

  