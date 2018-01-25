import {parseQueryString, getParamByName} from '../src/url'

describe('url test', ()=>{
  const url = 'http://www.baidu.com?a=1&b=aaa'

  describe('获取url参数:getParamByName',()=>{
    test(`${url} getParamByName('a',url)  返回 1`, ()=>{
      expect(getParamByName('a',url)).toBe('1')
    })
    test(`${url} getParamByName('b',url) 返回 'aaa'`, ()=>{
      expect(getParamByName('b',url)).toBe('aaa')
    })
    test(`${window.location.href} getParamByName('c') 返回 'ccc'`, ()=>{
      expect(getParamByName('c')).toBe('ccc')
    })
    test(`${window.location.href} getParamByName('b') 返回 null`, ()=>{
      expect(getParamByName('b')).toBe(null)
    })
  })

  describe('解析url:parseQueryString',()=>{
    test(`${url} 返回 {a:'1',b:'aaa'}`, ()=>{
      expect(parseQueryString(url)).toEqual({a:'1',b:'aaa'})
    })
    test(`${window.location.href}  返回 {c:'ccc'}`, ()=>{
      expect(parseQueryString()).toEqual({c:'ccc'})
    })
  })
})

