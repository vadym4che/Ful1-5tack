import{H as y}from"./HighLight-z4jZ4Mnb.js";import{c as t,g as S,A as x}from"./getPath-VkpBExWf.js";import{_ as B}from"./ActiveElement-3NRaKYAx.js";import{r as c,o as C,j as N,k as V,a as o,c as r,b as l,d as i,e as d,F as _,l as g,m as E,w as f,n as L,u as M,t as p}from"./index-ddxVZYRa.js";import"./Loader-2sG14pdG.js";const T={class:"flex-col-start projects-page"},A={class:"flex-col-start page-header padding-13"},F={class:"h2",style:{left:"-0.2rem"}},I=l("p",{class:"p3"}," Showcase About Works ",-1),P={class:"projects-container"},$=["id"],z={class:"p3"},G={__name:"MyProjects",setup(H){const s=c(2),a=c(t.slice(0,s.value)),m=c(a.value.length===t.length),v=()=>{t.length-1>s.value?(s.value+=2,a.value=t.slice(0,s.value)):t.length-1===s.value&&(a.value=t.slice()),m.value=a.value.length===t.length},k=()=>{const h=`three-${a.value.length-2}`,n=document.getElementById(h);n&&n.scrollIntoView({behavior:"smooth",block:"start"})};return C(()=>window.scrollTo(0,0)),N(()=>k()),(h,n)=>{const w=V("router-link");return o(),r("div",T,[l("div",A,[l("h2",F,[i(" My Works "),d(y)]),I]),l("div",P,[(o(!0),r(_,null,g(a.value,(b,u)=>(o(),r("div",{class:"three",key:u,id:"three-"+u},[(o(!0),r(_,null,g(b,(e,j)=>(o(),r("div",{key:j,class:"project"},[d(x,{iframeSrc:M(S)(e.path),iframeClass:{vertical:e.orientation==="|",horizontal:e.orientation==="-",white_bg:e.white_bg,iframe:!0}},null,8,["iframeSrc","iframeClass"]),l("p",z,p(e.tags.join(" | ")),1),d(w,{to:{name:"project",params:{projectName:e.name}},title:`get '${e.name}' details`},{default:f(()=>[i(p(e.title),1)]),_:2},1032,["to","title"])]))),128))],8,$))),128)),m.value?L("",!0):(o(),E(B,{key:0,padding:"1.5rem 2.5rem",fontSize:"1.33rem",borderRadius:"6.5rem",bg:"var(--bg50)",class:"font-variant load-more",action:v},{default:f(()=>[i(" load more works ")]),_:1},8,["bg"]))])])}}};export{G as default};