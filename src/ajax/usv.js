import BaseService from './index'

class UserSvc extends BaseService {
  constructor (options){
    super(options)
  }
  list () {
    return this.get('/v1/hotel/info',{id:12312312})
  }
}

export default new UserSvc({
  baseURL: 'http://user-gw.test.mararun.com'
})
