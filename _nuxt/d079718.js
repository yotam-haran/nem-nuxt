(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,11,12,13],{240:function(t,e,r){"use strict";r.r(e);var o={props:{tagName:{type:String,default:"h1"},imgStyle:Object}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tagName,{tag:"component"},[r("img",{staticClass:"logoImage",style:t.imgStyle,attrs:{src:t.$imagekit("icons/logo.svg","w-40")}}),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("30ffd406",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("28b62c18",content,!0,{sourceMap:!1})},249:function(t,e,r){"use strict";var o=r(33),n=(r(36),r(41),r(42),r(43),r(269),r(35),r(67),r(68),r(317)),c=r(315),m=r(314);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={mapa:{location:"Studio MAPA Nederland, Haarlem",mapsRef:"xf9sY5WrzBhDT2Yh9"},BUC:{location:"Brighton Unitarian Church",mapsRef:"bRaW4iUU8r2VDarv8",tix:"https://www.brightonfringe.org/whats-on/the-french-connection-146524/"},"V&D":{location:"V&D Haarlem",mapsRef:"FxKCCnBXTL7t5Kke8",tix:"https://mapa.stager.nl/web/tickets"},perdu:{location:"Perdu Theater, Amsterdam",mapsRef:"F3zFtvwqBKMYB7ag8",tix:"/tix/2021-10-10"}},h=new Date,v=[{program:"isolated-souls",datetime:"25-09-2021 18:00",location:"V&D"},{program:"isolated-souls",datetime:"25-09-2021 20:00",location:"V&D"},{program:"isolated-souls",datetime:"26-09-2021 18:00",location:"V&D"},{program:"isolated-souls",datetime:"26-09-2021 20:00",location:"V&D"},{program:"isolated-souls",datetime:"10-10-2021 15:00",location:"perdu"},{program:"french-connection",datetime:"18-06-2021 18:30",location:"BUC"},{program:"french-connection",datetime:"18-06-2021 20:00",location:"BUC"},{program:"french-connection",datetime:"19-06-2021 18:30",location:"BUC"},{program:"french-connection",datetime:"19-06-2021 20:00",location:"BUC"}];v.forEach((function(p){return p.datetime=Object(n.a)(p.datetime,"dd-MM-yyyy HH:mm",new Date)})),v={future:v.filter((function(p){return Object(c.a)(p.datetime,h)>=0})),past:v.filter((function(p){return Object(c.a)(p.datetime,h)<0}))},Object.keys(v).forEach((function(t){var e={future:{true:1,false:-1},past:{true:-1,false:1}};v[t]=v[t].sort((function(a,b){return a.datetime>b.datetime?e[t].true:e[t].false})).map((function(p){return f(f({},p),{},{dateObj:p.datetime,datetime:Object(m.a)(p.datetime,"LLLL do, yyyy @ HH:mm")},d[p.location])}))})),e.a=v},252:function(t,e,r){"use strict";r.r(e);var o={props:{performances:Array,homeDisplay:Boolean,isPast:Boolean},computed:{programs:function(){return this.$store.state.programs}}},n=(r(259),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{homeDisplay:t.homeDisplay},attrs:{id:"performanceList"}},t._l(t.performances,(function(e){return r("div",{key:e.datetime,style:{display:"contents"}},[t.homeDisplay?t._e():r("div",{staticClass:"performanceProgram"},[r("nuxt-link",{attrs:{to:"/programs/"+e.program}},[t._v(t._s(t.programs[e.program].name))])],1),t._v(" "),r("div",{staticClass:"performanceDate"},[t._v(t._s(e.datetime))]),t._v(" "),r("div",{staticClass:"performanceLocation"},[r("div",[r("a",{attrs:{href:"https://goo.gl/maps/"+e.mapsRef,target:"_blank",rel:"noreferrer"}},[r("img",{attrs:{alt:"Location pin icon",src:t.$imagekit("icons/map-pin.svg")}})]),t._v("\n          "+t._s(e.location)+"\n      ")]),t._v(" "),!t.isPast&&e.tix?r("a",{staticClass:"ticketsButton",attrs:{href:e.tix,target:e.tix&&e.tix.startsWith("http")?"_blank":void 0,rel:"noreferrer"}},[r("img",{attrs:{alt:"Tickets icon",src:t.$imagekit("icons/tickets.svg")}})]):t._e()])])})),0)}),[],!1,null,"1bf5e063",null);e.default=component.exports},254:function(t,e,r){"use strict";r.r(e);r(257);var o=r(9),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"noPerformances"}},[t._v("\n  We currently have no performances planned.\n  "),r("a",{attrs:{href:"https://www.facebook.com/nymphesmonstres",target:"_blank"}},[t._v("\n    Follow us on facebook\n  ")]),t._v("\n  or "),r("nuxt-link",{attrs:{to:"/subscribe"}},[t._v("join our mailing list")]),t._v(" to stay up-to-date!\n")],1)}),[],!1,null,"70e0b45b",null);e.default=component.exports},257:function(t,e,r){"use strict";r(246)},258:function(t,e,r){var o=r(28)(!1);o.push([t.i,"#noPerformances>div[data-v-70e0b45b]{display:inline}#noPerformances>div>span[data-v-70e0b45b]{height:23px!important;margin-left:4px}",""]),t.exports=o},259:function(t,e,r){"use strict";r(247)},260:function(t,e,r){var o=r(28)(!1);o.push([t.i,"#performanceList[data-v-1bf5e063]{display:flex;flex-direction:column;padding-top:16px}#performanceList div[data-v-1bf5e063]{display:flex;align-items:center}.performanceLocation[data-v-1bf5e063]{padding-bottom:20px;justify-content:space-between}.performanceLocation img[data-v-1bf5e063]{max-width:14px;margin-right:8px}.performanceLocation a[data-v-1bf5e063]{height:20px}.homeDisplay[data-v-1bf5e063]{padding:16px 0 0 12px}.ticketsButton[data-v-1bf5e063]{cursor:pointer;opacity:.5}.ticketsButton img[data-v-1bf5e063]{max-width:none!important;width:24px;transform:translateY(-2px)}.ticketsButton[data-v-1bf5e063]:hover{opacity:1}@media screen and (min-width:769px){#performanceList[data-v-1bf5e063]{display:grid;grid-template-columns:2fr 200px 3fr;grid-gap:24px 12px}.homeDisplay[data-v-1bf5e063]{padding:0 0 16px;grid-template-columns:200px 3fr!important}.performanceLocation[data-v-1bf5e063]{padding-bottom:0}.performanceLocation img[data-v-1bf5e063]{margin-left:8px}}",""]),t.exports=o},261:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2d7f139f",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(261)},272:function(t,e,r){var o=r(28)(!1);o.push([t.i,"#performances>div[data-v-e69f8636]:not(#performancesImage){width:90vw;margin-left:5vw}#performancesImage[data-v-e69f8636]{margin:0 0 20px;overflow:hidden;flex-shrink:0;height:480px}#performancesImage img[data-v-e69f8636]{max-width:600px;transform:translate3d(-100px,-220px,0)}#pastPerformances[data-v-e69f8636]{margin-top:32px}h2[data-v-e69f8636]{font-weight:400;margin:8px 0}@media screen and (min-width:769px){#performances>div[data-v-e69f8636]:not(#performancesImage){width:auto;margin-left:0}#performancesImage[data-v-e69f8636]{margin:0 60px 0 0;border-radius:6px;width:320px;height:800px}#performancesImage img[data-v-e69f8636]{transform:translate3d(-124px,0,0)}#pastPerformances[data-v-e69f8636]{margin-top:80px}h2[data-v-e69f8636]{margin:24px 0 12px}}",""]),t.exports=o},286:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("1b7833da",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";r.r(e),r.d(e,"performanceList",(function(){return c.a})),r.d(e,"NoPerformances",(function(){return o.default})),r.d(e,"PerformanceList",(function(){return n.default}));var o=r(254),n=r(252),c=r(249),m={data:function(){return{list:c.a}},components:{NoPerformances:o.default,PerformanceList:n.default}},l=(r(271),r(9)),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"performances"}},[r("div",{attrs:{id:"performancesImage"}},[r("img",{attrs:{alt:"Nymphes et Monstres performing at MAPA",src:t.$imagekit("nem-mapa","w-600")}})]),t._v(" "),r("div",{style:{flex:1}},[r("logo-title",[t._v("Performances")]),t._v(" "),r("h2",[t._v("Upcoming")]),t._v(" "),t.list.future.length?r("performance-list",{attrs:{performances:t.list.future}}):r("no-performances"),t._v(" "),t.list.past.length?r("div",{attrs:{id:"pastPerformances"}},[r("h2",[t._v("Past")]),t._v(" "),r("performance-list",{attrs:{performances:t.list.past,isPast:!0}})],1):t._e()],1)])}),[],!1,null,"e69f8636",null);e.default=component.exports;installComponents(component,{LogoTitle:r(240).default})},312:function(t,e,r){"use strict";r(286)},313:function(t,e,r){var o=r(28)(!1);o.push([t.i,'p{line-height:1.4}h1{font-family:"Raleway",sans-serif;font-weight:700;letter-spacing:4px}#homeAbout{flex-direction:column-reverse;margin-top:20px}#homeAbout,#homePerformances{display:flex;justify-content:center;align-items:flex-start}#homePerformances{margin-top:40px;flex-direction:column}#homePerformances .homeSectionTitle{margin-bottom:8px}#homeAbout>img,#homePerformances>img{width:90vw;margin-top:16px;margin-left:5vw;border-radius:8px}#homeAbout>img{margin-right:52px}#homeAbout #text,#homePerformances #text{width:90vw;margin-left:5vw;text-align:justify;display:flex;flex-direction:column}.readMore{align-self:flex-end;margin-top:8px}.homeSectionTitle{font-size:24px;display:flex;align-items:center}.homeSectionTitle img{width:28px;margin-right:12px;margin-bottom:4px}@media screen and (min-width:769px){#homeAbout,#homePerformances{margin-top:40px;flex-direction:row}#homeAbout #text,#homeAbout>img,#homePerformances #text,#homePerformances>img{width:440px;margin-left:0;margin-top:0}#homePerformances>img{margin-left:52px}}',""]),t.exports=o},322:function(t,e,r){"use strict";r.r(e);var o=r(288),n={data:function(){return{upcoming:o.performanceList.future}},components:{NoPerformances:o.NoPerformances,PerformanceList:o.PerformanceList}},c=(r(312),r(9)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"homeAbout"}},[r("img",{attrs:{alt:"Nymphes et Monstres group photo",src:t.$imagekit("tariq-full-group","w-440")}}),t._v(" "),r("div",{attrs:{id:"text"}},[r("logo-title",{staticClass:"homeSectionTitle"},[t._v("About")]),t._v(" "),r("p",[t._v("\n        Nymphes et Monstres is a collective specialized in French baroque music, but it is also much more than that.\n        Nymphes et Monstres is a concept of what a modern-day performance of baroque music can and\n        should be, with a view towards a concert experience that goes far beyond the music itself.\n        By dissecting the pieces we perform, adding declamed text, movement, and at times also video art, we\n        have developed a concert format that manages to bring our viewers deep into the story we tell.\n        We are Kat Carson, Dorota Matejová, Punto Bawono, and Yotam Haran.\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"readMore",attrs:{to:"/about"}},[t._v("More About Us")])],1)]),t._v(" "),r("div",{attrs:{id:"homePerformances"}},[r("div",{attrs:{id:"text"}},[r("logo-title",{staticClass:"homeSectionTitle"},[t._v("Upcoming")]),t._v(" "),t.upcoming.length?r("performance-list",{attrs:{homeDisplay:"",performances:t.upcoming}}):r("no-performances"),t._v(" "),r("nuxt-link",{staticClass:"readMore",attrs:{to:"/performances"}},[t._v("See All the Details")])],1),t._v(" "),r("img",{attrs:{alt:"Nymphes et Monstres in the woods",src:t.$imagekit("tariq-full-group-scatter","w-440")}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoTitle:r(240).default})}}]);