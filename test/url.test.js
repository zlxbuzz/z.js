import parseQueryString from '../src/url/parseQueryString'
import getParams from '../src/url/getParams'

describe('url test', ()=>{
  const url = 'http://www.baidu.com?a=1&b=aaa'

  describe('获取url参数:getParams',()=>{
    test(`${url} getParams('a',url)  应该返回 1`, ()=>{
      expect(getParams('a',url)).toBe('1')
    })
    test(`${url} getParams('b',url) 应该返回 'aaa'`, ()=>{
      expect(getParams('b',url)).toBe('aaa')
    })
  })

  describe('解析url:parseQueryString',()=>{
    test(`${url} 应该返回 {a:'1',b:'aaa'}`, ()=>{
      expect(parseQueryString(url)).toEqual({a:'1',b:'aaa'})
    })
  })
})

