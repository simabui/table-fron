(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(152),i=a(38),u=a.n(i),m=a(51),s=a(13),p=a(52),f=a.n(p),d=a(53),E=a.n(d);function b(e){var t=e.isLoading;return r.a.createElement(f.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,className:E.a.Loader,visible:t})}var h=a(35),v=a(151),O=a(149),j=a(150),y=a(56),S=a(26),g=a(156),x=a(155),_=a(153),w=a(148),F=a(157),k=a(154),T=r.a.forwardRef(function(e,t){var a=e.option,n=e.onChange,c=e.checked,l=e.name;return r.a.createElement("div",{ref:t},r.a.createElement(F.a,{control:r.a.createElement(k.a,{onChange:n,color:"primary",name:l,checked:c}),label:a,value:a}))}),L=Object(w.a)(function(e){return{formControl:{margin:e.spacing(1),width:"100%"},label:{fontSize:13}}}),N=function(e){var t=e.type,a=e.name,c=e.options,l=e.handleSelect,o=e.reset,i=Object(n.useState)(Object(S.a)({},t,[])),u=Object(s.a)(i,2),m=u[0],p=u[1],f=Object(n.useState)({}),d=Object(s.a)(f,2),E=d[0],b=d[1],v=L();Object(n.useEffect)(function(){},[]),Object(n.useEffect)(function(){l(m)},[m]),Object(n.useEffect)(function(){!function(e,t){var a={};e.forEach(function(e){a[e]=!1}),t(a)}(c,b)},[o]);var O=function(e){var a=e.target,n=a.name,r=a.value,c=a.checked;b(Object(h.a)({},E,Object(S.a)({},n,c))),p(c?Object(S.a)({},t,[].concat(Object(y.a)(m[t]),[r])):Object(S.a)({},t,m[t].filter(function(e){return e!==r})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:v.formControl},r.a.createElement(g.a,{id:"select-label",className:v.label},a),r.a.createElement(_.a,{labelId:"select-label",id:"input-select"},c.map(function(e){return r.a.createElement(T,{option:e,key:e,onChange:O,checked:E[e],name:e})}))))},C=a(55),I=a.n(C);a(92);function R(e){return e.filter(function(e,t,a){return a.indexOf(e)===t})}var G={publicationType:[],termType:[],reportGroup:[],reportState:[],reportFormat:[]},B=function(e){var t=e.stat,a=e.handleFilter,c=Object(n.useState)(G),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),p=m[0],f=m[1];Object(n.useEffect)(function(){a(o)},[o]);var d=R(t.map(function(e){return e.publicationType})),E=R(t.map(function(e){return e.termType})),b=R(t.map(function(e){return e.reportGroup})),y=R(t.map(function(e){return e.reportState})),S=R(t.map(function(e){return e.reportFormat})),g=function(e){i(Object(h.a)({},o,e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(G),f(!p)},className:I.a.form},r.a.createElement(O.a,{style:{justifyContent:"space-around",alignItems:"flex-end"}},r.a.createElement(j.a,{xs:12,sm:6,md:2},r.a.createElement(N,{type:"publicationType",name:"\u0422\u0438\u043f \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457",options:d,handleSelect:g,reset:p})),r.a.createElement(j.a,{xs:12,sm:6,md:2},r.a.createElement(N,{type:"termType",name:"\u041f\u0435\u0440\u0456\u043e\u0434\u0438\u0447\u043d\u0456\u0441\u0442\u044c",options:E,handleSelect:g,reset:p})),r.a.createElement(j.a,{xs:12,sm:6,md:2},r.a.createElement(N,{type:"reportGroup",name:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f \u0441\u0443\u0431\u0454\u043a\u0442\u0430",options:b,handleSelect:g,reset:p})),r.a.createElement(j.a,{xs:12,sm:6,md:2},r.a.createElement(N,{type:"reportState",name:"\u0421\u0442\u0430\u0442\u0443\u0441",options:y,handleSelect:g,reset:p})),r.a.createElement(j.a,{xs:12,sm:6,md:2},r.a.createElement(N,{type:"reportFormat",name:"\u0422\u0438\u043f \u0424\u0430\u0439\u043b\u0443",options:S,handleSelect:g,reset:p})),r.a.createElement(j.a,{xs:12,sm:12,md:2},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(v.a,{variant:"contained",color:"secondary",type:"submit"},"\u0421\u041a\u0418\u041d\u0423\u0422\u0418"))))))};function D(e){var t=e.info;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stats"},t.map(function(e){return r.a.createElement("div",{key:e.idReport,className:"stat"},r.a.createElement(O.a,null,r.a.createElement(j.a,{xs:6,md:2},r.a.createElement("p",null,e.publicationType)),r.a.createElement(j.a,{xs:6,md:2},r.a.createElement("p",null,e.termType)),r.a.createElement(j.a,{xs:6,md:2},r.a.createElement("p",null,e.reportGroup)),r.a.createElement(j.a,{xs:6,md:2},r.a.createElement("p",null,e.reportState)),r.a.createElement(j.a,{xs:6,md:2},r.a.createElement("p",null,e.reportFormat))))})))}var J=a(39),M=a.n(J);M.a.defaults.baseURL="https://tablepublication.herokuapp.com";var z=function(e){return e.data},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.a.get(e,t).then(z)},H={Stat:{getStats:function(){return A("/publication")}}},P=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],p=o[1],f=Object(n.useState)(!1),d=Object(s.a)(f,2),E=d[0],h=d[1];function v(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],r=this[a];return 0===n.length||this.hasOwnProperty(a)&&n.some(function(e){return e===r})}function O(e){return Object.entries(this).every(v,e)}Object(n.useEffect)(function(){function e(){return(e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,H.Stat.getStats();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[0,8,11,14]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"My-stat"},r.a.createElement("div",{className:"My-stat__title"},r.a.createElement("h1",null,"\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u043d\u044f \u043c\u043e\u0454\u0457 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457"),r.a.createElement("p",null,"\u0423\u0432\u0430\u0433\u0430 \u0431\u0443\u043b\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438 \u0434\u043e \u0414\u043e\u0433\u043e\u0432\u043e\u0440\u0443 \u043f\u0443\u0431\u043b\u0456\u0447\u043d\u043e\u0457 \u043e\u0444\u0435\u0440\u0442\u0438.")),r.a.createElement(b,{isLoading:E}),a.length>1&&r.a.createElement(B,{stat:a,handleFilter:function(e){var t=a.filter(O,e);p(t)}}),r.a.createElement(D,{info:i})))};a(110);l.a.render(r.a.createElement(o.a,null,r.a.createElement(P,null)),document.getElementById("root"))},53:function(e,t,a){e.exports={Loader:"Loader_Loader__1BDrp"}},55:function(e,t,a){e.exports={form:"Options_form__2IFRl",row:"Options_row__2xRvD",disabledInput:"Options_disabledInput__1L5is",cell:"Options_cell__2lHRJ"}},63:function(e,t,a){e.exports=a(111)}},[[63,1,2]]]);
//# sourceMappingURL=main.5a682cf9.chunk.js.map