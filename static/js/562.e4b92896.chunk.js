"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{8562:function(n,t,e){e.r(t);var r=e(5861),a=e(885),c=e(7757),o=e.n(c),u=e(2791),s=e(7978),i=e(8663),p=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.z5)();case 3:return t=n.sent,e=t.results,c(e),n.abrupt("return");case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsx)("div",{children:(0,p.jsx)(s.Z,{movies:e})})}},8663:function(n,t,e){e.d(t,{TP:function(){return f},gL:function(){return v},gy:function(){return p},z5:function(){return i},zv:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),u=e.n(o);u().defaults.baseURL="https://api.themoviedb.org/3";var s="f70abac86533d424df79b342ee8b9ff4",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("/trending/movie/week?api_key=".concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},7978:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,c,o=e(501),u=e(6871),s=e(168),i=e(6444),p=i.ZP.div(r||(r=(0,s.Z)(["\nmargin-top: 32px;\n  display: flex;\n  flex-wrap: wrap; \n  gap: 16px;\n    \n"]))),f=i.ZP.div(a||(a=(0,s.Z)(["\nmargin-bottom: 16px;\nflex-basis: calc((100% - 48px) / 3);\nborder: 1px solid grey;\nborder-radius: 4px;\ncursor: pointer;\ntransition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),\n          0px 1px 1px rgba(0, 0, 0, 0.12);\n      transform: scale(1.03);\n  }\n> a {\n  text-decoration: none;\n}\n"]))),l=i.ZP.h3(c||(c=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),v=e(184),d=function(n){var t=n.movies,e=(0,u.TH)();return(0,v.jsx)(p,{children:t.map((function(n){var t=n.poster_path,r=n.id,a=n.title;return(0,v.jsx)(f,{children:(0,v.jsxs)(o.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:a}),(0,v.jsx)(l,{children:a})]})},r)}))})}}}]);
//# sourceMappingURL=562.e4b92896.chunk.js.map