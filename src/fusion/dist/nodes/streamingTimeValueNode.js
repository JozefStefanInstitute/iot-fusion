const a0_0xc03f=['broadcastAggregates','postConstructor','fusionNodeI','apply','test','TimeValue\x20-\x20double\x20timestamp.','parent','Time','Timetamp\x20is\x20NaN!','float','lastTimestamp','log','processRecord','./streamingNode.js','getAggregates','value','rawstore','nodeId','processRecordCb','return\x20/\x22\x20+\x20this\x20+\x20\x22/','rawRecord','push','buffer','createStore','time','constructor','aggrConfigId','store','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','createAggregates'];(function(_0x528a99,_0xc03fdb){const _0x487363=function(_0x3d83b8){while(--_0x3d83b8){_0x528a99['push'](_0x528a99['shift']());}},_0x5d34f6=function(){const _0x96b5eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3bad17,_0x34db85,_0x90323,_0xdd4775){_0xdd4775=_0xdd4775||{};let _0x2b06d8=_0x34db85+'='+_0x90323,_0x4ecd57=0x0;for(let _0x44ee33=0x0,_0x29f119=_0x3bad17['length'];_0x44ee33<_0x29f119;_0x44ee33++){const _0x226b82=_0x3bad17[_0x44ee33];_0x2b06d8+=';\x20'+_0x226b82;const _0xac5804=_0x3bad17[_0x226b82];_0x3bad17['push'](_0xac5804),_0x29f119=_0x3bad17['length'],_0xac5804!==!![]&&(_0x2b06d8+='='+_0xac5804);}_0xdd4775['cookie']=_0x2b06d8;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39111b,_0xfd9834){_0x39111b=_0x39111b||function(_0xdac40a){return _0xdac40a;};const _0x4f2586=_0x39111b(new RegExp('(?:^|;\x20)'+_0xfd9834['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4e45be=function(_0x1b3814,_0x10f59d){_0x1b3814(++_0x10f59d);};return _0x4e45be(_0x487363,_0xc03fdb),_0x4f2586?decodeURIComponent(_0x4f2586[0x1]):undefined;}},_0x229f7e=function(){const _0x4d396f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4d396f['test'](_0x96b5eb['removeCookie']['toString']());};_0x96b5eb['updateCookie']=_0x229f7e;let _0x465e01='';const _0x539caf=_0x96b5eb['updateCookie']();if(!_0x539caf)_0x96b5eb['setCookie'](['*'],'counter',0x1);else _0x539caf?_0x465e01=_0x96b5eb['getCookie'](null,'counter'):_0x96b5eb['removeCookie']();};_0x5d34f6();}(a0_0xc03f,0x1bf));const a0_0x4873=function(_0x528a99,_0xc03fdb){_0x528a99=_0x528a99-0x0;let _0x487363=a0_0xc03f[_0x528a99];return _0x487363;};const a0_0x90323=function(){let _0x5d15a5=!![];return function(_0xf88f88,_0x36de43){const _0x167880=_0x5d15a5?function(){if(_0x36de43){const _0x2258ed=_0x36de43[a0_0x4873('0x6')](_0xf88f88,arguments);return _0x36de43=null,_0x2258ed;}}:function(){};return _0x5d15a5=![],_0x167880;};}(),a0_0x34db85=a0_0x90323(this,function(){const _0xdca32b=function(){const _0x48bb5e=_0xdca32b['constructor'](a0_0x4873('0x16'))()[a0_0x4873('0x1c')](a0_0x4873('0x1'));return!_0x48bb5e[a0_0x4873('0x7')](a0_0x34db85);};return _0xdca32b();});a0_0x34db85();const streamingNode=require(a0_0x4873('0x10'));class streamingTimeValueNode extends streamingNode{constructor(_0x2ab69f,_0x10a478,_0x56ed8d,_0x152f38,_0x357ebc,_0x174d40,_0x4e4a91){super(_0x2ab69f,_0x10a478,_0x56ed8d,_0x152f38,_0x357ebc,_0x174d40,_0x4e4a91),this[a0_0x4873('0x19')]=[],this['position']=0x0,this['base'][a0_0x4873('0x1a')]({'name':this[a0_0x4873('0x14')],'fields':[{'name':a0_0x4873('0xa'),'type':'datetime'},{'name':a0_0x4873('0x12'),'type':a0_0x4873('0xc')}]}),this[a0_0x4873('0x13')]=this['base'][a0_0x4873('0x0')](this[a0_0x4873('0x14')]),this['lastValue']=0x0,this[a0_0x4873('0xd')]=0x0,super[a0_0x4873('0x2')](_0x152f38[_0x56ed8d[a0_0x4873('0x1d')]]),super[a0_0x4873('0x4')]();}[a0_0x4873('0xf')](_0x26d1bb){let _0x64a678=_0x26d1bb[a0_0x4873('0x1b')]*0x3e8,_0x2c80b2=isNaN(_0x26d1bb[a0_0x4873('0x12')])||_0x26d1bb['value']==null?0x0:_0x26d1bb[a0_0x4873('0x12')];if(_0x64a678<=this[a0_0x4873('0xd')]){console[a0_0x4873('0xe')](a0_0x4873('0x8'));return;}if(isNaN(_0x64a678)){console['log'](a0_0x4873('0xb'));return;}this['rawRecord']=this[a0_0x4873('0x13')]['newRecord']({'Time':_0x64a678,'value':_0x2c80b2}),this['rawstore']['triggerOnAddCallbacks'](this[a0_0x4873('0x17')]),this[a0_0x4873('0xd')]=_0x64a678;let _0x31618d=super[a0_0x4873('0x11')](),_0x3d684a=_0x31618d;_0x3d684a[a0_0x4873('0x12')]=_0x2c80b2,this[a0_0x4873('0x19')][a0_0x4873('0x18')](_0x3d684a),super[a0_0x4873('0x3')](_0x31618d),this[a0_0x4873('0x15')](this[a0_0x4873('0x5')],this[a0_0x4873('0x9')]);}}module['exports']=streamingTimeValueNode;