(function(t){function e(e){for(var r,l,i=e[0],s=e[1],u=e[2],c=0,f=[];c<i.length;c++)l=i[c],o[l]&&f.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"39d2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-toolbar",[n("v-toolbar-title",[t._v("\n      Full Stack One\n    ")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",to:"/"}},[n("v-icon",{attrs:{left:""}},[t._v("  home ")]),t._v("\n        Home\n      ")],1),n("v-btn",{attrs:{flat:"",to:"/people"}},[n("v-icon",{attrs:{left:""}},[t._v("  supervisor_account ")]),t._v("\n        People\n      ")],1)],1)],1),n("main",[n("router-view")],1)],1)},l=[],i={name:"App",components:{},data(){return{}}},s=i,u=n("2877"),p=n("6544"),c=n.n(p),f=n("7496"),v=n("8336"),d=n("132d"),b=n("9910"),m=n("71d9"),_=n("2a7f"),h=Object(u["a"])(s,a,l,!1,null,null,null);h.options.__file="App.vue";var y=h.exports;c()(h,{VApp:f["a"],VBtn:v["a"],VIcon:d["a"],VSpacer:b["a"],VToolbar:m["a"],VToolbarItems:_["a"],VToolbarTitle:_["b"]});var g=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-list",t._l(t.persons,function(e){return n("v-list-tile",{key:e._id},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.name)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.age)}})],1)],1)}))],1)],1)],1)},V=[],w=n("bc3a"),O=n.n(w),j={data(){return{persons:[]}},mounted(){O.a.get("http://soliton.eastus.cloudapp.azure.com/api/persons").then(t=>{this.persons=t.data.persons}).catch(t=>{console.log(t)})}},T=j,P=(n("5ad2"),n("b0af")),S=n("0e8f"),k=n("a722"),L=n("8860"),$=n("ba95"),C=n("5d23"),E=Object(u["a"])(T,x,V,!1,null,null,null);E.options.__file="People.vue";var M=E.exports;c()(E,{VCard:P["a"],VFlex:S["a"],VLayout:k["a"],VList:L["a"],VListTile:$["a"],VListTileContent:C["a"],VListTileTitle:C["b"]});var A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(" Home ")])])}],F={},I=F,J=Object(u["a"])(I,A,H,!1,null,null,null);J.options.__file="Home.vue";var z=J.exports;r["a"].use(g["a"]);var B=new g["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:z},{path:"/people",name:"people",component:M}]});r["a"].config.productionTip=!1,new r["a"]({router:B,render:t=>t(y)}).$mount("#app")},"5ad2":function(t,e,n){"use strict";var r=n("39d2"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ede0392c.js.map