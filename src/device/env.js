const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const Android = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
const Weixin = navigator.userAgent.indexOf('MicroMessenger') > -1 ;


export default function (env) {
  if(env.toLocaleLowerCase() === 'ios'){
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }else if(env.toLocaleLowerCase() === 'android'){
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
  }else if(env.toLocaleLowerCase() === 'weixin'){
    return navigator.userAgent.indexOf('MicroMessenger') > -1;
  }else{
    return navigator.userAgent.indexOf(env) > -1
  }
}
