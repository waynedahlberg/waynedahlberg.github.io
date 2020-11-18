(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/hB5":function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return p})),t.d(a,"meta",(function(){return d})),t.d(a,"default",(function(){return j}));var c=t("Ff2n"),s=t("wx14"),n=t("q1tI"),b=t.n(n),l=t("7ljp"),m=t("CZVI"),o=t("iBhN"),r=t("EHi7"),p=(b.a.createElement,!0),d={title:"Swift Generics",description:"The basics of Swift Generics.",date:"2020-11-09T14:00:00.000Z",authors:[o.a],discussion:"https://github.com/tailwindlabs/tailwindcss/discussions/2511"},i={meta:d},N=e=>Object(l.b)(m.a,Object(s.a)({meta:d},e));function j(e){var{components:a}=e,t=Object(c.a)(e,["components"]);return Object(l.b)(N,Object(s.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("img",{src:r.a,alt:"Swift Generics Hero Image"}),Object(l.b)("p",null,"Generics are one thing that completely escaped me as I started learning Swift. Turns out they are one of the most powerful features in the entire Swift Language. Generics allow you to write flexible, reusable functions by writing code that is independent of Types."),Object(l.b)("div",{class:"rounded-md bg-blue-50 p-4"},Object(l.b)("div",{class:"flex"},Object(l.b)("div",{class:"flex-shrink-0"},Object(l.b)("svg",{class:"h-5 w-5 text-blue-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},Object(l.b)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))),Object(l.b)("div",{class:"ml-3 flex-1 md:flex md:justify-between"},Object(l.b)("p",{class:"text-sm leading-5 text-blue-700"},"This is a another post in a series intended as a personal growth exercise. As I learn and digest new things, I want to write about them to solidify my understanding."),Object(l.b)("p",{class:"mt-3 text-sm leading-5 md:mt-0 md:ml-6"},Object(l.b)("a",{href:"https://fs.blog/2015/01/richard-feynman-knowing-something/",class:"whitespace-no-wrap font-medium text-blue-700 hover:text-blue-600 transition ease-in-out duration-150"},"Feynman \u2192"))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Intro to Generics:")," Let's say we have a function that takes two numbers, and gives you a sum in return.")),Object(l.b)("pre",{className:"language-swift"},Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-Swift"}),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"func")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addIntNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"num1",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Int"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," num2",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Int"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"-"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),">")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Int")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"return")," num1 ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"+")," num2\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"let")," result ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"=")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addIntNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"num1",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"10"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," num2",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"20"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// 30"),"\n")),Object(l.b)("p",null,"Let's say we want to add some more numbers, this time of type ",Object(l.b)("inlineCode",{parentName:"p"},"Double"),"."),Object(l.b)("pre",{className:"language-swift"},Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-Swift"}),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"func")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addDoubleNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"num1",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Double"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," num2",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Double"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"-"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),">")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Double")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"let")," result2 ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"=")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addDoubleNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"num1",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"13.75"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," num2",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"20"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// 33.75"),"\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(l.b)("p",null,"For a single operation of adding two numbers, we have to use two different functions for using different types. Other than the types, everything else is identical."),Object(l.b)("p",null,"Generics can work with any type and can come in handy for reusable functions. We can define a function by defining the protocol type."),Object(l.b)("pre",{className:"language-swift"},Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-Swift"}),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"func")," addNumbers",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"<"),"T",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Numeric"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),">"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"a",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," T",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," b",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," T",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"-"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),">")," T ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"return")," a ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"+")," b\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(l.b)("p",null,"In the above example, ",Object(l.b)("inlineCode",{parentName:"p"},"T")," is a numeric type so we can pass in any numeric Type as an argument when calling this function. One caveat is that the values need to be of the same Type."),Object(l.b)("pre",{className:"language-swift"},Object(l.b)("code",Object(s.a)({parentName:"pre"},{className:"language-Swift"}),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// Int type argument"),"\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"let")," value1 ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"=")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"a",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"10"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," b",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"20"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// 30"),"\n\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// Double type argument"),"\n",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"let")," value2 ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"=")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"addNumbers"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"a",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"10.5"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," b",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:""}),"20.4"),Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(l.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"// 30.9"),"\n")),Object(l.b)("p",null,"This is the most basic and main raeson for using generics but surely we can do more."))}j.isMDXComponent=!0},"9ZgL":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swift-generics",function(){return t("/hB5")}])},CZVI:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var c=t("wx14"),s=t("Ff2n"),n=t("q1tI"),b=t.n(n),l=t("8Kt/"),m=t.n(l),o=b.a.createElement;function r(e){var{children:a}=e;return o("h1",{className:"text-3xl leading-14 font-bold text-gray-900 tracking-tight sm:text-5xl sm:leading-10 md:text-6xl md:leading-14"},a)}var p=t("SYun"),d=t.n(p),i=t("YFqc"),N=t.n(i),j=t("nOHt"),O=t("7ljp"),u=b.a.createElement,x={pre:e=>{var{className:a}=e,t=Object(s.a)(e,["className"]);return u("pre",Object(c.a)({className:"".concat(a," rounded-md bg-gray-800 py-3 px-4 overflow-x-auto")},t))},"pre.code":e=>{var{className:a}=e,t=Object(s.a)(e,["className"]);return u("code",Object(c.a)({className:"".concat(a," text-gray-200")},t))}},w=d()("{dddd}, {MMMM} {DD}, {YYYY}");function h(e){var{meta:a,children:t,posts:c}=e,s=Object(j.useRouter)(),n=c.findIndex(e=>e.link===s.pathname),b=c[n+1],l=c[n-1];return u("article",{className:"xl:divide-y xl:divide-gray-200"},u(m.a,null,u("title",null,a.title," \u2013 Tailwind CSS"),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:site",content:"@waynedahlberg"}),u("meta",{name:"twitter:creator",content:"@waynedahlberg"}),u("meta",{name:"twitter:title",content:"".concat(a.title," \u2013 Wayne Dahlberg")}),u("meta",{name:"twitter:description",content:a.description}),u("meta",{name:"twitter:image",content:"https://blog.tailwindcss.com".concat(a.image)}),u("meta",{property:"og:url",content:"https://blog.tailwindcss.com".concat(s.pathname)}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:"".concat(a.title," \u2013 Wayne Dahlberg")}),u("meta",{property:"og:description",content:a.description}),u("meta",{property:"og:image",content:"https://blog.tailwindcss.com".concat(a.image)}),u("meta",{name:"description",content:a.description})),u("header",{className:"pt-6 xl:pb-10"},u("div",{className:"space-y-1 text-center"},u("dl",{className:"space-y-10"},u("div",null,u("dt",{className:"sr-only"},"Published on"),u("dd",{className:"text-sm leading-6 font-medium text-gray-500"},u("time",{dateTime:a.date},w.render(new Date(a.date)))))),u("div",null,u(r,null,a.title)))),u("div",{className:"divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20",style:{gridTemplateRows:"auto 1fr"}},u("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200"},u("dt",{className:"sr-only"},"Authors"),u("dd",null,u("ul",{className:"flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"},a.authors.map(e=>u("li",{key:e.twitter,className:"flex items-center space-x-2"},u("img",{src:e.avatar,alt:"",className:"w-10 h-10 rounded-full"}),u("dl",{className:"text-sm font-medium leading-5 whitespace-no-wrap"},u("dt",{className:"sr-only"},"Name"),u("dd",{className:"text-gray-900"},e.name),u("dt",{className:"sr-only"},"Twitter"),u("dd",null,u("a",{href:"https://twitter.com/".concat(e.twitter),className:"text-teal-500 hover:text-teal-700"},e.twitter)))))))),u("div",{className:"divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"},u("div",{className:"prose max-w-none pt-10 pb-8"},u(O.a,{components:x},t))),u("footer",{className:"text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"},(l||b)&&u("div",{className:"space-y-8 py-8"},l&&u("div",null,u("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Next Article"),u("div",{className:"text-teal-500 hover:text-teal-600"},u(N.a,{href:l.link},u("a",null,l.title)))),b&&u("div",null,u("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Previous Article"),u("div",{className:"text-teal-500 hover:text-teal-700"},u(N.a,{href:b.link},u("a",null,b.title))))),u("div",{className:"pt-8"},u(N.a,{href:"/"},u("a",{className:"text-teal-500 hover:text-teal-700"},"\u2190 All Posts"))))))}},EHi7:function(e,a,t){"use strict";a.a="/_next/static/media/hero-generics.429328186761c06c72d8803ab7ab4632.png"}},[["9ZgL",0,2,1,3]]]);