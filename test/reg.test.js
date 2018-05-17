import {isEmail, isPhone,isIDCard,isCode} from '../src/reg'

describe('reg test', ()=>{
  describe('是否为email:isEmail',()=>{
    test(`isEmail('xxxx@qq.com' 返回true)`, ()=>{
      expect(isEmail('xxxx@qq.com')).toEqual(true)
    })
    test(`isEmail('xxxx' 返回false)`, ()=>{
      expect(isEmail('xxxx')).toEqual(false)
    })
  })


  describe('是否为phone:isPhone',()=>{
    test(`isPhone('13322222222' 返回true)`, ()=>{
      expect(isPhone('13322222222')).toEqual(true)
    })
    test(`isPhone('xxxx')`, ()=>{
      expect(isPhone('xxxx')).toEqual(false)
    })
  })

  describe('是否为IDCard:isIDCard',()=>{
    test(`isIDCard('610321198804163373' 返回true)`, ()=>{
      expect(isIDCard('610321198804163373')).toEqual(true)
    })
    test(`isIDCard('xxxx')`, ()=>{
      expect(isIDCard('xxxx')).toEqual(false)
    })
  })

  describe('是否为code:isCode',()=>{
    test(`isCode('123456' 返回true)`, ()=>{
      expect(isCode('123456')).toEqual(true)
    })
    test(`isCode('xxxx')`, ()=>{
      expect(isCode('xxxx')).toEqual(false)
    })
  })
})

