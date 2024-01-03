import{_ as c,r as n,o as i,a as m,c as f,k as s,J as r,b as d,n as u,H as h,e as _,u as v,F as y,g as S,h as C}from"./index-LzW9pCbJ.js";const L=["src"],A={__name:"AsyncFrame",props:["iframeSrc","iframeStyle","iframeClass","three"],setup(e){const t=S(()=>C(()=>import("./LoaderView-fa8PvBxz.js"),__vite__mapDeps([0,1,2,3]))),{iframeSrc:F,iframeStyle:V,iframeClass:o,three:g}=e,a=n(!1),l=()=>setTimeout(()=>a.value=!0,0);return i(()=>console.log(o)),(k,w)=>(m(),f(y,null,[s(d("iframe",{src:e.iframeSrc,class:u(e.iframeClass),style:h(e.iframeStyle),frameborder:"0",ref:"frame",onLoad:l},null,46,L),[[r,a.value]]),s(_(v(t),{classes:e.iframeClass,class:"placeholder",three:e.three},null,8,["classes","three"]),[[r,!a.value]])],64))}},B=c(A,[["__scopeId","data-v-2e88173a"]]);export{B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LoaderView-fa8PvBxz.js","assets/index-LzW9pCbJ.js","assets/index-N58HWD5Q.css","assets/LoaderView-mS6EUEMZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}