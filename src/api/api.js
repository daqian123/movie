import axios from 'axios';
import router from './../router'
import {Message} from 'element-ui'
/***
 * 请求拦截器，将其转化为表单形式提交
 */
axios.interceptors.request.use(config=>{
    config.headers['Access-Control-Allow-Origin'] = '*';  
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config
},err=>{
  return Promise.reject(err)
});
axios.interceptors.response.use(response=>{
  return response
},err=>{
    var config = err.config;
    if(!config || !config.retry) return Promise.reject(err);
    config.__retryCount = config.__retryCount || 0;
    if(config.__retryCount >= config.retry) {
        return Promise.reject(err);
    }
    config.__retryCount += 1;
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });
    return backoff.then(function() {
        return axios(config);
    });
});


axios.defaults.timeout =  5000; //请求超时时间
// axios.defaults.retry = 3;       //请求超时重新请求次数
// axios.defaults.retryDelay = 1000;//重新请求时间间隔
export default {
  //发送验证码
  getHotMovieList(params){
    return axios.get('/api/movie/in_theaters',{params:params})
  }
}
