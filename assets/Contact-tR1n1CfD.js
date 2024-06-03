import{r as g,j as s,a as R,B as v}from"./index-CkJ1W1W8.js";import{e as E,p as _,w as q}from"./whatsapp-DYzs2N8L.js";class b{constructor(t=0,a="Network Error"){this.status=t,this.text=a}}const C=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},c={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:C()},x=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},H=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=x(e);c.publicKey=a.publicKey,c.blockHeadless=a.blockHeadless,c.storageProvider=a.storageProvider,c.blockList=a.blockList,c.limitRate=a.limitRate,c.origin=a.origin||t},N=async(e,t,a={})=>{const i=await fetch(c.origin+e,{method:"POST",headers:a,body:t}),l=await i.text(),r=new b(i.status,l);if(i.ok)return r;throw r},k=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},D=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},y=e=>e.webdriver||!e.languages||e.languages.length===0,P=()=>new b(451,"Unavailable For Headless Browser"),$=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},V=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},O=(e,t)=>e instanceof FormData?e.get(t):e[t],w=(e,t)=>{if(V(e))return!1;$(e.list,e.watchVariable);const a=O(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},F=()=>new b(403,"Forbidden"),Y=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},K=async(e,t,a)=>{const i=Number(await a.get(e)||0);return t-Date.now()+i},S=async(e,t,a)=>{if(!t.throttle||!a)return!1;Y(t.throttle,t.id);const i=t.id||e;return await K(i,t.throttle,a)>0?!0:(await a.set(i,Date.now().toString()),!1)},T=()=>new b(429,"Too Many Requests"),B=async(e,t,a,i)=>{const l=x(i),r=l.publicKey||c.publicKey,u=l.blockHeadless||c.blockHeadless,m=c.storageProvider||l.storageProvider,p={...c.blockList,...l.blockList},h={...c.limitRate,...l.limitRate};return u&&y(navigator)?Promise.reject(P()):(k(r,e,t),D(a),a&&w(p,a)?Promise.reject(F()):await S(location.pathname,h,m)?Promise.reject(T()):N("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:r,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},M=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},A=e=>typeof e=="string"?document.querySelector(e):e,z=async(e,t,a,i)=>{const l=x(i),r=l.publicKey||c.publicKey,u=l.blockHeadless||c.blockHeadless,m=c.storageProvider||l.storageProvider,p={...c.blockList,...l.blockList},h={...c.limitRate,...l.limitRate};if(u&&y(navigator))return Promise.reject(P());const f=A(a);k(r,e,t),M(f);const d=new FormData(f);return w(p,d)?Promise.reject(F()):await S(location.pathname,h,m)?Promise.reject(T()):(d.append("lib_version","4.3.3"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",r),N("/api/v1.0/email/send-form",d))},W={init:H,send:B,sendForm:z,EmailJSResponseStatus:b},J="service_affsmo3",U="template_go2zkzk",G="fTALzt7Z6dkEOiFp4";function Z(){const e=g.useRef(),[t,a]=g.useState(!1),[i,l]=g.useState({name:"",email:"",phone:"",date:"",pickup:"",pickuptime:"",destination:"",persons:"",message:""}),[r,u]=g.useState({});g.useEffect(()=>{const o=setTimeout(()=>u({}),15e3);return()=>clearTimeout(o)},[r]);const m=o=>{const{name:n,value:j}=o.target;l({...i,[n]:j})},p=o=>{o.preventDefault();const n=L(i);u(n),Object.keys(n).length===0&&(a(!0),W.sendForm(J,U,e.current,G).then(()=>{h()},j=>{f(j)}))},h=()=>{v.success("Your request has been submitted",{autoClose:2e3}),d(),a(!1)},f=o=>{console.error("Form submission error:",o),v.error("Error submitting form. Please try again later",{autoClose:2e3}),a(!1)},d=()=>{l({name:"",email:"",phone:"",date:"",pickup:"",pickuptime:"",destination:"",persons:"",message:""})},L=o=>{let n={};return o.name.trim()||(n.name="Name is required"),o.email.trim()?/\S+@\S+\.\S+/.test(o.email)||(n.email="Email is invalid"):n.email="Email is required",o.phone.trim()?/^\+?[0-9]+$/i.test(o.phone)||(n.phone="Phone number is invalid"):n.phone="Phone is required",o.date.trim()||(n.date="Date is required"),o.pickup.trim()||(n.pickup="Pickup location is required"),o.pickuptime.trim()||(n.pickuptime="Pickup time is required"),o.destination.trim()||(n.destination="Destination is required"),o.persons.trim()?/^[0-9]+$/.test(o.persons)||(n.persons="Please enter a valid number"):n.persons="Number of passengers is required",o.message.trim()||(n.message="Message is required"),n};return s.jsx(s.Fragment,{children:t?s.jsx(R,{}):s.jsx(s.Fragment,{children:s.jsx("section",{className:"contact-sec",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"header-1",children:" Get a Quote"}),s.jsx("div",{className:"contact-content",children:s.jsxs("div",{className:"contact-grid",children:[s.jsx("div",{className:"form-col",children:s.jsxs("form",{className:"contact-form",onSubmit:p,ref:e,children:[s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"name",className:"contact-label",children:"Name"}),s.jsx("input",{placeholder:"Your Name...",type:"text",id:"name",className:`form-input ${r.name&&"error"}`,name:"name",value:i.name,onChange:m}),r.name&&s.jsx("div",{className:"error-message",children:r.name})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"email",className:"contact-label",children:"Email"}),s.jsx("input",{placeholder:"Your Email...",type:"email",id:"email",className:`form-input ${r.email&&"error"}`,name:"email",value:i.email,onChange:m}),r.email&&s.jsx("div",{className:"error-message",children:r.email})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"phone",className:"contact-label",children:"Phone"}),s.jsx("input",{placeholder:"Your Phone...",type:"text",id:"phone",className:`form-input ${r.phone&&"error"}`,name:"phone",value:i.phone,onChange:m}),r.phone&&s.jsx("div",{className:"error-message",children:r.phone})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"date",className:"contact-label",children:"Date"}),s.jsx("input",{placeholder:"Your Date...",type:"date",id:"date",className:`form-input ${r.date&&"error"}`,name:"date",value:i.date,onChange:m}),r.date&&s.jsx("div",{className:"error-message",children:r.date})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"pickup",className:"contact-label",children:"Pickup Location"}),s.jsx("input",{placeholder:"Your Pickup...",type:"text",id:"pickup",className:`form-input ${r.pickup&&"error"}`,name:"pickup",value:i.pickup,onChange:m}),r.pickup&&s.jsx("div",{className:"error-message",children:r.pickup})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"pickuptime",className:"contact-label",children:"Pickup Time"}),s.jsx("input",{placeholder:"Your Pickup Time...",type:"time",id:"pickuptime",className:`form-input ${r.pickuptime&&"error"}`,name:"pickuptime",value:i.pickuptime,onChange:m}),r.pickuptime&&s.jsx("div",{className:"error-message",children:r.pickuptime})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"destination",className:"contact-label",children:"Destination"}),s.jsx("input",{placeholder:"Your Destination...",type:"text",id:"destination",className:`form-input ${r.destination&&"error"}`,name:"destination",value:i.destination,onChange:m}),r.destination&&s.jsx("div",{className:"error-message",children:r.destination})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"persons",className:"contact-label",children:"Number of Passengers"}),s.jsx("input",{placeholder:"Number of Passengers...",type:"text",id:"persons",className:`form-input ${r.persons&&"error"}`,name:"persons",value:i.persons,onChange:m}),r.persons&&s.jsx("div",{className:"error-message",children:r.persons})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{htmlFor:"message",className:"contact-label",children:"Message"}),s.jsx("textarea",{placeholder:"Your Message...",id:"message",className:`form-input ${r.message&&"error"}`,name:"message",value:i.message,onChange:m}),r.message&&s.jsx("div",{className:"error-message",children:r.message})]}),s.jsx("button",{type:"submit",className:"btn submit-btn",children:"Submit"})]})})," ",s.jsxs("div",{className:"info-col",children:[s.jsx("h2",{className:"header-2",children:"Reach Out to Us"})," ",s.jsxs("p",{className:"text",children:[" ",s.jsxs("span",{className:"icon",children:[s.jsx("img",{src:E,alt:"Email"})," "]})," ","info@melbournedrive.com.au"," "]})," ",s.jsxs("p",{className:"text",children:[" ",s.jsxs("span",{className:"icon",children:[s.jsx("img",{src:_,alt:"Phone"})," "]})," ","+61-403-729-181"," "]})," ",s.jsxs("p",{className:"text",children:[" ",s.jsxs("span",{className:"icon",children:[s.jsx("img",{src:q,alt:"WhatsApp"})," "]})," ","or WhatsApp us at +61-403-729-181"," "]})," "]})]})})]})})})})}export{Z as default};
