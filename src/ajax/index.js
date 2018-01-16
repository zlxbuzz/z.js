// https://bird.ioliu.cn/v1
import axios from 'axios'
import qs from 'qs'


class BaseService {
  constructor(options={}){
    const defaultOptions = {
      baseURL: 'http://www.baidu.com',
      timeout: 10000,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
    this.$http = axios.create({ ...defaultOptions, ...options })

    this.$http.interceptors.request.use((config) => {
      if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
      }
      return config;
    },(error) =>{
      return Promise.reject(error);
    });


    this.$http.interceptors.response.use((res) =>{
      if(res.status !== 200){
        return Promise.reject(res);
      }
      return res.data.data;
    }, (error) => {
      return Promise.reject(error.response);
    });
  }

  get ( url, params ,config={}) {
    return new Promise((resolve,reject)=>{
      this.$http.get(url,{params: params,...config}).then((res)=>{
        resolve(res)
      },(error)=>{
        reject(error.data.error);
      })
    })
  }

  post ( url, params ,config={}) {
    return new Promise((resolve,reject)=>{
      this.$http.post(url, params,config).then((res)=>{
        resolve(res)
      },(error)=>{
        if(error)
          reject(error.data.error);
      })
    })
  }
}


export default BaseService

