(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(63)},43:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),s=t.n(i),l=(t(43),t(11)),c=t(12),o=t(14),m=t(13),u=t(15),h=(t(45),t(73)),p=t(69),g=t(75),E=t(74),f=(t(47),t(65)),b=t(66),d=t(72),w=t(67),y=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{key:"member"+this.props.index,className:"row-margin-1"},r.a.createElement(b.a,{xs:{span:8,offset:2}},r.a.createElement(d.a,{body:!0,className:"team-card"},r.a.createElement(f.a,null,r.a.createElement(b.a,{xs:3},r.a.createElement(w.a,{src:this.props.member.image,thumbnail:!0,fluid:!0})),r.a.createElement(b.a,{xs:8},r.a.createElement(f.a,null,r.a.createElement("h4",null,this.props.member.name)),r.a.createElement(f.a,null,this.props.member.bio))))))}}]),a}(n.Component),v=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{key:"member"+this.props.index,className:"row-margin-2"},r.a.createElement(b.a,{xs:{span:4,offset:6}},r.a.createElement(w.a,{src:this.props.member.src,fluid:!0})))}}]),a}(n.Component),x=t(68),N=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,null,this.props.group.map(function(a,t){return r.a.createElement("div",{key:e.props.type+"-showcase-"+t},"team"===e.props.type&&r.a.createElement(y,{member:a,index:t,key:"team-"+t}),"icon"===e.props.type&&r.a.createElement(v,{member:a,index:t,key:"icon-"+t}))}))}}]),a}(n.Component),j=[{name:"Adele Miller",bio:"Adele is majoring in Informatics at the University of Washington. She is a long time hackathon organizer and has served as a teaching assistant in several courses in the Informatics program. She will be starting as a security engineer in September.",image:"./img/adele.jpg"},{name:"Harshitha Akkaraju",bio:"This be Harshitha.",image:"./img/sam.jpg"},{name:"Shaarika Kaul",bio:"This is Shaarika.",image:"./img/sam.jpg"},{name:"Sam Otto",bio:"Sam is majoring in Informatics at the University of Washington with a dual focus in information security and data science. He will begin a position as a cyber risk consultant this upcoming summer.",image:"./img/sam.jpg"}],k=[{src:"./img/aws_logo.svg"},{src:"./img/aws_cloud.svg"},{src:"./img/aws_ssl.svg"}],O=[{name:"Joe Basirico",bio:"Joe is a Senior VP of Engineering at Security Innovation. Among other duties, he is responsible for the development of the CMD+CTRL product, which is the penetration testing platform that will support CubeRule.",image:"./img/security_innovation.png"},{name:"Informatics, UW",bio:"This product is being developed within the context of the Informatics program capstone at the University of Washington, Seattle.",image:"./img/informatics_logo.png"}],C=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{fluid:!0},r.a.createElement(f.a,null,r.a.createElement("div",{className:"thumbnail text-center"},r.a.createElement(w.a,{src:"./img/cube_background.png",fluid:!0}),r.a.createElement("div",{className:"caption"},r.a.createElement("h1",{className:"white-text real-big"},"CubeRule"),r.a.createElement("h2",{className:"white-text"},"AWS Cyber Range"))))),r.a.createElement(x.a,null,r.a.createElement(f.a,{className:"row-margin-4"},r.a.createElement("h1",{className:"white-text"},"What this is")),r.a.createElement(f.a,null,r.a.createElement(b.a,{xs:8},r.a.createElement(f.a,{className:"white-text row-margin-1"},"Cloud computing services have become a fundamental component of modern business. With more and more specialized services being offered, the complexity that developers must face every day only grows. This complexity leads to insecure platforms and compromised code."),r.a.createElement(f.a,{className:"white-text row-margin-1"},"CubeRule seeks to help developers and security professionals train by creating a 'cyber range' - an intentionally insecure platform where 'players' can score points by hacking its functionality. Through the process of identifying and exploiting vulnerabilities, developers learn how to secure their own applications."),r.a.createElement(f.a,{className:"white-text row-margin-1"},"This fictitious app will focus on vulnerabilities in Amazon Web Services, such as S3, EC2, and DynamoDB.")),r.a.createElement(b.a,{xs:4},r.a.createElement(N,{group:k,type:"icon"})))),r.a.createElement(x.a,null,r.a.createElement(f.a,{className:"row-margin-4"},r.a.createElement("h1",{className:"white-text"},"Who we are")),r.a.createElement(f.a,{className:"row-margin-1"},r.a.createElement(N,{group:j,type:"team"}))),r.a.createElement(x.a,null,r.a.createElement(f.a,{className:"row-margin-4"},r.a.createElement("h1",{className:"white-text"},"Our sponsors")),r.a.createElement(f.a,{className:"row-margin-1"},r.a.createElement(N,{group:O,type:"team"}))),r.a.createElement(x.a,null,r.a.createElement(f.a,{className:"row-margin-4"},r.a.createElement(b.a,{xs:6},r.a.createElement(f.a,null,r.a.createElement("h1",{className:"white-text"},'Why "CubeRule"?')),r.a.createElement(f.a,{className:"row-margin-1 white-text"},r.a.createElement("p",null,'This fictitious app must have a theme, and we derived it from the concept of the "Cube Rule", seen on ',r.a.createElement("a",{className:"white-text",href:"http://cuberule.com/"},"cuberule.com."),' The \'Cube Rule\' specifies a method for classifying food into multiple categories, such as toast, taco, sandwhich, calzone, and quiche. The storyline for this application is that of a new startup offering the ability to detect these food classifications through the use of "computer vision techniques" and "smart AI technologies".'))),r.a.createElement(b.a,{xs:{span:5,offset:1}},r.a.createElement(f.a,null,r.a.createElement("h1",{className:"white-text"},"Contact us")),r.a.createElement(f.a,{className:"row-margin-1 white-text"},"If you are a developer or security engineer with AWS experience and would like to help test this application, or for any other reason, please feel free to contact us at: moffotto@uw.edu")))))}}]),a}(n.Component),S=t(71),T=t(70),W=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(S.a.Brand,null,r.a.createElement(p.a,{to:"/",className:"navLinks white-text"},"C U B E ",r.a.createElement(w.a,{src:"./img/cube_icon_2.png"})," R U L E")),r.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"}),r.a.createElement(T.a,null,r.a.createElement(p.a,{to:"/",className:"navLinks white-text"},"Home"))))),r.a.createElement("main",null,r.a.createElement(g.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:C}))),r.a.createElement("footer",null,r.a.createElement(x.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,{xs:{span:5,offset:7}},r.a.createElement("h5",{className:"white-text"},"Attribution"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"white-text",href:"http://cuberule.com/"},"Name inspired by The Cube Rule")),r.a.createElement("li",null,r.a.createElement("a",{className:"white-text",href:"https://www.pexels.com/photo/orange-cube-1340185/"},"Photo by Magda Ehlers from Pexels")),r.a.createElement("li",null,r.a.createElement("a",{className:"white-text",href:"https://icons8.com/icons"},"Icons by Icons8.com")))))),r.a.createElement("div",{className:"footer-copyright white-text"},r.a.createElement(x.a,null,"\xa9 2018 [fake] Copyright Text")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.a70c6ac8.chunk.js.map