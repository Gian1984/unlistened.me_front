import{C as D,P as j}from"./chart.js-BiKUj6LP.js";import{d as O,s as C,h as P,bs as q,r as A,o as K,b as R,e as U,x as h,n as k,at as w}from"./@vue-CHi21i_s.js";const L={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},N={ariaLabel:{type:String},ariaDescribedby:{type:String}},$={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...L,...N},z=q[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function u(t){return w(t)?h(t):t}function B(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return w(e)?new Proxy(t,{}):t}function E(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function S(t,e){t.labels=e}function I(t,e,s){const o=[];t.datasets=e.map(n=>{const a=t.datasets.find(d=>d[s]===n[s]);return!a||!n.data||o.includes(a)?{...n}:(o.push(a),Object.assign(a,n),a)})}function F(t,e){const s={labels:[],datasets:[]};return S(s,t.labels),I(s,t.datasets,e),s}const G=O({props:$,setup(t,e){let{expose:s,slots:o}=e;const n=A(null),a=C(null);s({chart:a});const d=()=>{if(!n.value)return;const{type:r,data:f,options:y,plugins:p,datasetIdKey:v}=t,b=F(f,v),i=B(b,f);a.value=new D(n.value,{type:r,data:i,options:{...y},plugins:p})},c=()=>{const r=h(a.value);r&&(t.destroyDelay>0?setTimeout(()=>{r.destroy(),a.value=null},t.destroyDelay):(r.destroy(),a.value=null))},M=r=>{r.update(t.updateMode)};return K(d),R(c),U([()=>t.options,()=>t.data],(r,f)=>{let[y,p]=r,[v,b]=f;const i=h(a.value);if(!i)return;let g=!1;if(y){const l=u(y),m=u(v);l&&l!==m&&(E(i,l),g=!0)}if(p){const l=u(p.labels),m=u(b.labels),x=u(p.datasets),T=u(b.datasets);l!==m&&(S(i.config.data,l),g=!0),x&&x!==T&&(I(i.config.data,x,t.datasetIdKey),g=!0)}g&&k(()=>{M(i)})},{deep:!0}),()=>P("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:n},[P("p",{},[o.default?o.default():""])])}});function H(t,e){return D.register(e),O({props:L,setup(s,o){let{expose:n}=o;const a=C(null),d=c=>{a.value=c==null?void 0:c.chart};return n({chart:a}),()=>P(G,z({ref:d},{type:t,...s}))}})}const V=H("pie",j);export{V as P};