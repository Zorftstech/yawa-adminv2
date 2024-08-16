import{a as O,g as _,s as $,H as K,_ as a,r as I,b as E,z as Q,a5 as X,j as i,c as H,l as v,d as U,F as R,a7 as Y,o as Z,u as ee}from"./index-4e38e7f6.js";function oe(e){return O("PrivateSwitchBase",e)}_("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ne=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,c={root:["root",t&&"checked",r&&"disabled",n&&`edge${v(n)}`],input:["input"]};return U(c,oe,o)},ce=$(K)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=$("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=I.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:c,className:u,defaultChecked:x,disabled:B,disableFocusRipple:d=!1,edge:C=!1,icon:y,id:p,inputProps:z,inputRef:S,name:b,onBlur:h,onChange:f,onFocus:m,readOnly:L,required:V=!1,tabIndex:q,type:g,value:w}=o,T=E(o,te),[j,W]=Q({controlled:n,default:!!x,name:"SwitchBase",state:"checked"}),l=X(),A=s=>{m&&m(s),l&&l.onFocus&&l.onFocus(s)},D=s=>{h&&h(s),l&&l.onBlur&&l.onBlur(s)},G=s=>{if(s.nativeEvent.defaultPrevented)return;const N=s.target.checked;W(N),f&&f(s,N)};let k=B;l&&typeof k>"u"&&(k=l.disabled);const J=g==="checkbox"||g==="radio",F=a({},o,{checked:j,disabled:k,disableFocusRipple:d,edge:C}),M=ne(F);return i.jsxs(ce,a({component:"span",className:H(M.root,u),centerRipple:!0,focusRipple:!d,disabled:k,tabIndex:null,role:void 0,onFocus:A,onBlur:D,ownerState:F,ref:t},T,{children:[i.jsx(se,a({autoFocus:r,checked:n,defaultChecked:x,className:M.input,disabled:k,id:J?p:void 0,name:b,onChange:G,readOnly:L,ref:S,required:V,ownerState:F,tabIndex:q,type:g},g==="checkbox"&&w===void 0?{}:{value:w},z)),j?c:y]}))}),ie=ae,re=R(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),le=R(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),de=R(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ue(e){return O("MuiCheckbox",e)}const pe=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),P=pe,he=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fe=e=>{const{classes:o,indeterminate:t,color:r,size:n}=e,c={root:["root",t&&"indeterminate",`color${v(r)}`,`size${v(n)}`]},u=U(c,ue,o);return a({},o,u)},me=$(ie,{shouldForwardProp:e=>Y(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${v(t.color)}`]]}})(({theme:e,ownerState:o})=>a({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Z(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${P.checked}, &.${P.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${P.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=i.jsx(le,{}),xe=i.jsx(re,{}),Ce=i.jsx(de,{}),be=I.forwardRef(function(o,t){var r,n;const c=ee({props:o,name:"MuiCheckbox"}),{checkedIcon:u=ke,color:x="primary",icon:B=xe,indeterminate:d=!1,indeterminateIcon:C=Ce,inputProps:y,size:p="medium",className:z}=c,S=E(c,he),b=d?C:B,h=d?C:u,f=a({},c,{color:x,indeterminate:d,size:p}),m=fe(f);return i.jsx(me,a({type:"checkbox",inputProps:a({"data-indeterminate":d},y),icon:I.cloneElement(b,{fontSize:(r=b.props.fontSize)!=null?r:p}),checkedIcon:I.cloneElement(h,{fontSize:(n=h.props.fontSize)!=null?n:p}),ownerState:f,ref:t,className:H(m.root,z)},S,{classes:m}))}),Ie=be;export{Ie as C,ie as S};
