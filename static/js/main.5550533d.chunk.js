(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports={shadowed:"Home_shadowed__1neof",firstName:"Home_firstName__VNEGj",hand:"Home_hand__3-WGY",wave:"Home_wave__39eRS",emoji:"Home_emoji__14Z_k",avatar:"Home_avatar__2i3g1",socials:"Home_socials__3xmZj"}},11:function(e,t,a){e.exports={shadowed:"Terminal_shadowed__ntxbi",terminal:"Terminal_terminal__36km8",topRow:"Terminal_topRow__2jZSd",red:"Terminal_red__2Q1Pv",amber:"Terminal_amber__5vpBb",green:"Terminal_green__12eKg",window:"Terminal_window__34oVx",changeColors:"Terminal_changeColors__1RqX0",pink:"Terminal_pink__2yhe1"}},13:function(e,t,a){e.exports={block:"PortfolioBlock_block__vpyXq",image:"PortfolioBlock_image__16GN8",links:"PortfolioBlock_links__3DvR9"}},15:function(e,t,a){e.exports={shadowed:"BaseLayout_shadowed__1TRS2",light:"BaseLayout_light__MvcOg",dark:"BaseLayout_dark__3FW5h",container:"BaseLayout_container__1mOKw"}},16:function(e,t,a){e.exports={shadowed:"Navbar_shadowed__3pgTk",fixed:"Navbar_fixed__2J5yp",navList:"Navbar_navList__1Wa_9"}},21:function(e,t,a){e.exports={shadowed:"Portfolio_shadowed__3Amu8",main:"Portfolio_main__1xGAd",projectsGrid:"Portfolio_projectsGrid__2tGbY",source:"Portfolio_source__1HdJu"}},23:function(e,t,a){e.exports={shadowed:"App_shadowed__3jrTB"}},24:function(e,t,a){e.exports={toggler:"Toggler_toggler__2-ZB2"}},3:function(e,t,a){e.exports={shadowed:"About_shadowed__1aPev",pink:"About_pink__gIKdk",green:"About_green__3qxdR",emoji:"About_emoji__9qV6u",main:"About_main__3txqX",skills:"About_skills__1-Phn"}},40:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(22),n=a.n(c),l=a(23),o=a.n(l),r=a(26),j=a(15),d=a.n(j),b=a(8),h=a.n(b),m=a(9),x=a.p+"static/media/logo.5c09d6fb.svg",p=a(16),O=a.n(p),_=a(24),u=a.n(_),g=a(0);function f(e){var t=e.darkMode,a=e.handleClick;return Object(g.jsx)("div",{className:u.a.toggler,onClick:a,children:t?Object(g.jsx)("span",{"aria-label":"Full Moon",role:"img",children:"\ud83c\udf15"}):Object(g.jsx)("span",{"aria-label":"New Moon",role:"img",children:"\ud83c\udf11"})})}function k(e){var t=e.darkMode,a=e.handleClick,i=e.path,s={borderBottom:"5px solid",borderImageSource:"linear-gradient(to right, #8d53ff, #ca6be6",borderImageSlice:1};return Object(g.jsx)("nav",{className:"/"!==i&&O.a.fixed,children:Object(g.jsxs)("ul",{className:O.a.navList,children:[Object(g.jsx)("li",{children:Object(g.jsx)(m.b,{exact:!0,activeClassName:"current",to:"/",activeStyle:s,children:"Home"})}),Object(g.jsx)("li",{children:Object(g.jsx)(m.b,{exact:!0,activeClassName:"current",to:"/about",activeStyle:s,children:"About Me"})}),Object(g.jsx)("li",{children:Object(g.jsx)(m.b,{exact:!0,activeClassName:"none",to:"/",children:Object(g.jsx)("img",{className:O.a.none,alt:"logo",src:x})})}),Object(g.jsx)("li",{children:Object(g.jsx)(m.b,{exact:!0,activeClassName:"current",to:"/portfolio",activeStyle:s,children:"Portfolio"})}),Object(g.jsx)(f,{darkMode:t,handleClick:a})]})})}var v=a(2),w=a(10),N=a.n(w),y=a.p+"static/media/self.442e9352.png";var T=function(e){var t=e.link,a=e.emoji,i=e.text;return Object(g.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{"aria-label":"cheese",role:"img",className:N.a.emoji,children:a})," ",i]})})};var P=function(e){var t=e.link,a=e.icon;return Object(g.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,children:Object(g.jsx)("i",{className:a,"aria-hidden":"true"})})},S=[{link:"https://www.travelwisconsin.com/",emoji:"\ud83e\uddc0",text:"based in wisconsin"},{link:null,emoji:"\ud83d\udcbb",text:"react dev at Mathison Projects"},{link:"https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",emoji:"\ud83d\udc31",text:"cat mom"},{link:"mailto:paytontaylor96@gmail.com?subject=Let's work on something together!",emoji:"\u2709\ufe0f",text:"paytontaylor96@gmail.com"}],C=[{link:"https://github.com/paytonjewell",icon:"fa fa-github"},{link:"https://www.facebook.com/paytontjewell",icon:"fa fa-facebook"},{link:"https://www.linkedin.com/in/payton-jewell/",icon:"fa fa-linkedin"},{link:"https://twitter.com/paytontjewell",icon:"fa fa-twitter"}];function M(){return Object(g.jsxs)("main",{children:[Object(g.jsx)("img",{src:y,alt:"self",className:h()(N.a.avatar,N.a.shadowed)}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{children:["Hi, I'm ",Object(g.jsx)("span",{className:N.a.firstName,children:"Payton"})," ",Object(g.jsx)("span",{className:N.a.hand,children:"\ud83d\udc4b\ud83c\udffb"})]}),Object(g.jsx)("h2",{children:"I'm a front-end developer."}),Object(g.jsx)("ul",{children:S.map((function(e){return Object(g.jsx)(T,{link:e.link,emoji:e.emoji,text:e.text})}))}),Object(g.jsx)("div",{className:N.a.socials,children:C.map((function(e){return Object(g.jsx)(P,{link:e.link,icon:e.icon})}))})]})]})}var A=a(3),I=a.n(A),R=a(11),B=a.n(R),H="fa fa-circle";var L=function(e){var t=e.text;return Object(g.jsxs)("section",{className:h()(B.a.terminal,B.a.shadowed),children:[Object(g.jsxs)("div",{className:B.a.topRow,children:[Object(g.jsx)("i",{className:h()(H,B.a.red)}),Object(g.jsx)("i",{className:h()(H,B.a.amber)}),Object(g.jsx)("i",{className:h()(H,B.a.green)})]}),Object(g.jsx)("div",{className:B.a.window,children:t})]})};function G(){return Object(g.jsxs)("div",{className:I.a.main,children:[Object(g.jsx)(L,{text:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:I.a.pink,children:"paytonjewell $"})," cat aboutpayton "]}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{className:I.a.pink,children:["aboutpayton ",Object(g.jsx)("span",{className:I.a.green,children:"(master)"})," $ "]}),"Hello! I'm Payton, a front-end developer from Wisconsin. I love creating web applications with React, and I'm currently studying unit testing. I've been working for Mathison Projects since July 2021."]}),Object(g.jsx)("p",{children:'I still don\'t know if it\'s "front-end", "frontend, or "front end", and at this point I\'m too afraid to ask.'})]})}),Object(g.jsx)(L,{text:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:I.a.pink,children:"paytonjewell $"})," cd skills/tools"]}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{className:I.a.pink,children:["skills/tools ",Object(g.jsx)("span",{className:I.a.green,children:"(master)"})," $"]})," ls"]}),Object(g.jsx)("p",{className:I.a.pink,children:" Proficient In"}),Object(g.jsxs)("ul",{className:I.a.skills,children:[Object(g.jsx)("li",{children:"Vanilla JS"}),Object(g.jsx)("li",{children:"React"}),Object(g.jsx)("li",{children:"DOM Manipulation"}),Object(g.jsx)("li",{children:"HTML5"}),Object(g.jsx)("li",{children:"CSS3"}),Object(g.jsx)("li",{children:"Bootstrap"}),Object(g.jsx)("li",{children:"Sass"}),Object(g.jsx)("li",{children:"Scss Modules"}),Object(g.jsx)("li",{children:"Git"}),Object(g.jsx)("li",{children:"Github"}),Object(g.jsx)("li",{children:"Phabricator"}),Object(g.jsx)("li",{children:"Arcanist"}),Object(g.jsx)("li",{children:"IntelliJ IDEA"}),Object(g.jsx)("li",{children:"VSCode"}),Object(g.jsx)("li",{children:"Chrome DevTools"}),Object(g.jsx)("li",{children:"npm"}),Object(g.jsx)("li",{children:"API Requests"}),Object(g.jsx)("li",{children:"JSON"}),Object(g.jsx)("li",{children:"Custom React Hooks"})]}),Object(g.jsx)("p",{className:I.a.pink,children:" Exposed To"}),Object(g.jsxs)("ul",{className:I.a.skills,children:[Object(g.jsx)("li",{children:"Node.js"}),Object(g.jsx)("li",{children:"Express.js"}),Object(g.jsx)("li",{children:"Jest"})]})]})}),Object(g.jsx)(L,{text:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:I.a.pink,children:"paytonjewell $"})," cd hobbies/interests"]}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{className:I.a.pink,children:["hobbies/interests ",Object(g.jsx)("span",{className:I.a.green,children:"(master)"})," $"]})," ls"]}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{className:I.a.emoji,children:"\ud83d\udcd6"}),"reading"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{className:I.a.emoji,children:"\ud83c\udfa8"}),"digital art"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{className:I.a.emoji,children:"\ud83c\udfa5"}),"movies"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{className:I.a.emoji,children:"\ud83d\udd2e"}),"horror / spooky stuff"]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("span",{className:I.a.emoji,children:"\ud83c\udf72"}),"cooking/food, particularly of the spicy variety"]})]})]})})]})}var D=a(21),J=a.n(D),q=a.p+"static/media/mock1.8ff51d7c.png",W=a.p+"static/media/mock2.8a48c278.png",$=a.p+"static/media/mock3.31de5674.png",E=a.p+"static/media/mock4.e827ecc7.png",F=a.p+"static/media/mock5.7a3de7b6.png",V=a(13),Z=a.n(V);var K=function(e){var t=e.link,a=e.title,i=e.icon;return Object(g.jsxs)("a",{className:Z.a.liveSite,href:t,target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("i",{className:i})," ",a]})};var X=function(e){var t=e.image,a=e.live,i=e.source,s=e.title;return Object(g.jsxs)("div",{className:Z.a.block,children:[Object(g.jsxs)("div",{className:Z.a.image,children:[Object(g.jsx)("img",{src:t,alt:"MoviePedia mockup"}),Object(g.jsxs)("div",{className:Z.a.links,children:[Object(g.jsx)(K,{link:a,title:"Live Site",icon:"fa fa-safari"}),Object(g.jsx)(K,{link:i,title:"Source Code",icon:"fa fa-code"})]})]}),Object(g.jsx)("h1",{children:s})]})},Y=[{image:F,live:"https://paytonjewell.github.io/moviepedia/",source:"https://github.com/paytonjewell/moviepedia",title:"MoviePedia"},{image:q,live:"https://paytonjewell.github.io/ReactPortfolioTemplate/",source:"https://github.com/paytonjewell/ReactPortfolioTemplate",title:"React Portfolio Template"},{image:W,live:"https://paytonjewell.github.io/Analog-Clock-With-Darkmode-Toggle/",source:"https://github.com/paytonjewell/Analog-Clock-With-Darkmode-Toggle",title:"Analog Clock with Dark Mode Toggle"},{image:$,live:"https://paytonjewell.github.io/To-Do-List/",source:"https://github.com/paytonjewell/To-Do-List",title:"To-Do List"},{image:E,live:"https://paytonjewell.github.io/gradient-generator/",source:"https://github.com/paytonjewell/gradient-generator",title:"Gradient Generator"}];function Q(){return Object(g.jsx)("div",{className:J.a.main,children:Object(g.jsx)("div",{className:J.a.projectsGrid,children:Y.map((function(e){return Object(g.jsx)(X,{image:e.image,live:e.live,source:e.source,title:e.title})}))})})}function z(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(v.f)().pathname;return Object(g.jsxs)("div",{className:h()(d.a.container,a?d.a.dark:d.a.light),children:[Object(g.jsx)(k,{darkMode:a,handleClick:function(){s(!a)},path:c}),Object(g.jsx)(U,{}),Object(g.jsxs)("footer",{children:[Object(g.jsx)("p",{children:"Made with \u2665 by Payton Jewell"}),Object(g.jsx)("p",{children:"\xa9 2021"})]})]})}var U=function(){return Object(g.jsxs)(v.c,{children:[Object(g.jsx)(v.a,{exact:!0,path:"/",component:M}),Object(g.jsx)(v.a,{exact:!0,path:"/about",component:G}),Object(g.jsx)(v.a,{exact:!0,path:"/portfolio",component:Q})]})};var ee=function(){return Object(g.jsx)(m.a,{children:Object(g.jsx)("div",{className:o.a.app,children:Object(g.jsx)(z,{children:Object(g.jsx)(M,{})})})})};n.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(ee,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5550533d.chunk.js.map