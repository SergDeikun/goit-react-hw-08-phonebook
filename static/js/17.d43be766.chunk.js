"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[17],{8017:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r,a,o,s,c,i=t(5861),l=t(885),d=t(4687),u=t.n(d),p=t(2791),h=t(5048),m=t(6871),b=t(5264),f=t(4554),x=t(1134),g=t(4373),Z=t(6856),j=t(6355),k=t(6881),y=t(168),F=t(7691),v=F.ZP.form(r||(r=(0,y.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),w=F.ZP.button(a||(a=(0,y.Z)(["\n  background-color: #f5f5f5;\n  border: none;\n"]))),C=F.ZP.input(o||(o=(0,y.Z)(["\n  width: 334px;\n  height: 24px;\n  display: block;\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.2px;\n  outline: none;\n\n  border-left-style: none;\n  border-top-style: none;\n  border-right-style: none;\n  border-bottom-color: #202124;\n\n  &:focus {\n    border-bottom-color: #0088cc;\n  }\n"]))),z=F.ZP.div(s||(s=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n"]))),P=F.ZP.button(c||(c=(0,y.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: #0088cc;\n  background-color: #ffffff;\n\n  border: none;\n"]))),A=t(4509),S=t(184),_={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,height:400,bgcolor:"#FFFFFF",boxShadow:24,p:4},N={fill:"#8C8C8C",display:"block",marginLeft:"auto",marginRight:"auto"},q={bgcolor:"#FFFFFF"},B=function(e){var n=e.contactId,t=(0,h.v9)((function(e){return e.contacts.items})),r=t?t.find((function(e){return e.id===n})):{},a=(0,m.s0)(),o=(0,p.useState)(r.name),s=(0,l.Z)(o,2),c=s[0],d=s[1],y=(0,p.useState)(r.number),F=(0,l.Z)(y,2),B=F[0],I=F[1],K=(0,p.useState)(!1),L=(0,l.Z)(K,2),M=L[0],$=L[1],D=(0,A.s$)(),H=(0,l.Z)(D,1)[0],J=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":d(r.toLowerCase());break;case"number":I(r);break;default:return}},Q=function(){$(!1),a("/contacts")},R=function(){var e=(0,i.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H({contactId:n,name:c,number:B});case 4:$(!1),a("/contacts"),b.Notify.success("\u0421ontact update"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,S.jsx)(S.Fragment,{children:t&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(w,{onClick:function(){$(!0),a("/contacts/".concat(n))},sx:q,children:(0,S.jsx)(Z.mM_,{size:25})}),(0,S.jsx)(x.Z,{open:M,onClose:Q,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,S.jsxs)(f.Z,{sx:_,children:[(0,S.jsx)(P,{onClick:Q,children:(0,S.jsx)(g.j7p,{size:"26"})}),(0,S.jsxs)(v,{onSubmit:R,children:[(0,S.jsx)(g.KQH,{size:"200",style:N}),(0,S.jsxs)(z,{children:[(0,S.jsx)(j.BKo,{size:"20"}),(0,S.jsx)("label",{children:(0,S.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:J,placeholder:"Name"})})]}),(0,S.jsxs)(z,{children:[(0,S.jsx)(Z.PnA,{size:"20"}),(0,S.jsx)("label",{children:(0,S.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:B,onChange:J,placeholder:"Number"})})]}),(0,S.jsx)(k.Z,{title:"Save"})]})]})})]})})}}}]);
//# sourceMappingURL=17.d43be766.chunk.js.map