(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3XHS":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var a=r("q1tI"),s=r.n(a),n=(r("YFqc"),r("8Kt/")),o=r.n(n),i="/_next/static/media/about-banner.7d71f08731bb54450037305b544cbeb2.jpg",l=s.a.createElement;function c(){return l("div",{className:"pb-8"},l(o.a,null,l("meta",{name:"twitter:card",content:"summary_large_image"}),l("meta",{name:"twitter:site",content:"@waynedahlberg"}),l("meta",{name:"twitter:creator",content:"@waynedahlberg"}),l("meta",{name:"twitter:title",content:"Blog \u2013 Wayne Dahlberg"}),l("meta",{name:"twitter:description",content:"Articles and thoughts on product design, user experience and software development."}),l("meta",{property:"og:url",content:"https://wayne.work"}),l("meta",{property:"og:type",content:"article"}),l("meta",{property:"og:title",content:"Blog \u2013 Wayne Dahlberg"}),l("meta",{property:"og:description",content:"Articles and thoughts on product design, user experience and software development."}),l("title",null,"Wayne Dahlberg"),l("meta",{name:"description",content:"Articles and thoughts on product design, user experience and software development."})),l("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5"},l("h1",{className:"text-xl leading-9 font-bold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14"},"About")),l("div",{class:"space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"},l("div",{class:"relative h-0 pb-2/3 sm:pt-2/3"},l("img",{class:"absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg",src:i,alt:"profile-image"})),l("div",{class:"sm:col-span-2"},l("div",{class:"space-y-4"},l("div",{class:"text-lg leading-6 font-medium space-y-1"},l("h4",null,"Wayne Dahlberg"),l("p",{className:"text-sm text-gray-400 pb-6"},"UTAH, USA"),l("p",{class:"text-teal-400"},"Product Design at"," ",l("a",{href:"https://chatbooks.com",className:"text-teal-400 hover:underline"},"Chatbooks\u2197"))),l("div",{class:"text-lg leading-7"},l("p",{class:"pt-2 text-gray-500"},"Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum."),l("p",{class:"pt-2 text-gray-500"},"Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum."))))))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var a=r("TqRt"),s=r("284h");t.__esModule=!0,t.default=void 0;var n,o=s(r("q1tI")),i=r("QmWs"),l=r("g/15"),c=a(r("nOHt")),p=r("elyg");function u(e){return e&&"object"===typeof e?(0,l.formatWithValidation)(e):e}var h=new Map,d=window.IntersectionObserver,f={};function m(){return n||(d?n=new d(e=>{e.forEach(e=>{if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=(e,t)=>{var r=m();return r?(r.observe(e),h.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}h.delete(e)}):()=>{}};class v extends o.Component{constructor(e){super(e),this.p=void 0,this.cleanUpListeners=()=>{},this.formatUrls=function(e){var t=null,r=null,a=null;return(s,n)=>{if(a&&s===t&&n===r)return a;var o=e(s,n);return t=s,r=n,a=o,o}}((e,t)=>({href:(0,p.addBasePath)(u(e)),as:t?(0,p.addBasePath)(u(t)):t})),this.linkClicked=e=>{var{nodeName:t,target:r}=e.currentTarget;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var{href:a,as:s}=this.formatUrls(this.props.href,this.props.as);if(function(e){var t=(0,i.parse)(e,!1,!0),r=(0,i.parse)((0,l.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var{pathname:n}=window.location;a=(0,i.resolve)(n,a),s=s?(0,i.resolve)(n,s):a,e.preventDefault();var{scroll:o}=this.props;null==o&&(o=s.indexOf("#")<0),c.default[this.props.replace?"replace":"push"](a,s,{shallow:this.props.shallow}).then(e=>{e&&o&&(window.scrollTo(0,0),document.body.focus())})}}},this.p=!1!==e.prefetch}componentWillUnmount(){this.cleanUpListeners()}getPaths(){var{pathname:e}=window.location,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as),a=(0,i.resolve)(e,t);return[a,r?(0,i.resolve)(e,r):a]}handleRef(e){this.p&&d&&e&&e.tagName&&(this.cleanUpListeners(),f[this.getPaths().join("%")]||(this.cleanUpListeners=g(e,()=>{this.prefetch()})))}prefetch(e){if(this.p){var t=this.getPaths();c.default.prefetch(t[0],t[1],e).catch(e=>{0}),f[t.join("%")]=!0}}render(){var{children:e}=this.props,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as);"string"===typeof e&&(e=o.default.createElement("a",null,e));var a=o.Children.only(e),s={ref:e=>{this.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:e=>{a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),this.prefetch({priority:!0})},onClick:e=>{a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||this.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=r||t),o.default.cloneElement(a,s)}}var y=v;t.default=y},rB5V:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("3XHS")}])}},[["rB5V",0,2,1]]]);