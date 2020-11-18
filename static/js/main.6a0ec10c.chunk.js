(this["webpackJsonpblog-post"]=this["webpackJsonpblog-post"]||[]).push([[0],{27:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),r=c.n(n),s=c(25),i=c.n(s),l=c(11),j=c(9),o=(c(27),"/signup"),b="/signin",d="/blog",u="/createBlog",h=c(15),O=c(33),x=(c(51),c(53),c(68),O.a.initializeApp({apiKey:"AIzaSyCqFDAKHft-LKZDvkRKbLSf1SGwJcGm3yk",authDomain:"blog-development-49df1.firebaseapp.com",databaseURL:"https://blog-development-49df1.firebaseio.com",projectId:"blog-development-49df1",storageBucket:"blog-development-49df1.appspot.com",messagingSenderId:"903841670925",appId:"1:903841670925:web:f7b8aaa0470b9736e6b244"})),p=x.auth(),m=O.a.database(),f=O.a.storage(),g=r.a.createContext();function v(){return Object(n.useContext)(g)}function y(e){var t=e.children,c=Object(n.useState)(""),r=Object(h.a)(c,2),s=r[0],i=r[1];Object(n.useEffect)((function(){return p.onAuthStateChanged((function(e){i(e)}))}),[]);var l={currentUser:s,login:function(e,t){return p.signInWithEmailAndPassword(e,t)},signup:function(e,t){return p.createUserWithEmailAndPassword(e,t)},logout:function(){return p.signOut()}};return Object(a.jsx)(g.Provider,{value:l,children:t})}var N=function(){var e=v(),t=e.currentUser,c=e.logout;return console.log("current user in navigation",t),Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsxs)("ul",{className:"d-flex justify-content-start link",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link mr-2 active",to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link ml-4",to:d,children:"Blog"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link ml-4",to:u,children:"CreateBlog"})})]}),Object(a.jsx)("ul",{children:t?Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link mr-4",onClick:c,children:"LogOut"})}):Object(a.jsxs)("div",{className:"d-flex justify-content-end link mr-4",children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link mr-4",to:o,children:"SignUp"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{className:"link mr-4",to:b,children:"Login"})})]})})]})},w=c(20),C=c(21),k=c(24),S=c(22),B=c(23),D=function(e){Object(k.a)(c,e);var t=Object(S.a)(c);function c(){return Object(w.a)(this,c),t.apply(this,arguments)}return Object(C.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container text-center",children:Object(a.jsxs)("div",{className:"home mt-4",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-center ",children:"Welcome to our Blog Site!!"}),Object(a.jsx)("a",{href:"mailTo:sinte@gmail.com",style:{textDecoration:"none"},children:"GET IN TOUCH!"})]}),Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("a",{href:"https://github.com/24sint",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(B.a,{size:"2rem"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/sintumekonnen/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(B.b,{size:"2rem"})}),Object(a.jsx)("a",{href:"https://twitter.com/home?lang=en",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(B.c,{size:"2rem"})})]})]})})}}]),c}(n.Component),L=c(73),T=c(43),P=function(e){Object(k.a)(c,e);var t=Object(S.a)(c);function c(){var e;Object(w.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={postsList:[]},e}return Object(C.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.ref("posts").on("value",(function(t){var c=[];t.forEach((function(e){c.push(e.val())})),e.setState({postsList:c})}))}},{key:"render",value:function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:"container blog",children:[Object(a.jsx)("h1",{className:"text-center",children:"My Blogs"}),Object(a.jsxs)("div",{className:"d-flex flex-wrap",children:[this.state.postsList.map((function(e){return Object(a.jsxs)(L.a,{className:"article-card",children:[Object(a.jsx)(T.a,{className:"card-image-top",width:"100%",src:e.url,alt:"blogPicture"}),Object(a.jsxs)(L.a.Body,{className:"card-body",children:[Object(a.jsxs)(L.a.Title,{className:"card-title",children:[Object(a.jsx)("i",{children:"Title:"}),e.title]},e.title),Object(a.jsxs)(L.a.Text,{className:"card-text",children:[Object(a.jsx)("i",{children:"Description:"})," ",e.description]},e.description),Object(a.jsxs)(L.a.Text,{className:"card-text",children:[Object(a.jsx)("i",{children:"Author: "}),e.author]},e.author),Object(a.jsxs)(L.a.Text,{className:"card-text",children:[Object(a.jsx)("i",{children:"Date: "}),e.date]},e.publish)]})]})})),";"]})]})})}}]),c}(n.Component),A=c(17),F=c(26),U=c.n(F),G=c(31),I=c(30),R=c(72),E=c(70),K=function(e){var t=e.values,c=e.setValues,r=e.initialFiledValues,s=e.setBlogObject,i=e.currentPostKey,l=e.setCurrentPostKey,j=function(e){var a=e.target,n=a.name,r=a.value;c(Object(A.a)(Object(A.a)({},t),{},Object(I.a)({},n,r)))},o=function(){var e=Object(G.a)(U.a.mark((function e(a){var n,r,s,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.files[0],r=f.ref(),s=r.child(n.name),e.next=5,s.put(n);case 5:return e.next=7,s.getDownloadURL();case 7:i=e.sent,c(Object(A.a)(Object(A.a)({},t),{},{url:i}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(L.a,{className:"article-card",children:[Object(a.jsx)("h1",{className:"text-center",children:"Create Your New Blog"}),Object(a.jsx)(L.a.Body,{children:Object(a.jsxs)(R.a,{onSubmit:function(e){e.preventDefault();var a,n=t.title,j=t.description,o=t.author,b=t.url;if(""===n||""===j||""===o||""===b)alert("Missing Values");else{var d=new Date;t.date=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear(),i?(a=t,m.ref("posts").child(i).update(Object(A.a)({},a)),s(Object(A.a)({},a))):function(e){m.ref().child("posts").push(e).then((function(e){return l(e.key)})),s(Object(A.a)({},e))}(t),c(Object(A.a)({},r)),console.log(e.target[3])}},children:[Object(a.jsxs)(R.a.Group,{children:[Object(a.jsx)(R.a.Label,{children:"Title"}),Object(a.jsx)(R.a.Control,{type:"text",value:t.title,placeholder:"title",name:"title",onChange:j})]}),Object(a.jsxs)(R.a.Group,{children:[Object(a.jsx)(R.a.Label,{children:"Description"}),Object(a.jsx)(R.a.Control,{type:"text",value:t.description,placeholder:"description",name:"description",onChange:j})]}),Object(a.jsxs)(R.a.Group,{children:[Object(a.jsx)(R.a.Label,{children:"Author"}),Object(a.jsx)(R.a.Control,{type:"text",value:t.author,placeholder:"author",name:"author",onChange:j})]}),Object(a.jsx)(R.a.File.Input,{onChange:o,className:"card-image-top",width:"100%",src:"",alt:"blogPicture"}),Object(a.jsx)(E.a,{className:"w-100",type:"submit",style:{backgroundColor:"#00cc00",borderRadius:"15px"},children:"Save"})]})})]})})})},z=function(){var e={title:"",description:"",author:"",date:"",url:""},t=Object(n.useState)(Object(A.a)({},e)),c=Object(h.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(""),l=Object(h.a)(i,2),o=l[0],b=l[1],d=Object(j.f)(),u=Object(n.useState)({}),O=Object(h.a)(u,2),x=O[0],p=O[1];return v().currentUser?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container d-flex",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)(K,{values:r,setValues:s,initialFiledValues:e,setBlogObject:p,currentPostKey:o,setCurrentPostKey:b})}),Object(a.jsx)("div",{className:"col-5",children:Object(a.jsxs)(L.a,{className:"article-card p-4",children:[Object(a.jsx)("span",{style:{color:"#00cc00",fontSize:"1.1rem"},children:o?"Blog Created Successfuly!!":""}),Object(a.jsxs)(L.a.Body,{children:[Object(a.jsx)(L.a.Img,{className:"card-image-top",width:"100%",src:x.url,alt:"blogPicture"}),Object(a.jsxs)(L.a.Title,{children:[Object(a.jsx)("i",{children:"Title:"})," ",x.title]}),Object(a.jsxs)(L.a.Text,{children:[Object(a.jsx)("i",{children:"Description:"})," ",x.description]}),Object(a.jsxs)(L.a.Text,{children:[Object(a.jsx)("i",{children:"Author: "}),x.author]}),Object(a.jsxs)(L.a.Text,{children:[Object(a.jsx)("i",{children:"Date: "}),x.date]}),Object(a.jsx)(E.a,{className:"btn-primary",onClick:function(){return s(Object(A.a)({},x))},children:"Update"}),Object(a.jsx)(E.a,{className:"btn-danger ml-2",onClick:function(){window.confirm("Are you sure to delete this record?")&&m.ref("posts").child(o).remove()},children:"Delete"})]})]})})]})}):(d.push("/signin"),Object(a.jsx)("div",{}))},M=c(71);function V(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=v().signup,s=Object(n.useState)(""),i=Object(h.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(!1),O=Object(h.a)(u,2),x=O[0],p=O[1],m=Object(j.f)();return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(L.a,{className:"auth mt-4",style:{maxWidth:"400px"},children:[Object(a.jsxs)(L.a.Body,{className:"w-100",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(a.jsx)(M.a,{variant:"danger",children:o}),Object(a.jsxs)(R.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return d("Passwords do not match");try{d(""),p(!0),r(e.current.value,t.current.value),m.push("/createBlog")}catch(n){d("Failed to create an account")}p(!1)},children:[Object(a.jsxs)(R.a.Group,{id:"email",children:[Object(a.jsx)(R.a.Label,{children:"Email"}),Object(a.jsx)(R.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsxs)(R.a.Group,{id:"password",children:[Object(a.jsx)(R.a.Label,{children:"Password"}),Object(a.jsx)(R.a.Control,{type:"password",ref:t})]}),Object(a.jsxs)(R.a.Group,{id:"paswword-confirm",children:[Object(a.jsx)(R.a.Label,{children:"password Confirmation"}),Object(a.jsx)(R.a.Control,{type:"password",ref:c,required:!0})]}),Object(a.jsx)(E.a,{disabled:x,className:"w-100",type:"submit",style:{backgroundColor:"#00cc00",borderRadius:"15px"},children:"Sign Up"})]})]}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2 mb-4",children:["Already have an account ? ",Object(a.jsx)(l.b,{to:b,children:Object(a.jsx)("span",{children:"Sign In"})})]})]})})})}var W=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=v().login,r=Object(n.useState)(""),s=Object(h.a)(r,2),i=s[0],b=s[1],d=Object(n.useState)(!1),u=Object(h.a)(d,2),O=u[0],x=u[1],p=Object(j.f)();function m(){return(m=Object(G.a)(U.a.mark((function a(n){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,b(""),x(!0),a.next=6,c(e.current.value,t.current.value);case 6:p.push("/createBlog"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),b("Failed to login");case 12:x(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(L.a,{className:"auth mt-4",style:{maxWidth:"400px"},children:[Object(a.jsxs)(L.a.Body,{className:"w-100",children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign In"}),i&&Object(a.jsx)(M.a,{variant:"danger",children:i}),Object(a.jsxs)(R.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(a.jsxs)(R.a.Group,{id:"email",children:[Object(a.jsx)(R.a.Label,{children:"Email"}),Object(a.jsx)(R.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsxs)(R.a.Group,{id:"password",children:[Object(a.jsx)(R.a.Label,{children:"Password"}),Object(a.jsx)(R.a.Control,{type:"password",ref:t})]}),Object(a.jsx)(E.a,{disabled:O,className:"w-100",type:"submit",style:{backgroundColor:"#00cc00",borderRadius:"15px"},children:"Sign in"})]})]}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2 mb-4",children:["Don't have an account?",Object(a.jsx)(l.b,{to:o,children:Object(a.jsx)("span",{children:"Sign Up"})})]})]})})})},q=function(e){Object(k.a)(c,e);var t=Object(S.a)(c);function c(){return Object(w.a)(this,c),t.apply(this,arguments)}return Object(C.a)(c,[{key:"render",value:function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("p",{children:"\xa9 Copyright Sintu 2020-2021"})})}}]),c}(n.Component);var H=function(){return Object(a.jsx)(y,{children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(a.jsx)(j.a,{path:d,component:P}),Object(a.jsx)(j.a,{path:u,component:z}),Object(a.jsx)(j.a,{path:o,component:V}),Object(a.jsx)(j.a,{path:b,component:W})]}),Object(a.jsx)(q,{})]})})};c(66);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6a0ec10c.chunk.js.map