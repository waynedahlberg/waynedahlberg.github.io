(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7ljp":function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return v}));var n=r("q1tI"),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),f=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return(a.a.createElement(u.Provider,{value:t},e.children))},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(r),p=n,d=l["".concat(c,".").concat(p)]||l[p]||h[p]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"===typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},HSmI:function(e,t,r){"use strict";t.a="/_next/static/media/card.eca2e0b364c20a23b42f6bb247f17149.jpg"},"QP+J":function(e,t,r){"use strict";t.a="/_next/static/media/astromech.2f4f9db9521a0da1df70e231af6f5127.jpg"},SYun:function(e,t,r){"use strict";var n="a",a="b",o="c",c="d",i="e",s="f",u="g",f="h",l="i",p="j",h="k",d="l",v="n",y="m",b={MMMM:a,MM:o,Mo:v,YYYY:c,YY:i,dddd:s,DD:d,Do:h,h:u,H:y,mm:f,ss:l,a:p},g=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],m=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function O(e){return e<10?"0"+e:""+e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=function(e){for(var t=[],r=0,a="";r<e.length;){var o=e[r++];if("{"===o){a&&t.push({t:n,v:a}),a="";var c="";for(o=e[r++];"}"!==o;)c+=o,o=e[r++];t.push({t:b[c]})}else a+=o}return a&&t.push({t:n,v:a}),t}(e);return{render:function(e){return function(e,t,r){for(var b,w=t.getMonth(),j=t.getFullYear(),k=t.getHours(),P=t.getSeconds(),M=t.getMinutes(),x=t.getDate(),E="",D=0;D<e.length;){var T=e[D];switch(T.t){case n:E+=T.v;break;case h:E+=(b=x)%10==1&&11!=b?b+"st":b%10==2&&12!=b?b+"nd":b%10==3&&13!=b?b+"rd":b+"th";break;case o:E+=g[w].slice(0,3);break;case a:E+=g[w];break;case v:var S=w+1;r.padMonth&&(S=O(S)),E+=S;break;case c:E+=j;break;case i:E+=(j+"").slice(2);break;case s:E+=m[t.getDay()];break;case d:E+=r.padDays?O(x):x;break;case u:var C=0===k||12===k?12:k%12;r.padHours&&(C=O(C)),E+=C;break;case y:var R=k;r.padHours&&(R=O(R)),E+=R;break;case f:E+=O(M);break;case l:E+=O(P);break;case p:E+=k>=12?"PM":"AM"}D++}return E}(r,e,t)}}}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("7W2i"),c=r("a1gu"),i=r("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}var u=r("TqRt"),f=r("284h");t.__esModule=!0,t.default=void 0;var l,p=f(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=u(r("nOHt")),y=r("elyg");function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,m=window.IntersectionObserver,O={};function w(){return l||(m?l=new m((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){o(r,e);var t=s(r);function r(e){var a;return n(this,r),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,r=null,n=null;return function(a,o){if(n&&a===t&&o===r)return n;var c=e(a,o);return t=a,r=o,n=c,c}}((function(e,t){return{href:(0,y.addBasePath)(b(e)),as:t?(0,y.addBasePath)(b(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),c=o.href,i=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var s=window.location.pathname;c=(0,h.resolve)(s,c),i=i?(0,h.resolve)(s,i):c,e.preventDefault();var u=a.props.scroll;null==u&&(u=i.indexOf("#")<0),v.default[a.props.replace?"replace":"push"](c,i,{shallow:a.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,a=(0,h.resolve)(e,r);return[a,n?(0,h.resolve)(e,n):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),c={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(c.href=a||n),p.default.cloneElement(o,c)}}]),r}(p.Component);t.default=j},iBhN:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={name:"Wayne Dahlberg",twitter:"@waynedahlberg",avatar:"/_next/static/media/waynedahlberg.ec5a7624841b4d34c6fd54883892118f.jpg"}},ubmD:function(e,t,r){"use strict";t.a="/_next/static/media/early-days.7d00bec0649264aaa5ec96345a49d8cb.jpg"},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}}]);