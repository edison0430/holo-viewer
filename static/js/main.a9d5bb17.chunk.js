(this["webpackJsonpholo-viewer"]=this["webpackJsonpholo-viewer"]||[]).push([[0],{52:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(14),i=n.n(a),s=n(2),l=n(16),o=n(37),u=(n(52),n(13)),d=n(3),j=n(12),f=n(6),b=n(1);var m=function(e){var t=e.open,n=e.toggle,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(e){if(!r.current.contains(e.target)){if(!t)return;n()}};return window.addEventListener("click",e,!0),function(){return window.removeEventListener("click",e,!0)}}),[t,n]),Object(b.jsxs)("aside",{ref:r,className:"fixed top-0 left-0 h-screen w-56 ".concat(!t&&"-translate-x-full"," bg-white z-10 transform duration-200"),children:[Object(b.jsxs)("div",{className:"h-14 pl-4 mb-2 flex items-center space-x-4",children:[Object(b.jsx)("button",{onClick:n,className:"w-6 h-6",children:Object(b.jsx)(f.d,{})}),Object(b.jsx)("div",{className:"text-xl tracking-wide font-bold",children:"Holo Viewer"})]}),Object(b.jsxs)("nav",{children:[Object(b.jsxs)(u.c,{to:"/",exact:!0,className:"py-2 px-4 flex items-center space-x-4 hover:bg-gray-100",activeClassName:"bg-gray-200",onClick:n,children:[Object(b.jsx)(f.c,{className:"h-6 w-6"}),Object(b.jsx)("span",{children:"\u9996\u9801"})]}),Object(b.jsxs)(u.c,{to:"/multi-view",exact:!0,className:"py-2 px-4 flex items-center space-x-4 hover:bg-gray-100",activeClassName:"bg-gray-200",onClick:n,children:[Object(b.jsx)(f.h,{className:"h-6 w-6"}),Object(b.jsx)("span",{children:"\u591a\u7a97\u95b1\u89bd"})]})]})]})},h=n(11),x=n.n(h),O=n(4),v=n(19),p="FETCH_LIVE_STREAM",g="FETCH_SCHEDULED_STREAM",w="FETCH_CHANNEL",y="FETCH_MEMBER",N="ADD_STREAM_TO_MULTI_VIEW",_="REMOVE_STREAM_FROM_MULTI_VIEW",S="CHANGE_STATUS_TO_PLAY",E="CHANGE_STATUS_TO_PAUSE",C="CHANGE_STATUS_TO_MUTE",T="CHANGE_STATUS_TO_UNMUTE",k="SHOW_CHAT",R="HIDE_CHAT",H=n(39),M=n.n(H).a.create({baseURL:"https://holo.dev/api/v1"}),A=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get("/lives/current");case 2:n=e.sent,c=n.data.lives.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"live"})})),t({type:p,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get("/lives/scheduled");case 2:n=e.sent,c=n.data.lives.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"scheduled"})})),t({type:g,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,c,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=JSON.parse(sessionStorage.getItem("channel"))||[]).length){e.next=13;break}c=1,r=!0;case 4:if(!r){e.next=12;break}return e.next=7,M.get("channels?limit=100&page=".concat(c));case 7:a=e.sent,(n=n.concat(a.data.channels)).length<a.data.total?c++:r=!1,e.next=4;break;case 12:sessionStorage.setItem("channel",JSON.stringify(n));case 13:t({type:w,payload:n});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=JSON.parse(sessionStorage.getItem("member"))||[]).length){e.next=7;break}return e.next=4,M.get("/members");case 4:c=e.sent,n=c.data,sessionStorage.setItem("member",JSON.stringify(n));case 7:t({type:y,payload:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return{type:_,payload:e}},F=function(e){return{type:S,payload:e}},P=function(e){return{type:E,payload:e}};var D=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.streamReducer.liveStream})),n=Object(s.c)((function(e){return e.streamReducer.channel})),r=Object(s.c)((function(e){return e.streamReducer.member})),a=Object(s.c)((function(e){return e.multiViewReducer}));Object(c.useEffect)((function(){e(A()),e(I()),e(L()),e(V())}),[e]);var i=function(t){a.some((function(e){return e.id===t.id}))?e(U(t.id)):e(function(e){return{type:N,payload:e}}(t))},l=t.map((function(e){var t,c=null===(t=n.find((function(t){return t.id===e.channel_id})))||void 0===t?void 0:t.member_id,s=r.find((function(e){return e.id===c}));return Object(b.jsx)("button",{className:"rounded-full  ".concat(a.some((function(t){return t.id===e.id}))&&"ring-4 ring-red-500"),onClick:function(){return i(e)},children:Object(b.jsx)("img",{className:"w-12 h-12 rounded-full",src:null===s||void 0===s?void 0:s.avatar,alt:"avatar"})},e.id)}));return Object(b.jsx)("div",{className:"flex space-x-4",children:l})},J=n(42),z=function(e){var t=e.isOpen,n=e.toggle,r=e.children,a=e.title,s=Object(c.useRef)();Object(c.useEffect)((function(){var e=function(e){var c;if(!(null===(c=s.current)||void 0===c?void 0:c.contains(e.target))){if(!t)return;n(!1)}};return window.addEventListener("click",e,!0),function(){return window.removeEventListener("click",e,!0)}}),[t,s,n]);return t?i.a.createPortal(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50"}),Object(b.jsx)("div",{className:"fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0",children:Object(b.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 lg:w-4/12",ref:s,children:Object(b.jsxs)("div",{className:"relative flex flex-col bg-white pointer-events-auto px-7 py-4 space-y-4 rounded",children:[a&&Object(b.jsx)("div",{className:"text-2xl",children:a}),Object(b.jsx)("div",{children:r})]})})})]}),document.querySelector("#modal")):null};var B=function(e){var t=e.isOpen,n=e.toggle,c=Object(s.b)(),r=Object(s.c)((function(e){return e.multiViewReducer})),a=r.length,i=Object(s.c)((function(e){return e.streamReducer.channel})),l=Object(s.c)((function(e){return e.streamReducer.member})),o=r.map((function(e){var t,n=e.id,r=e.channel_id,a=e.title,s=e.isPlaying,o=e.isMuted,u=e.isChatShown,d=null===(t=i.find((function(e){return e.id===r})))||void 0===t?void 0:t.member_id,j=l.find((function(e){return e.id===d}));return Object(b.jsxs)("div",{className:"flex mb-4",children:[Object(b.jsx)("img",{className:"self-center w-12 h-12 rounded-full mr-3",src:null===j||void 0===j?void 0:j.avatar,alt:"avatar"}),Object(b.jsxs)("div",{className:"flex-1 min-w-0 space-y-2",children:[Object(b.jsx)("p",{className:"truncate",children:a}),Object(b.jsxs)("div",{className:"flex justify-center items-center space-x-4",children:[Object(b.jsx)("button",{className:"w-8 h-8 text-gray-500 hover:text-gray-600",onClick:function(){return c(s?P(n):F(n))},children:s?Object(b.jsx)(f.e,{}):Object(b.jsx)(f.f,{})}),Object(b.jsx)("button",{className:"w-8 h-8 text-gray-500 hover:text-gray-600",onClick:function(){return c(o?function(e){return{type:T,payload:e}}(n):function(e){return{type:C,payload:e}}(n))},children:o?Object(b.jsx)(f.i,{}):Object(b.jsx)(f.j,{})}),Object(b.jsx)("button",{className:"w-8 h-8 text-gray-500 hover:text-gray-600",onClick:function(){return c(U(n))},children:Object(b.jsx)(f.g,{})}),Object(b.jsx)("button",{className:"w-8 h-8 text-gray-500 hover:text-gray-600",onClick:function(){c(u?function(e){return{type:R,payload:e}}(n):function(e){return{type:k,payload:e}}(n))},children:u?Object(b.jsx)(J.a,{}):Object(b.jsx)(f.b,{})})]})]})]},n)}));return Object(b.jsx)(z,{isOpen:t,toggle:n,title:"\u63a7\u5236\u9762\u7248",children:a?o:"\u76ee\u524d\u6c92\u6709\u9078\u53d6\u5230\u5f71\u7247"})};var G=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"w-full px-4",children:[Object(b.jsxs)("div",{className:"flex justify-between items-center",children:[Object(b.jsx)(D,{}),Object(b.jsx)("div",{className:"flex items-center",children:Object(b.jsx)("button",{className:"w-10 h-10",children:Object(b.jsx)(f.a,{className:"text-yellow-300 hover:text-yellow-400 rounded-full",onClick:function(){return r((function(e){return!e}))}})})})]}),Object(b.jsx)(B,{isOpen:n,toggle:function(){r(!n)}})]})};var W=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(d.f)(),i=function(){r((function(e){return!e}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(d.c,{children:Object(b.jsx)(d.a,{})})}),Object(b.jsxs)("header",{className:"h-14 w-full flex items-center bg-gray-400/90 sticky top-0 z-10 backdrop-blur-sm pl-4 space-x-4",children:[Object(b.jsx)("button",{onClick:i,className:"w-6 h-6",children:Object(b.jsx)(f.d,{})}),function(){switch(a.pathname){case"/multi-view":return Object(b.jsx)(G,{});default:return Object(b.jsx)("div",{className:"text-xl tracking-wide font-bold",children:"Holo Viewer"})}}()]}),Object(b.jsx)(m,{open:n,toggle:i})]})};var X=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(W,{}),Object(b.jsx)("main",{children:e.children})]})},q=n(5),Y=n.n(q),K=n(21),Q=n.n(K),Z=(n(76),n(40)),$=n.n(Z);function ee(e){var t=Y()();return Y.a.duration(t.diff(Y()(e))).format("HH:mm:ss")}Y.a.extend(Q.a),Y.a.extend($.a);var te=function(e){var t=e.stream.start_at,n=Object(c.useState)((function(){return ee(t)})),r=Object(j.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){var e=setInterval((function(){i(ee(t))}),1e3);return function(){clearInterval(e)}}),[t]),Object(b.jsx)("span",{className:"absolute bottom-2 right-2 text-white font-bold tracking-wide bg-red-600/90 px-2 py-0 rounded-sm",children:a})};Y.a.extend(Q.a),Y.a.locale("zh-tw");var ne=function(e){var t,n=e.stream,c=Object(s.c)((function(e){return e.streamReducer.channel})),r=Object(s.c)((function(e){return e.streamReducer.member})),a=null===(t=c.find((function(e){return e.id===n.channel_id})))||void 0===t?void 0:t.member_id,i=r.find((function(e){return e.id===a}));return Object(b.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(n.room),target:"_blank",rel:"noreferrer noopener",children:Object(b.jsxs)("div",{className:"w-full shadow bg-white rounded-lg overflow-hidden",children:[Object(b.jsxs)("div",{className:"relative pt-[56.25%]",children:[Object(b.jsx)("img",{className:"absolute top-0 left-0 w-full h-full object-contain",src:n.cover,alt:n.title}),"live"===n.status&&Object(b.jsx)(te,{stream:n})]}),Object(b.jsxs)("div",{className:"flex items-center h-[80px]",children:[Object(b.jsx)("div",{className:"w-[50px] rounded-full overflow-hidden ml-2 mr-4",children:Object(b.jsx)("img",{src:null===i||void 0===i?void 0:i.avatar,alt:"avator"})}),Object(b.jsxs)("div",{className:"flex-1 min-w-0",children:[Object(b.jsx)("p",{className:"text-lg text-left tracking-wide text-i truncate",children:n.title}),Object(b.jsx)("p",{className:"pt-1",children:null===i||void 0===i?void 0:i.name}),"scheduled"===n.status&&function(){var e=Y()(n.start_at).format("HH:mm"),t=Y()(n.start_at).fromNow();return Object(b.jsxs)("p",{className:"text-sm",children:["\u5c07\u65bc ",t,"\u958b\u59cb (",e,")"]})}()]})]})]},n.id)})};var ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.streamReducer.liveStream})),n=Object(s.c)((function(e){return e.streamReducer.scheduledStream}));Object(c.useEffect)((function(){e(A()),e(I()),e(L()),e(V())}),[e]);var r=t.map((function(e){return Object(b.jsx)(ne,{stream:e},e.id)})),a=n.filter((function(e){return Y()(e.start_at).isBefore(Y()().add(1,"day"))})).map((function(e){return Object(b.jsx)(ne,{stream:e},e.id)}));return Object(b.jsxs)("div",{className:"p-4 min-h-screen bg-gray-100",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"text-lg font-bold text-green-600 mb-5",children:"\u76f4\u64ad\u4e2d"}),Object(b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2",children:0===t.length?"There is no live stream now":r})]}),Object(b.jsxs)("div",{className:"mt-6",children:[Object(b.jsx)("p",{className:"text-lg font-bold text-green-600 mb-5",children:"\u9810\u5b9a\u76f4\u64ad"}),Object(b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2",children:0===n.length?"There is no scheduled stream now":a})]})]})},re=n(41),ae=n.n(re),ie=1,se=2;var le=function(e){var t=e.stream,n=Object(s.b)(),r=t.id,a=t.room,i=t.isPlaying,l=t.isMuted,o=t.isChatShown,u=Object(c.useState)(null),d=Object(j.a)(u,2),f=d[0],m=d[1];Object(c.useEffect)((function(){var e=ae()("player-".concat(r),{width:"100%",height:"100%",videoId:a,playerVars:{playsinline:1}});m(e);var t=e.on("stateChange",(function(e){e.data===ie?n(F(r)):e.data===se&&n(P(r))}));return function(){return e.off(t)}}),[r,a,n]),Object(c.useEffect)((function(){f&&(i?f.playVideo():f.pauseVideo())}),[f,i]),Object(c.useEffect)((function(){f&&(l?f.mute():f.unMute())}),[f,l]);var h="https://gaming.youtube.com/live_chat?v=".concat(t.room,"&embed_domain=").concat(window.location.hostname);return Object(b.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[Object(b.jsx)("div",{className:"relative pt-[56.25%] lg:pt-0 lg:flex-1",children:Object(b.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",id:"player-".concat(t.id)})}),Object(b.jsx)("div",{className:"w-full lg:w-[300px] h-[400px] lg:h-full ".concat(!o&&"hidden"),children:Object(b.jsx)("iframe",{title:"chatRoom",src:h,width:"100%",height:"100%",frameBorder:"0"})})]})},oe={1:"lg:grid-cols-1",2:"lg:grid-cols-2",3:"lg:grid-cols-2",4:"lg:grid-cols-2",5:"lg:grid-cols-3",6:"lg:grid-cols-3",7:"lg:grid-cols-3",8:"lg:grid-cols-3",9:"lg:grid-cols-3"};var ue=function(){var e=Object(s.c)((function(e){return e.multiViewReducer})),t=e.length;return Object(b.jsx)("div",{className:"lg:h-[calc(100vh-56px)] lg:grid lg:grid-flow-row ".concat(t&&oe[t]),children:function(){if(t>=0)return e.map((function(e){return Object(b.jsx)(le,{stream:e},e.id)}))}()})};var de=function(){return Object(b.jsx)(u.b,{children:Object(b.jsx)(X,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",exact:!0,component:ce}),Object(b.jsx)(d.a,{path:"/multi-view",exact:!0,component:ue})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},fe={liveStream:[],scheduledStream:[],channel:[],member:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(O.a)(Object(O.a)({},e),{},{liveStream:t.payload});case g:return Object(O.a)(Object(O.a)({},e),{},{scheduledStream:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{channel:t.payload});case y:return Object(O.a)(Object(O.a)({},e),{},{member:t.payload});default:return e}},me=n(26),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return[].concat(Object(me.a)(e),[Object(O.a)(Object(O.a)({},t.payload),{},{isChatShown:!0,isPlaying:!1,isMuted:!1})]);case _:return Object(me.a)(e).filter((function(e){return e.id!==t.payload}));case S:return e.map((function(e){return e.id===t.payload&&(e.isPlaying=!0),e}));case E:return e.map((function(e){return e.id===t.payload&&(e.isPlaying=!1),e}));case C:return e.map((function(e){return e.id===t.payload&&(e.isMuted=!0),e}));case T:return e.map((function(e){return e.id===t.payload&&(e.isMuted=!1),e}));case k:return e.map((function(e){return e.id===t.payload&&(e.isChatShown=!0),e}));case R:return e.map((function(e){return e.id===t.payload&&(e.isChatShown=!1),e}));default:return e}},xe=Object(l.b)({streamReducer:be,multiViewReducer:he}),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,ve=Object(l.d)(xe,Oe(Object(l.a)(o.a)));i.a.render(Object(b.jsx)(s.a,{store:ve,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(de,{})})}),document.getElementById("root")),je()}},[[88,1,2]]]);
//# sourceMappingURL=main.a9d5bb17.chunk.js.map