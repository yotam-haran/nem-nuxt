(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{240:function(t,e,r){"use strict";r.r(e);var n={props:{tagName:{type:String,default:"h1"},imgStyle:Object}},o=r(9),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tagName,{tag:"component"},[r("img",{staticClass:"logoImage",style:t.imgStyle,attrs:{src:t.$imagekit("icons/logo.svg","w-40")}}),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,r){var content=r(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2d4f385e",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";r(245)},256:function(t,e,r){var n=r(28)(!1);n.push([t.i,'.lds-ellipsis{display:inline-block;position:relative;width:80px;height:12px;transform:translateX(16px)}.lds-ellipsis div{position:absolute;top:2px;width:8px;height:8px;border-radius:50%;background:#fff;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:first-child{left:8px;-webkit-animation:lds-ellipsis1 .8s infinite;animation:lds-ellipsis1 .8s infinite}.lds-ellipsis div:nth-child(2){left:8px}.lds-ellipsis div:nth-child(2),.lds-ellipsis div:nth-child(3){-webkit-animation:lds-ellipsis2 .8s infinite;animation:lds-ellipsis2 .8s infinite}.lds-ellipsis div:nth-child(3){left:24px}.lds-ellipsis div:nth-child(4){left:40px;-webkit-animation:lds-ellipsis3 .8s infinite;animation:lds-ellipsis3 .8s infinite}@-webkit-keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(16px)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(16px)}}#formWrapper>img{width:100vw}#formWrapper form{display:flex;flex-direction:column;flex:1;width:90vw;margin:5vw 0 0 5vw}#formWrapper .g-recaptcha{border:2px groove transparent;border-radius:3px;width:306px;height:80px}#formWrapper .g-recaptcha.compact{width:162px;height:142px}#formWrapper .g-recaptcha.error{border-color:#ff8585}#formWrapper .g-recaptcha.success{border-color:#85ff85}#formWrapper button,#formWrapper input,#formWrapper textarea{margin-top:20px;padding:8px;border-radius:6px;border:1px solid #ccc;font-family:"Raleway",sans-serif;font-size:16px}#formWrapper input:focus,#formWrapper textarea:focus{outline:none;border-color:#007888}#formWrapper #mainInput{display:flex;align-items:stretch;margin-top:24px}#formWrapper #mainInput>:first-child{flex:1;margin:0 6px 0 0}#formWrapper #mainInput textarea{height:9rem}#formWrapper button{background-color:#240088;color:#fff;border:none;cursor:pointer}#formWrapper button:hover{background-color:#1a0061}#formWrapper button:disabled{background-color:#008a45;cursor:auto}#formWrapper button[failed=true]{background-color:#8a0045}#formWrapper button[failed=true]:hover{background-color:#a30052}#formWrapper h1{font-size:24px!important;letter-spacing:1px!important}#formWrapper h1>img{width:24px!important;margin-bottom:4px!important}#also{margin-top:40px;margin-bottom:-2px;font-size:20px}#notARobot{background-color:#fafafa}@media screen and (min-width:769px){#formWrapper{align-items:flex-start}#formWrapper>img{margin-right:24px;border-radius:20px;width:500px}#formWrapper h1{font-size:36px;letter-spacing:2px}#formWrapper h1>img{width:36px}#formWrapper form{width:0;margin:0}}',""]),t.exports=n},267:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(40),r(52),{mounted:function(){},props:{image:String,title:String,templateId:String,buttonText:Object,captchaSize:{type:String,default:"compact",validator:function(t){return["compact","normal"].includes(t)}}},data:function(){return{status:null,robotStatus:null}},methods:{submit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.prev=1,e.status="sending",n=e.templateId,r.next=6,window.emailjs.sendForm("service_a4yk3y4",n,"#"+n,"user_QZoTvQblLqQ0n6XeLbOuT");case 6:e.status="sent",r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("FAILED...",r.t0),e.status="failed";case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}}),l=(r(255),r(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"formWrapper"}},[r("img",{attrs:{alt:"Nymphes et Monstres at a cafe in Belgium",src:t.$imagekit(t.image,"w-500")}}),t._v(" "),r("form",{attrs:{id:t.templateId},on:{submit:function(e){return t.submit(e)}}},[r("logo-title",[t._v(t._s(t.title))]),t._v(" "),t._t("header"),t._v(" "),r("input",{attrs:{type:"text",name:"user_name",placeholder:"Name"}}),t._v(" "),r("input",{attrs:{type:"email",name:"user_email",placeholder:"Email Address"}}),t._v(" "),r("div",{attrs:{id:"mainInput"}},[t._t("mainInput")],2),t._v(" "),t._t("moreFields"),t._v(" "),r("button",{attrs:{disabled:"sent"===t.status,failed:"failed"===t.status}},["sending"===t.status?r("div",{staticClass:"lds-ellipsis"},[r("div"),r("div"),r("div"),r("div")]):t._e(),t._v("\n            "+t._s(null===t.status?t.buttonText.send:"sent"===t.status?t.buttonText.success:"failed"===t.status?"Something went wrong. Try again...":null)+"\n        ")])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoTitle:r(240).default})},323:function(t,e,r){"use strict";r.r(e);var n=r(9),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:{display:"contents"}},[r("email-form",{attrs:{image:"enroute-to-uk",title:"Send Us a Message",templateId:"contact-us",buttonText:{send:"Send",success:"Email Sent Successfully!"}},scopedSlots:t._u([{key:"mainInput",fn:function(){return[r("textarea",{attrs:{name:"message",placeholder:"Your message"}})]},proxy:!0}])}),t._v(" "),r("div",{attrs:{id:"also"}},[t._v("\n        You are also welcome to email us directly at "),r("email-link",{attrs:{fontSize:16}}),t._v(",\n        "),r("br"),t._v(" or "),r("a",{attrs:{href:"https://m.me/nymphesmonstres",target:"_blank"}},[t._v("message us on Facebook")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EmailForm:r(267).default,EmailLink:r(174).default})}}]);