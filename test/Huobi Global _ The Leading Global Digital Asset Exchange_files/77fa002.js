(window.webpackJsonp=window.webpackJsonp||[]).push([[6,306],{1121:function(e,t,n){var r={"./c2c":[1093,80],"./c2c.vue":[1093,80],"./fork":[1094,81],"./fork.vue":[1094,81],"./ht":[1095,82],"./ht.vue":[1095,82],"./jprisk":[1102,83],"./jprisk.vue":[1102,83],"./main":[1096,84],"./main.vue":[1096,84],"./margin":[1097,87],"./margin-disabled":[1103,85],"./margin-disabled.vue":[1103,85],"./margin-verification":[1104,86],"./margin-verification.vue":[1104,86],"./margin.vue":[1097,87],"./new":[1098,88],"./new.vue":[1098,88],"./pioneer":[1105,89],"./pioneer.vue":[1105,89],"./pro":[1099,90],"./pro.vue":[1099,90],"./super-margin":[1106,91],"./super-margin.vue":[1106,91]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=1121,e.exports=a},1122:function(e,t,n){"use strict";n(948)},1123:function(e,t,n){"use strict";n(949)},1124:function(e,t,n){"use strict";n(950)},1284:function(e,t,n){"use strict";var r=n(2),a=n.n(r),s=(n(26),n(44),n(11),n(49),n(38),n(45),n(1)),c=n.n(s),o=n(3),i={name:"DialogLicense",data:function(){return{agreeCheckbox:!1,contentHTML:null,hided:!1}},props:{title:{type:String,default:"Внимание!"},content:{type:String,default:""},agree:{type:Boolean,default:!1},isJapan:{type:Boolean,default:!1},button:{type:String,default:"ПРИНЯТЬ"},checkText:{type:String,default:"Я ознакомлен с вышеизложенными рисками"},noCheckbox:{type:Boolean,default:!1},noContentBorder:{type:Boolean,default:!1},agreeType:{type:[String,Array],default:""}},created:function(){var e=this;return a()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.contentHTML=function(){return n(1121)("./".concat(e.content))},e.agreeCheckbox=e.agree;case 2:case"end":return t.stop()}}),t)})))()},methods:{clickAgree:function(e){this.hided=e.target.checked},setLicenseState:function(){var e=this;return a()(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],"string"==typeof e.agreeType?n.push(new Promise((function(t,n){o.fb.setLicenseAgree(e.agreeType).then((function(e){e.success?t(e):n(e)}))}))):e.agreeType.forEach(function(){var e=a()(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push(new Promise((function(e,n){o.fb.setLicenseAgree(t).then((function(t){t.success?e(t):n(t)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Promise.all(n).then((function(){e.$emit("close")})).catch((function(t){e.$toast.error(t.message)}));case 3:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;return a()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.noCheckbox||e.agreeCheckbox){t.next=2;break}return t.abrupt("return");case 2:if(!e.agreeType){t.next=6;break}return t.next=5,e.setLicenseState();case 5:return t.abrupt("return");case 6:e.$emit("close");case 7:case"end":return t.stop()}}),t)})))()}}},u=(n(1122),n(9)),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialog license",class:{"no-border":e.noContentBorder},attrs:{"growing-ignore":"true"}},[n("div",{staticClass:"dialog-title"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),n("div",{staticClass:"dialog-content content",class:{noCheckbox:e.noCheckbox,noBorder:e.noContentBorder}},[e.contentHTML?n(e.contentHTML,{tag:"component"}):n("div",{staticClass:"loading"})],1),e._v(" "),n("div",{staticClass:"dialog-actions"},[n("label",{directives:[{name:"show",rawName:"v-show",value:!e.noCheckbox,expression:"!noCheckbox"}],class:{gap:e.isJapan}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.agreeCheckbox,expression:"agreeCheckbox"}],class:{checked:e.hided},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agreeCheckbox)?e._i(e.agreeCheckbox,null)>-1:e.agreeCheckbox},on:{change:[function(t){var n=e.agreeCheckbox,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=e._i(n,null);r.checked?s<0&&(e.agreeCheckbox=n.concat([null])):s>-1&&(e.agreeCheckbox=n.slice(0,s).concat(n.slice(s+1)))}else e.agreeCheckbox=a},e.clickAgree]}}),e._v(e._s(e.checkText))]),e._v(" "),n("button",{class:{checked:e.noCheckbox||e.agreeCheckbox},on:{click:e.close}},[e._v("\n            "+e._s(e.button)+"\n        ")]),e._v(" "),e.isJapan?n("button",{staticClass:"cancel"},[n("a",{attrs:{href:"https://www.huobi.co.jp/?source=10000400"}},[e._v("\n                Huobi Japan\n            ")])]):e._e()])])}),[],!1,null,null,null);t.a=l.exports},1344:function(e,t,n){},1345:function(e,t,n){},2185:function(e,t,n){"use strict";n.r(t);var r={name:"TrComplianceModal",props:{info:{type:String,default:"margin"}},computed:{content:function(){switch(this.info){case"margin":return"Margin trading is not available in your region. Contact customer support reps if you have any queries.";case"contract":return"Contract trading is not available in your region. Contact customer support reps if you have any queries.";case"margin-contract":return"Торговля деривативами, включая фьючерсы и маржинальные продукты, недоступна в вашей стране/регионе. Если у вас есть какие-либо вопросы, обратитесь в службу поддержки клиентов."}}},methods:{close:function(){var e="compliance-".concat(this.info);localStorage.setItem(e,this.info),this.$emit("close")}},mounted:function(){this.$nuxt.$emit("TrComplianceModal_dialog_open")}},a=(n(1123),n(1124),n(9)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tr-compliance-modal"},[n("div",{staticClass:"banner"},[n("button",{staticClass:"btn-close"},[n("i",{staticClass:"hb_icon_close",on:{click:e.close}})])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[e._v(e._s(e.content))])]),e._v(" "),n("div",{staticClass:"btn-actions"},[n("button",{on:{click:e.close}},[e._v("OK")])])])}),[],!1,null,"410c5342",null);t.default=s.exports},2279:function(e,t,n){"use strict";n(1344)},2280:function(e,t,n){"use strict";n(1345)},2281:function(e,t,n){n(26),n(49),n(45),n(44),n(726),n(2282),e.exports=n(94).Promise},2282:function(e,t,n){"use strict";var r=n(23),a=n(208),s=n(390);r(r.S,"Promise",{try:function(e){var t=a.f(this),n=s(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},700:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i}));var r=52428800,a=20971520,s={UNBIND:102,CHANGE_COUNTRY:103},c="GSTERC_PROMPT",o="SPOT_CROSS_MARGIN",i="onlyViewCurSymbolSwitch"},726:function(e,t,n){"use strict";var r=n(23),a=n(94),s=n(35),c=n(157),o=n(380);r(r.P+r.R,"Promise",{finally:function(e){var t=c(this,a.Promise||s.Promise),n="function"==typeof e;return this.then(n?function(n){return o(t,e()).then((function(){return n}))}:e,n?function(n){return o(t,e()).then((function(){throw n}))}:e)}})},918:function(e,t,n){"use strict";n.r(t),n.d(t,"spainLicense",(function(){return M})),n.d(t,"newZealandLicense",(function(){return E})),n.d(t,"checkLicense",(function(){return j})),n.d(t,"showModal",(function(){return L})),n.d(t,"errorTipsModal",(function(){return G})),n.d(t,"setLicenseStateV2",(function(){return z})),n.d(t,"showOberveAreaModal",(function(){return J})),n.d(t,"checkClearOutUserDialog",(function(){return Y}));n(36),n(21),n(14),n(74),n(50),n(13),n(12),n(17),n(11),n(18),n(19),n(16);var r=n(7),a=n.n(r),s=n(10),c=n.n(s),o=n(2),i=n.n(o),u=n(1),l=n.n(u),f=(n(26),n(44),n(15),n(32),n(24),n(49),n(38),n(45),n(27),n(20),n(3)),p=n(1284),h=n(728),d=(n(8),{name:"RiskWarningDialog",data:function(){return{seconds:3,isDisabled:!0}},props:{currency:{type:String,default:""},type:{type:String,default:""}},created:function(){this.skip()},computed:{countDown:function(){return this.seconds<1?"Я прочитал и понял":"Я прочитал и понял（".concat(this.seconds,"S）")},content:function(){return"abnormalmarket"===this.type?"%s может иметь относительно меньшую глобальную ликвидность и более высокие колебания цен. Пожалуйста, внимательно изучите информацию о токене перед торговлей и примите разумную торговую стратегию".replace("%s",this.currency.toUpperCase()):"%s ялвяется блокчейн-активом с относительно высокими рисками, и может иметь относительно меньшую глобальную ликвидность и более высокие колебания цен. Пожалуйста, внимательно изучите информацию о валюте перед торговлей и примите разумную торговую стратегию".replace("%s",this.currency.toUpperCase())}},methods:{skip:function(){var e=this;this.seconds>0?this.timer=setTimeout((function(){e.seconds--,e.skip()}),1e3):this.isDisabled=!1},HandAgree:function(){this.$emit("close")}},destroyed:function(){clearTimeout(this.timer)}}),b=(n(2279),n(9)),g=Object(b.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),e._v(" "),n("p",[e._v(e._s(e.content))]),e._v(" "),n("div",{staticClass:"dialog-footer"},[n("button",{attrs:{disabled:e.isDisabled},on:{click:e.HandAgree}},[e._v(e._s(e.countDown))])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dialog high-risk"},[t("i",{staticClass:"hb_icon_info"}),this._v("\n        Напоминание О Рисках\n    ")])}],!1,null,"73239b84",null).exports,k=n(2185),x=n(30);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={name:"ObservationAgreeTips",props:{callBack:{type:Function,default:function(){return null}}},computed:v(v({},Object(x.e)(["locale"])),{},{url:function(){var e="zh-cn"===this.locale?"zh-cn":"en-us";return"https://huobiglobal.zendesk.com/hc/".concat(e,"/articles/900002039026")}}),data:function(){return{agree:!1}},methods:{submit:function(){var e=this;return i()(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.fb.setLicenseAgree("POTENTIALS");case 2:if(!(n=t.sent).success){t.next=10;break}if(t.t0=e.callBack,!t.t0){t.next=8;break}return t.next=8,e.callBack();case 8:t.next=11;break;case 10:e.$toast.error(n.message);case 11:e.$emit("close");case 12:case"end":return t.stop()}}),t)})))()}}},w=(n(2280),Object(b.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"observation-agree-dialog"},[n("div",{staticClass:"observation-agree-title"},[n("span",[e._v("Инструкции по открытию")]),e._v(" "),n("button",{on:{click:function(t){return e.$emit("close")}}},[n("i",{staticClass:"hb_icon_close"})])]),e._v(" "),n("div",{staticClass:"observation-agree-content"},[n("p",[e._v("Huobi Новый Хаб принадлежит к популярному пулу торговли активами и экологическими ресурсами. Цены на проект сильно колеблются. Для того, чтобы снизить торговый риск обычных пользователей, установлен торговый лимит проекта. Пожалуйста, внимательно прочтите информацию о проекте перед инвестированием.")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],class:{checked:e.agree},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var n=e.agree,r=t.target,a=!!r.checked;if(Array.isArray(n)){var s=e._i(n,null);r.checked?s<0&&(e.agree=n.concat([null])):s>-1&&(e.agree=n.slice(0,s).concat(n.slice(s+1)))}else e.agree=a}}}),e._v(" "),n("span",[e._v("\n                Согласен с\n                "),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.url}},[e._v("«Соглашение о предоставлении услуг Huobi»")])])])]),e._v(" "),n("div",{staticClass:"observation-agree-actions"},[n("button",{staticClass:"btn-cancel",on:{click:function(t){return e.$emit("close")}}},[e._v("\n            Отменить\n        ")]),e._v(" "),n("button",{staticClass:"btn-confirm",attrs:{disabled:!e.agree},on:{click:e.submit}},[e._v("\n            Подтвердить\n        ")])])])}),[],!1,null,"78af0e47",null).exports);n(700),n(2281);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,s=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw s}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O,P,A,I={c2c:{title:"Соглашение О Маржинальной Торговле C2C",content:"c2c",checkType:"C2C",agreeType:"C2C",checkBoxText:"Я уже прочитал и согласен с условиями"},margin:{title:"Соглашение о кредитных сделках",content:"margin",checkType:"MARGIN",agreeType:["MARGIN","SUPER_MARGIN"],checkBoxText:"Я уже прочитал и согласен с условиями"},superMargin:{title:"Соглашение о кредитных сделках",content:"margin",checkType:["MARGIN","SUPER_MARGIN"],agreeType:["MARGIN","SUPER_MARGIN"],checkBoxText:"Я уже прочитал и согласен с условиями",baseType:"margin"},main:{title:"Открыть сделку в Основной зоне",content:"main",checkType:"MAIN_ZONE",agreeType:"MAIN_ZONE"},new:{title:"Открыть сделки на зоне «Инновационные»",content:"new",checkType:"NEW_ZONE",agreeType:"NEW_ZONE"},pro:{title:"Открыть сделки на зоне «Специальные»",content:"pro",checkType:"PRO_ZONE",agreeType:"PRO_ZONE"},fork:{title:"Открыть сделки на зоне «Форк»",content:"fork",checkType:"FORK_ZONE",agreeType:"FORK_ZONE"},ht:{content:"ht",checkType:"HT",agreeType:"HT"},obeserveArea:{content:"",checkType:"POTENTIALS",agreeType:"POTENTIALS"},pioneer:{title:"Инструкции по открытию",content:"pioneer",noCheckbox:!0,checkType:"PIONEER",agreeType:"PIONEER"}},S=["Торговое разрешение не включено","Разрешение на фиксированно-маржинальную торговлю не включено, пожалуйста, авторизуйтесь через основной-аккаунт.","Разрешение на кросс-маржинальную торговлю не включено, пожалуйста, авторизуйтесь через основной-аккаунт.","После открытия разрешения текущий счет может быть использован для переводов активов, заимствования, покупки, продажи и т. д.","Текущий счет в данное время может быть использован для перевода активов, погашения кредита и процентов и отмены ордеров. После того, как авторизация включена, вы можете подать заявку на заимствование, покупку и продажу."],N={superMargin:{content:"Эта функция доступна только для приглашенных пользователей в период бета-тестирования."},marginDisabled:{content:"В настоящее время функция торговли с плечом недоступна в вашей стране или районе.",buttons:[{label:"Отменить"},{label:"OK",class:"button"}],ids:[183,83]},marginVerification:{content:"Ваш IP-адрес не поддерживает функцию маржинальной торговли. Если вы не являетесь гражданином этой страны, пожалуйста, сначала выполните верификацию личночти.",buttons:[{label:"Отменить"},{label:"Верифицировать>",class:"button",callback:function(){return location.href="/user_center/uc_auth/"}}],ids:[183,83]},subUserMarginNotOpen:{title:S[0],content:"".concat(S[1],'\n                <div class="hint">\n                    Подсказка:<br>\n                    ').concat(S[3],"\n                </div>"),buttons:[{label:"OK",class:"button"}]},subUserMarginClose:{title:S[0],content:"".concat(S[1],'\n                <div class="hint">\n                    Подсказка:<br>\n                    ').concat(S[4],"\n                </div>"),buttons:[{label:"OK",class:"button"}]},subUserCrossMarginNotOpen:{title:S[0],content:"".concat(S[2],'\n                <div class="hint">\n                    Подсказка:<br>\n                    ').concat(S[3],"\n                </div>"),buttons:[{label:"OK",class:"button"}]},subUserCrossMarginClose:{title:S[0],content:"".concat(S[2],'\n                <div class="hint">\n                    Подсказка:<br>\n                    ').concat(S[4],"\n                </div>"),buttons:[{label:"OK",class:"button"}]},countryDisabled:{content:"Уважаемый пользователь, услуга недоступна для вашей страны или региона. Спасибо за поддержку.",buttons:[{label:"OK",class:"button"}]}},M=(P=!1,A=!1,function(e,t){return O||(O=e.$store.watch((function(e){var t=e.exchange;return[t.exchangeType,t.symbolCode]}),(function(e,t){P=!1}))),new Promise(function(){var r=i()(l.a.mark((function r(a){var s,c,o,i,u,f,p,h,d,b,g,k,x,m,v;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t||!P){r.next=3;break}return a(!1),r.abrupt("return");case 3:if(s=e.$store.state.user,c=s.countryId,o=s.isLogin,i=s.userAuthInfo,c){r.next=7;break}return r.next=7,e.$store.dispatch("user/getCountryId");case 7:if(!o){r.next=11;break}if(i.auth_info){r.next=11;break}return r.next=11,e.$store.dispatch("user/getUserAuthInfo");case 11:if(u=e.$store.state.user.userAuthInfo.auth_info,f=(u=void 0===u?{}:u).pro_country_id,p=e.$store.state.exchange,h=p.exchangeType,d=p.symbolCode,b=e.$store.getters.isETP,g=159==+e.$store.state.user.countryId||159==+f,k=["cross-margin","margin"].includes(h),x=b(d),!g||!k&&!x){r.next=30;break}return r.next=22,n.e(358).then(n.bind(null,3868));case 22:if(m=r.sent,v=m.default,!A){r.next=27;break}return a(!1),r.abrupt("return",!1);case 27:e.$modal.show(v,{},{width:"en-us"===localStorage.lang?480:600,height:"auto",clickToClose:!1},{opened:function(){A=!0},closed:function(){A=!1,P=!0,a(!1)}}),r.next=31;break;case 30:a(!0);case 31:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}),E=function(){var e,t=!1,r=!1;return function(a,s,c){return e||(e=a.$store.watch((function(e){var t=e.exchange;return[t.exchangeType,t.symbolCode]}),(function(e,n){t=!1}))),new Promise(function(){var e=i()(l.a.mark((function e(o){var i,u,f,p,h,d,b,g,k,x,m,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s||!t){e.next=3;break}return o(!1),e.abrupt("return");case 3:if(i=a.$store.state.user,u=i.countryId,f=i.isLogin,p=i.userAuthInfo,u){e.next=7;break}return e.next=7,a.$store.dispatch("user/getCountryId");case 7:if(!f){e.next=11;break}if(p.auth_info){e.next=11;break}return e.next=11,a.$store.dispatch("user/getUserAuthInfo");case 11:if(h=a.$store.state.user.userAuthInfo.auth_info,d=(h=void 0===h?{}:h).pro_country_id,b=a.$store.state.exchange.symbolCode,g=a.$store.getters.isETP,k=122==+a.$store.state.user.countryId||122==+d,x=g(b),!k||!x){e.next=30;break}return e.next=22,n.e(357).then(n.bind(null,3869));case 22:if(m=e.sent,v=m.default,!r){e.next=27;break}return o(!1),e.abrupt("return",!1);case 27:a.$modal.show(v,{isTip:c},{width:"en-us"===localStorage.lang?480:600,height:"auto",clickToClose:!1},{opened:function(){r=!0},closed:function(){r=!1,t=!0,o(!1)}}),e.next=31;break;case 30:o(!0);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}();function j(e){return D.apply(this,arguments)}function D(){return(D=i()(l.a.mark((function e(t){var r,a,s,o,i,u,f,p,h,d,b,g,k,x,m,v,y,w,C,_,T,$,O,P,A,I,S,j,D,B,H,z,Z,J,K,q,W,Y=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$store.state.languageState.loading){e.next=3;break}return e.next=3,t.$store.dispatch("getLanguageActionState");case 3:if(!(r=t.$store.getters.getLanguageCompliance)){e.next=9;break}if(e.t0=!localStorage.getItem("compliance-".concat(r)),!e.t0){e.next=9;break}return e.next=9,R(t,r);case 9:return e.next=11,F(t);case 11:return e.next=13,te(t);case 13:if(t.$store.state.user.isLogin){e.next=19;break}return e.next=16,M(t);case 16:return e.next=18,E(t,!1,!0);case 18:return e.abrupt("return",!1);case 19:if(a=t.$store.state,s=a.symbolsObj,o=a.currencysObj,i=a.currenciesExtra,u=t.$store.state.exchange,f=u.symbolCode,p=u.exchangeType,h=u.base,d=u.quote,b=s[f]||{},g=b.base_currency,k=b.tags,x=b.symbol_partition,m=b.quote_currency,v=b.country_disabled,y=t.$store.state.user,w=y.countryId,C=y.userInfo,_=y.userAuthInfo,T=o[h]||{},$=T.tags,C.uid){e.next=27;break}return e.next=27,t.$store.dispatch("user/getUserInfo");case 27:if(w){e.next=30;break}return e.next=30,t.$store.dispatch("user/getCountryId");case 30:if(_.auth_info){e.next=33;break}return e.next=33,t.$store.dispatch("user/getUserAuthInfo");case 33:if(O=t.$store.state.user.userInfo,P=O.country_id,A=void 0===P?[]:P,I=O.user_type,S=c()(A,1),j=S[0],D=1*t.$store.state.user.countryId,B=t.$store.state.user.userAuthInfo.auth_info,H=(B=void 0===B?{}:B).pro_status,v||i.length){e.next=42;break}return e.next=42,this.$store.dispatch("getCurrenciesExtra");case 42:return e.next=44,V(t,"ETP");case 44:return e.next=46,V(t,"MARGIN");case 46:return e.next=48,V(t,"CROSS_MARGIN");case 48:if(!(v||t.$store.getters.isCountryDisabled(h)||t.$store.getters.isCountryDisabled(d))){e.next=52;break}return e.next=51,G(t,"countryDisabled");case 51:return e.abrupt("return");case 52:if("cross-margin"!==p){e.next=63;break}if(null!==(z=t.$store.state.superMargin.superMarginPermission)){e.next=58;break}return e.next=57,t.$store.dispatch("superMargin/getUserPermissions");case 57:z=t.$store.state.superMargin.superMarginPermission;case 58:if(z){e.next=63;break}return e.next=61,G(t,"superMargin");case 61:return t.$store.commit("exchange/SET_COUPON_STATE",!0),e.abrupt("return",!1);case 63:if(2!==I){e.next=84;break}if("exchange"===p){e.next=67;break}return e.next=67,t.$store.dispatch("authority/getSubUserAuthority");case 67:if("margin"!==p){e.next=75;break}if("not-open"!==(Z=t.$store.getters["authority/subUserMargin"])){e.next=72;break}return e.next=72,G(t,"subUserMarginNotOpen",!0);case 72:if("close"!==Z){e.next=75;break}return e.next=75,G(t,"subUserMarginClose",!0);case 75:if("cross-margin"!==p){e.next=83;break}if("not-open"!==(J=t.$store.getters["authority/subUserSuperMargin"])){e.next=80;break}return e.next=80,G(t,"subUserCrossMarginNotOpen",!0);case 80:if("close"!==J){e.next=83;break}return e.next=83,G(t,"subUserCrossMarginClose",!0);case 83:return e.abrupt("return");case 84:if("exchange"===p){e.next=91;break}if(!N.marginVerification.ids.includes(D)||2===H){e.next=88;break}return e.next=88,G(t,"marginVerification");case 88:if(!N.marginDisabled.ids.includes(j)){e.next=91;break}return e.next=91,G(t,"marginDisabled");case 91:if("ht"!==g){e.next=94;break}return e.next=94,L(t,"ht");case 94:if("margin"!==p){e.next=99;break}return e.next=97,L(t,"margin");case 97:e.next=107;break;case 99:if("c2c-margin"!==p&&"c2c-margin-loan"!==p){e.next=104;break}return e.next=102,L(t,"c2c");case 102:e.next=107;break;case 104:if("cross-margin"!==p){e.next=107;break}return e.next=107,L(t,"superMargin");case 107:if("c2c-margin-loan"===p){e.next=134;break}if("innovation"!==x){e.next=113;break}return e.next=111,L(t,"new");case 111:e.next=134;break;case 113:if("profession"!==x){e.next=118;break}return e.next=116,L(t,"pro");case 116:e.next=134;break;case 118:if("bifurcation"!==x){e.next=123;break}return e.next=121,L(t,"fork");case 121:e.next=134;break;case 123:if("pioneer"!==x){e.next=134;break}return e.next=126,L(t,"pioneer");case 126:if(!(t.$store.getters.isNeedKyc(h)||t.$store.getters.isNeedKyc(d))||2===H){e.next=134;break}return e.next=130,n.e(356).then(n.bind(null,3870));case 130:return K=e.sent,q=K.default,e.next=134,new Promise((function(e){Y.$modal.show(q,{},{width:480,height:"auto",clickToClose:!1},{closed:function(){return e()}})}));case 134:if(W=g+"/"+m,t.$cookies.get("AbnormalMarket"+W)||!(k||"").includes("abnormalmarket")){e.next=140;break}return e.next=138,U(t,W,"abnormalmarket");case 138:e.next=143;break;case 140:if(t.$cookies.get("HighRisk"+h)||!($||"").includes("highrisk")||(k||"").includes("abnormalmarket")){e.next=143;break}return e.next=143,U(t,h,"highrisk");case 143:return t.$store.commit("exchange/SET_COUPON_STATE",!0),e.next=146,M(t);case 146:return e.next=148,X(t);case 148:return e.next=150,E(t,!1,!0);case 150:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function U(e,t,n){return new Promise((function(r){e.$modal.show(g,{currency:t,type:n},{width:480,height:"auto",clickToClose:!1},{closed:function(){"abnormalmarket"===n?function(e,t){var n="AbnormalMarket"+t;e.$cookies.set(n,1,{expires:new Date((new Date).setHours(24,0,0,0)),path:"/"})}(e,t):function(e,t){var n="HighRisk"+t;e.$cookies.set(n,1,{expires:new Date(+new Date+2592e5),path:"/"})}(e,t),r()}})}))}function L(e,t,n){return new Promise((function(r){if(!I[t].ok&&e.$store.state.user.isLogin){if(void 0===n&&I[t].checkType){var a=I[t].baseType||t,s=e.$store.state.license[a],c=s?s.version:0,o=function(t){s&&e.$store.commit("license/setLicense",[a,{ok:1,alert:"number"==typeof t&&t<s.version}])};B(I[t].checkType,c).then((function(n){!1===n?e.$modal.show(p.a,I[t],{width:"en-us"===localStorage.lang?480:600,height:"auto",clickToClose:!1},{closed:function(){o(c),I[t].ok=1,r()}}):(o(n),r())}))}}else r()}))}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:margin;return new Promise(function(){var n=i()(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$modal.show(k.default,{info:t},{name:"tr-compliance-name",width:480,height:"auto",clickToClose:!1},{closed:function(){var e=i()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}function G(e,t,n){return new Promise(function(){var r=i()(l.a.mark((function r(a){var s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=Object.assign({icon:"warn",title:"Внимание!",buttons:[{label:"Отменить"},{label:"Подтвердить",class:"button"}],dialogid:t},N[t]),!document.querySelector("[dialogid=".concat(t,"]"))){r.next=3;break}return r.abrupt("return");case 3:n&&e.$cookies.get("HB-ND-".concat(t))||e.$modal.show(h.default,s,{width:480,height:"auto",clickToClose:!1},{closed:function(){var r=i()(l.a.mark((function r(){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n&&e.$cookies.set("HB-ND-".concat(t),1),a();case 2:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function B(e,t){return H.apply(this,arguments)}function H(){return(H=i()(l.a.mark((function e(t,n){var r,a,s,c,o,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"string"==typeof t&&(t=[t]),r=T(t),e.prev=2,r.s();case 4:if((a=r.n()).done){e.next=21;break}return s=a.value,e.next=8,f.fb.getLicenseState(s);case 8:if(c=e.sent,o=c.success,i=c.data,u=c.code,!o){e.next=17;break}if(i.state){e.next=15;break}return e.abrupt("return",!1);case 15:if(!("version"in i)||n===i.version){e.next=17;break}return e.abrupt("return",i.version);case 17:if(510!==u){e.next=19;break}return e.abrupt("return",-1);case 19:e.next=4;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),r.e(e.t0);case 26:return e.prev=26,r.f(),e.finish(26);case 29:return e.abrupt("return",!0);case 30:case"end":return e.stop()}}),e,null,[[2,23,26,29]])})))).apply(this,arguments)}function z(e,t){return Z.apply(this,arguments)}function Z(){return(Z=i()(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"string"==typeof t&&(t=[t]),e.abrupt("return",Promise.all(t.map(function(){var e=i()(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.fb.setLicenseAgree(t,n);case 2:return r=e.sent,a=r.success,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return K.apply(this,arguments)}function K(){return(K=i()(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I[n].ok){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,B(I[n].checkType);case 4:if(!(r=e.sent)){e.next=8;break}return I[n].ok=1,e.abrupt("return",!0);case 8:return!r&&t.$modal.show(w,{callBack:function(){I[n].ok=1}},{width:600,height:"auto",clickToClose:!1}),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return q.apply(this,arguments)}function q(){return(q=i()(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("exchange/getClearout",n);case 2:if(2!==e.sent){e.next=6;break}return e.next=6,t.$store.dispatch("exchange/checkClearout",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return W.apply(this,arguments)}function W(){return(W=i()(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.p.getUserWhiteCurrencys();case 2:if(n=e.sent,r=n.data,r&&r.currencys){e.next=8;break}return e.next=8,Y(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return(Q=i()(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.p.getClearUserInfo();case 2:if(10009!==e.sent.code){e.next=10;break}return e.next=6,n.e(355).then(n.bind(null,3871));case 6:return r=e.sent,a=r.default,e.next=10,new Promise((function(e){t.$modal.show(a,{},{width:480,height:"auto",clickToClose:!1},{closed:function(){return e()}})}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return ee.apply(this,arguments)}function ee(){return(ee=i()(l.a.mark((function e(t){var r,a,s,c,o,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$store.state.exchange,a=r.exchangeType,s=r.base,!("exchange"===a&&"iic"===s)){e.next=10;break}return o=(c={"zh-cn":{content:"IIC目前正处于为期两周的下币整改期内<a>【点击查看详情】</a>，可能会存在流动性较小、价格波动较大等风险，请您交易之前务必详尽了解该币种信息，在自身所能承受的风险范围内，审慎决定是否进行交易。",title:"风险提示"},"zh-hk":{content:"IIC目前正處於為期兩周的下幣整改期內<a>【點擊查看詳情】</a>，可能會存在流動性較小、價格波動較大等風險，請您交易之前務必詳盡了解該幣種信息，在自身所能承受的風險範圍內，審慎決定是否進行交易。",title:"風險提示"},"en-us":{content:"As IIC is currently under a two-week probation period<a>【Click here for details】</a>, there may be the risk of low liquidity and huge price fluctuations . Users are reminded to conduct their due diligence before trading this token. Please judge your risk appetite rationally and make your investment decisions prudently",title:"Risk reminder"}})["ru-ru"]||c["en-us"],e.next=7,n.e(39).then(n.bind(null,3872));case 7:return i=e.sent,u=i.default,e.abrupt("return",new Promise((function(e){t.$modal.show(u,_(_({},o),{},{content:o.content.replace("<a>",'<a href="/support/ru-ru/detail/64913820806096" rel="noopener noreferrer" target="_blank">')}),{width:480,height:"auto",clickToClose:!1},{closed:function(){e()}})})));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=i()(l.a.mark((function e(t){var r,a,s,c,o,i,u,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$store.state.exchange,a=r.exchangeType,s=r.base,!("exchange"===a&&["dash","dcr","firo","xmr","xvg","zec","zen"].includes(s))){e.next=12;break}return o=(c={"zh-cn":{content:"Huobi Global将于2022年9月19日16:00(GMT+8)对该币种实施下币处理，请您注意下币时间及时处理资产<a>【查看详情】</a>",title:"风险提示"},"zh-hk":{content:"Huobi Global將於2022年9月19日16:00(GMT+8)對該幣種實施下架處理，請您留意幣種下架時間及時處理相關資產<a>【查看詳情】</a>",title:"風險提示"},"en-us":{content:"Huobi Global will delist these tokens at 08:00 (UTC) on Sep 19, 2022. Please plan your asset management accordingly. <a>[View details]</a>",title:"Risk reminder"}})["ru-ru"]||c["en-us"],e.next=7,n.e(39).then(n.bind(null,3872));case 7:return i=e.sent,u=i.default,f={"zh-cn":"zh-cn","zh-hk":"zh-hk","en-us":"en-us"}["ru-ru"]||"en-us",e.abrupt("return",new Promise((function(e){t.$modal.show(u,_(_({},o),{},{content:o.content.replace("<a>",'<a href="/support/'.concat(f,'/detail/104917015223952" rel="noopener noreferrer" target="_blank">'))}),{width:480,height:"auto",clickToClose:!1},{closed:function(){e()}})})));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},948:function(e,t,n){},949:function(e,t,n){},950:function(e,t,n){}}]);