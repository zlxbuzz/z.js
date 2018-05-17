import {getBirthdayByID} from '../src/tool'

describe('date test', ()=>{
  const idno = '610321198804163373';
  describe('根据身份证获取生日:getBirthdayByID',()=>{
    test(`${idno} getBirthdayByID(idno)  返回 1988-04-16`, ()=>{
      expect(getBirthdayByID(idno)).toBe('1988-04-16')
    })
  })
})
