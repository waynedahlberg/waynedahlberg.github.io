(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3XHS":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var a=r("q1tI"),n=r.n(a),s=(r("YFqc"),r("8Kt/")),o=r.n(s),i="/_next/static/media/about-banner.7d71f08731bb54450037305b544cbeb2.jpg",l=n.a.createElement;function u(){return l("div",{className:"divide-y divide-gray-200"},l(o.a,null,l("meta",{name:"twitter:card",content:"summary_large_image"}),l("meta",{name:"twitter:site",content:"@waynedahlberg"}),l("meta",{name:"twitter:creator",content:"@waynedahlberg"}),l("meta",{name:"twitter:title",content:"Blog \u2013 Wayne Dahlberg"}),l("meta",{name:"twitter:description",content:"Articles and thoughts on product design, user experience and software development."}),l("meta",{property:"og:url",content:"https://wayne.work"}),l("meta",{property:"og:type",content:"article"}),l("meta",{property:"og:title",content:"Blog \u2013 Wayne Dahlberg"}),l("meta",{property:"og:description",content:"Articles and thoughts on product design, user experience and software development."}),l("title",null,"Blog - Wayne Dahlberg"),l("meta",{name:"description",content:"Articles and thoughts on product design, user experience and software development."})),l("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5"},l("h1",{className:"text-3xl leading-9 font-bold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},"About me"),l("p",{className:"text-base font-regular leading-7 text-gray-400 tracking-wide"},"BIO")),l("div",{class:"text-lg leading-7 pt-8"},l("p",{className:"text-base font-semibold leading-7 text-gray-500"},"Hello there\xa0 \ud83d\udc4b"),l("p",{class:"text-gray-500 pb-4 pt-4"},"Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."),l("p",{class:"text-gray-500 pb-4"},"Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur."),l("p",{class:"text-gray-500 pb-8"},"Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.")),l("div",{class:"space-y-8"},l("div",{class:"relative pb-2/3"},l("img",{class:"absolute object-cover h-full w-full shadow-lg rounded-lg",src:i,alt:""})),l("div",{class:"text-lg leading-6 font-medium space-y-1"},l("h4",null,"Wayne Dahlberg"),l("p",{class:"text-gray-500"},"Sr. Product Designer at\xa0",l("a",{href:"https://chatbooks.com",className:"text-teal-400 font-semibold hover:underline"},"Chatbooks\xa0\u2197")))))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var a=r("TqRt"),n=r("284h");t.__esModule=!0,t.default=void 0;var s,o=n(r("q1tI")),i=r("QmWs"),l=r("g/15"),u=a(r("nOHt")),c=r("elyg");function p(e){return e&&"object"===typeof e?(0,l.formatWithValidation)(e):e}var d=new Map,h=window.IntersectionObserver,m={};function f(){return s||(h?s=new h(e=>{e.forEach(e=>{if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),d.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=(e,t)=>{var r=f();return r?(r.observe(e),d.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):()=>{}};class v extends o.Component{constructor(e){super(e),this.p=void 0,this.cleanUpListeners=()=>{},this.formatUrls=function(e){var t=null,r=null,a=null;return(n,s)=>{if(a&&n===t&&s===r)return a;var o=e(n,s);return t=n,r=s,a=o,o}}((e,t)=>({href:(0,c.addBasePath)(p(e)),as:t?(0,c.addBasePath)(p(t)):t})),this.linkClicked=e=>{var{nodeName:t,target:r}=e.currentTarget;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var{href:a,as:n}=this.formatUrls(this.props.href,this.props.as);if(function(e){var t=(0,i.parse)(e,!1,!0),r=(0,i.parse)((0,l.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var{pathname:s}=window.location;a=(0,i.resolve)(s,a),n=n?(0,i.resolve)(s,n):a,e.preventDefault();var{scroll:o}=this.props;null==o&&(o=n.indexOf("#")<0),u.default[this.props.replace?"replace":"push"](a,n,{shallow:this.props.shallow}).then(e=>{e&&o&&(window.scrollTo(0,0),document.body.focus())})}}},this.p=!1!==e.prefetch}componentWillUnmount(){this.cleanUpListeners()}getPaths(){var{pathname:e}=window.location,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as),a=(0,i.resolve)(e,t);return[a,r?(0,i.resolve)(e,r):a]}handleRef(e){this.p&&h&&e&&e.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=g(e,()=>{this.prefetch()})))}prefetch(e){if(this.p){var t=this.getPaths();u.default.prefetch(t[0],t[1],e).catch(e=>{0}),m[t.join("%")]=!0}}render(){var{children:e}=this.props,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as);"string"===typeof e&&(e=o.default.createElement("a",null,e));var a=o.Children.only(e),n={ref:e=>{this.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:e=>{a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),this.prefetch({priority:!0})},onClick:e=>{a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||this.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(n.href=r||t),o.default.cloneElement(a,n)}}var b=v;t.default=b},rB5V:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("3XHS")}])}},[["rB5V",0,2,1]]]);