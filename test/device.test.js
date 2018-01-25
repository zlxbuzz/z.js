import {iOS,Android,Weixin,isMobile} from '../src/device'

describe('device test', ()=>{
  describe('webview 类型 ',()=>{
    test(`iOS`, ()=>{
      expect(iOS()).toEqual(false)
    })
    test(`Android`, ()=>{
      expect(Android()).toEqual(false)
    })
    test(`Weixin`, ()=>{
      expect(Weixin()).toEqual(false)
    })
  })


  describe('isMobile',()=>{
    test(`isMobile`, ()=>{
      expect(isMobile()).toEqual(false)
    })
  })
})

