const a0_0x3fab=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','value','constructor','test','exports','options','./abstractIncrementalModel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','save','predict','qminer','EMA'];(function(_0x2a5720,_0x3fab2){const _0x276e85=function(_0x382a70){while(--_0x382a70){_0x2a5720['push'](_0x2a5720['shift']());}},_0x12ac28=function(){const _0x40a6d4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4945be,_0x3a7dc7,_0x6d5fda,_0x551e7a){_0x551e7a=_0x551e7a||{};let _0x4d1ba6=_0x3a7dc7+'='+_0x6d5fda,_0x2bc16c=0x0;for(let _0xb2af4=0x0,_0x1d0c83=_0x4945be['length'];_0xb2af4<_0x1d0c83;_0xb2af4++){const _0x2e8ed7=_0x4945be[_0xb2af4];_0x4d1ba6+=';\x20'+_0x2e8ed7;const _0x469226=_0x4945be[_0x2e8ed7];_0x4945be['push'](_0x469226),_0x1d0c83=_0x4945be['length'],_0x469226!==!![]&&(_0x4d1ba6+='='+_0x469226);}_0x551e7a['cookie']=_0x4d1ba6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x465309,_0x2d47d6){_0x465309=_0x465309||function(_0x370447){return _0x370447;};const _0x3e77bb=_0x465309(new RegExp('(?:^|;\x20)'+_0x2d47d6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x11d964=function(_0x15c45a,_0x49f62f){_0x15c45a(++_0x49f62f);};return _0x11d964(_0x276e85,_0x3fab2),_0x3e77bb?decodeURIComponent(_0x3e77bb[0x1]):undefined;}},_0x321286=function(){const _0x47338f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x47338f['test'](_0x40a6d4['removeCookie']['toString']());};_0x40a6d4['updateCookie']=_0x321286;let _0x3211f5='';const _0x52f587=_0x40a6d4['updateCookie']();if(!_0x52f587)_0x40a6d4['setCookie'](['*'],'counter',0x1);else _0x52f587?_0x3211f5=_0x40a6d4['getCookie'](null,'counter'):_0x40a6d4['removeCookie']();};_0x12ac28();}(a0_0x3fab,0x116));const a0_0x276e=function(_0x2a5720,_0x3fab2){_0x2a5720=_0x2a5720-0x0;let _0x276e85=a0_0x3fab[_0x2a5720];return _0x276e85;};const a0_0x6d5fda=function(){let _0x12f9fa=!![];return function(_0x428be7,_0x5b245e){const _0x4fc3ae=_0x12f9fa?function(){if(_0x5b245e){const _0x5d6d33=_0x5b245e['apply'](_0x428be7,arguments);return _0x5b245e=null,_0x5d6d33;}}:function(){};return _0x12f9fa=![],_0x4fc3ae;};}(),a0_0x3a7dc7=a0_0x6d5fda(this,function(){const _0x4e080b=function(){const _0x2415a9=_0x4e080b[a0_0x276e('0x0')](a0_0x276e('0xa'))()[a0_0x276e('0x0')](a0_0x276e('0x5'));return!_0x2415a9[a0_0x276e('0x1')](a0_0x3a7dc7);};return _0x4e080b();});a0_0x3a7dc7();const qm=require(a0_0x276e('0x8')),la=require(a0_0x276e('0x8'))['la'],fs=require('fs'),AbstractIncrementalModel=require(a0_0x276e('0x4'));class EMAIncrementalModel extends AbstractIncrementalModel{constructor(_0x25ce4d,_0x1fc29d){super(_0x25ce4d,_0x1fc29d),this[a0_0x276e('0x3')]=_0x25ce4d,this[a0_0x276e('0xb')]=0x0;let _0xa2f48b=_0x25ce4d['N']!==undefined?_0x25ce4d['N']:0x5;this['k']=0x2/(_0xa2f48b+0x1),this[a0_0x276e('0x9')]=null;}['partialFit'](_0x3ab372,_0x6b019f){this[a0_0x276e('0x9')]===null?this[a0_0x276e('0x9')]=_0x6b019f:this[a0_0x276e('0x9')]=_0x6b019f*this['k']+(0x1-this['k'])*this[a0_0x276e('0x9')];}[a0_0x276e('0x7')](_0xfd5de0){return this[a0_0x276e('0x9')];}[a0_0x276e('0x6')](_0x36a904){}['load'](_0x529d3d){}}module[a0_0x276e('0x2')]=EMAIncrementalModel;