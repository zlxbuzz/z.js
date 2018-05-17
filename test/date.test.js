import {time2date,entime2date} from '../src/date'

describe('date test', ()=>{
    const time = 1511971200;
    describe('转换time格式:time2date',()=>{
      test(`${time} time2date(time)  返回 2017年11月30日`, ()=>{
        expect(time2date(time)).toBe('2017年11月30日')
      })
    })
    describe('转换time格式:entime2date',()=>{
      test(`${time} entime2date(time)  返回 2017-11-30`, ()=>{
        expect(entime2date(time)).toBe('2017-11-30')
      })
    })
})
