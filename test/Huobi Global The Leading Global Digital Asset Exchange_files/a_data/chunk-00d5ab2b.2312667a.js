(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00d5ab2b"],{"4b73":function(t,e,n){},"7b7b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget-container-h5"},[t.isVip&&void 0!==t.isVip?n("WebMessengerComponent"):t.isVip||void 0===t.isVip?t._e():n("ZendeskComponent")],1)},s=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var a=n("1da1"),c=n("5530"),r=(n("96cf"),n("fb6a"),n("25f0"),n("2f62")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},l=[],d=n("fbbd"),f={name:"NewChat",mixins:[d["a"]]},m=f,h=n("2877"),p=Object(h["a"])(m,u,l,!1,null,null,null),b=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Widget")},v=[],w=n("a9ae"),C=n("1b62"),_={name:"Web",mixins:[C["a"]],components:{Widget:w["a"]}},k=_,O=(n("8179"),n("6d62"),Object(h["a"])(k,g,v,!1,null,null,null)),j=O.exports,x=n("a3be"),y={name:"PC",components:{WebMessengerComponent:b,ZendeskComponent:j},data:function(){return{activeComponent:"ZendeskComponent",isVip:void 0}},mounted:function(){this.initBmxConfig()},watch:{"$route.query.uid":{handler:function(t){t&&this.$store.commit("base/setUid",t),this.getCustomerLevelInfo()},immediate:!0}},computed:Object(c["a"])({},Object(r["d"])("base",["uid"])),methods:{getCustomerLevelInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i,s,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.uid){e.next=3;break}return t.isVip=!1,e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(x["d"])({uid:t.uid&&t.uid.toString().slice(0,-1)});case 6:n=e.sent,i=n.data,s=i.code,o=i.success,a=i.message,c=i.data,200===s&&o?t.isVip=2===c.level:t.callNative("20010012",a),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](3);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))()},initBmxConfig:function(){var t=this;window.addEventListener("message",(function(e){if("object"===o(e.data)){var n=e.data.source;if("baymax"===n){var i=e.data,s=i.action,a=i.data;"initConfig"===s&&t.$store.commit("config/setConfigInfo",a)}}}),!1)}}},$=y,S=Object(h["a"])($,i,s,!1,null,null,null);e["default"]=S.exports},"9ebe":function(t,e,n){},a0a9:function(t,e,n){t.exports=n.p+"img/icon-close-hover.ac7e427d.svg"},a9ae:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"widget-container-web",class:{visible:t.visible}},[i("TopContainer",{attrs:{"page-loading":t.loading}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animation-loading"},[i("div",{staticClass:"logo-wrap",class:{"special-config":!!t.logoUrl}},[i("div",{staticClass:"icon-circle"}),i("img",{attrs:{src:t.logoUrl||n("b256"),alt:""}})])]),i("MessageContainer"),i("BottomContainer"),i("Toast",{attrs:{info:t.toastInfo}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelfWin||!t.isSelfWin&&t.configReady,expression:"isSelfWin || (!isSelfWin && configReady)"}],staticClass:"chat-btn",on:{click:t.chatBtnOnClick}},[i("img",{attrs:{src:t.logoUrl||n("b256"),alt:""}})])])},s=[],o=n("1da1"),a=n("5530"),c=(n("96cf"),n("2f62")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toast-container"},[n("transition",{attrs:{name:"slide-fade",appear:!0}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow&&t.info.msg,expression:"isShow && info.msg"}],staticClass:"toast-error"},[n("i",{staticClass:"icon-toast-error toast-icon"}),n("span",{staticClass:"toast-content"},[t._v(t._s(t.info.msg))])])])],1)},u=[],l={props:{info:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!0}},mounted:function(){this.hideMessage()},methods:{hideMessage:function(){var t=this;setTimeout((function(){t.isShow=!1}),800)}},watch:{info:{handler:function(){this.isShow=!0,this.hideMessage()},deep:!0}}},d=l,f=(n("ccef"),n("2877")),m=Object(f["a"])(d,r,u,!1,null,"5e0677e4",null),h=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-container"},[n("span",[t._v(t._s(t.$t("base.customer/serviceCenter")))]),n("div",{staticClass:"btn-action"},[n("button",{staticClass:"btn minimize-btn",on:{click:t.minimize}}),n("button",{staticClass:"btn logout-btn",on:{click:t.openLogoutDia}}),t._m(0)])])},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preload-img"},[i("img",{attrs:{src:n("d567")}}),i("img",{attrs:{src:n("eee3")}}),i("img",{attrs:{src:n("a0a9")}}),i("img",{attrs:{src:n("eee3")}})])}],g={name:"TopContainer",props:{pageLoading:{type:Boolean,default:!0}},computed:Object(a["a"])({},Object(c["d"])("zchat",["has_rating","queue_position","isZendeskChatting"])),methods:{minimize:function(){window.sensors.track("customer_sc_minimize_click"),this.$store.commit("base/setVisible",!1)},openLogoutDia:function(){var t=this.isZendeskChatting,e=this.queue_position,n=this.pageLoading,i=this.has_rating;window.sensors.track("customer_sc_close_click"),n?this.minimize():t&&0===e&&!i?this.$store.commit("base/setRatingDiaState",{show:!0,isLogout:!0}):this.$store.commit("base/setLogoutDiaState",!0)}}},v=g,w=(n("cf5a"),Object(f["a"])(v,p,b,!1,null,null,null)),C=w.exports,_=n("8f20"),k=n("e906"),O={name:"Widget",components:{Toast:h,TopContainer:C,BottomContainer:_["a"],MessageContainer:k["a"]},data:function(){return{toastInfo:{},renderIsDown:!1,isFirstConnect:!0,isSelfWin:!0}},mounted:function(){var t=this;this.$EventBus.$on("toast",(function(e){t.showToast(e)})),this.$EventBus.$on("isDown",(function(){setTimeout((function(){t.renderIsDown=!0}),2e3)})),this.isSelfWin=window.self===window.top},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["d"])("base",["visible","treeError","treeLoading"])),Object(c["d"])("zchat",["connection"])),Object(c["d"])("config",["logoUrl","configReady","parentLocationInfo"])),{},{loading:function(){var t=this.treeLoading,e=this.connection,n=this.renderIsDown;return this.isFirstConnect?t||!n||"connecting"===e:t||!n}}),methods:{chatBtnOnClick:function(){var t=this.parentLocationInfo,e=t.href,n=t.pathname;window.sensors.track("customer_sc_click",{Page_name:e,Page_pathname:n}),window.sensors.track("customer_sc_pop_expose"),this.$store.commit("base/setVisible",!0)},showToast:function(){var t=arguments,e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=t.length>0&&void 0!==t[0]?t[0]:{},s=i.msg||e.$i18n.t("base.network/check"),e.toastInfo=Object(a["a"])(Object(a["a"])({},i),{},{msg:s});case 3:case"end":return n.stop()}}),n)})))()}},watch:{treeError:function(){this.showToast({type:"error"})},connection:function(t){"connected"===t&&(this.isFirstConnect=!1)},"$route.query.lang":{handler:function(){this.renderIsDown=!1},immediate:!0}}},j=O,x=(n("7397"),n("cb9c"),n("df56"),Object(f["a"])(j,i,s,!1,null,"0425a464",null));e["a"]=x.exports},c8ce:function(t,e,n){},cb9c:function(t,e,n){"use strict";n("4b73")},ccef:function(t,e,n){"use strict";n("c8ce")},cf5a:function(t,e,n){"use strict";n("d891")},d567:function(t,e,n){t.exports=n.p+"img/icon-dropdown-hover.447c820b.svg"},d891:function(t,e,n){},df56:function(t,e,n){"use strict";n("9ebe")},eee3:function(t,e,n){t.exports=n.p+"img/icon-dropdown-active.4b95d8a2.svg"}}]);