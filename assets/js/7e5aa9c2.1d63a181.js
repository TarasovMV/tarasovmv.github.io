"use strict";(self.webpackChunkweb_knowledges=self.webpackChunkweb_knowledges||[]).push([[813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Shadow DOM",c={unversionedId:"dom/shadow-dom",id:"dom/shadow-dom",title:"Shadow DOM",description:"\u0422\u0435\u043d\u0435\u0432\u043e\u0439 DOM (\xabShadow DOM\xbb) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0435\u043c\u0443 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u0435\u0441\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \xab\u0442\u0435\u043d\u0435\u0432\u043e\u0435\xbb DOM-\u0434\u0435\u0440\u0435\u0432\u043e, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0442\u0430\u043a \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0438\u0437 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0443 \u043d\u0435\u0433\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 CSS-\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u0442.\u0434.",source:"@site/docs/dom/shadow-dom.md",sourceDirName:"dom",slug:"/dom/shadow-dom",permalink:"/docs/dom/shadow-dom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dom/shadow-dom.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0427\u0442\u043e \u044d\u0442\u043e",permalink:"/docs/dom/"},next:{title:"Incremental \u0438 Virtual DOM",permalink:"/docs/dom/incremental-virtual-dom"}},d={},s=[],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shadow-dom"},"Shadow DOM"),(0,o.kt)("p",null,"\u0422\u0435\u043d\u0435\u0432\u043e\u0439 DOM (\xabShadow DOM\xbb) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0435\u043c\u0443 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u0435\u0441\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \xab\u0442\u0435\u043d\u0435\u0432\u043e\u0435\xbb DOM-\u0434\u0435\u0440\u0435\u0432\u043e, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0442\u0430\u043a \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0438\u0437 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0443 \u043d\u0435\u0433\u043e \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 CSS-\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u0442.\u0434."))}p.isMDXComponent=!0}}]);