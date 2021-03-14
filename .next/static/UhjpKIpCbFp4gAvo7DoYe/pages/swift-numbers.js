(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1eP1":function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return o})),t.d(a,"meta",(function(){return d})),t.d(a,"default",(function(){return j}));var c=t("Ff2n"),n=t("wx14"),s=t("q1tI"),b=t.n(s),p=t("7ljp"),r=t("CZVI"),m=t("iBhN"),l=t("AIR1"),o=(b.a.createElement,!0),d={title:"Swift Number Formatting",description:"The basics of Swift Number formatting.",date:"2020-12-02T12:00:00.000Z",authors:[m.a],discussion:"https://github.com/tailwindlabs/tailwindcss/discussions/2511"},i={meta:d},N=function(e){return Object(p.b)(r.a,Object(n.a)({meta:d},e))};function j(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(p.b)(N,Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(p.b)("img",{src:l.a,alt:"Swift Ranges hero image"}),Object(p.b)("p",null,"Numbers are everywhere. They come in many different flavors. Currency, dates, scientific, etc. Computers are excellent and reading and interpreting the way numbers are expressed, humans less so. That's why we need to take the numbers that a computer understands and package them up in a way that makes sense to an average user."),Object(p.b)("div",{class:"rounded-md bg-blue-50 p-4"},Object(p.b)("div",{class:"flex"},Object(p.b)("div",{class:"flex-shrink-0"},Object(p.b)("svg",{class:"h-5 w-5 text-blue-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},Object(p.b)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))),Object(p.b)("div",{class:"ml-3 flex-1 md:flex md:justify-between"},Object(p.b)("p",{class:"text-sm leading-5 text-blue-700"},"This is a another post in a series intended as a personal growth exercise. As I learn and digest new things, I want to write about them to solidify my understanding."),Object(p.b)("p",{class:"mt-3 text-sm leading-5 md:mt-0 md:ml-6"},Object(p.b)("a",{href:"https://fs.blog/2015/01/richard-feynman-knowing-something/",class:"whitespace-no-wrap font-medium text-blue-700 hover:text-blue-600 transition ease-in-out duration-150"},"Feynman \u2192"))))),Object(p.b)("h2",null,"Presention"),Object(p.b)("p",null,"The simplest way of representing a readable number is by using a ",Object(p.b)("inlineCode",{parentName:"p"},"String"),"."),Object(p.b)("pre",{className:"language-swift"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Swift"}),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," x ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"5"'),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," y ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"5.11"'),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," z ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"',Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"5"),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),", ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"5.11"),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),'"'),"\n")),Object(p.b)("p",null,"Okay, that works but it's not very usable. We need a more full-featured approach dealing with numbers we can control. Let's define a ",Object(p.b)("inlineCode",{parentName:"p"},"Capacity")," type that lets create a ",Object(p.b)("inlineCode",{parentName:"p"},"Double")," with a name, which we can present as a ",Object(p.b)("inlineCode",{parentName:"p"},"description"),"."),Object(p.b)("pre",{className:"language-swift"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Swift"}),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"struct")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Capacity"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Codable")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," name",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," value",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Double"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"extension")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Capacity"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"CustomStringConvertbile")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," description",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"',Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"name",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),": ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"value",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),'"'),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(p.b)("p",null,"Now we're getting somewhere. But we still need to use the ",Object(p.b)("inlineCode",{parentName:"p"},"Double")," in a way that is more presentable. We need the decimal for precision, but we need a cutoff. Let's use 2 decimal places."),Object(p.b)("pre",{className:"language-swift"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Swift"}),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"extension")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Capacity"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"CustomStringConvertbile")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," description",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," formattedValue ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"String"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),"format",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"%.2f"'),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),",")," value",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"return")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"',Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"name",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),": ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"formattedValue",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),'"'),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(p.b)("p",null,"This will always output 2 decimal places, even when the value is 2.00. Again, we can dive a little deeper with ",Object(p.b)("inlineCode",{parentName:"p"},"NumberFormatter"),"."),Object(p.b)("h3",null,"NumberFormatter"),Object(p.b)("p",null,'Let\'s format our number to show decimals when it has a decimal value, and remove the "." and trailing "00" when it\'s a whole number equivalent. ',Object(p.b)("inlineCode",{parentName:"p"},"NumberFormatter")," allows us to present a decimal with a max number of trailing digits. This will give us ",Object(p.b)("inlineCode",{parentName:"p"},"81"),", ",Object(p.b)("inlineCode",{parentName:"p"},"81.8"),", and ",Object(p.b)("inlineCode",{parentName:"p"},"81.83")," presented just like that. The precision level will included the necessary trailing digits up to a given maximum, and then simply rounded off."),Object(p.b)("pre",{className:"language-swift"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Swift"}),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"extension")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Capacity"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"CustomStringConvertbile")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," description",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," formatter ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"NumberFormatter"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n    formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"numberStyle ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"decimal\n    formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"maximumFractionDigits ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"2"),"\n\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," number ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"NSNumber"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),"value",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," value",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," formattedValue ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"string"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),"from",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," number",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"!"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"return")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-green"}),'"',Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"name",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")"))," : ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),"\\("),"formattedValue",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:""}),")")),'"'),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(p.b)("p",null,"When using ",Object(p.b)("inlineCode",{parentName:"p"},"NumberFormatter")," you can take into account the user's ",Object(p.b)("inlineCode",{parentName:"p"},"Locale")," in order to present numbers with more context. In the US, we see the number ",Object(p.b)("inlineCode",{parentName:"p"},"12345.67")," while the same number viewed on a device in Europe will look like ",Object(p.b)("inlineCode",{parentName:"p"},"12 345,67"),". Other locales may present it as ",Object(p.b)("inlineCode",{parentName:"p"},"12,345.67"),". We get all that beautiful regional formatting for free when using ",Object(p.b)("inlineCode",{parentName:"p"},"NumberFormatter"),"."),Object(p.b)("h3",null,"Domain specificity"),Object(p.b)("p",null,"Depending on our needs, we'll need to deal with ",Object(p.b)("em",{parentName:"p"},"domain-specific")," that hold additional features. If we're working on a Restaurant application and dealing with ",Object(p.b)("inlineCode",{parentName:"p"},"Double"),", we can wrap the value in a ",Object(p.b)("inlineCode",{parentName:"p"},"Price")," struct to better describe the cost of items on the menu."),Object(p.b)("pre",{className:"language-swift"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Swift"}),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"struct")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"MenuItem"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Codable")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," name",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," price",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Price"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"struct")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Price"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Codable")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," amount",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Double"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," currency",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Currency"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"enum")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Currency"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),",")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Codable")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"case")," eur\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"case")," usd\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"case")," mx\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"case")," cad\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"extension")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"Price"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"CustomStringConvertbile")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"var")," description",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"String")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," formatter ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"NumberFormatter"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n    formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"numberStyle ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"currency\n    formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"currencyCode ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," currency",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"rawValue\n    formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),"maximumFractionDigits ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"2"),"\n\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"let")," number ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"=")," ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"NSNumber"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),"value",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," amount",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n    ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-purple"}),"return")," formatter",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"."),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-blue"}),"string"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"("),"from",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),":")," number",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),")"),Object(p.b)("span",Object(n.a)({parentName:"code"},{className:""}),"!"),"\n  ",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n",Object(p.b)("span",Object(n.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(p.b)("p",null,"With the above ",Object(p.b)("inlineCode",{parentName:"p"},"Price")," type fully defined, let's look at the number ",Object(p.b)("inlineCode",{parentName:"p"},"8.99")," as defined by the type in different locales."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Sweden: ",Object(p.b)("inlineCode",{parentName:"li"},"8,99 usd")),Object(p.b)("li",{parentName:"ul"},"Spain: ",Object(p.b)("inlineCode",{parentName:"li"},"8.99 USD")),Object(p.b)("li",{parentName:"ul"},"US: ",Object(p.b)("inlineCode",{parentName:"li"},"USD 8.99")),Object(p.b)("li",{parentName:"ul"},"France: ",Object(p.b)("inlineCode",{parentName:"li"},"USD 8,99"))),Object(p.b)("p",null,"Even though the differences are slight, it can be very important when creating a storefront that works as desired in many different locales."),Object(p.b)("hr",null),Object(p.b)("p",null,"Formatting numbers as human-readable strings is something we want to rely on the system for, especially when dealing with user locale. Casting a ",Object(p.b)("inlineCode",{parentName:"p"},"Double")," as a ",Object(p.b)("inlineCode",{parentName:"p"},"String")," may seem trivial, but formatting the value into the ",Object(p.b)("em",{parentName:"p"},"correct")," string is much more difficult than it appears."))}j.isMDXComponent=!0},AIR1:function(e,a,t){"use strict";a.a="/_next/static/media/hero-numbers.00f2471f8ddb3d360400df6122bdce1a.png"},CZVI:function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var c=t("wx14"),n=t("Ff2n"),s=t("q1tI"),b=t.n(s),p=t("8Kt/"),r=t.n(p),m=b.a.createElement;function l(e){var a=e.children;return m("h1",{className:"text-xl leading-9 font-bold text-gray-900 tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14"},a)}var o=t("SYun"),d=t.n(o),i=t("YFqc"),N=t.n(i),j=t("nOHt"),O=t("7ljp"),u=b.a.createElement,x={pre:function(e){var a=e.className,t=Object(n.a)(e,["className"]);return u("pre",Object(c.a)({className:"".concat(a," rounded-md bg-gray-800 py-3 px-4 overflow-x-auto")},t))},"pre.code":function(e){var a=e.className,t=Object(n.a)(e,["className"]);return u("code",Object(c.a)({className:"".concat(a," text-gray-200")},t))}},h=d()("{dddd}, {MMMM} {DD}, {YYYY}");function w(e){var a=e.meta,t=e.children,c=e.posts,n=Object(j.useRouter)(),s=c.findIndex((function(e){return e.link===n.pathname})),b=c[s+1],p=c[s-1];return u("article",{className:"xl:divide-y xl:divide-gray-200"},u(r.a,null,u("title",null,a.title," \u2013 Tailwind CSS"),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:site",content:"@waynedahlberg"}),u("meta",{name:"twitter:creator",content:"@waynedahlberg"}),u("meta",{name:"twitter:title",content:"".concat(a.title," \u2013 Wayne Dahlberg")}),u("meta",{name:"twitter:description",content:a.description}),u("meta",{name:"twitter:image",content:"https://blog.tailwindcss.com".concat(a.image)}),u("meta",{property:"og:url",content:"https://blog.tailwindcss.com".concat(n.pathname)}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:"".concat(a.title," \u2013 Wayne Dahlberg")}),u("meta",{property:"og:description",content:a.description}),u("meta",{property:"og:image",content:"https://blog.tailwindcss.com".concat(a.image)}),u("meta",{name:"description",content:a.description})),u("header",{className:"pt-6 xl:pb-10"},u("div",{className:"space-y-1 text-center"},u("dl",{className:"space-y-10"},u("div",null,u("dt",{className:"sr-only"},"Published on"),u("dd",{className:"text-sm leading-6 font-medium text-gray-500"},u("time",{dateTime:a.date},h.render(new Date(a.date)))))),u("div",null,u(l,null,a.title)))),u("div",{className:"divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20",style:{gridTemplateRows:"auto 1fr"}},u("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200"},u("dt",{className:"sr-only"},"Authors"),u("dd",null,u("ul",{className:"flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"},a.authors.map((function(e){return u("li",{key:e.twitter,className:"flex items-center space-x-2"},u("img",{src:e.avatar,alt:"",className:"w-10 h-10 rounded-full"}),u("dl",{className:"text-sm font-medium leading-5 whitespace-no-wrap"},u("dt",{className:"sr-only"},"Name"),u("dd",{className:"text-gray-900"},e.name),u("dt",{className:"sr-only"},"Twitter"),u("dd",null,u("a",{href:"https://twitter.com/".concat(e.twitter),className:"text-teal-500 hover:text-teal-700"},e.twitter))))}))))),u("div",{className:"divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"},u("div",{className:"prose max-w-none pt-10 pb-8"},u(O.a,{components:x},t))),u("footer",{className:"text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"},(p||b)&&u("div",{className:"space-y-8 py-8"},p&&u("div",null,u("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Next Article"),u("div",{className:"text-teal-500 hover:text-teal-600"},u(N.a,{href:p.link},u("a",null,p.title)))),b&&u("div",null,u("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Previous Article"),u("div",{className:"text-teal-500 hover:text-teal-700"},u(N.a,{href:b.link},u("a",null,b.title))))),u("div",{className:"pt-8"},u(N.a,{href:"/"},u("a",{className:"text-teal-500 hover:text-teal-700"},"\u2190 All Posts"))))))}},vA6S:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swift-numbers",function(){return t("1eP1")}])}},[["vA6S",0,2,1,3]]]);