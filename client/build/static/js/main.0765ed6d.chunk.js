(this.webpackJsonprewardo=this.webpackJsonprewardo||[]).push([[0],{208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},212:function(e,t,n){},281:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(52),r=n.n(c),i=(n(208),n(209),n(38)),o=n(101),l=n(84),d=n.p+"static/media/cover.80266bde.png",u=(n(210),n(296)),j=n(98),b=n(295),h=n(63),m=n(163),p=n(301),O=n(303),x=n(23),f=n(168),g=n.n(f),v=n(12),y=Object(s.createContext)(),w=y.Provider,N=function(e){var t,n=e.children,a=Object(i.g)(),c=JSON.parse((t="user",g.a.get(t)||null)),r=Object(s.useState)(c||{isLoggedIn:!1,id:null}),o=Object(x.a)(r,2),l=o[0],d=o[1];return Object(v.jsx)(w,{value:{authState:l,setAuthInfo:function(e,t,n){console.log("setting auth info",t),g.a.set("user",JSON.stringify(t),{expires:n,path:"/"}),d(t)},isAuthenticated:function(){return console.log("is authenticated",l.isLoggedIn),l.isLoggedIn},logout:function(){g.a.remove("user"),d({isLoggedIn:!1}),a("/")},isBusiness:function(){return"business"===l.type}},children:n})},S=(n(212),n(305));function A(e){var t=e.setIsTxnModalVisible,n=Object(s.useContext)(y),a=window.location.href.split("/")[3],c=Object(v.jsx)(j.a,{children:Object(v.jsx)(j.a.Item,{onClick:function(){return n.logout()},danger:!0,children:"Logout"})});return Object(v.jsxs)(b.a,{justify:"space-between",align:"middle",children:[Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAABCCAYAAABtoovRAAAAAXNSR0IArs4c6QAABC10RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJhcHAuZGlhZ3JhbXMubmV0JTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIxLTEyLTAyVDIwJTNBMzklM0EyNC43MzRaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMENocm9tZSUyRjk2LjAuNDY2NC40NSUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjI1Q1N1a09MRnJTWEF0V1RDZmJSeiUyMiUyMHZlcnNpb24lM0QlMjIxMy4zLjYlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyN0kzZzJtV0JPczQ1b1VoUlFJcDMlMjIlMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTNFalpSWmI1d3dFSUIlMkZEWSUyQkpPQUxaMTBDVzlxWEtzVzN5YkdFRGxteUdHQlBZJTJGdnFPbHpFRXJTSlZRc3Y0bTRPNXZFRlM2UG1IWVgzN0M3aFFRUnp5T1VnZWd6aSUyQlA4VDQ2OEI1QVhkSnRvREdTTDZnYUFNbiUyQlZjUURJbU9rb3RoWjJnQmxKWDlIbGJRZGFLeU84YU1nV2x2Vm9QYWY3Vm5qYmdDcDRxcGElMkZvdXVXMFhla2pEamY4VXNtbjlsNk9RTkpwNVl3SkR5emhNT3lSbVcwSm5LY1VDZEEzR01oYWt4OVphViUyQkJERUpmNDFNN290Z0ZvbEdDOUhHNHIwSWlyQVUzS21tbXBYSGMzZnd5ZUhJT2tNQUIya2ZSY0NPVUc0NXUlMkJaRkIlMkJvMTJyTnFLeiUyRiUyQk9RaHklMkIxSEo4JTJCM3VBbGZzM2E1ejhIZUx5aEtKOU1qZFROSU00VXhzdGRRYTRsOWt4OXpqNUc4SXFiNGJJRldIdVlwajB1VXI3cFVXcmMlMkIxVk16SER3OGFoSFhrc05YNlBIRmp1TnZM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",alt:"logo",height:"40"})}),Object(v.jsxs)("div",{children:["business"===a&&Object(v.jsx)(h.a,{type:"link",icon:Object(v.jsx)(S.a,{}),style:{color:"#51CC71",marginRight:"30px"},onClick:function(){return t(!0)},children:"Add New Transaction"}),n.isAuthenticated()?Object(v.jsx)(m.a,{overlay:c,placement:"bottomLeft",children:Object(v.jsx)(p.a,{style:{backgroundColor:"#00ff80"},icon:Object(v.jsx)(O.a,{})})}):Object(v.jsx)("a",{href:"/signup",children:Object(v.jsx)(h.a,{style:{backgroundColor:"#51CC71",borderRadius:"5px"},type:"primary",children:"Sign Up"})})]})]})}n(281);var I=u.a.Header,M=u.a.Footer,B=u.a.Content,J=function(e){var t=e.children,n=e.setIsTxnModalVisible;return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(I,{className:"header-sticky",children:Object(v.jsx)(A,{setIsTxnModalVisible:n})}),Object(v.jsx)(B,{className:"content",children:t}),Object(v.jsx)(M,{className:"footer",children:"\xa9 2021 Rewardo"})]})};function T(){var e=Object(i.g)(),t=Object(s.useContext)(y);return Object(v.jsx)(J,{children:Object(v.jsx)("div",{className:"about-parent-container",children:Object(v.jsxs)("div",{className:"parent-container",children:[Object(v.jsx)("div",{className:"left-container",children:t.isAuthenticated()?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"about-container secondary",children:["Rewardo rewards you with vouchers, cashbacks, reward points and a lot more just by shopping with our enabled partners! We let businesses offer rewards based on the amount purchased by you from them.",Object(v.jsx)("br",{}),"You shop more, you earn more!",Object(v.jsx)("br",{}),"Businesses can offer from a mere 1% to upto 50% per order. Yes you heard it right! Our AI model will offer you a more personalised reward, so you can have a treat on us on your favourite snack and sweets.",Object(v.jsx)("br",{}),"You shop more, you get more!",Object(v.jsx)("br",{}),"And we saved the best for the last. Our services are absolutely free! We won't charge you anything in the future if you promise us never to leave our Rewardo family."]})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"about-container",children:["Matching customers ",Object(v.jsx)("br",{}),"with great business."]}),Object(v.jsxs)("div",{className:"login-signup-container",children:[Object(v.jsxs)("div",{className:"login-container",children:[Object(v.jsx)("h3",{class:"login-heading",children:Object(v.jsx)("span",{class:"login-heading-text",children:"For Business"})}),Object(v.jsx)("p",{class:"about-business",children:Object(v.jsx)("span",{children:"Login to create rewards, earn trust and grow your business with us."})}),Object(v.jsx)("div",{className:"login-button",onClick:function(){e("/business/login")},children:"Login"})]}),Object(v.jsxs)("div",{className:"signup-container",children:[Object(v.jsx)("h3",{class:"login-heading",children:Object(v.jsx)("span",{class:"login-heading-text",children:"For Customers"})}),Object(v.jsx)("p",{class:"about-customer",children:Object(v.jsx)("span",{children:"Login to get discounts on your favourite products from your favourite shops."})}),Object(v.jsx)("div",{className:"login-button",onClick:function(){e("/customer/login")},children:"Login"})]})]})]})}),Object(v.jsx)("div",{className:"right-container",children:t.isAuthenticated()?Object(v.jsx)("img",{width:"520",height:"600px",src:d,className:"custom-logo",alt:"Logo",loading:"lazy"}):Object(v.jsx)("img",{width:"520",src:"https://thevault.exchange/resources/wp-content/uploads/2021/03/74-743103_listening-to-customers-png-happy-customer-png-transparent.png",className:"custom-logo",alt:"Logo",loading:"lazy"})})]})})})}var F=n(1),V=n.n(F),U=n(4),C=n(49),X=n(160),E=n(201),Z=function(e){E.a.error({message:"Error",description:e})};n(283);function k(){var e=Object(i.g)(),t=Object(s.useState)({name:"",password:"",email:"",type:"Business",phonenumber:""}),n=Object(x.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)("Name"),o=Object(x.a)(r,2),l=o[0],d=o[1],u=Object(s.useContext)(y),j=Object(s.useState)(""),b=Object(x.a)(j,2);b[0],b[1];function h(){return fetch("/api/id?email=".concat(a.email),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}function m(){var e={name:a.name,email:a.email,type:a.type,phone:a.phonenumber};return fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e})).catch((function(e){console.log(e)}))}function p(){return(p=Object(U.a)(V.a.mark((function t(){var n,s,c,r,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.a.auth().createUserWithEmailAndPassword(a.email,a.password);case 3:return s=t.sent,t.next=6,null===(n=s.user)||void 0===n?void 0:n.updateProfile({displayName:"".concat(a.name)});case 6:return c={name:a.fname,email:a.email,password:a.password,userType:a.type},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},t.next=10,fetch("/api/add_user",r);case 10:return t.next=12,m();case 12:return t.next=14,h();case 14:i=t.sent,u.setAuthInfo(a.email,{isLoggedIn:!0,type:a.type,id:i},1),"Customer"===a.type?e("/customer/dashboard"):e("/business/dashboard"),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),Z(t.t0.message);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))).apply(this,arguments)}function O(e){console.log(e.target.value),"Customer"===e.target.value?d("Name"):d("Shop Name"),c(Object(C.a)(Object(C.a)({},a),{},{type:e.target.value}))}return Object(v.jsx)("div",{className:"signup-parent-container",children:Object(v.jsxs)("div",{className:"signup-parent",children:[Object(v.jsx)("div",{className:"backIcon",onClick:function(){e(-1)},children:Object(v.jsx)("img",{height:"40px",width:"40px",src:"https://static.thenounproject.com/png/344330-200.png"})}),Object(v.jsx)("div",{id:"signup-card",children:Object(v.jsxs)("div",{id:"card-content",children:[Object(v.jsxs)("div",{id:"card-title",children:[Object(v.jsx)("h2",{children:"SIGN UP"}),Object(v.jsx)("div",{class:"underline-title"})]}),Object(v.jsxs)("form",{method:"post",class:"form",children:[Object(v.jsx)("label",{className:"user-mail",for:"user-email",children:"".concat(l)}),Object(v.jsx)("input",{id:"user-email",className:"form-content",type:"name",name:"name",autocomplete:"on",required:!0,onChange:function(e){c(Object(C.a)(Object(C.a)({},a),{},{name:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsx)("label",{className:"user-mail",for:"user-email",children:"\xa0Email"}),Object(v.jsx)("input",{id:"user-email",className:"form-content",type:"email",name:"email",autocomplete:"on",required:!0,onChange:function(e){c(Object(C.a)(Object(C.a)({},a),{},{email:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsx)("label",{className:"user-password",for:"user-password",children:"\xa0Password"}),Object(v.jsx)("input",{id:"user-password",class:"form-content",type:"password",name:"password",required:!0,onChange:function(e){c(Object(C.a)(Object(C.a)({},a),{},{password:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsx)("label",{className:"user-phonenumber",for:"user-phonenumber",children:"\xa0Phone Number"}),Object(v.jsx)("input",{id:"user-phonenumber",class:"form-content",type:"mumber",name:"phonenumber",required:!0,onChange:function(e){c(Object(C.a)(Object(C.a)({},a),{},{phonenumber:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsxs)("div",{className:"type-container",children:[Object(v.jsx)("input",{className:"radio-first",type:"radio",value:"Business",name:"gender",checked:"checked",onChange:O})," ","Business",Object(v.jsx)("input",{className:"radio-second",type:"radio",value:"Customer",name:"gender",onChange:O})," ","Customer"]}),Object(v.jsx)("div",{id:"signup-submit-btn",onClick:function(){return p.apply(this,arguments)},children:"Submit"})]})]})})]})})}n(284);function R(){var e=Object(s.useState)({email:"",password:""}),t=Object(x.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(x.a)(c,2),o=(r[0],r[1]),l=window.location.href.split("/")[3],d=Object(i.g)(),u=Object(s.useContext)(y);function j(){return fetch("/api/id?email=".concat(n.email),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}function b(){return(b=Object(U.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.auth().signInWithEmailAndPassword(n.email,n.password);case 3:return e.next=5,j();case 5:t=e.sent,u.setAuthInfo(n.email,{isLoggedIn:!0,type:l,id:t},1),d("customer"===l?"/customer/dashboard":"/business/dashboard"),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",o(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(v.jsx)("div",{className:"login-parent-container",children:Object(v.jsxs)("div",{className:"login-parent",children:[Object(v.jsx)("div",{className:"backIcon",onClick:function(){d(-1)},children:Object(v.jsx)("img",{height:"40px",width:"40px",src:"https://static.thenounproject.com/png/344330-200.png"})}),Object(v.jsx)("div",{id:"card",children:Object(v.jsxs)("div",{id:"card-content",children:[Object(v.jsxs)("div",{id:"card-title",children:[Object(v.jsx)("h2",{children:"LOGIN"}),Object(v.jsx)("div",{class:"underline-title"})]}),Object(v.jsxs)("form",{method:"post",class:"form",children:[Object(v.jsx)("label",{className:"user-mail",for:"user-email",children:"\xa0Email"}),Object(v.jsx)("input",{id:"user-email",className:"form-content",type:"email",name:"email",autocomplete:"on",required:!0,onChange:function(e){a(Object(C.a)(Object(C.a)({},n),{},{email:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsx)("label",{className:"user-password",for:"user-password",children:"\xa0Password"}),Object(v.jsx)("input",{id:"user-password",class:"form-content",type:"password",name:"password",required:!0,onChange:function(e){a(Object(C.a)(Object(C.a)({},n),{},{password:e.target.value}))}}),Object(v.jsx)("div",{class:"form-border"}),Object(v.jsx)("div",{id:"submit-btn",onClick:function(){return b.apply(this,arguments)},children:"Submit"}),Object(v.jsx)("p",{id:"signup",onClick:function(){d("/signup")},children:"Don't have account yet?"})]})]})})]})})}n(190),n(285),n(286);var W=function(e){var t=e.shopName,n=e.points;return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"card__title",children:n||0}),Object(v.jsx)("div",{className:"card__subtitle",children:"Reward Points"}),Object(v.jsx)("div",{className:"card__description",children:t})]})};function q(){var e,t=Object(s.useContext)(y),n=null===t||void 0===t||null===(e=t.authState)||void 0===e?void 0:e.id,a=Object(s.useState)([]),c=Object(x.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){fetch("/api/customer_rewards?customer_id=".concat(n),{headers:{"Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[]),Object(v.jsx)(J,{children:Object(v.jsx)("div",{className:"customer-dashboard-parent",children:Object(v.jsx)("div",{className:"customer-parent-children",children:Object(v.jsx)(b.a,{children:null===r||void 0===r?void 0:r.map((function(e){var t=e.current_reward,n=e.shop_name;return Object(v.jsx)(W,{points:t,shopName:n})}))})})})})}var G=n(195),L=n(297),Q=(n(287),n(298)),H=n(300),K=n(131),Y=n(299),z=n(304),P=n(302),D=n(162),_=K.a.Option,$=function(e){var t=e.form,n=e.customersList,a=void 0===n?[]:n,c=Object(s.useState)({}),r=Object(x.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)(0),d=Object(x.a)(l,2),u=d[0],j=d[1],m=Object(s.useState)(null),p=Object(x.a)(m,2),O=p[0],f=p[1],g=Object(s.useState)(!1),y=Object(x.a)(g,2),w=y[0],N=y[1];Object(s.useEffect)((function(){t.setFieldsValue(Object(C.a)(Object(C.a)({},i),{},{id:O,redeemAmount:0,redeemPercent:0,transactionAmount:0}))}),[O]);return Object(v.jsxs)(Q.a,{onValuesChange:function(e,t){if(console.log(e),e.customerId){var n=null===a||void 0===a?void 0:a.find((function(t){return t.phone===e.customerId}));j(n.reward||0),f(null===n||void 0===n?void 0:n.id)}void 0!==e.transactionAmount&&N(!1),o(t)},layout:"vertical",form:t,name:"transaction",children:[Object(v.jsx)(Q.a.Item,{name:"customerId",label:"Customer ID",rules:[{required:!0}],children:Object(v.jsx)(K.a,{placeholder:"Select a customer",showSearch:!0,allowClear:!0,style:{width:"300px"},children:a.map((function(e){return Object(v.jsx)(_,{value:e.phone,children:e.phone})}))})}),Object(v.jsx)(Q.a.Item,{label:"Transaction Amount",name:"transactionAmount",rules:[{required:!0}],children:Object(v.jsx)(Y.a,{style:{width:"300px"}})}),i.customerId&&Object(v.jsx)(z.a,{style:{width:"300px",marginBottom:"20px"},message:Object(v.jsxs)("div",{children:["Current reward balance","",Object(v.jsx)(P.a,{count:u,overflowCount:99999,showZero:!0,style:{backgroundColor:"#e9ad03",marginLeft:"5px"}})]}),type:"info"}),Object(v.jsxs)(b.a,{align:"middle",children:[Object(v.jsx)(Q.a.Item,{label:"Select % of reward points to redeem",name:"redeemPercent",children:Object(v.jsxs)(D.a.Group,{disabled:w,children:[Object(v.jsx)(D.a,{value:"0",children:"0%"}),Object(v.jsx)(D.a,{value:"25",children:"25%"}),Object(v.jsx)(D.a,{value:"50",children:"50%"}),Object(v.jsx)(D.a,{value:"75",children:"75%"}),Object(v.jsx)(D.a,{value:"100",children:"100%"})]})}),Object(v.jsx)(h.a,{type:"link",disabled:!(i.redeemPercent>0)||!i.transactionAmount||w||!u,onClick:function(){var e=i.transactionAmount,n=i.redeemPercent;if(e>1e3&&n&&!w){var s=n/100*u,a=e-s;t.setFieldsValue(Object(C.a)(Object(C.a)({},i),{},{transactionAmount:a,redeemAmount:s,id:O})),N(!0),j(u-s)}},children:"Utilise Rewards"})]}),Object(v.jsx)(Q.a.Item,{label:"Amount redeemed",name:"redeemAmount",hidden:!0,children:Object(v.jsx)(Y.a,{style:{width:"300px"}})}),Object(v.jsx)(Q.a.Item,{label:"id",name:"id",hidden:!0,children:Object(v.jsx)(Y.a,{style:{width:"300px"}})})]})},ee=function(e){var t=e.isModalVisible,n=e.onAddTransaction,s=e.setIsModalVisible,a=e.customersList,c=Q.a.useForm(),r=Object(x.a)(c,1)[0];return Object(v.jsx)(H.a,{title:"Add New Transaction",visible:t,onOk:function(){r.validateFields().then((function(e){console.log(e),n(e),r.resetFields(),s(!1)}))},okText:"Add",onCancel:function(){r.resetFields(),s(!1)},children:Object(v.jsx)($,{form:r,customersList:a})})};function te(){var e,t=Object(s.useState)(""),n=Object(x.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),i=Object(x.a)(r,2),o=i[0],l=i[1],d=Object(s.useState)([]),u=Object(x.a)(d,2),j=u[0],b=u[1],h=Object(s.useState)([]),m=Object(x.a)(h,2),p=m[0],O=m[1],f=Object(s.useState)({}),g=Object(x.a)(f,2),w=g[0],N=g[1],S=Object(s.useContext)(y),A=null===S||void 0===S||null===(e=S.authState)||void 0===e?void 0:e.id,I=[{title:"Customer ID",dataIndex:"customerId",key:"customerId",render:function(e){var t;return null===(t=w[e])||void 0===t?void 0:t.phone}},{title:"Current Reward Points",dataIndex:"current_reward",key:"current_reward",defaultSortOrder:"descend",sorter:function(e,t){return e.current_reward-t.current_reward}},{title:"Total Reward Earned(till date)",key:"total_reward_earned",dataIndex:"total_reward_earned",sorter:function(e,t){return e.total_reward_earned-t.total_reward_earned}},{title:"Last Purchased Date",key:"last_purchased_date",dataIndex:"last_purchased_date",render:function(e){return new Date(e).toLocaleDateString()},sorter:function(e,t){return new Date(e.last_purchased_date).valueOf()-new Date(t.last_purchased_date).valueOf()}}];function M(){fetch("/api/customers?business_id=".concat(A),{headers:{"Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){b(e)})).catch((function(e){console.log(e)}))}function B(){fetch("/api/global_customers?business_id=".concat(A),{headers:{"Content-Type":"application/json"},method:"GET"}).then((function(e){return e.json()})).then((function(e){N(e.reduce((function(e,t){return e[t.id]=t,e}),{})),O(e)})).catch((function(e){console.log(e)}))}Object(s.useEffect)((function(){M(),B()}),[]);var T=function(e){console.log(e),c(e)},F=j.filter((function(e){var t;return!a||!a.trim()||(null===(t=w[e.customerId])||void 0===t?void 0:t.phone.toLowerCase().includes(a.trim().toLowerCase()))}));return Object(v.jsxs)(v.Fragment,{children:[o&&Object(v.jsx)(ee,{isModalVisible:o,setIsModalVisible:l,onAddTransaction:function(e){var t={business_id:A,customer_id:e.id,redeem_amount:e.redeemAmount,transaction_amount:e.transactionAmount};fetch("/api/add_transaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){M(),B(),l(!1)})).catch((function(e){console.log(e)}))},customersList:p}),Object(v.jsx)(J,{setIsTxnModalVisible:l,children:Object(v.jsx)("div",{className:"customer-dashboard-parent",children:Object(v.jsxs)("div",{className:"customer-parent-children",children:[Object(v.jsx)(G.a.Search,{placeholder:"Search customers",allowClear:!0,onChange:function(e){return T(e.target.value)},onSearch:T,style:{width:185}}),Object(v.jsx)(L.a,{columns:I,dataSource:F})]})})})]})}var ne=function(e){var t=e.children;return Object(s.useContext)(y).isAuthenticated()?t:Object(v.jsx)(i.a,{to:"/"})};var se=function(){return Object(v.jsx)(o.a,{children:Object(v.jsx)(N,{children:Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{exact:!0,path:"/",element:Object(v.jsx)(T,{})}),Object(v.jsx)(i.b,{path:"/signup",element:Object(v.jsx)(k,{})}),Object(v.jsx)(i.b,{path:"/customer/login",element:Object(v.jsx)(R,{})}),Object(v.jsx)(i.b,{path:"/business/login",element:Object(v.jsx)(R,{})}),Object(v.jsx)(i.b,{path:"/customer/dashboard",element:Object(v.jsx)(ne,{children:Object(v.jsx)(q,{})})}),Object(v.jsx)(i.b,{path:"/business/dashboard",element:Object(v.jsx)(ne,{children:Object(v.jsx)(te,{})})}),Object(v.jsx)(i.b,{path:"*",element:Object(v.jsx)(l.a,{style:{padding:"200px"},description:"Page Not Found"})})]})})})},ae=n(176);ae.a.initializeApp({apiKey:"AIzaSyC4gACJVYwpAqH_nOHcuuV3xj2mwiTBaBY",authDomain:"ftx-shopreward.firebaseapp.com",projectId:"ftx-shopreward",storageBucket:"ftx-shopreward.appspot.com",messagingSenderId:"545723185592",appId:"1:545723185592:web:f924fd145270bb595ab74d",measurementId:"G-1W8XLYEFW3"}),console.log(ae.a.app().options),r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(se,{})}),document.getElementById("root"))}},[[293,1,2]]]);
//# sourceMappingURL=main.0765ed6d.chunk.js.map