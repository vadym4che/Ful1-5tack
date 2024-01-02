import{_ as R,a as s,c as o,p as V,f as A,b as e,q as B,r as u,s as E,v as O,o as $,k as F,d as _,e as c,u as N,t as r,F as I,l as P,w as f}from"./index-JdpZRhYj.js";import{p as l,A as T,g as L}from"./getPath-2rJQtRSK.js";import{H as M}from"./HighLight-nRKeZpbH.js";import{g as D}from"./getThreeRandom-iTxOxvIf.js";import"./LoaderView-Deb9K-P6.js";const K={},W=n=>(V("data-v-9eeaab01"),n=n(),A(),n),q={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"13",viewBox:"0 0 50 13",fill:"none",class:"nav-arrow"},z=W(()=>e("path",{opacity:"0.5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.656006 1.33081e-07C-0.606846 2.23877e-05 0.274555 1.41676 0.656006 1.83698L10.8721 12.6848C11.2536 13.1051 11.872 13.1051 12.2535 12.6848C12.6349 12.2646 12.6349 11.5833 12.2535 11.1631L3.7048 2.15214H49.0232C49.5627 2.15214 50 1.67038 50 1.0761C50 0.481823 49.5627 6.58092e-05 49.0232 6.58092e-05H3.7048C3.7048 6.58092e-05 0.858303 -3.43187e-06 0.656006 1.33081e-07Z"},null,-1)),J=[z];function U(n,p){return s(),o("svg",q,J)}const H=R(K,[["render",U],["__scopeId","data-v-9eeaab01"]]);function X(n){return n==="product-catalog"?"https://github.com/fe-jan23-team-six":"https://github.com/vadym4che/"+n}const Z={class:"flex-col-start project-page"},G={class:"flex-col-start page-header padding-13"},Q={class:"h2"},Y=e("p",{class:"p3"}," Details About The Project ",-1),ee={class:"project-details flex-col-start"},te={class:"text flex-col-start"},se={class:"h3"},oe={class:"p4"},ae=e("b",null," Category:  ",-1),ne={class:"p4"},ce=e("b",null," Stack:  ",-1),re={class:"p4"},le=e("b",null," Source:  ",-1),ie=["href"],de={key:0,class:"p4"},ue=e("b",null,"Libraries usage:",-1),_e=e("br",null,null,-1),he={key:1,class:"p4"},pe={class:"p4"},ve=e("b",null," Description: ",-1),me=e("br",null,null,-1),fe={key:0},ge={key:1,class:"p4"},xe={class:"navigation"},je={class:"others flex-col-start"},be=e("h2",{class:"h1"},"Other Projects",-1),we={class:"cards"},ke={class:"other-text flex-col-start"},Ce={class:"h4"},Se={class:"other-p"},Le={__name:"ProjectView",setup(n){const p=B(),h=u(p.params.projectName),t=u(w(h.value)),g=E(()=>X(h.value)),i=u(k()),x=u(S()),j=u(C()),b=u(D(l,i.value));function w(a){return l.find(y=>y.name===a)||{}}function k(){return l.findIndex(a=>a.name===t.value.name&&a.orientation===t.value.orientation)}function C(){const a=i.value<l.length-1?i.value+1:0;return l[a]}function S(){const a=i.value>0?i.value-1:l.length-1;return l[a]}return O(()=>{h.value=p.params.projectName,t.value=w(h.value),i.value=k(),x.value=S(),j.value=C(),b.value=D(l,i.value)}),$(()=>window.scrollTo(0,0)),(a,y)=>{const v=F("router-link");return s(),o("div",Z,[e("div",G,[e("h2",Q,[_(" Project Detail "),c(M)]),Y]),e("div",ee,[c(T,{iframeSrc:N(L)(t.value.path),iframeClass:{white_bg:t.value.white_bg,preview:!0}},null,8,["iframeSrc","iframeClass"]),e("div",te,[e("h3",se,r(t.value.title),1),e("p",oe,[ae,_(" "+r(t.value.tags.join(" | ")),1)]),e("p",ne,[ce,_(" "+r(t.value.stack.join(", ")),1)]),e("p",re,[le,e("a",{href:g.value,target:"_blank"},r(g.value),9,ie)]),t.value.deps.length?(s(),o("p",de,[ue,_e,e("ul",null,[(s(!0),o(I,null,P(t.value.deps,(d,m)=>(s(),o("li",{key:m},r(d),1))),128))])])):(s(),o("p",he," The project does not utilize any external libraries and relies solely on the standard built-in HTML, CSS, and JavaScript processing capabilities of modern browsers. ")),e("p",pe,[ve,me,t.value.desc?(s(),o("pre",fe,""+r(t.value.desc)+`
          `,1)):(s(),o("p",ge," It seems that there is no description attached, so let's suppose that this project is self-descriptive and needs no explicit descriptional words. "))])])]),e("div",xe,[c(v,{to:{name:"project",params:{projectName:x.value.name}},class:"nav-button prev"},{default:f(()=>[c(H),_(" PREVIOUS WORK ")]),_:1},8,["to"]),c(v,{to:{name:"project",params:{projectName:j.value.name}},class:"nav-button next"},{default:f(()=>[_(" NEXT WORK "),c(H)]),_:1},8,["to"])]),e("div",je,[be,e("div",we,[(s(!0),o(I,null,P(b.value,(d,m)=>(s(),o("div",{class:"card",key:m},[c(v,{to:{name:"project",params:{projectName:d.name}}},{default:f(()=>[c(T,{iframeSrc:N(L)(d.path),iframeClass:{white_bg:d.white_bg,other:!0}},null,8,["iframeSrc","iframeClass"]),e("div",ke,[e("h4",Ce,r(d.title),1),e("p",Se,r(d.stack.join(", ")),1)])]),_:2},1032,["to"])]))),128))])])])}}};export{Le as default};
