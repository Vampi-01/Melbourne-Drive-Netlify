import{r as g,j as e,H as R,a as E,B as v}from"./index-CeDDh1Iw.js";import{e as q,p as D,w as _}from"./whatsapp-DYzs2N8L.js";class b{constructor(t=0,a="Network Error"){this.status=t,this.text=a}}const C=()=>{if(!(typeof localStorage>"u"))return{get:s=>Promise.resolve(localStorage.getItem(s)),set:(s,t)=>Promise.resolve(localStorage.setItem(s,t)),remove:s=>Promise.resolve(localStorage.removeItem(s))}},c={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:C()},x=s=>s?typeof s=="string"?{publicKey:s}:s.toString()==="[object Object]"?s:{}:{},H=(s,t="https://api.emailjs.com")=>{if(!s)return;const a=x(s);c.publicKey=a.publicKey,c.blockHeadless=a.blockHeadless,c.storageProvider=a.storageProvider,c.blockList=a.blockList,c.limitRate=a.limitRate,c.origin=a.origin||t},k=async(s,t,a={})=>{const i=await fetch(c.origin+s,{method:"POST",headers:a,body:t}),l=await i.text(),r=new b(i.status,l);if(i.ok)return r;throw r},N=(s,t,a)=>{if(!s||typeof s!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},M=s=>{if(s&&s.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},y=s=>s.webdriver||!s.languages||s.languages.length===0,w=()=>new b(451,"Unavailable For Headless Browser"),$=(s,t)=>{if(!Array.isArray(s))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},V=s=>{var t;return!((t=s.list)!=null&&t.length)||!s.watchVariable},O=(s,t)=>s instanceof FormData?s.get(t):s[t],P=(s,t)=>{if(V(s))return!1;$(s.list,s.watchVariable);const a=O(t,s.watchVariable);return typeof a!="string"?!1:s.list.includes(a)},F=()=>new b(403,"Forbidden"),Y=(s,t)=>{if(typeof s!="number"||s<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},B=async(s,t,a)=>{const i=Number(await a.get(s)||0);return t-Date.now()+i},S=async(s,t,a)=>{if(!t.throttle||!a)return!1;Y(t.throttle,t.id);const i=t.id||s;return await B(i,t.throttle,a)>0?!0:(await a.set(i,Date.now().toString()),!1)},T=()=>new b(429,"Too Many Requests"),K=async(s,t,a,i)=>{const l=x(i),r=l.publicKey||c.publicKey,d=l.blockHeadless||c.blockHeadless,m=l.storageProvider||c.storageProvider,p={...c.blockList,...l.blockList},h={...c.limitRate,...l.limitRate};return d&&y(navigator)?Promise.reject(w()):(N(r,s,t),M(a),a&&P(p,a)?Promise.reject(F()):await S(location.pathname,h,m)?Promise.reject(T()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:r,service_id:s,template_id:t,template_params:a}),{"Content-type":"application/json"}))},A=s=>{if(!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},W=s=>typeof s=="string"?document.querySelector(s):s,z=async(s,t,a,i)=>{const l=x(i),r=l.publicKey||c.publicKey,d=l.blockHeadless||c.blockHeadless,m=c.storageProvider||l.storageProvider,p={...c.blockList,...l.blockList},h={...c.limitRate,...l.limitRate};if(d&&y(navigator))return Promise.reject(w());const f=W(a);N(r,s,t),A(f);const u=new FormData(f);return P(p,u)?Promise.reject(F()):await S(location.pathname,h,m)?Promise.reject(T()):(u.append("lib_version","4.4.1"),u.append("service_id",s),u.append("template_id",t),u.append("user_id",r),k("/api/v1.0/email/send-form",u))},J={init:H,send:K,sendForm:z,EmailJSResponseStatus:b},U="service_affsmo3",G="template_go2zkzk",I="fTALzt7Z6dkEOiFp4";function X(){const s=g.useRef(),[t,a]=g.useState(!1),[i,l]=g.useState({name:"",email:"",phone:"",date:"",pickup:"",pickuptime:"",destination:"",persons:"",message:""}),[r,d]=g.useState({});g.useEffect(()=>{const o=setTimeout(()=>d({}),15e3);return()=>clearTimeout(o)},[r]);const m=o=>{const{name:n,value:j}=o.target;l({...i,[n]:j})},p=o=>{o.preventDefault();const n=L(i);d(n),Object.keys(n).length===0&&(a(!0),J.sendForm(U,G,s.current,I).then(()=>{h()},j=>{f(j)}))},h=()=>{v.success("Your request has been submitted",{autoClose:2e3}),u(),a(!1)},f=o=>{console.error("Form submission error:",o),v.error("Error submitting form. Please try again later",{autoClose:2e3}),a(!1)},u=()=>{l({name:"",email:"",phone:"",date:"",pickup:"",pickuptime:"",destination:"",persons:"",message:""})},L=o=>{let n={};return o.name.trim()||(n.name="Name is required"),o.email.trim()?/\S+@\S+\.\S+/.test(o.email)||(n.email="Email is invalid"):n.email="Email is required",o.phone.trim()?/^\+?[0-9]+$/i.test(o.phone)||(n.phone="Phone number is invalid"):n.phone="Phone is required",o.date.trim()||(n.date="Date is required"),o.pickup.trim()||(n.pickup="Pickup location is required"),o.pickuptime.trim()||(n.pickuptime="Pickup time is required"),o.destination.trim()||(n.destination="Destination is required"),o.persons.trim()?/^[0-9]+$/.test(o.persons)||(n.persons="Please enter a valid number"):n.persons="Number of passengers is required",o.message.trim()||(n.message="Message is required"),n};return e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx("title",{children:"Contact Melbourne Drive - Request a Booking Today!"}),e.jsx("meta",{name:"description",content:"Contact Melbourne Drive today for a free quote on your premium  chauffeur  service needs. We're here to assist you 24/7."}),e.jsx("meta",{name:"keywords",content:"Melbourne Drive, contact, premium  chauffeur , quote, Australia, 24/7 service"}),e.jsx("meta",{property:"og:description",content:"Experience luxury transportation with Melbourne Drive. We offer a wide range of premium chauffeur services for all your needs."}),e.jsx("meta",{property:"og:url",content:"https://melbournedrive.com.au"})," ",e.jsx("meta",{name:"author",content:"Melbourne Drive"}),e.jsx("meta",{name:"robots",content:"index, follow"})]}),t?e.jsx(E,{}):e.jsx(e.Fragment,{children:e.jsx("section",{className:"contact-sec",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"header-1",children:" Get a Quote"}),e.jsx("div",{className:"contact-content",children:e.jsxs("div",{className:"contact-grid",children:[e.jsx("div",{className:"form-col",children:e.jsxs("form",{className:"contact-form",onSubmit:p,ref:s,children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"name",className:"contact-label",children:"Name"}),e.jsx("input",{placeholder:"Your Name...",type:"text",id:"name",className:`form-input ${r.name&&"error"}`,name:"name",value:i.name,onChange:m}),r.name&&e.jsx("div",{className:"error-message",children:r.name})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"email",className:"contact-label",children:"Email"}),e.jsx("input",{placeholder:"Your Email...",type:"email",id:"email",className:`form-input ${r.email&&"error"}`,name:"email",value:i.email,onChange:m}),r.email&&e.jsx("div",{className:"error-message",children:r.email})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"phone",className:"contact-label",children:"Phone"}),e.jsx("input",{placeholder:"Your Phone...",type:"text",id:"phone",className:`form-input ${r.phone&&"error"}`,name:"phone",value:i.phone,onChange:m}),r.phone&&e.jsx("div",{className:"error-message",children:r.phone})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"date",className:"contact-label",children:"Pickup Date"}),e.jsx("input",{placeholder:"Your Date...",type:"date",id:"date",className:`form-input ${r.date&&"error"}`,name:"date",value:i.date,onChange:m}),r.date&&e.jsx("div",{className:"error-message",children:r.date})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"pickup",className:"contact-label",children:"Pickup Location"}),e.jsx("input",{placeholder:"Your Pickup...",type:"text",id:"pickup",className:`form-input ${r.pickup&&"error"}`,name:"pickup",value:i.pickup,onChange:m}),r.pickup&&e.jsx("div",{className:"error-message",children:r.pickup})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"pickuptime",className:"contact-label",children:"Pickup Time"}),e.jsx("input",{placeholder:"Your Pickup Time...",type:"time",id:"pickuptime",className:`form-input ${r.pickuptime&&"error"}`,name:"pickuptime",value:i.pickuptime,onChange:m}),r.pickuptime&&e.jsx("div",{className:"error-message",children:r.pickuptime})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"destination",className:"contact-label",children:"Destination"}),e.jsx("input",{placeholder:"Your Destination...",type:"text",id:"destination",className:`form-input ${r.destination&&"error"}`,name:"destination",value:i.destination,onChange:m}),r.destination&&e.jsx("div",{className:"error-message",children:r.destination})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"persons",className:"contact-label",children:"Number of Passengers"}),e.jsx("input",{placeholder:"Number of Passengers...",type:"text",id:"persons",className:`form-input ${r.persons&&"error"}`,name:"persons",value:i.persons,onChange:m}),r.persons&&e.jsx("div",{className:"error-message",children:r.persons})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"message",className:"contact-label",children:"Message"}),e.jsx("textarea",{placeholder:"Your Message...",id:"message",className:`form-input ${r.message&&"error"}`,name:"message",value:i.message,onChange:m}),r.message&&e.jsx("div",{className:"error-message",children:r.message})]}),e.jsx("button",{type:"submit",className:"btn submit-btn",children:"Submit"})]})})," ",e.jsxs("div",{className:"info-col",children:[e.jsx("h2",{className:"header-2",children:"Reach Out to Us"})," ",e.jsxs("p",{className:"text",children:[" ",e.jsxs("span",{className:"icon",children:[e.jsx("img",{src:q,alt:"Email"})," "]})," ","info@melbournedrive.com.au"," "]})," ",e.jsxs("p",{className:"text",children:[" ",e.jsxs("span",{className:"icon",children:[e.jsx("img",{src:D,alt:"Phone"})," "]})," ","+61-403-729-181"," "]})," ",e.jsxs("p",{className:"text",children:[" ",e.jsxs("span",{className:"icon",children:[e.jsx("img",{src:_,alt:"WhatsApp"})," "]})," ","or WhatsApp us at +61-403-729-181"," "]})," "]})]})})]})})})]})}export{X as default};
