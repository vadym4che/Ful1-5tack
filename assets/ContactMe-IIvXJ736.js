import{_ as I,r as p,a as T,o as y,c as w,b as a,d as m,e as E,j as V,k as _,v,w as D,i as R,p as j,f as L}from"./index-5qXiM4Hp.js";import{H as C}from"./HighLight-BzyJrDVb.js";import{_ as A}from"./ActiveElement-3xm9Q0Ks.js";const u={_origin:"https://api.emailjs.com"},q=(t,e="https://api.emailjs.com")=>{u._userID=t,u._origin=e},b=(t,e,s)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class g{constructor(e){this.status=e.status,this.text=e.responseText}}const x=(t,e,s={})=>new Promise((n,r)=>{const d=new XMLHttpRequest;d.addEventListener("load",({target:o})=>{const c=new g(o);c.status===200||c.text==="OK"?n(c):r(c)}),d.addEventListener("error",({target:o})=>{r(new g(o))}),d.open("POST",u._origin+t,!0),Object.keys(s).forEach(o=>{d.setRequestHeader(o,s[o])}),d.send(e)}),P=(t,e,s,n)=>{const r=n||u._userID;return b(r,t,e),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},F=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},N=(t,e,s,n)=>{const r=n||u._userID,d=F(s);b(r,t,e);const o=new FormData(d);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),x("/api/v1.0/email/send-form",o)},U={init:q,send:P,sendForm:N};var h={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const S=t=>(j("data-v-e12add03"),t=t(),L(),t),H={class:"flex-col-start"},O={class:"flex-col-start page-header padding-13"},k={class:"h2",style:{left:"-0.2rem"}},B=S(()=>a("p",{class:"t2"},"Hire Me For Your Awesome Project",-1)),$={class:"flex-col-start"},J={class:"grid-text-form"},K=S(()=>a("h2",{class:"h2"},[m("Get in"),a("br"),m("Touch With"),a("br"),m("Me")],-1)),Y={"data-text":"NAME"},G={"data-text":"EMAIL"},z={"data-text":"SUBJECT"},W={"data-text":"MESSAGE"},X=R('<div class="laptop" data-v-e12add03></div><div class="address" data-v-e12add03><h4 class="h4" data-v-e12add03><a href="https://t.me/vadym4che" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via Telegram or any other social media" data-v-e12add03> @vadym4che </a></h4><h4 class="h4" data-v-e12add03><a href="tel:+380505444199" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via phone" data-v-e12add03> +380-505-444-199 </a></h4><h4 class="h4" data-v-e12add03><a href="mailto:vadym4che@gmail.com" class="link" style="padding:0.5rem;margin:-0.5rem;" title="Contact me via e-mail" data-v-e12add03> vadym4che@gmail.com </a></h4></div>',2),Q={__name:"ContactMe",setup(t){const e=p(""),s=p(""),n=p(""),r=p(""),d=h.VITE_EMAILER_SERVICE_ID,o=h.VITE_EMAILER_TEMPLATE_ID,c=h.VITE_EMAILER_USER_KEY,M=async()=>{const f=`
        Name: ${e.value}
        Email: ${s.value}
        Subject: ${n.value}
        Message: ${r.value}
      `;try{const i={name:e.value,email:s.value,subject:n.value,message:f.trim()},l=await U.send(d,o,i,c);console.log("Email sent successfully!",l)}catch(i){console.error("Error sending email:",i)}e.value="",s.value="",n.value="",r.value=""};return T(()=>window.scrollTo(0,0)),(f,i)=>(y(),w("div",H,[a("div",O,[a("h2",k,[m(" Contact Me "),E(C)]),B]),a("div",$,[a("div",J,[K,a("form",{onSubmit:V(M,["prevent"]),class:"flex-col-start form"},[a("label",Y,[_(a("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=l=>e.value=l),required:"",autocomplete:"name","aria-label":"name-input"},null,512),[[v,e.value]])]),a("label",G,[_(a("input",{type:"email","onUpdate:modelValue":i[1]||(i[1]=l=>s.value=l),required:"","aria-label":"email-input"},null,512),[[v,s.value]])]),a("label",z,[_(a("input",{type:"text","onUpdate:modelValue":i[2]||(i[2]=l=>n.value=l),required:"","aria-label":"subject-input"},null,512),[[v,n.value]])]),a("label",W,[_(a("textarea",{"onUpdate:modelValue":i[3]||(i[3]=l=>r.value=l)},null,512),[[v,r.value]])]),E(A,{padding:"0",fontSize:"2.1rem",borderRadius:"1.75rem",bg:"var(--accent0)",class:"font-variant"},{default:D(()=>[m(" send ")]),_:1},8,["bg"])],32)])]),X]))}},ae=I(Q,[["__scopeId","data-v-e12add03"]]);export{ae as default};
