(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(123),c=t(133),i=t(119);var m=function(e){var a=e.nextItem,t=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},s=t(128),o=t(154);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,i=a.metadata,u=i.title,d=i.description,E=i.nextItem,g=i.prevItem,v=i.editUrl,b=n.hide_table_of_contents;return l.a.createElement(r.a,{title:u,description:d,wrapperClassName:"blog-wrapper"},a&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(s.a,{sidebar:t})),l.a.createElement("main",{className:"col col--8"},l.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},l.a.createElement(a,null)),l.a.createElement("div",null,v&&l.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(E||g)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(m,{nextItem:E,prevItem:g}))),!b&&a.rightToc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(o.a,{headings:a.rightToc})))))}},124:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(117),c=t(116),i=t(53),m=t.n(i);a.a=function(){return l.a.createElement("div",{className:m.a.footerContent},l.a.createElement("div",null,l.a.createElement("img",{src:Object(r.a)("img/logo-white.png"),alt:"EOS CR LOGO"})),l.a.createElement("div",null,l.a.createElement("h2",null,"FOLLOW US"),l.a.createElement("div",{className:m.a.socialCol},l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/EOSCostaRica",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Twitter"),l.a.createElement("a",{href:"https://www.facebook.com/costaricaeos",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Facebook"),l.a.createElement("a",{href:"https://www.linkedin.com/company/eoscostarica/",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"LinkedIn")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://medium.com/@eoscostarica",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Medium"),l.a.createElement("a",{href:"https://t.me/eoscr",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Telegram"),l.a.createElement("a",{href:"https://www.instagram.com/eoscostarica/",target:"_blank",className:Object(c.a)(m.a.companySocial,m.a.companyLocation)},"Instagram")))),l.a.createElement("div",null,l.a.createElement("span",{className:m.a.companyLocation},"Edificio Trifami, 5th floor San Jos\xe9,"," ",l.a.createElement("strong",null,l.a.createElement("i",null,"Costa Rica")))))}},125:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(117),c=t(122),i=t(116),m=function(){return l.a.createElement("svg",{viewBox:"0 0 100 80",width:"40",height:"30"},l.a.createElement("rect",{width:"100",height:"10"}),l.a.createElement("rect",{y:"30",width:"100",height:"10"}),l.a.createElement("rect",{y:"60",width:"100",height:"10"}))},s=t(53),o=t.n(s),u=function(e){var a,t=e.isOpen,n=e.setIsOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:o.a.menuButton,onClick:function(){return n(!0)}},l.a.createElement(m,null)),l.a.createElement("div",{className:Object(i.a)(o.a.sidebar,(a={},a[o.a.active]=t,a)),onClick:function(){return n(!1)}},l.a.createElement("div",{className:o.a.menuSideBar,onClick:function(e){return e.stopPropagation()}},l.a.createElement("div",{className:o.a.imgBox},l.a.createElement("img",{src:Object(r.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/")},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/services")},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/about")},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/industries")},"Industries")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/projects")},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/block-producer")},"Bp")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/blog")},"Blog"))))))};a.a=function(){var e,a,t,m,s,d,E,g="undefined"!=typeof window?window.location.pathname:"/",v=Object(c.useMediaQuery)({query:"(max-width: 768px)"}),b=Object(n.useState)(!1),h=b[0],p=b[1];return l.a.createElement("div",{className:o.a.customMenu},v&&l.a.createElement(u,{isOpen:h,setIsOpen:p}),l.a.createElement("div",{className:o.a.boxLeft},l.a.createElement("img",{src:Object(r.a)("img/eoscr-logo.png"),alt:"EOS CR LOGO"})),l.a.createElement("div",{className:o.a.boxRight},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/"),className:Object(i.a)((e={},e[o.a.selected]="/"===g,e))},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/services"),className:Object(i.a)((a={},a[o.a.selected]=g.includes("/services"),a))},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/about"),className:Object(i.a)((t={},t[o.a.selected]=g.includes("/about"),t))},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/block-producer"),className:Object(i.a)((m={},m[o.a.selected]=g.includes("/block-producer"),m))},"BP")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/industries"),className:Object(i.a)((s={},s[o.a.selected]=g.includes("/industries"),s))},"Industries")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/projects"),className:Object(i.a)((d={},d[o.a.selected]=g.includes("/projects"),d))},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:Object(r.a)("/blog"),className:Object(i.a)((E={},E[o.a.selected]=g.includes("/blog"),E))},"Blog")))))}},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),l=t.n(n),r=t(116),c=t(119),i=t(58),m=t.n(i);function s(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(r.a)(m.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:m.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:m.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},l.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))}))))}},133:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(116),c=t(118),i=t(21),m=t(119),s=t(135),o=t(117),u=t(60),d=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,g,v=e.children,b=e.frontMatter,h=e.metadata,p=e.truncated,f=e.isBlogPostPage,N=void 0!==f&&f,O=h.date,_=h.permalink,j=h.tags,k=h.readingTime,w=b.author,y=b.title,L=b.image,I=b.keywords,C=b.author_url||b.authorURL,S=b.author_title||b.authorTitle,x=b.author_image_url||b.authorImageURL,B=Object(o.a)(L,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,I&&I.length&&l.a.createElement("meta",{name:"keywords",content:I.join(",")}),L&&l.a.createElement("meta",{property:"og:image",content:B}),L&&l.a.createElement("meta",{property:"twitter:image",content:B}),L&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y})),l.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=O.substring(0,10).split("-"),n=t[0],u=E[parseInt(t[1],10)-1],g=parseInt(t[2],10),l.a.createElement("header",null,l.a.createElement(a,{className:Object(r.a)("margin-bottom--sm",d.a.blogPostTitle)},N?y:l.a.createElement(m.a,{to:_},y)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:O,className:d.a.blogPostDate},u," ",g,", ",n," ",k&&l.a.createElement(l.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),l.a.createElement("div",{className:"avatar margin-vert--md"},x&&l.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:C,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:x,alt:w})),l.a.createElement("div",{className:"avatar__intro"},w&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer noopener"},w)),l.a.createElement("small",{className:"avatar__subtitle"},S)))))),l.a.createElement("section",{className:"markdown"},l.a.createElement(c.a,{components:s.a},v)),(j.length>0||p)&&l.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,"Tags:"),j.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(m.a,{to:h.permalink,"aria-label":"Read more about "+y},l.a.createElement("strong",null,"Read More"))))))}},154:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(116);var c=function(e,a,t){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var l=0,i=!1,m=document.getElementsByClassName(e);l<m.length&&!i;){var s=m[l],o=s.href,u=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===u&&(r&&r.classList.remove(a),s.classList.add(a),c(s),i=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=t(64),m=t.n(i),s="table-of-contents__link";function o(e){var a=e.headings,t=e.isChild;return a.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(o,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return c(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(m.a.tableOfContents,"thin-scrollbar")},l.a.createElement(o,{headings:a}))}}}]);