import{B as g,q as j,o,c as r,F as k,s as v,b as e,f as n,u as c,w,y as s,e as t,g as V,h as x}from"./index-iiF6YnR_.js";import{g as y}from"./getPath-tNxSOAAP.js";import{g as C}from"./getThreeRandom-iTxOxvIf.js";const b={class:"three three-projects"},B={class:"frame"},N={class:"h4"},T={class:"gap2"},A=e("span",{class:"after"}," ------ ",-1),E={class:"p3"},F=e("span",{class:"dimmed"},"tech stack:  ",-1),P=e("br",null,null,-1),S=e("span",{class:"dimmed"},"tech area:   ",-1),z={__name:"ThreeView",setup(D){const i=V(()=>x(()=>import("./AsyncFrame-ZCXDk3FJ.js"),__vite__mapDeps([0,1,2,3]))),_=C(g);return(L,R)=>{const l=j("router-link");return o(),r("div",b,[(o(!0),r(k,null,v(c(_),({title:a,name:m,stack:d,tags:p,path:h,white_bg:u},f)=>(o(),r("div",{class:"card",key:f},[e("div",B,[n(c(i),{iframeSrc:c(y)(h),iframeClass:{white_bg:u,iframe:!0},three:!0},null,8,["iframeSrc","iframeClass"])]),e("h4",N,[n(l,{to:{name:"project",params:{projectName:m}},class:"text-wrap",title:"View more details about `"+a+"`"},{default:w(()=>[t(s(a.split(" ").slice(0,-1).join(" "))+" ",1),e("span",T,[t(s(a.split(" ").slice(-1).join(" "))+" ",1),A])]),_:2},1032,["to","title"])]),e("p",E,[F,t(" "+s(d.join(" | ")),1),P,S,t(" "+s(p.join(", ")),1)])]))),128))])}}};export{z as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AsyncFrame-ZCXDk3FJ.js","assets/index-iiF6YnR_.js","assets/index-S9qvS9tc.css","assets/AsyncFrame-RTQezexn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}