(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(l){if(l.ep)return;l.ep=!0;const u=e(l);fetch(l.href,u)}})();const Ar=!1;var Lr=Array.isArray,qr=Array.from,Pr=Object.defineProperty,tr=Object.getOwnPropertyDescriptor;const S=2,_r=4,Y=8,Q=16,C=32,$=64,P=128,H=256,w=512,k=1024,R=2048,cr=4096,I=8192,Rr=16384,Ir=1<<18,Mr=1<<19;function Vr(r){return r===this.v}function Br(r,t){return r!=r?t==t:r!==t||r!==null&&typeof r=="object"||typeof r=="function"}function jr(r){return!Br(r,this.v)}function Hr(){throw new Error("effect_update_depth_exceeded")}function Ur(){throw new Error("state_unsafe_local_read")}function Yr(){throw new Error("state_unsafe_mutation")}let K=!1;function $r(){K=!0}function vr(r){return{f:0,v:r,reactions:null,equals:Vr,version:0}}function Kr(r,t=!1){var n;const e=vr(r);return t||(e.equals=jr),K&&h!==null&&h.l!==null&&((n=h.l).s??(n.s=[])).push(e),e}function Wr(r,t=!1){return zr(Kr(r,t))}function zr(r){return v!==null&&v.f&S&&(y===null?st([r]):y.push(r)),r}function Gr(r,t){return v!==null&&W()&&v.f&(S|Q)&&(y===null||!y.includes(r))&&Yr(),Jr(r,t)}function Jr(r,t){return r.equals(t)||(r.v=t,r.version=kr(),dr(r,k),W()&&s!==null&&s.f&w&&!(s.f&C)&&(p!==null&&p.includes(r)?(x(s,k),G(s)):b===null?at([r]):b.push(r))),t}function dr(r,t){var e=r.reactions;if(e!==null)for(var n=W(),l=e.length,u=0;u<l;u++){var o=e[u],i=o.f;i&k||!n&&o===s||(x(o,t),i&(w|P)&&(i&S?dr(o,R):G(o)))}}const Qr=2;var er,pr,hr;function Xr(){if(er===void 0){er=window;var r=Element.prototype,t=Node.prototype;pr=tr(t,"firstChild").get,hr=tr(t,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function Zr(r=""){return document.createTextNode(r)}function mr(r){return pr.call(r)}function Er(r){return hr.call(r)}function rt(r,t){return mr(r)}function nr(r,t=1,e=!1){let n=r;for(;t--;)n=Er(n);return n}function wr(r){var t=r.children;if(t!==null){r.children=null;for(var e=0;e<t.length;e+=1){var n=t[e];n.f&S?X(n):V(n)}}}function yr(r){var t,e=s;N(r.parent);try{wr(r),t=Sr(r)}finally{N(e)}return t}function gr(r){var t=yr(r),e=(F||r.f&P)&&r.deps!==null?R:w;x(r,e),r.equals(t)||(r.v=t,r.version=kr())}function X(r){wr(r),q(r,0),x(r,I),r.v=r.children=r.deps=r.ctx=r.reactions=null}function tt(r,t){var e=t.last;e===null?t.last=t.first=r:(e.next=r,r.prev=e,t.last=r)}function M(r,t,e,n=!0){var l=(r&$)!==0,u=s,o={ctx:h,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|k,first:null,fn:t,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(e){var i=A;try{lr(!0),Z(o),o.f|=Rr}catch(a){throw V(o),a}finally{lr(i)}}else t!==null&&G(o);var c=e&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Mr)===0;if(!c&&!l&&n&&(u!==null&&tt(o,u),v!==null&&v.f&S)){var d=v;(d.children??(d.children=[])).push(o)}return o}function et(r){const t=M($,r,!0);return()=>{V(t)}}function nt(r){return M(_r,r,!1)}function lt(r){return M(Y,r,!0)}function ut(r){return ot(r)}function ot(r,t=0){return M(Y|Q|t,r,!0)}function it(r,t=!0){return M(Y|C,r,!0,t)}function xr(r){var t=r.teardown;if(t!==null){const e=v;T(null);try{t.call(null)}finally{T(e)}}}function br(r){var t=r.deriveds;if(t!==null){r.deriveds=null;for(var e=0;e<t.length;e+=1)X(t[e])}}function Tr(r,t=!1){var e=r.first;for(r.first=r.last=null;e!==null;){var n=e.next;V(e,t),e=n}}function ft(r){for(var t=r.first;t!==null;){var e=t.next;t.f&C||V(t),t=e}}function V(r,t=!0){var e=!1;if((t||r.f&Ir)&&r.nodes_start!==null){for(var n=r.nodes_start,l=r.nodes_end;n!==null;){var u=n===l?null:Er(n);n.remove(),n=u}e=!0}Tr(r,t&&!e),br(r),q(r,0),x(r,I);var o=r.transitions;if(o!==null)for(const c of o)c.stop();xr(r);var i=r.parent;i!==null&&i.first!==null&&Nr(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.parent=r.fn=r.nodes_start=r.nodes_end=null}function Nr(r){var t=r.parent,e=r.prev,n=r.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===r&&(t.first=n),t.last===r&&(t.last=e))}let U=!1,A=!1;function lr(r){A=r}let J=[],L=0;let v=null;function T(r){v=r}let s=null;function N(r){s=r}let y=null;function st(r){y=r}let p=null,E=0,b=null;function at(r){b=r}let Or=0,F=!1,h=null;function kr(){return++Or}function W(){return!K||h!==null&&h.l===null}function z(r){var o,i;var t=r.f;if(t&k)return!0;if(t&R){var e=r.deps,n=(t&P)!==0;if(e!==null){var l;if(t&H){for(l=0;l<e.length;l++)((o=e[l]).reactions??(o.reactions=[])).push(r);r.f^=H}for(l=0;l<e.length;l++){var u=e[l];if(z(u)&&gr(u),n&&s!==null&&!F&&!((i=u==null?void 0:u.reactions)!=null&&i.includes(r))&&(u.reactions??(u.reactions=[])).push(r),u.version>r.version)return!0}}n||x(r,w)}return!1}function _t(r,t,e){throw r}function Sr(r){var _;var t=p,e=E,n=b,l=v,u=F,o=y,i=h,c=r.f;p=null,E=0,b=null,v=c&(C|$)?null:r,F=!A&&(c&P)!==0,y=null,h=r.ctx;try{var d=(0,r.fn)(),a=r.deps;if(p!==null){var f;if(q(r,E),a!==null&&E>0)for(a.length=E+p.length,f=0;f<p.length;f++)a[E+f]=p[f];else r.deps=a=p;if(!F)for(f=E;f<a.length;f++)((_=a[f]).reactions??(_.reactions=[])).push(r)}else a!==null&&E<a.length&&(q(r,E),a.length=E);return d}finally{p=t,E=e,b=n,v=l,F=u,y=o,h=i}}function ct(r,t){let e=t.reactions;if(e!==null){var n=e.indexOf(r);if(n!==-1){var l=e.length-1;l===0?e=t.reactions=null:(e[n]=e[l],e.pop())}}e===null&&t.f&S&&(p===null||!p.includes(t))&&(x(t,R),t.f&(P|H)||(t.f^=H),q(t,0))}function q(r,t){var e=r.deps;if(e!==null)for(var n=t;n<e.length;n++)ct(r,e[n])}function Z(r){var t=r.f;if(!(t&I)){x(r,w);var e=s;s=r;try{t&Q?ft(r):Tr(r),br(r),xr(r);var n=Sr(r);r.teardown=typeof n=="function"?n:null,r.version=Or}catch(l){_t(l)}finally{s=e}}}function vt(){L>1e3&&(L=0,Hr()),L++}function dt(r){var t=r.length;if(t!==0){vt();var e=A;A=!0;try{for(var n=0;n<t;n++){var l=r[n];l.f&w||(l.f^=w);var u=[];Cr(l,u),pt(u)}}finally{A=e}}}function pt(r){var t=r.length;if(t!==0)for(var e=0;e<t;e++){var n=r[e];!(n.f&(I|cr))&&z(n)&&(Z(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Nr(n):n.fn=null))}}function ht(){if(U=!1,L>1001)return;const r=J;J=[],dt(r),U||(L=0)}function G(r){U||(U=!0,queueMicrotask(ht));for(var t=r;t.parent!==null;){t=t.parent;var e=t.f;if(e&($|C)){if(!(e&w))return;t.f^=w}}J.push(t)}function Cr(r,t){var e=r.first,n=[];r:for(;e!==null;){var l=e.f,u=(l&C)!==0,o=u&&(l&w)!==0;if(!o&&!(l&cr))if(l&Y){u?e.f^=w:z(e)&&Z(e);var i=e.first;if(i!==null){e=i;continue}}else l&_r&&n.push(e);var c=e.next;if(c===null){let f=e.parent;for(;f!==null;){if(r===f)break r;var d=f.next;if(d!==null){e=d;continue r}f=f.parent}}e=c}for(var a=0;a<n.length;a++)i=n[a],t.push(i),Cr(i,t)}function mt(r){var i;var t=r.f,e=(t&S)!==0;if(e&&t&I){var n=yr(r);return X(r),n}if(v!==null){y!==null&&y.includes(r)&&Ur();var l=v.deps;p===null&&l!==null&&l[E]===r?E++:p===null?p=[r]:p.push(r),b!==null&&s!==null&&s.f&w&&!(s.f&C)&&b.includes(r)&&(x(s,k),G(s))}else if(e&&r.deps===null){var u=r,o=u.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(u))&&(o.deriveds??(o.deriveds=[])).push(u)}return e&&(u=r,z(u)&&gr(u)),r.v}function ur(r){return r&&mt(r)}const Et=~(k|R|w);function x(r,t){r.f=r.f&Et|t}function wt(r,t=!1,e){h={p:h,c:null,e:null,m:!1,s:r,x:null,l:null},K&&!t&&(h.l={s:null,u:null,r1:[],r2:vr(!1)})}function yt(r){const t=h;if(t!==null){const o=t.e;if(o!==null){var e=s,n=v;t.e=null;try{for(var l=0;l<o.length;l++){var u=o[l];N(u.effect),T(u.reaction),nt(u.fn)}}finally{N(e),T(n)}}h=t.p,t.m=!0}return{}}let or=!1;function gt(){or||(or=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var t;if(!r.defaultPrevented)for(const e of r.target.elements)(t=e.__on_r)==null||t.call(e)})},{capture:!0}))}function xt(r){var t=v,e=s;T(null),N(null);try{return r()}finally{T(t),N(e)}}function bt(r,t,e,n=e){r.addEventListener(t,()=>xt(e));const l=r.__on_r;l?r.__on_r=()=>{l(),n()}:r.__on_r=n,gt()}const Tt=new Set,ir=new Set;function j(r){var rr;var t=this,e=t.ownerDocument,n=r.type,l=((rr=r.composedPath)==null?void 0:rr.call(r))||[],u=l[0]||r.target,o=0,i=r.__root;if(i){var c=l.indexOf(i);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var d=l.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(u=l[o]||r.target,u!==t){Pr(r,"currentTarget",{configurable:!0,get(){return u||e}});var a=v,f=s;T(null),N(null);try{for(var _,m=[];u!==null;){var g=u.assignedSlot||u.parentNode||u.host||null;try{var O=u["__"+n];if(O!==void 0&&!u.disabled)if(Lr(O)){var[Dr,...Fr]=O;Dr.apply(u,[r,...Fr])}else O.call(u,r)}catch(B){_?m.push(B):_=B}if(r.cancelBubble||g===t||g===null)break;u=g}if(_){for(let B of m)queueMicrotask(()=>{throw B});throw _}}finally{r.__root=t,delete r.currentTarget,T(a),N(f)}}}function Nt(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function Ot(r,t){var e=s;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function kt(r,t){var e=(t&Qr)!==0,n,l=!r.startsWith("<!>");return()=>{n===void 0&&(n=Nt(l?r:"<!>"+r),n=mr(n));var u=e?document.importNode(n,!0):n.cloneNode(!0);return Ot(u,u),u}}function St(r,t){r!==null&&r.before(t)}const Ct=["touchstart","touchmove"];function Dt(r){return Ct.includes(r)}function Ft(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function At(r,t){return Lt(r,t)}const D=new Map;function Lt(r,{target:t,anchor:e,props:n={},events:l,context:u,intro:o=!0}){Xr();var i=new Set,c=f=>{for(var _=0;_<f.length;_++){var m=f[_];if(!i.has(m)){i.add(m);var g=Dt(m);t.addEventListener(m,j,{passive:g});var O=D.get(m);O===void 0?(document.addEventListener(m,j,{passive:g}),D.set(m,1)):D.set(m,O+1)}}};c(qr(Tt)),ir.add(c);var d=void 0,a=et(()=>{var f=e??t.appendChild(Zr());return it(()=>{if(u){wt({});var _=h;_.c=u}l&&(n.$$events=l),d=r(f,n)||{},u&&yt()}),()=>{var g;for(var _ of i){t.removeEventListener(_,j);var m=D.get(_);--m===0?(document.removeEventListener(_,j),D.delete(_)):D.set(_,m)}ir.delete(c),fr.delete(d),f!==e&&((g=f.parentNode)==null||g.removeChild(f))}});return fr.set(d,a),d}let fr=new WeakMap;function qt(r,t,e=t){var n=W();bt(r,"input",()=>{var l=sr(r)?ar(r.value):r.value;e(l),n&&l!==(l=t())&&(r.value=l??"")}),lt(()=>{var l=t();sr(r)&&l===ar(r.value)||r.type==="date"&&!l&&!r.value||l!==r.value&&(r.value=l??"")})}function sr(r){var t=r.type;return t==="number"||t==="range"}function ar(r){return r===""?null:+r}const Pt="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pt);$r();var Rt=kt('<main><h1>Algorimtusok feladatok</h1> <input type="range"> </main>');function It(r){var t=Wr(0),e=Rt(),n=nr(rt(e),2),l=nr(n);ut(()=>Ft(l,` ${ur(t)??""}`)),qt(n,()=>ur(t),u=>Gr(t,u)),St(r,e)}At(It,{target:document.getElementById("app")});