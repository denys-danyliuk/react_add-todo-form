(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),l=a(1),o=(a(14),a(9)),u=a.n(o),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user;return Object(d.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(d.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})})),p=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),c=Object(s.a)(i,2),o=c[0],u=c[1],m=Object(l.useState)(O),j=Object(s.a)(m,2),p=j[0],x=j[1],v=Object(l.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],g=Object(l.useState)(!1),I=Object(s.a)(g,2),C=I[0],_=I[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),function(){var e=0;if(a&&o.trim())return!0;if(""===a&&_(!0),o.includes(" "))for(var t=0;t<o.length;t+=1)" "===o[t]&&(e+=1);return""!==o&&e!==o.length||N(!0),!1}()){var t={id:Math.max.apply(Math,Object(r.a)(p.map((function(e){return e.id}))))+1,title:o,userId:+a,completed:!1,user:f(Number(a))};x((function(e){return[].concat(Object(r.a)(e),[t])})),n(""),u("")}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title: ",Object(d.jsx)("input",{type:"text",name:"title","data-cy":"titleInput",placeholder:"Enter a title",value:o,onChange:function(e){u(e.target.value),N(!1)}})]}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User: ",Object(d.jsxs)("select",{"data-cy":"userSelect",value:a,name:"user",onChange:function(e){n(e.target.value),_(!1)},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),C&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:p})]})};i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4e1629f3.chunk.js.map