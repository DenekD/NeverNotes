(this["webpackJsonpmui-notes"]=this["webpackJsonpmui-notes"]||[]).push([[0],{350:function(e,t,n){},544:function(e,t,n){"use strict";n.r(t);var r=n(26),a=n(1),c=n.n(a),i=n(67),o=n.n(i),s=(n(350),n(18)),l=n(613),j=n(639),u=n(642),b=n(614),O=n(640),d=n(641),h=n(638),f=n(319),p=n.n(f),x=n(320),g=n.n(x),m=n(644),v=n(645),y=n(172),C=n.n(y),w=n(317),S=n.n(w),E=n(316),N=n.n(E),I=n(4),R=n(11),k=n(636),F=n(631),T=240,_=function(e){return{width:T,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},D=function(e){return Object(I.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},L=Object(R.a)("div")((function(e){var t=e.theme;return Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),P=Object(R.a)(k.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(r.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:T,width:"calc(100% - ".concat(T,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),U=Object(R.a)(F.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(r.a)(Object(r.a)({width:T,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},n&&Object(r.a)(Object(r.a)({},_(t)),{},{"& .MuiDrawer-paper":_(t)})),!n&&Object(r.a)(Object(r.a)({},D(t)),{},{"& .MuiDrawer-paper":D(t)}))})),A=n(611),G=n(612),z=n(633),B=n(643),W=n(29),q=n(28),J=n(0),M=n.n(J),V=n(5),H=n(96),K=n(14),X=n(630),Z=n(627),Y=n(3),Q=function(){var e=Object(q.c)((function(e){return e.ui})),t=e.isNotificationOpen,n=e.notificationMessage,r=e.severity,a=Object(q.b)(),c=function(e,t){a({type:"CLOSE_NOTIFICATION",reason:t})};return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(X.a,{open:t,autoHideDuration:4e3,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(Y.jsx)(Z.a,{onClose:c,severity:r,sx:{width:"100%"},children:n})})})},$=[{text:"My Notes",icon:Object(Y.jsx)(A.a,{color:"primary"}),path:"/"},{text:"Create Note",icon:Object(Y.jsx)(G.a,{color:"primary"}),path:"/create"},{text:"Logout",icon:Object(Y.jsx)(N.a,{color:"primary"}),path:""}],ee=[{text:"Sign In",icon:Object(Y.jsx)(S.a,{color:"primary"}),path:"/signIn"},{text:"Sign Up",icon:Object(Y.jsx)(C.a,{color:"primary"}),path:"/signUp"}];function te(e){var t=e.children,n=Object(W.h)(),c=Object(W.g)(),i=Object(q.b)(),o=Object(q.c)((function(e){return e.firebase.auth})),f=Object(q.c)((function(e){return e.firebase.profile})),x=a.useState(!0),y=Object(s.a)(x,2),C=y[0],w=y[1],S=o.uid?$:ee;return Object(Y.jsxs)(l.a,{sx:{display:"flex"},children:[Object(Y.jsx)(b.a,{}),Object(Y.jsx)(P,{position:"fixed",open:C,color:"primary",children:Object(Y.jsxs)(j.a,{children:[Object(Y.jsx)(h.a,{color:"inherit","aria-label":"open drawer",onClick:function(){w(!0)},edge:"start",sx:Object(r.a)({marginRight:"36px"},C&&{display:"none"}),children:Object(Y.jsx)(p.a,{})}),Object(Y.jsx)(z.a,{sx:{mx:1},src:"/hippo-av.png"}),Object(Y.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NeverNote"}),Object(Y.jsx)(O.a,{variant:"h6",component:"div",children:(new Date).toDateString()}),Object(Y.jsx)(z.a,{sx:{ml:1},children:f.initials})]})}),Object(Y.jsxs)(U,{variant:"permanent",open:C,children:[Object(Y.jsx)(L,{children:Object(Y.jsx)(h.a,{onClick:function(){w(!1)},children:Object(Y.jsx)(g.a,{})})}),Object(Y.jsx)(d.a,{}),Object(Y.jsx)(u.a,{children:S.map((function(e){return Object(Y.jsxs)(B.a,{sx:n.pathname===e.path?{backgroundColor:"#f4f4f4"}:null,onClick:"Logout"===e.text?function(){return i((function(e,t,n){n.getFirebase;var r=Object(H.b)();Object(H.d)(r).then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(e){}))}))}:function(){return c.push(e.path)},children:[Object(Y.jsx)(m.a,{children:e.icon}),Object(Y.jsx)(v.a,{primary:e.text})]},e.text)}))}),Object(Y.jsx)(d.a,{})]}),Object(Y.jsxs)(l.a,{component:"main",sx:{flexGrow:1,p:3,backgroundColor:"#f9f9f9",minHeight:"100vh"},children:[Object(Y.jsx)(L,{id:"back-to-top-anchor"}),Object(Y.jsx)(Q,{}),t]})]})}var ne=n(229),re=n(646),ae=n(625),ce=n(648),ie=n(112),oe=n.n(ie),se=n(647),le=n(615),je=n(634),ue=n(649),be=n(626),Oe=function(e){return function(){var t=Object(V.a)(M.a.mark((function t(n,r,a){var c,i,o,s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.getFirebase,c=a.getFirestore,i=c(),o=r().firebase.auth.uid,s=function(){var t=Object(V.a)(M.a.mark((function t(){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(K.B)(Object(K.E)(i,"notes/".concat(o,"/notes"),e));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=4,t.next=7,s();case 7:n({type:"DELETE_PROJECT",id:e}),n({type:"OPEN_NOTIFICATION",message:"note was deleted"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),n({type:"DELETE_PROJECT_ERROR",err:t.t0});case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,n,r){return t.apply(this,arguments)}}()};function de(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],j=o[1],u=Object(a.useState)(),b=Object(s.a)(u,2),d=b[0],h=b[1],f=Object(a.useState)(),p=Object(s.a)(f,2),x=p[0],g=p[1],m=Object(a.useState)("female"),v=Object(s.a)(m,2),y=v[0],C=v[1],w=Object(W.g)(),S=Object(q.b)();return Object(Y.jsxs)(re.a,{children:[Object(Y.jsx)(O.a,{variant:"h4",color:"secondary",align:"center",gutterBottom:!0,children:"Create Note"}),Object(Y.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){var t;e.preventDefault(),g(!1),h(!1),""===n&&h(!0),""===l&&g(!0),n&&l&&(S((t={title:n,content:l,category:y},function(){var e=Object(V.a)(M.a.mark((function e(n,a,c){var i,o,s,l,j,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.getFirebase,i=c.getFirestore,o=i(),s=a().firebase.auth.uid,l=a().firebase.profile,j=Object(r.a)(Object(r.a)({},t),{},{authorFirtsName:l.firstName,authorLastName:l.lastName,authorId:s,createdAt:new Date}),u=function(){var e=Object(V.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(K.y)(o,"notes/".concat(s,"/notes")),e.next=3,Object(K.u)(t,j);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=6,e.next=9,u();case 9:n({type:"CREATE_PROJECT",note:t}),n({type:"OPEN_NOTIFICATION",message:"note was created"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),n({type:"CREATE_PROJECT_ERROR",err:e.t0});case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t,n,r){return e.apply(this,arguments)}}())),w.push("/"))},children:[Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,variant:"outlined",label:"Note Tilte",color:"secondary",onChange:function(e){return c(e.target.value)},error:d}),Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,multiline:!0,rows:4,color:"info",variant:"outlined",label:"Note Tilte",onChange:function(e){return j(e.target.value)},error:x}),Object(Y.jsx)(ce.a,{type:"submit",variant:"contained",size:"large",color:"success",endIcon:Object(Y.jsx)(oe.a,{}),children:"Dodaj notatk\u0119"})]}),Object(Y.jsxs)(se.a,{component:"fieldset",sx:{mt:2},children:[Object(Y.jsx)(le.a,{component:"legend",children:"Category"}),Object(Y.jsxs)(je.a,{name:"radio-buttons-group",value:y,onChange:function(e){return C(e.target.value)},children:[Object(Y.jsx)(ue.a,{value:"todos",control:Object(Y.jsx)(be.a,{}),label:"Todos"}),Object(Y.jsx)(ue.a,{value:"work",control:Object(Y.jsx)(be.a,{}),label:"Work"}),Object(Y.jsx)(ue.a,{value:"money",control:Object(Y.jsx)(be.a,{}),label:"Money"})]})]})]})}var he=n(37),fe=n(658),pe=n(321),xe=n(323),ge=n.n(xe),me=n(178),ve=n(620),ye=n(623),Ce=n(72),we=n(650),Se=n(651),Ee=n(652),Ne=n(653),Ie=n(635),Re=n(616),ke=n(95),Fe=n(617),Te=n(94),_e=n(624),De=n(618),Le=n(619),Pe=Object(_e.a)({avatar:{color:function(e){return"work"===e.category?Re.a[700]:"money"===e.category?ke.a[500]:"todos"===e.category?Fe.a[500]:Te.a[500]}}}),Ue=Object(De.a)((function(e){var t=e.className,n=Object(me.a)(e,["className"]);return Object(Y.jsx)(ye.a,Object(r.a)(Object(r.a)({},n),{},{classes:{popper:t}}))}))(Object(I.a)({},"& .".concat(Ce.a.tooltip),{}));function Ae(e){var t=e.note,n=e.onDelete,r=e.handleClickOpen,a=Pe(t);return Object(Y.jsxs)(we.a,{elevation:2,children:[Object(Y.jsxs)(Le.a,{onClick:function(){return r({title:t.title,content:t.content})},sx:{cursor:"pointer"},children:[Object(Y.jsx)(Se.a,{title:t.title}),Object(Y.jsx)(Ee.a,{children:Object(Y.jsx)(O.a,{variant:"body2",color:"text.secondary",children:t.content})})]}),Object(Y.jsxs)(Ne.a,{children:[Object(Y.jsx)(Ie.a,{label:t.category,variant:"outlined",className:a.avatar,sx:{mr:"auto"}}),Object(Y.jsx)(Ue,{title:"dodaj wsp\xf3\u0142pracownika",children:Object(Y.jsx)(h.a,{children:Object(Y.jsx)(C.a,{})})}),Object(Y.jsx)(ye.a,{title:"usu\u0144",children:Object(Y.jsx)(h.a,{onClick:function(){return n(t.id)},children:Object(Y.jsx)(ve.a,{})})})]})]})}var Ge=n(622),ze=n(621);var Be=function(e){var t=e.children,n=Object(ze.a)({disableHysteresis:!0,threshold:100});return Object(Y.jsx)(Ge.a,{in:n,children:Object(Y.jsx)(Le.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})},We=n(654),qe=n(656),Je=n(657),Me=n(655),Ve=n(322),He=n.n(Ve);function Ke(e){var t=e.open,n=e.handleClose,r=e.details;return Object(Y.jsx)("div",{children:Object(Y.jsxs)(We.a,{open:t,fullWidth:!0,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(Y.jsxs)(Me.a,{id:"alert-dialog-title",sx:{display:"flex"},children:[Object(Y.jsx)(O.a,{variant:"h5",sx:{flexGrow:1},children:r.title}),Object(Y.jsx)(h.a,{onClick:n,children:Object(Y.jsx)(He.a,{})})]}),Object(Y.jsx)(qe.a,{dividers:!0,children:Object(Y.jsx)(Je.a,{id:"alert-dialog-description",children:r.content})})]})})}function Xe(e){var t=e.notes,n=Object(q.b)(),r=c.a.useState(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],j=c.a.useState({}),u=Object(s.a)(j,2),b=u[0],O=u[1],d=function(e){l(!0),O(e)},h=function(){var e=Object(V.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Oe(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsxs)(a.Fragment,{children:[Object(Y.jsxs)(re.a,{children:[Object(Y.jsx)(pe.a,{breakpointCols:{default:3,1100:2,700:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t&&t.map((function(e){return Object(Y.jsx)("div",{children:Object(Y.jsx)(Ae,{note:e,onDelete:h,handleClickOpen:d})},e.id)}))}),Object(Y.jsx)(Ke,{handleClose:function(){l(!1),O({})},open:o,details:b})]}),Object(Y.jsx)(Be,{children:Object(Y.jsx)(fe.a,{color:"secondary",size:"small",children:Object(Y.jsx)(ge.a,{})})})]})}var Ze=function(){var e=Object(q.c)((function(e){return e.firebase.auth.uid}));Object(he.useFirestoreConnect)([{collection:"notes",doc:e,subcollections:[{collection:"notes"}],storeAs:"UserNotes",orderBy:["createdAt","desc"]}]),Object(he.useFirestoreConnect)([{collection:"notes",doc:e,subcollections:[{collection:"sharedNotes"}],storeAs:"sharedNotesFromOtherUser",orderBy:["createdAt","desc"]}]);var t=Object(q.c)((function(e){return e.firestore.ordered.UserNotes})),n=Object(q.c)((function(e){return e.firestore.ordered.sharedNotesFromOtherUser}));return n&&console.log(n),Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(Xe,{notes:t})})},Ye=function(){return Object(Y.jsx)("div",{})},Qe=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(),u=Object(s.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)(),f=Object(s.a)(h,2),p=f[0],x=f[1],g=Object(q.b)(),m=Object(q.c)((function(e){return e.auth.authError})),v=Object(q.c)((function(e){return e.firebase.auth}));if(Object(he.isLoaded)(v)&&!Object(he.isEmpty)(v))return Object(Y.jsx)(W.a,{to:"/"});return Object(Y.jsxs)(re.a,{children:[Object(Y.jsx)(O.a,{variant:"h4",color:"secondary",align:"center",gutterBottom:!0,children:"Zaloguj sie"}),Object(Y.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){var t;(e.preventDefault(),x(!1),d(!1),""!==n)?""!==o?g((t={email:n,password:o},function(e,n,r){r.getFirebase;var a=Object(H.b)();Object(H.c)(a,t.email,t.password).then((function(t){e({type:"LOGIN_SUCCESS",auth:a})})).catch((function(t){e({type:"LOGIN_ERROR",error:t})}))})):x(!0):d(!0)},children:[Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,variant:"outlined",label:"email",color:"secondary",onChange:function(e){return r(e.target.value)},error:b}),Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,color:"info",variant:"outlined",type:"password",label:"password",onChange:function(e){return l(e.target.value)},error:p}),Object(Y.jsx)(ce.a,{type:"submit",variant:"contained",size:"large",color:"success",endIcon:Object(Y.jsx)(oe.a,{}),children:"zaloguj sie"}),Object(Y.jsx)("div",{className:"",children:m?Object(Y.jsx)("p",{children:m}):null})]})]})},$e=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(),u=Object(s.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)(),f=Object(s.a)(h,2),p=f[0],x=f[1],g=Object(a.useState)(),m=Object(s.a)(g,2),v=m[0],y=m[1],C=Object(a.useState)(),w=Object(s.a)(C,2),S=w[0],E=w[1],N=Object(a.useState)(),I=Object(s.a)(N,2),R=I[0],k=I[1],F=Object(a.useState)(),T=Object(s.a)(F,2),_=T[0],D=T[1],L=Object(q.b)(),P=Object(q.c)((function(e){return e.auth.authError})),U=Object(q.c)((function(e){return e.firebase.auth}));if(Object(he.isLoaded)(U)&&!Object(he.isEmpty)(U))return Object(Y.jsx)(W.a,{to:"/"});return Object(Y.jsxs)(re.a,{children:[Object(Y.jsx)(O.a,{variant:"h4",color:"secondary",align:"center",gutterBottom:!0,children:"Zarerejestruj sie"}),Object(Y.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){var t;(e.preventDefault(),E(!1),y(!1),""!==n)?""!==o?""!==b?""!==p?L((t={email:n,password:o,firstName:b,lastName:p},function(){var e=Object(V.a)(M.a.mark((function e(n,r,a){var c,i,o,s,l;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.getFirebase,c=a.getFirestore,i=Object(H.b)(),o=c(),s={firstName:t.firstName,lastName:t.lastName,initials:t.firstName[0]+t.lastName[0]},l=function(){var e=Object(V.a)(M.a.mark((function e(){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)(i,t.email,t.password);case 2:return n=e.sent,e.next=5,Object(K.gb)(Object(K.E)(o,"users",n.user.uid),s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=5,e.next=8,l();case 8:n({type:"SIGNUP_SUCCESS"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0),n({type:"SIGNUP_ERROR",error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,n,r){return e.apply(this,arguments)}}())):D(!0):k(!0):E(!0):y(!0)},children:[Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,variant:"outlined",label:"email",color:"secondary",onChange:function(e){return r(e.target.value)},error:v}),Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,type:"password",color:"info",variant:"outlined",label:"password",onChange:function(e){return l(e.target.value)},error:S}),Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,color:"info",variant:"outlined",label:"first name",onChange:function(e){return d(e.target.value)},error:R}),Object(Y.jsx)(ae.a,{margin:"normal",required:!0,fullWidth:!0,color:"info",variant:"outlined",label:"last name",onChange:function(e){return x(e.target.value)},error:_}),Object(Y.jsx)(ce.a,{type:"submit",variant:"contained",size:"large",color:"success",endIcon:Object(Y.jsx)(oe.a,{}),children:"zarejestruj sie"}),Object(Y.jsx)("div",{className:"",children:P?Object(Y.jsx)("p",{children:P}):null})]})]})};function et(e){var t=e.children,n=Object(me.a)(e,["children"]),a=Object(q.c)((function(e){return e.firebase.auth}));return Object(Y.jsx)(W.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){var n=e.location;return Object(he.isLoaded)(a)&&!Object(he.isEmpty)(a)?t:Object(Y.jsx)(W.a,{to:{pathname:"/signin",state:{from:n}}})}}))}var tt=function(){return Object(q.c)((function(e){return console.log(e)})),Object(Y.jsx)("div",{children:Object(Y.jsx)(ne.a,{children:Object(Y.jsx)(te,{children:Object(Y.jsxs)(W.d,{children:[Object(Y.jsx)(et,{exact:!0,path:"/",children:Object(Y.jsx)(Ze,{})}),Object(Y.jsx)(W.b,{path:"/notes/:id",children:Object(Y.jsx)(Ye,{})}),Object(Y.jsx)(et,{path:"/create",children:Object(Y.jsx)(de,{})}),Object(Y.jsx)(W.b,{path:"/signin",children:Object(Y.jsx)(Qe,{})}),Object(Y.jsx)(W.b,{path:"/signUp",children:Object(Y.jsx)($e,{})})]})})})})},nt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,660)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},rt=n(324),at=n(116),ct=n(175),it=n(138);n(545),n(542);it.a.initializeApp({apiKey:"AIzaSyBtaBbT1xIkal1_wfVxDRDvK7llkXLK1cY",authDomain:"nevernotes-5e85a.firebaseapp.com",projectId:"nevernotes-5e85a",storageBucket:"nevernotes-5e85a.appspot.com",messagingSenderId:"307099732542",appId:"1:307099732542:web:c2e377fb2bb5f64880df6f"}),it.a.firestore();var ot={authError:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(r.a)(Object(r.a)({},e),{},{authError:"login faild"});case"LOGIN_SUCCESS":return console.log("login success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout successful"),{state:e};case"SIGNUP_SUCCESS":return console.log("signup successful"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(r.a)(Object(r.a)({},e),{},{authError:t.error.message});default:return e}},lt={},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTE":return console.log("created note",t.project),e;case"CREATE_NOTE_ERROR":return console.log("b\u0142ad w note action w async operation",t.err),e;case"DELETE_PROJECT":return console.log("note deleted",t.id),e;case"DELETE_PROJECT_ERROR":return console.log("deleting note faild",t.err),e;default:return e}},ut={isNotificationOpen:!1,notificationMessage:"",severity:"success"},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_NOTIFICATION":return Object(r.a)(Object(r.a)({},e),{},{isNotificationOpen:!0,notificationMessage:t.message,severity:t.severity});case"CLOSE_NOTIFICATION":return console.log(t.reason),"clickaway"===t.reason?Object(r.a)(Object(r.a)({},e),{},{isNotificationOpen:!0}):Object(r.a)(Object(r.a)({},e),{},{isNotificationOpen:!1});default:return e}},Ot=Object(at.b)({auth:st,notes:jt,ui:bt,firebase:he.firebaseReducer,firestore:ct.firestoreReducer}),dt=n(659);function ht(e){var t=e.children,n=Object(q.c)((function(e){return e.firebase.auth}));return Object(he.isLoaded)(n)?t:Object(Y.jsx)(Le.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(Y.jsx)(dt.a,{})})}var ft=[rt.a.withExtraArgument({getFirebase:he.getFirebase,getFirestore:K.S})],pt=Object(at.d)(Ot,{},Object(at.c)(at.a.apply(void 0,ft))),xt={firebase:it.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:pt.dispatch,createFirestoreInstance:ct.createFirestoreInstance};o.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(q.a,{store:pt,children:Object(Y.jsx)(he.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},xt),{},{children:Object(Y.jsx)(ht,{children:Object(Y.jsx)(tt,{})})}))})}),document.getElementById("root")),nt()}},[[544,1,2]]]);
//# sourceMappingURL=main.91b96fac.chunk.js.map