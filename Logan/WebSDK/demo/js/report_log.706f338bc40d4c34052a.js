(window.webpackJsonpLogan=window.webpackJsonpLogan||[]).push([[3],{10:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(12),a=n(0),i=function(){},s=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t,n,r,o){return s(void 0,void 0,void 0,(function(){return u(this,(function(a){return[2,new Promise((function(a,s){!function(e){var t="XDomainRequest"in window,n=t?new window.XDomainRequest:new XMLHttpRequest;if(n.open(e.type||"GET",e.url,!0),n.success=e.success||i,n.fail=e.fail||i,n.withCredentials=e.withCredentials,t?(n.onload=e.success||i,n.onerror=e.fail||i,n.onprogress=i):n.onreadystatechange=function(){if(4===n.readyState){var t=n.status;t>=200?e.success&&e.success(n.responseText):e.fail&&e.fail("Request failed, status: "+t+", responseText: "+n.responseText)}},"POST"===e.type){if(e.headers&&!t)for(var r in e.headers)n.setRequestHeader(r,e.headers[r]);n.send(e.data)}else n.send()}({url:e,type:r||"GET",data:t,withCredentials:!!n,headers:o,success:function(e){a(e)},fail:function(e){s(new Error(e||"Request failed"))}})}))]}))}))},l=n(2);n.d(t,"default",(function(){return g}));var f,p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function g(e){return d(this,void 0,void 0,(function(){var t,n,i,s,u,g,b,y;return h(this,(function(v){switch(v.label){case 0:if(o.b.idbIsSupported())return[3,1];throw new Error(r.b.DB_NOT_SUPPORT);case 1:return f||(f=new o.b(a.a.get("dbName"))),[4,f.getLogDaysInfo(e.fromDayString,e.toDayString)];case 2:t=v.sent(),n=t.reduce((function(e,t){var n;return p(((n={})[t[o.a]]=t.reportPagesInfo?t.reportPagesInfo.pageSizes.map((function(e,n){return f.logReportNameFormatter(t[o.a],n)})):[],n),e)}),{}),i={},s=Object(l.d)(e.fromDayString),u=Object(l.d)(e.toDayString),g=+s,v.label=3;case 3:if(!(g<=+u))return[3,15];if(b=Object(l.c)(new Date(g)),!(n[b]&&n[b].length>0))return[3,13];v.label=4;case 4:return v.trys.push([4,11,,12]),[4,Promise.all(n[b].map((function(t){return function(e,t){var n;return d(this,void 0,void 0,(function(){var o,i,s,u;return h(this,(function(l){switch(l.label){case 0:return[4,f.getLogsByReportName(e)];case 1:return(o=l.sent()).length>0?(i=o.map((function(e){return encodeURIComponent(e.logString)})),s=f.logReportNameParser(e),u="function"==typeof t.xhrOptsFormatter?t.xhrOptsFormatter(i,s.pageIndex+1,s.logDay):{},[4,c(u.reportUrl||t.reportUrl||a.a.get("reportUrl"),u.data||JSON.stringify({client:"Web",webSource:""+(t.webSource||""),deviceId:t.deviceId,environment:""+(t.environment||""),customInfo:""+(t.customInfo||""),logPageNo:s.pageIndex+1,fileDate:s.logDay,logArray:o.map((function(e){return encodeURIComponent(e.logString)})).toString()}),(n=u.withCredentials,null!=n&&n),"POST",u.headers||{"Content-Type":"application/json",Accept:"application/json,text/javascript"}).then((function(e){var t,n;if("function"==typeof u.responseDealer){var o=u.responseDealer(e);if(o.resultMsg===r.b.REPORT_LOG_SUCC)return null;throw new Error(o.desc)}var a=void 0;try{a=JSON.parse(e)}catch(t){throw new Error("Try to parse response failed: "+e+" failed")}if(200===(null===(t=a)||void 0===t?void 0:t.code))return null;throw new Error("Server error, code: "+(null===(n=a)||void 0===n?void 0:n.code))}))]):[3,3];case 2:return[2,l.sent()];case 3:return[2,Promise.resolve(null)]}}))}))}(t,e)})))];case 5:v.sent(),i[b]={msg:r.b.REPORT_LOG_SUCC},v.label=6;case 6:return v.trys.push([6,9,,10]),e.incrementalReport?[4,f.incrementalDelete(b)]:[3,8];case 7:v.sent(),v.label=8;case 8:return[3,10];case 9:return v.sent(),[3,10];case 10:return[3,12];case 11:return y=v.sent(),i[b]={msg:r.b.REPORT_LOG_FAIL,desc:y.message||y.stack||JSON.stringify(y)},[3,12];case 12:return[3,14];case 13:i[b]={msg:r.b.NO_LOG},v.label=14;case 14:return g+=l.b,[3,3];case 15:return[2,i]}}))}))}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(15),o=n(2),a=n(1),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},u=1,c="logan_web_db",l="logan_detail_table",f="logReportName",p="logCreateTime",d="log_day_table",h="logDay",g=7*o.a,b=1*o.a,y=[],v=!1;function w(e){return new Promise((function(t,n){y.push({asyncF:e,resolution:t,rejection:n}),function e(){return i(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(o){switch(o.label){case 0:if(!(y.length>0)||v)return[3,5];t=y.shift(),v=!0,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t.asyncF()];case 2:return n=o.sent(),t.resolution(n),[3,4];case 3:return r=o.sent(),t.rejection(r),[3,4];case 4:return v=!1,e(),[3,0];case 5:return[2]}}))}))}()}))}var m=function(){function e(e){var t;this.DB=new r.CustomDB({dbName:e||c,dbVersion:u,tables:(t={},t[l]={indexList:[{indexName:f,unique:!1},{indexName:p,unique:!1}]},t[d]={primaryKey:h},t)})}return e.prototype.logReportNameFormatter=function(e,t){return e+"_"+t},e.prototype.logReportNameParser=function(e){var t=e.split("_");return{logDay:t[0],pageIndex:+t[1]}},e.prototype.getLogDayInfo=function(e){return i(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItem(d,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getLogDaysInfo=function(e,t){return i(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return e!==t?[3,2]:[4,this.DB.getItem(d,e)];case 1:return[2,(n=r.sent())?[n]:[]];case 2:return[4,this.DB.getItemsInRange({tableName:d,indexRange:{indexName:h,lowerIndex:e,upperIndex:t,lowerExclusive:!1,upperExclusive:!1}})];case 3:return[2,r.sent()]}}))}))},e.prototype.getLogsByReportName=function(e){return i(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItemsInRange({tableName:l,indexRange:{indexName:f,onlyIndex:e}})];case 1:return[2,t.sent()]}}))}))},e.prototype.addLog=function(e){return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(n){switch(n.label){case 0:return[4,w((function(){return i(t,void 0,void 0,(function(){var t,n,r,i,u,c,y,v,w,m,I,S,D,x,O;return s(this,(function(s){switch(s.label){case 0:return t=Object(o.g)(e),n=new Date,r=Object(o.c)(n),[4,this.getLogDayInfo(r)];case 1:if((i=s.sent()||((D={})[h]=r,D.totalSize=0,D.reportPagesInfo={pageSizes:[0]},D)).totalSize+t>g)throw new Error(a.b.EXCEED_LOG_SIZE_LIMIT);return i.reportPagesInfo&&i.reportPagesInfo.pageSizes||(i.reportPagesInfo={pageSizes:[0]}),u=i.reportPagesInfo.pageSizes,c=u.length-1,y=u[c],v=y>0&&y+t>b,R=u.slice(),v?R.push(t):R[c]+=t,w=R,(x={})[f]=this.logReportNameFormatter(r,v?c+1:c),x[p]=+n,x.logSize=t,x.logString=e,m=x,(O={})[h]=r,O.totalSize=i.totalSize+t,O.reportPagesInfo={pageSizes:w},I=O,S=6048e5-(+new Date-Object(o.e)(new Date)),[4,this.DB.addItems([{tableName:l,item:m,itemDuration:S},{tableName:d,item:I,itemDuration:S}])];case 2:return s.sent(),[2]}var R}))}))}))];case 1:return n.sent(),[2]}}))}))},e.prototype.incrementalDelete=function(e){return i(this,void 0,void 0,(function(){var t=this;return s(this,(function(n){switch(n.label){case 0:return[4,w((function(){return i(t,void 0,void 0,(function(){var t,n,r,a,i;return s(this,(function(s){switch(s.label){case 0:return[4,this.getLogDayInfo(e)];case 1:return(t=s.sent())&&t.reportPagesInfo&&t.reportPagesInfo.pageSizes instanceof Array?(n=t.reportPagesInfo.pageSizes,r=Object.assign(t,{reportPagesInfo:{pageSizes:n.concat([0])},totalSize:0}),a=6048e5-(+new Date-Object(o.e)(new Date))-(Object(o.e)(new Date)-Object(o.d)(e).getTime()),[4,this.DB.addItems([{tableName:d,item:r,itemDuration:a}])]):[3,6];case 2:s.sent(),i=0,s.label=3;case 3:return i<n.length?[4,this.DB.deleteItemsInRange([{tableName:l,indexRange:{indexName:f,onlyIndex:this.logReportNameFormatter(e,i)}}])]:[3,6];case 4:s.sent(),s.label=5;case 5:return i++,[3,3];case 6:return[2]}}))}))}))];case 1:return n.sent(),[2]}}))}))},e.idbIsSupported=r.idbIsSupported,e.deleteDB=r.deleteDB,e}();t.b=m}}]);