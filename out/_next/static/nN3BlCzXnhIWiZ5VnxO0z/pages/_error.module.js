(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/a9y":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var l=r(n("q1tI")),a=r(n("8Kt/")),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function o(e){var{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}class d extends l.default.Component{render(){var{statusCode:e}=this.props,t=this.props.title||i[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:s.error},l.default.createElement(a.default,null,l.default.createElement("title",null,e,": ",t)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:s.h1},e):null,l.default.createElement("div",{style:s.desc},l.default.createElement("h2",{style:s.h2},t,"."))))}}t.default=d,d.displayName="ErrorPage",d.getInitialProps=o,d.origGetInitialProps=o;var s={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])}},[["04ac",0,2,1]]]);