(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(2),c=a(6),s=(a(13),a(1)),o=a(8),l=a.n(o),d=a(0),u=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var j=function(e){var t,a=e.todo,n=(t=a.userId,m.find((function(e){return e.id===t}))||null);return Object(d.jsxs)("article",{"data-id":a.id,className:l()("TodoInfo",{"TodoInfo--completed":!0===a.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a.title}),n&&Object(d.jsx)(u,{user:n})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],O=function(e){var t=e.onAdd,a=e.currentLength,n=Object(s.useState)(""),i=Object(r.a)(n,2),c=i[0],o=i[1],l=Object(s.useState)("0"),u=Object(r.a)(l,2),j=u[0],b=u[1],h=Object(s.useState)(!1),O=Object(r.a)(h,2),f=O[0],p=O[1],x=Object(s.useState)(!1),v=Object(r.a)(x,2),y=v[0],S=v[1];return Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),""===c&&"0"===j)return p(!0),void S(!0);""!==c?"0"!==j?(t({id:a+1,title:c,completed:!1,userId:+j}),o(""),b("0")):S(!0):p(!0)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title:",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:c,onChange:function(e){return t=e.target.value,o(t),void p(!1);var t}})]}),f&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User:",Object(d.jsxs)("select",{"data-cy":"userSelect",value:j,onChange:function(e){return t=e.target.value,b(t),void S(!1);var t},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),m.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),y&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};var f=function(){var e,t=Object(s.useState)(h),a=Object(r.a)(t,2),n=a[0],i=a[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsx)(O,{onAdd:function(e){i((function(t){return[].concat(Object(c.a)(t),[e])}))},currentLength:(e=n,Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id})))))}),Object(d.jsx)(b,{todos:n})]})};i.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0c9b6c32.chunk.js.map