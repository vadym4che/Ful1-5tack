import{_ as w,r as p,d as M,o as S,c as T,b as a,e as m,f,j,k as h,v,w as I,i as V,p as D,a as C}from"./index-ZzFgVXJA.js";import{H as q}from"./HighLight-aOZ6QPgn.js";import{_ as F}from"./ActiveElement-tXSBf_O5.js";const u={_origin:"https://api.emailjs.com"},L=(t,e="https://api.emailjs.com")=>{u._userID=t,u._origin=e},g=(t,e,s)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class b{constructor(e){this.status=e.status,this.text=e.responseText}}const x=(t,e,s={})=>new Promise((d,i)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:o})=>{const c=new b(o);c.status===200||c.text==="OK"?d(c):i(c)}),n.addEventListener("error",({target:o})=>{i(new b(o))}),n.open("POST",u._origin+t,!0),Object.keys(s).forEach(o=>{n.setRequestHeader(o,s[o])}),n.send(e)}),N=(t,e,s,d)=>{const i=d||u._userID;return g(i,t,e),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},P=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},H=(t,e,s,d)=>{const i=d||u._userID,n=P(s);g(i,t,e);const o=new FormData(n);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",i),x("/api/v1.0/email/send-form",o)},k={init:L,send:N,sendForm:H},y=t=>(D("data-v-bedd059d"),t=t(),C(),t),R={class:"flex-col-start"},U={class:"flex-col-start page-header padding-13"},A={class:"h2",style:{left:"-0.2rem"}},O=y(()=>a("p",{class:"t2"},"Hire Me For Your Awesome Project",-1)),$={class:"flex-col-start"},B={class:"grid-text-form"},J=y(()=>a("h2",{class:"h2"},[m("Get in"),a("br"),m("Touch With"),a("br"),m("Me")],-1)),z={"data-text":"NAME"},G={"data-text":"EMAIL"},K={"data-text":"SUBJECT"},Y={"data-text":"MESSAGE"},Q=V('<div class="laptop" data-v-bedd059d></div><div class="address" data-v-bedd059d><h4 class="h4" data-v-bedd059d><a href="https://t.me/vadym4che" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via Telegram or any other social media" data-v-bedd059d> @vadym4che </a></h4><h4 class="h4" data-v-bedd059d><a href="tel:+380505444199" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via phone" data-v-bedd059d> +380-505-444-199 </a></h4><h4 class="h4" data-v-bedd059d><a href="mailto:vadym4che@gmail.com" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via e-mail" data-v-bedd059d> vadym4che@gmail.com </a></h4></div>',2),W={__name:"ContactMe",setup(t){const e=p(""),s=p(""),d=p(""),i=p(""),n="service_z0c2zx5",o="template_email7js",c="DrJDQf3M1hyPj0_40",E=async()=>{const _=`
        Name: ${e.value}
        Email: ${s.value}
        Subject: ${d.value}
        Message: ${i.value}
      `;try{const r={name:e.value,email:s.value,subject:d.value,message:_.trim()},l=await k.send(n,o,r,c);console.log("Email sent successfully!",l)}catch(r){console.error("Error sending email:",r)}e.value="",s.value="",d.value="",i.value=""};return M(()=>window.scrollTo(0,0)),(_,r)=>(S(),T("div",R,[a("div",U,[a("h2",A,[m(" Contact Me "),f(q)]),O]),a("div",$,[a("div",B,[J,a("form",{onSubmit:j(E,["prevent"]),class:"flex-col-start form"},[a("label",z,[h(a("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=l=>e.value=l),required:"","aria-label":"name-input"},null,512),[[v,e.value]])]),a("label",G,[h(a("input",{type:"email","onUpdate:modelValue":r[1]||(r[1]=l=>s.value=l),required:"","aria-label":"email-input"},null,512),[[v,s.value]])]),a("label",K,[h(a("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=l=>d.value=l),required:"","aria-label":"subject-input"},null,512),[[v,d.value]])]),a("label",Y,[h(a("textarea",{"onUpdate:modelValue":r[3]||(r[3]=l=>i.value=l)},null,512),[[v,i.value]])]),f(F,{padding:"0",fontSize:"2.1rem",borderRadius:"1.75rem",bg:"var(--accent0)",class:"font-variant"},{default:I(()=>[m(" send ")]),_:1},8,["bg"])],32)])]),Q]))}},te=w(W,[["__scopeId","data-v-bedd059d"]]);export{te as default};