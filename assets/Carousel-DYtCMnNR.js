import{g as X,s as K,e as J,c as W,m as h,b as Q,d as Y,f as Z,j as G,S as ee,h as ae,L as ie,i as te,k as se,n as ne,w as le,o as re}from"./index-DtRb139i.js";import{A as oe,E as ce}from"./effect-cards-DGE60FVl.js";const de="/assets/van-ucmuEakL.jpg";function pe(S){let{swiper:e,extendParams:k,on:b,emit:E}=S;k({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let g;const P=X();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const I=P.createElement("div");function D(l,o){const c=e.params.virtual;if(c.cache&&e.virtual.cache[o])return e.virtual.cache[o];let f;return c.renderSlide?(f=c.renderSlide.call(e,l,o),typeof f=="string"&&(I.innerHTML=f,f=I.children[0])):e.isElement?f=W("swiper-slide"):f=W("div",e.params.slideClass),f.setAttribute("data-swiper-slide-index",o),c.renderSlide||(f.innerHTML=l),c.cache&&(e.virtual.cache[o]=f),f}function w(l,o){const{slidesPerView:c,slidesPerGroup:f,centeredSlides:a,loop:t,initialSlide:n}=e.params;if(o&&!t&&n>0)return;const{addSlidesBefore:d,addSlidesAfter:C}=e.params.virtual,{from:B,to:z,slides:p,slidesGrid:$,offset:M}=e.virtual;e.params.cssMode||e.updateActiveIndex();const O=e.activeIndex||0;let m;e.rtlTranslate?m="right":m=e.isHorizontal()?"left":"top";let y,v;a?(y=Math.floor(c/2)+f+C,v=Math.floor(c/2)+f+d):(y=c+(f-1)+C,v=(t?c:f)+d);let L=O-v,i=O+y;t||(L=Math.max(L,0),i=Math.min(i,p.length-1));let s=(e.slidesGrid[L]||0)-(e.slidesGrid[0]||0);t&&O>=v?(L-=v,a||(s+=e.slidesGrid[0])):t&&O<v&&(L=-v,a&&(s+=e.slidesGrid[0])),Object.assign(e.virtual,{from:L,to:i,offset:s,slidesGrid:e.slidesGrid,slidesBefore:v,slidesAfter:y});function u(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),E("virtualUpdate")}if(B===L&&z===i&&!l){e.slidesGrid!==$&&s!==M&&e.slides.forEach(r=>{r.style[m]=`${s-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),E("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:s,from:L,to:i,slides:function(){const x=[];for(let U=L;U<=i;U+=1)x.push(p[U]);return x}()}),e.params.virtual.renderExternalUpdate?u():E("virtualUpdate");return}const A=[],R=[],F=r=>{let x=r;return r<0?x=p.length+r:x>=p.length&&(x=x-p.length),x};if(l)e.slides.filter(r=>r.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(r=>{r.remove()});else for(let r=B;r<=z;r+=1)if(r<L||r>i){const x=F(r);e.slides.filter(U=>U.matches(`.${e.params.slideClass}[data-swiper-slide-index="${x}"], swiper-slide[data-swiper-slide-index="${x}"]`)).forEach(U=>{U.remove()})}const V=t?-p.length:0,_=t?p.length*2:p.length;for(let r=V;r<_;r+=1)if(r>=L&&r<=i){const x=F(r);typeof z>"u"||l?R.push(x):(r>z&&R.push(x),r<B&&A.push(x))}if(R.forEach(r=>{e.slidesEl.append(D(p[r],r))}),t)for(let r=A.length-1;r>=0;r-=1){const x=A[r];e.slidesEl.prepend(D(p[x],x))}else A.sort((r,x)=>x-r),A.forEach(r=>{e.slidesEl.prepend(D(p[r],r))});J(e.slidesEl,".swiper-slide, swiper-slide").forEach(r=>{r.style[m]=`${s-Math.abs(e.cssOverflowAdjustment())}px`}),u()}function H(l){if(typeof l=="object"&&"length"in l)for(let o=0;o<l.length;o+=1)l[o]&&e.virtual.slides.push(l[o]);else e.virtual.slides.push(l);w(!0)}function q(l){const o=e.activeIndex;let c=o+1,f=1;if(Array.isArray(l)){for(let a=0;a<l.length;a+=1)l[a]&&e.virtual.slides.unshift(l[a]);c=o+l.length,f=l.length}else e.virtual.slides.unshift(l);if(e.params.virtual.cache){const a=e.virtual.cache,t={};Object.keys(a).forEach(n=>{const d=a[n],C=d.getAttribute("data-swiper-slide-index");C&&d.setAttribute("data-swiper-slide-index",parseInt(C,10)+f),t[parseInt(n,10)+f]=d}),e.virtual.cache=t}w(!0),e.slideTo(c,0)}function T(l){if(typeof l>"u"||l===null)return;let o=e.activeIndex;if(Array.isArray(l))for(let c=l.length-1;c>=0;c-=1)e.params.virtual.cache&&(delete e.virtual.cache[l[c]],Object.keys(e.virtual.cache).forEach(f=>{f>l&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(l[c],1),l[c]<o&&(o-=1),o=Math.max(o,0);else e.params.virtual.cache&&(delete e.virtual.cache[l],Object.keys(e.virtual.cache).forEach(c=>{c>l&&(e.virtual.cache[c-1]=e.virtual.cache[c],e.virtual.cache[c-1].setAttribute("data-swiper-slide-index",c-1),delete e.virtual.cache[c])})),e.virtual.slides.splice(l,1),l<o&&(o-=1),o=Math.max(o,0);w(!0),e.slideTo(o,0)}function j(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),w(!0),e.slideTo(0,0)}b("beforeInit",()=>{if(!e.params.virtual.enabled)return;let l;if(typeof e.passedParams.virtual.slides>"u"){const o=[...e.slidesEl.children].filter(c=>c.matches(`.${e.params.slideClass}, swiper-slide`));o&&o.length&&(e.virtual.slides=[...o],l=!0,o.forEach((c,f)=>{c.setAttribute("data-swiper-slide-index",f),e.virtual.cache[f]=c,c.remove()}))}l||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,w(!1,!0)}),b("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(g),g=setTimeout(()=>{w()},100)):w())}),b("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&K(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:H,prependSlide:q,removeSlide:T,removeAllSlides:j,update:w})}function fe(S,e,k,b){return S.params.createElements&&Object.keys(b).forEach(E=>{if(!k[E]&&k.auto===!0){let g=J(S.el,`.${b[E]}`)[0];g||(g=W("div",b[E]),g.className=b[E],S.el.append(g)),k[E]=g,e[E]=g}}),k}function N(S){return S===void 0&&(S=""),`.${S.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ue(S){let{swiper:e,extendParams:k,on:b,emit:E}=S;const g="swiper-pagination";k({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${g}-bullet`,bulletActiveClass:`${g}-bullet-active`,modifierClass:`${g}-`,currentClass:`${g}-current`,totalClass:`${g}-total`,hiddenClass:`${g}-hidden`,progressbarFillClass:`${g}-progressbar-fill`,progressbarOppositeClass:`${g}-progressbar-opposite`,clickableClass:`${g}-clickable`,lockClass:`${g}-lock`,horizontalClass:`${g}-horizontal`,verticalClass:`${g}-vertical`,paginationDisabledClass:`${g}-disabled`}}),e.pagination={el:null,bullets:[]};let P,I=0;function D(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function w(a,t){const{bulletActiveClass:n}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${n}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${n}-${t}-${t}`)))}function H(a,t,n){if(a=a%n,t=t%n,t===a+1)return"next";if(t===a-1)return"previous"}function q(a){const t=a.target.closest(N(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const n=Y(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===n)return;const d=H(e.realIndex,n,e.slides.length);d==="next"?e.slideNext():d==="previous"?e.slidePrev():e.slideToLoop(n)}else e.slideTo(n)}function T(){const a=e.rtl,t=e.params.pagination;if(D())return;let n=e.pagination.el;n=h(n);let d,C;const B=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,z=e.params.loop?Math.ceil(B/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(C=e.previousRealIndex||0,d=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(d=e.snapIndex,C=e.previousSnapIndex):(C=e.previousIndex||0,d=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const p=e.pagination.bullets;let $,M,O;if(t.dynamicBullets&&(P=Q(p[0],e.isHorizontal()?"width":"height"),n.forEach(m=>{m.style[e.isHorizontal()?"width":"height"]=`${P*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&C!==void 0&&(I+=d-(C||0),I>t.dynamicMainBullets-1?I=t.dynamicMainBullets-1:I<0&&(I=0)),$=Math.max(d-I,0),M=$+(Math.min(p.length,t.dynamicMainBullets)-1),O=(M+$)/2),p.forEach(m=>{const y=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(v=>`${t.bulletActiveClass}${v}`)].map(v=>typeof v=="string"&&v.includes(" ")?v.split(" "):v).flat();m.classList.remove(...y)}),n.length>1)p.forEach(m=>{const y=Y(m);y===d?m.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&m.setAttribute("part","bullet"),t.dynamicBullets&&(y>=$&&y<=M&&m.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),y===$&&w(m,"prev"),y===M&&w(m,"next"))});else{const m=p[d];if(m&&m.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&p.forEach((y,v)=>{y.setAttribute("part",v===d?"bullet-active":"bullet")}),t.dynamicBullets){const y=p[$],v=p[M];for(let L=$;L<=M;L+=1)p[L]&&p[L].classList.add(...`${t.bulletActiveClass}-main`.split(" "));w(y,"prev"),w(v,"next")}}if(t.dynamicBullets){const m=Math.min(p.length,t.dynamicMainBullets+4),y=(P*m-P)/2-O*P,v=a?"right":"left";p.forEach(L=>{L.style[e.isHorizontal()?v:"top"]=`${y}px`})}}n.forEach((p,$)=>{if(t.type==="fraction"&&(p.querySelectorAll(N(t.currentClass)).forEach(M=>{M.textContent=t.formatFractionCurrent(d+1)}),p.querySelectorAll(N(t.totalClass)).forEach(M=>{M.textContent=t.formatFractionTotal(z)})),t.type==="progressbar"){let M;t.progressbarOpposite?M=e.isHorizontal()?"vertical":"horizontal":M=e.isHorizontal()?"horizontal":"vertical";const O=(d+1)/z;let m=1,y=1;M==="horizontal"?m=O:y=O,p.querySelectorAll(N(t.progressbarFillClass)).forEach(v=>{v.style.transform=`translate3d(0,0,0) scaleX(${m}) scaleY(${y})`,v.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(p.innerHTML=t.renderCustom(e,d+1,z),$===0&&E("paginationRender",p)):($===0&&E("paginationRender",p),E("paginationUpdate",p)),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](t.lockClass)})}function j(){const a=e.params.pagination;if(D())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let n=e.pagination.el;n=h(n);let d="";if(a.type==="bullets"){let C=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&C>t&&(C=t);for(let B=0;B<C;B+=1)a.renderBullet?d+=a.renderBullet.call(e,B,a.bulletClass):d+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?d=a.renderFraction.call(e,a.currentClass,a.totalClass):d=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?d=a.renderProgressbar.call(e,a.progressbarFillClass):d=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],n.forEach(C=>{a.type!=="custom"&&(C.innerHTML=d||""),a.type==="bullets"&&e.pagination.bullets.push(...C.querySelectorAll(N(a.bulletClass)))}),a.type!=="custom"&&E("paginationRender",n[0])}function l(){e.params.pagination=fe(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(n=>Z(n,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=h(t),t.forEach(n=>{a.type==="bullets"&&a.clickable&&n.classList.add(...(a.clickableClass||"").split(" ")),n.classList.add(a.modifierClass+a.type),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(n.classList.add(`${a.modifierClass}${a.type}-dynamic`),I=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&n.classList.add(a.progressbarOppositeClass),a.clickable&&n.addEventListener("click",q),e.enabled||n.classList.add(a.lockClass)}))}function o(){const a=e.params.pagination;if(D())return;let t=e.pagination.el;t&&(t=h(t),t.forEach(n=>{n.classList.remove(a.hiddenClass),n.classList.remove(a.modifierClass+a.type),n.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(n.classList.remove(...(a.clickableClass||"").split(" ")),n.removeEventListener("click",q))})),e.pagination.bullets&&e.pagination.bullets.forEach(n=>n.classList.remove(...a.bulletActiveClass.split(" ")))}b("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=h(t),t.forEach(n=>{n.classList.remove(a.horizontalClass,a.verticalClass),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),b("init",()=>{e.params.pagination.enabled===!1?f():(l(),j(),T())}),b("activeIndexChange",()=>{typeof e.snapIndex>"u"&&T()}),b("snapIndexChange",()=>{T()}),b("snapGridLengthChange",()=>{j(),T()}),b("destroy",()=>{o()}),b("enable disable",()=>{let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),b("lock unlock",()=>{T()}),b("click",(a,t)=>{const n=t.target,d=h(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&d&&d.length>0&&!n.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;const C=d[0].classList.contains(e.params.pagination.hiddenClass);E(C===!0?"paginationShow":"paginationHide"),d.forEach(B=>B.classList.toggle(e.params.pagination.hiddenClass))}});const c=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),l(),j(),T()},f=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=h(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),o()};Object.assign(e.pagination,{enable:c,disable:f,render:j,update:T,init:l,destroy:o})}function ge(S){let{swiper:e,extendParams:k,on:b}=S;k({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let E=null,g,P,I=new Date().getTime();function D(i){const s=E;s.length!==0&&(s.innerHTML="",s.innerHTML=i)}function w(i){const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(i).replace(/x/g,s)}function H(i){i=h(i),i.forEach(s=>{s.setAttribute("tabIndex","0")})}function q(i){i=h(i),i.forEach(s=>{s.setAttribute("tabIndex","-1")})}function T(i,s){i=h(i),i.forEach(u=>{u.setAttribute("role",s)})}function j(i,s){i=h(i),i.forEach(u=>{u.setAttribute("aria-roledescription",s)})}function l(i,s){i=h(i),i.forEach(u=>{u.setAttribute("aria-controls",s)})}function o(i,s){i=h(i),i.forEach(u=>{u.setAttribute("aria-label",s)})}function c(i,s){i=h(i),i.forEach(u=>{u.setAttribute("id",s)})}function f(i,s){i=h(i),i.forEach(u=>{u.setAttribute("aria-live",s)})}function a(i){i=h(i),i.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function t(i){i=h(i),i.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function n(i){if(i.keyCode!==13&&i.keyCode!==32)return;const s=e.params.a11y,u=i.target;if(!(e.pagination&&e.pagination.el&&(u===e.pagination.el||e.pagination.el.contains(i.target))&&!i.target.matches(N(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const A=h(e.navigation.prevEl);h(e.navigation.nextEl).includes(u)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?D(s.lastSlideMessage):D(s.nextSlideMessage)),A.includes(u)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?D(s.firstSlideMessage):D(s.prevSlideMessage))}e.pagination&&u.matches(N(e.params.pagination.bulletClass))&&u.click()}}function d(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:i,prevEl:s}=e.navigation;s&&(e.isBeginning?(a(s),q(s)):(t(s),H(s))),i&&(e.isEnd?(a(i),q(i)):(t(i),H(i)))}function C(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function B(){return C()&&e.params.pagination.clickable}function z(){const i=e.params.a11y;C()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(H(s),e.params.pagination.renderBullet||(T(s,"button"),o(s,i.paginationBulletMessage.replace(/\{\{index\}\}/,Y(s)+1)))),s.matches(N(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const p=(i,s,u)=>{H(i),i.tagName!=="BUTTON"&&(T(i,"button"),i.addEventListener("keydown",n)),o(i,u),l(i,s)},$=i=>{P&&P!==i.target&&!P.contains(i.target)&&(g=!0),e.a11y.clicked=!0},M=()=>{g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},O=i=>{I=new Date().getTime()},m=i=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-I<100)return;const s=i.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;P=s;const u=e.slides.indexOf(s)===e.activeIndex,A=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);u||A||i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{g||(e.params.loop?e.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(s),0),g=!1)}))},y=()=>{const i=e.params.a11y;i.itemRoleDescriptionMessage&&j(e.slides,i.itemRoleDescriptionMessage),i.slideRole&&T(e.slides,i.slideRole);const s=e.slides.length;i.slideLabelMessage&&e.slides.forEach((u,A)=>{const R=e.params.loop?parseInt(u.getAttribute("data-swiper-slide-index"),10):A,F=i.slideLabelMessage.replace(/\{\{index\}\}/,R+1).replace(/\{\{slidesLength\}\}/,s);o(u,F)})},v=()=>{const i=e.params.a11y;e.el.append(E);const s=e.el;i.containerRoleDescriptionMessage&&j(s,i.containerRoleDescriptionMessage),i.containerMessage&&o(s,i.containerMessage),i.containerRole&&T(s,i.containerRole);const u=e.wrapperEl,A=i.id||u.getAttribute("id")||`swiper-wrapper-${w(16)}`,R=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";c(u,A),f(u,R),y();let{nextEl:F,prevEl:V}=e.navigation?e.navigation:{};F=h(F),V=h(V),F&&F.forEach(r=>p(r,A,i.nextSlideMessage)),V&&V.forEach(r=>p(r,A,i.prevSlideMessage)),B()&&h(e.pagination.el).forEach(x=>{x.addEventListener("keydown",n)}),X().addEventListener("visibilitychange",O),e.el.addEventListener("focus",m,!0),e.el.addEventListener("focus",m,!0),e.el.addEventListener("pointerdown",$,!0),e.el.addEventListener("pointerup",M,!0)};function L(){E&&E.remove();let{nextEl:i,prevEl:s}=e.navigation?e.navigation:{};i=h(i),s=h(s),i&&i.forEach(A=>A.removeEventListener("keydown",n)),s&&s.forEach(A=>A.removeEventListener("keydown",n)),B()&&h(e.pagination.el).forEach(R=>{R.removeEventListener("keydown",n)}),X().removeEventListener("visibilitychange",O),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",m,!0),e.el.removeEventListener("pointerdown",$,!0),e.el.removeEventListener("pointerup",M,!0))}b("beforeInit",()=>{E=W("span",e.params.a11y.notificationClass),E.setAttribute("aria-live","assertive"),E.setAttribute("aria-atomic","true")}),b("afterInit",()=>{e.params.a11y.enabled&&v()}),b("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&y()}),b("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&d()}),b("paginationUpdate",()=>{e.params.a11y.enabled&&z()}),b("destroy",()=>{e.params.a11y.enabled&&L()})}function ve(){const S=[{image:te,title:"Airport Transfers"},{image:se,title:"Corporate Transfer"},{image:ne,title:"Event Transportation"},{image:le,title:"Weddings Transport"},{image:re,title:"Wineries / Other"},{image:de,title:"Endless Options, Seamless Journeys: Unleashing Our Versatile Fleet for Every Group Size"}];return G.jsx(ee,{modules:[ue,oe,ce,ge,pe],slidesPerView:1,loop:!0,Ally:!0,virtual:!0,speed:1100,autoplay:{delay:4500,disableOnInteraction:!1},pagination:{clickable:!0,dynamicBullets:!0},children:S.map((e,k)=>G.jsx(ae,{children:G.jsxs("div",{className:"carousel-container",children:[G.jsx("div",{className:"carousel-img",children:G.jsx("img",{src:e.image,alt:e.title})}),G.jsxs("div",{className:"carousel-content",children:[G.jsx("h3",{className:"header-1",children:e.title}),G.jsx(ie,{to:"/contact",children:G.jsx("button",{className:"btn",children:"Request Booking"})})]})]})},k))})}export{ve as default};