(this["webpackJsonpseeing-red"]=this["webpackJsonpseeing-red"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/hero-video.fcb140fa.mp4"},32:function(e,a,t){e.exports=t(68)},37:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),o=t.n(r),s=(t(37),t(4)),l=t(26);var i=function(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),c=(t[0],t[1]),r=0,o=Object(l.throttle)((function(){var a=(document.documentElement||document.body).scrollTop;c((function(e){return r=e,a})),console.log("current scroll ".concat(a)),console.log("previous scroll ".concat(r)),e({previousScrollTop:r,currentScrollTop:a})}),250);Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[])},m=t(7),d=(t(39),function(e){var a=e.toggleHandler;return c.a.createElement("button",{className:"toggle-button",onClick:a},c.a.createElement("span",{className:"toggle-button__line"}),c.a.createElement("span",{className:"toggle-button__line"}),c.a.createElement("span",{className:"toggle-button__line"}))});t(40);var u=function(e){var a=e.toggleHandler,t=Object(n.useState)(!1),r=Object(s.a)(t,2),o=r[0],l=r[1],u=Object(n.useState)(!1),p=Object(s.a)(u,2),g=p[0],f=p[1];i((function(e){var a=e.previousScrollTop,t=e.currentScrollTop,n=a<t,c=t>80;f(t>2),setTimeout((function(){l(n&&c)}),400)}));var h=g?"shadow":"",v=o?"hidden":"";return c.a.createElement("header",{className:"header ".concat(v," ").concat(h)},c.a.createElement("nav",{className:"header__nav"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(m.b,{to:"",className:"header__logo__letters"},"seeing",c.a.createElement("img",{className:"header__logo__icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/mars-icon.svg?alt=media&token=45304e72-ddf7-44f8-bd68-b3005af53638",alt:"Seeing Red logo"}),"RED")),c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{className:"header__links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"/weather",className:"header__links__link"},"Weather")))),c.a.createElement("div",{className:"header__toggle-button"},c.a.createElement(d,{toggleHandler:a}))))},p=(t(45),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__items"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("small",null,"\xa92019 Seeing Red")))))}),g=(t(46),function(e){var a="drawer";return e.drawerIsOpen&&(a="drawer show"),c.a.createElement("nav",{className:a},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"/weather"},"weather")," />")))}),f=(t(47),function(e){var a=e.backdropClickHandler;return c.a.createElement("div",{className:"backdrop",onClick:a})}),h=(t(48),t(29)),v=t.n(h),E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"hero container"},c.a.createElement("div",{className:"hero__video-wrap"},c.a.createElement("video",{src:v.a,autoPlay:!0,loop:!0,muted:!0},c.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/hero-bg.jpg?alt=media&token=897bc3fd-3841-4ccd-8f6a-397d530e23dd",title:"Your browser does not support the <video> tag"}),"Video not supported")),c.a.createElement("div",{className:"hero__overlay"}),c.a.createElement("div",{className:"hero__content"},c.a.createElement("h1",{className:"hero__title"},"We are the Martians"))),c.a.createElement("div",{className:"services"},c.a.createElement("section",{className:"service"},c.a.createElement("img",{className:"service__image",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-1.svg?alt=media&token=024575eb-c9ef-4055-8e1c-7a095b6632cc",alt:"rocket launching","data-aos":"fade-in"}),c.a.createElement("div",{className:"service__content","data-aos":"fade-in"},c.a.createElement("h2",{className:"service__title"},"Fly with our state-of-the-art rocket fleet"),c.a.createElement("p",null,"We have partenered with Space X to give you the quickest and safest alternative in outer space travel."),c.a.createElement("button",{className:"service__btn"},"Learn more"))),c.a.createElement("section",{className:"service middle"},c.a.createElement("div",{className:"service__content","data-aos":"fade-in"},c.a.createElement("h2",{className:"service__title"},"Explore the Red Planet any way you want"),c.a.createElement("p",null,"We offer a series of tour packages that will allow you to travel around Mars and its wonders in the fashion that's best adjusted to your needs and preferences."),c.a.createElement("button",{className:"service__btn"},"Learn more")),c.a.createElement("img",{className:"service__image","data-aos":"fade-in",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/planet-1.svg?alt=media&token=ede9fd17-15f6-4a3f-81ca-e72ada512066",alt:"rocket launching"})),c.a.createElement("section",{className:"service"},c.a.createElement("img",{className:"service__image","data-aos":"fade-in",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/rocket-3.svg?alt=media&token=7891e5eb-90c3-4d3b-8cdd-c1932a9105a8",alt:"rocket launching"}),c.a.createElement("div",{className:"service__content","data-aos":"fade-in"},c.a.createElement("h2",{className:"service__title"},"Feel at home like the Jetsons!"),c.a.createElement("p",null,"We offer a wide range of luxurious villa-pods, fully equiped with high-speed interplanetary internet, insta-food preparation units, and an optional robo-maid."),c.a.createElement("button",{className:"service__btn"},"Learn more")))))},_=t(30),b=t.n(_),N=(t(66),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),i=l[0],m=l[1],d=Object(n.useState)(""),u=Object(s.a)(d,2),p=u[0],g=u[1];if(Object(n.useEffect)((function(){var e;(e="https://api.nasa.gov/insight_weather/?api_key=FTxOBfLQCG314D5aXesXFxGafjtCdj3SWlJYCgJ4&feedtype=json&ver=1.0",new Promise((function(a,t){b.a.get(e).then((function(e){a(e.data)})).catch((function(e){return t(e)}))}))).then((function(e){r(e),m(!0)})).catch((function(e){g(e),m(!0)}))}),[]),i){var f=t.sol_keys[t.sol_keys.length-1];return c.a.createElement("section",{className:"weather"},p?c.a.createElement("p",null,p.message):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"weather__today"},"sol ",f),c.a.createElement("div",null,c.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/spring.svg?alt=media&token=de8eacaf-785d-41ed-8d93-06d5ef8d12bf",alt:"",className:"weather__temp-icon"}),c.a.createElement("h2",{className:"weather__season"},t[f].Season)),c.a.createElement("div",{className:"weather__temp"},c.a.createElement("img",{className:"weather__temp-icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/min-temp.svg?alt=media&token=9a574ef9-86aa-4e31-b0b0-ce4f14122006"}),c.a.createElement("h3",{className:"weather__temp-min-max"},"min. ",t[f].AT.mn,"\xb0C")),c.a.createElement("div",{className:"weather__temp"},c.a.createElement("img",{className:"weather__temp-icon",src:"https://firebasestorage.googleapis.com/v0/b/seeing-red.appspot.com/o/max-temp.svg?alt=media&token=24ca8a50-2cfd-4fc6-a5cd-a864b4a46fa4"}),c.a.createElement("h3",{className:"weather__temp-min-max"},"max. ",t[f].AT.mx,"\xb0C"))))}return c.a.createElement("div",null,"Loading...")}),w=function(e){var a,t=e.children,r=Object(n.useState)(!1),o=Object(s.a)(r,2),l=o[0],i=o[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2);d[0],d[1];return l&&(a=c.a.createElement(f,{backdropClickHandler:function(){i(!l)}})),c.a.createElement("div",{className:"App page-container"},c.a.createElement(u,{toggleHandler:function(){i(!l)}}),c.a.createElement(g,{drawerIsOpen:l}),a,t,c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(8),j=t(31),O=t.n(j);t(67);O.a.init({duration:1200,once:!0}),o.a.render(c.a.createElement(m.a,{basename:"/seeing-red"},c.a.createElement(w,null,c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/",component:E}),c.a.createElement(k.a,{path:"/weather",component:N})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4eb43834.chunk.js.map