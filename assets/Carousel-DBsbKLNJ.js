import{g as X,s as K,e as J,c as W,m as g,b as Q,d as Y,f as Z,j as H,S as ee,h as ae,L as te,i as ie,k as se,n as ne,w as le,o as re}from"./index-CeDDh1Iw.js";import{A as oe,E as ce}from"./effect-cards-BPzOIxDu.js";const de="/assets/van-ucmuEakL.jpg";function pe(w){let{swiper:e,extendParams:B,on:h,emit:v}=w;B({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let f;const O=X();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const T=O.createElement("div");function k(l,o){const c=e.params.virtual;if(c.cache&&e.virtual.cache[o])return e.virtual.cache[o];let a;return c.renderSlide?(a=c.renderSlide.call(e,l,o),typeof a=="string"&&(T.innerHTML=a,a=T.children[0])):e.isElement?a=W("swiper-slide"):a=W("div",e.params.slideClass),a.setAttribute("data-swiper-slide-index",o),c.renderSlide||(a.innerHTML=l),c.cache&&(e.virtual.cache[o]=a),a}function $(l,o){const{slidesPerView:c,slidesPerGroup:a,centeredSlides:i,loop:n,initialSlide:d}=e.params;if(o&&!n&&d>0)return;const{addSlidesBefore:y,addSlidesAfter:S}=e.params.virtual,{from:z,to:u,slides:b,slidesGrid:A,offset:j}=e.virtual;e.params.cssMode||e.updateActiveIndex();const m=e.activeIndex||0;let E;e.rtlTranslate?E="right":E=e.isHorizontal()?"left":"top";let C,M;i?(C=Math.floor(c/2)+a+S,M=Math.floor(c/2)+a+y):(C=c+(a-1)+S,M=(n?c:a)+y);let I=m-M,t=m+C;n||(I=Math.max(I,0),t=Math.min(t,b.length-1));let s=(e.slidesGrid[I]||0)-(e.slidesGrid[0]||0);n&&m>=M?(I-=M,i||(s+=e.slidesGrid[0])):n&&m<M&&(I=-M,i&&(s+=e.slidesGrid[0])),Object.assign(e.virtual,{from:I,to:t,offset:s,slidesGrid:e.slidesGrid,slidesBefore:M,slidesAfter:C});function p(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),v("virtualUpdate")}if(z===I&&u===t&&!l){e.slidesGrid!==A&&s!==j&&e.slides.forEach(r=>{r.style[E]=`${s-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),v("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:s,from:I,to:t,slides:function(){const x=[];for(let U=I;U<=t;U+=1)x.push(b[U]);return x}()}),e.params.virtual.renderExternalUpdate?p():v("virtualUpdate");return}const L=[],F=[],R=r=>{let x=r;return r<0?x=b.length+r:x>=b.length&&(x=x-b.length),x};if(l)e.slides.filter(r=>r.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(r=>{r.remove()});else for(let r=z;r<=u;r+=1)if(r<I||r>t){const x=R(r);e.slides.filter(U=>U.matches(`.${e.params.slideClass}[data-swiper-slide-index="${x}"], swiper-slide[data-swiper-slide-index="${x}"]`)).forEach(U=>{U.remove()})}const V=n?-b.length:0,_=n?b.length*2:b.length;for(let r=V;r<_;r+=1)if(r>=I&&r<=t){const x=R(r);typeof u>"u"||l?F.push(x):(r>u&&F.push(x),r<z&&L.push(x))}if(F.forEach(r=>{e.slidesEl.append(k(b[r],r))}),n)for(let r=L.length-1;r>=0;r-=1){const x=L[r];e.slidesEl.prepend(k(b[x],x))}else L.sort((r,x)=>x-r),L.forEach(r=>{e.slidesEl.prepend(k(b[r],r))});J(e.slidesEl,".swiper-slide, swiper-slide").forEach(r=>{r.style[E]=`${s-Math.abs(e.cssOverflowAdjustment())}px`}),p()}function G(l){if(typeof l=="object"&&"length"in l)for(let o=0;o<l.length;o+=1)l[o]&&e.virtual.slides.push(l[o]);else e.virtual.slides.push(l);$(!0)}function P(l){const o=e.activeIndex;let c=o+1,a=1;if(Array.isArray(l)){for(let i=0;i<l.length;i+=1)l[i]&&e.virtual.slides.unshift(l[i]);c=o+l.length,a=l.length}else e.virtual.slides.unshift(l);if(e.params.virtual.cache){const i=e.virtual.cache,n={};Object.keys(i).forEach(d=>{const y=i[d],S=y.getAttribute("data-swiper-slide-index");S&&y.setAttribute("data-swiper-slide-index",parseInt(S,10)+a),n[parseInt(d,10)+a]=y}),e.virtual.cache=n}$(!0),e.slideTo(c,0)}function D(l){if(typeof l>"u"||l===null)return;let o=e.activeIndex;if(Array.isArray(l))for(let c=l.length-1;c>=0;c-=1)e.params.virtual.cache&&(delete e.virtual.cache[l[c]],Object.keys(e.virtual.cache).forEach(a=>{a>l&&(e.virtual.cache[a-1]=e.virtual.cache[a],e.virtual.cache[a-1].setAttribute("data-swiper-slide-index",a-1),delete e.virtual.cache[a])})),e.virtual.slides.splice(l[c],1),l[c]<o&&(o-=1),o=Math.max(o,0);else e.params.virtual.cache&&(delete e.virtual.cache[l],Object.keys(e.virtual.cache).forEach(c=>{c>l&&(e.virtual.cache[c-1]=e.virtual.cache[c],e.virtual.cache[c-1].setAttribute("data-swiper-slide-index",c-1),delete e.virtual.cache[c])})),e.virtual.slides.splice(l,1),l<o&&(o-=1),o=Math.max(o,0);$(!0),e.slideTo(o,0)}function N(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),$(!0),e.slideTo(0,0)}h("beforeInit",()=>{if(!e.params.virtual.enabled)return;let l;if(typeof e.passedParams.virtual.slides>"u"){const o=[...e.slidesEl.children].filter(c=>c.matches(`.${e.params.slideClass}, swiper-slide`));o&&o.length&&(e.virtual.slides=[...o],l=!0,o.forEach((c,a)=>{c.setAttribute("data-swiper-slide-index",a),e.virtual.cache[a]=c,c.remove()}))}l||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,$(!1,!0)}),h("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(f),f=setTimeout(()=>{$()},100)):$())}),h("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&K(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:G,prependSlide:P,removeSlide:D,removeAllSlides:N,update:$})}function fe(w,e,B,h){return w.params.createElements&&Object.keys(h).forEach(v=>{if(!B[v]&&B.auto===!0){let f=J(w.el,`.${h[v]}`)[0];f||(f=W("div",h[v]),f.className=h[v],w.el.append(f)),B[v]=f,e[v]=f}}),B}function q(w){return w===void 0&&(w=""),`.${w.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ue(w){let{swiper:e,extendParams:B,on:h,emit:v}=w;const f="swiper-pagination";B({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${f}-bullet`,bulletActiveClass:`${f}-bullet-active`,modifierClass:`${f}-`,currentClass:`${f}-current`,totalClass:`${f}-total`,hiddenClass:`${f}-hidden`,progressbarFillClass:`${f}-progressbar-fill`,progressbarOppositeClass:`${f}-progressbar-opposite`,clickableClass:`${f}-clickable`,lockClass:`${f}-lock`,horizontalClass:`${f}-horizontal`,verticalClass:`${f}-vertical`,paginationDisabledClass:`${f}-disabled`}}),e.pagination={el:null,bullets:[]};let O,T=0;function k(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function $(a,i){const{bulletActiveClass:n}=e.params.pagination;a&&(a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${n}-${i}`),a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${n}-${i}-${i}`)))}function G(a){const i=a.target.closest(q(e.params.pagination.bulletClass));if(!i)return;a.preventDefault();const n=Y(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===n)return;e.slideToLoop(n)}else e.slideTo(n)}function P(){const a=e.rtl,i=e.params.pagination;if(k())return;let n=e.pagination.el;n=g(n);let d,y;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,z=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=e.previousRealIndex||0,d=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(d=e.snapIndex,y=e.previousSnapIndex):(y=e.previousIndex||0,d=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let b,A,j;if(i.dynamicBullets&&(O=Q(u[0],e.isHorizontal()?"width":"height"),n.forEach(m=>{m.style[e.isHorizontal()?"width":"height"]=`${O*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&y!==void 0&&(T+=d-(y||0),T>i.dynamicMainBullets-1?T=i.dynamicMainBullets-1:T<0&&(T=0)),b=Math.max(d-T,0),A=b+(Math.min(u.length,i.dynamicMainBullets)-1),j=(A+b)/2),u.forEach(m=>{const E=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${i.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();m.classList.remove(...E)}),n.length>1)u.forEach(m=>{const E=Y(m);E===d?m.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&m.setAttribute("part","bullet"),i.dynamicBullets&&(E>=b&&E<=A&&m.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),E===b&&$(m,"prev"),E===A&&$(m,"next"))});else{const m=u[d];if(m&&m.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&u.forEach((E,C)=>{E.setAttribute("part",C===d?"bullet-active":"bullet")}),i.dynamicBullets){const E=u[b],C=u[A];for(let M=b;M<=A;M+=1)u[M]&&u[M].classList.add(...`${i.bulletActiveClass}-main`.split(" "));$(E,"prev"),$(C,"next")}}if(i.dynamicBullets){const m=Math.min(u.length,i.dynamicMainBullets+4),E=(O*m-O)/2-j*O,C=a?"right":"left";u.forEach(M=>{M.style[e.isHorizontal()?C:"top"]=`${E}px`})}}n.forEach((u,b)=>{if(i.type==="fraction"&&(u.querySelectorAll(q(i.currentClass)).forEach(A=>{A.textContent=i.formatFractionCurrent(d+1)}),u.querySelectorAll(q(i.totalClass)).forEach(A=>{A.textContent=i.formatFractionTotal(z)})),i.type==="progressbar"){let A;i.progressbarOpposite?A=e.isHorizontal()?"vertical":"horizontal":A=e.isHorizontal()?"horizontal":"vertical";const j=(d+1)/z;let m=1,E=1;A==="horizontal"?m=j:E=j,u.querySelectorAll(q(i.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${m}) scaleY(${E})`,C.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(u.innerHTML=i.renderCustom(e,d+1,z),b===0&&v("paginationRender",u)):(b===0&&v("paginationRender",u),v("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](i.lockClass)})}function D(){const a=e.params.pagination;if(k())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let n=e.pagination.el;n=g(n);let d="";if(a.type==="bullets"){let y=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&y>i&&(y=i);for(let S=0;S<y;S+=1)a.renderBullet?d+=a.renderBullet.call(e,S,a.bulletClass):d+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?d=a.renderFraction.call(e,a.currentClass,a.totalClass):d=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?d=a.renderProgressbar.call(e,a.progressbarFillClass):d=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],n.forEach(y=>{a.type!=="custom"&&(y.innerHTML=d||""),a.type==="bullets"&&e.pagination.bullets.push(...y.querySelectorAll(q(a.bulletClass)))}),a.type!=="custom"&&v("paginationRender",n[0])}function N(){e.params.pagination=fe(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let i;typeof a.el=="string"&&e.isElement&&(i=e.el.querySelector(a.el)),!i&&typeof a.el=="string"&&(i=[...document.querySelectorAll(a.el)]),i||(i=a.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(a.el)],i.length>1&&(i=i.filter(n=>Z(n,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=g(i),i.forEach(n=>{a.type==="bullets"&&a.clickable&&n.classList.add(...(a.clickableClass||"").split(" ")),n.classList.add(a.modifierClass+a.type),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(n.classList.add(`${a.modifierClass}${a.type}-dynamic`),T=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&n.classList.add(a.progressbarOppositeClass),a.clickable&&n.addEventListener("click",G),e.enabled||n.classList.add(a.lockClass)}))}function l(){const a=e.params.pagination;if(k())return;let i=e.pagination.el;i&&(i=g(i),i.forEach(n=>{n.classList.remove(a.hiddenClass),n.classList.remove(a.modifierClass+a.type),n.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(n.classList.remove(...(a.clickableClass||"").split(" ")),n.removeEventListener("click",G))})),e.pagination.bullets&&e.pagination.bullets.forEach(n=>n.classList.remove(...a.bulletActiveClass.split(" ")))}h("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:i}=e.pagination;i=g(i),i.forEach(n=>{n.classList.remove(a.horizontalClass,a.verticalClass),n.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),h("init",()=>{e.params.pagination.enabled===!1?c():(N(),D(),P())}),h("activeIndexChange",()=>{typeof e.snapIndex>"u"&&P()}),h("snapIndexChange",()=>{P()}),h("snapGridLengthChange",()=>{D(),P()}),h("destroy",()=>{l()}),h("enable disable",()=>{let{el:a}=e.pagination;a&&(a=g(a),a.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),h("lock unlock",()=>{P()}),h("click",(a,i)=>{const n=i.target,d=g(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&d&&d.length>0&&!n.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;const y=d[0].classList.contains(e.params.pagination.hiddenClass);v(y===!0?"paginationShow":"paginationHide"),d.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const o=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),N(),D(),P()},c=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),l()};Object.assign(e.pagination,{enable:o,disable:c,render:D,update:P,init:N,destroy:l})}function ge(w){let{swiper:e,extendParams:B,on:h}=w;B({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let v=null,f,O,T=new Date().getTime();function k(t){const s=v;s.length!==0&&(s.innerHTML="",s.innerHTML=t)}function $(t){const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(t).replace(/x/g,s)}function G(t){t=g(t),t.forEach(s=>{s.setAttribute("tabIndex","0")})}function P(t){t=g(t),t.forEach(s=>{s.setAttribute("tabIndex","-1")})}function D(t,s){t=g(t),t.forEach(p=>{p.setAttribute("role",s)})}function N(t,s){t=g(t),t.forEach(p=>{p.setAttribute("aria-roledescription",s)})}function l(t,s){t=g(t),t.forEach(p=>{p.setAttribute("aria-controls",s)})}function o(t,s){t=g(t),t.forEach(p=>{p.setAttribute("aria-label",s)})}function c(t,s){t=g(t),t.forEach(p=>{p.setAttribute("id",s)})}function a(t,s){t=g(t),t.forEach(p=>{p.setAttribute("aria-live",s)})}function i(t){t=g(t),t.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function n(t){t=g(t),t.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function d(t){if(t.keyCode!==13&&t.keyCode!==32)return;const s=e.params.a11y,p=t.target;if(!(e.pagination&&e.pagination.el&&(p===e.pagination.el||e.pagination.el.contains(t.target))&&!t.target.matches(q(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const L=g(e.navigation.prevEl);g(e.navigation.nextEl).includes(p)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?k(s.lastSlideMessage):k(s.nextSlideMessage)),L.includes(p)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?k(s.firstSlideMessage):k(s.prevSlideMessage))}e.pagination&&p.matches(q(e.params.pagination.bulletClass))&&p.click()}}function y(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:t,prevEl:s}=e.navigation;s&&(e.isBeginning?(i(s),P(s)):(n(s),G(s))),t&&(e.isEnd?(i(t),P(t)):(n(t),G(t)))}function S(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function z(){return S()&&e.params.pagination.clickable}function u(){const t=e.params.a11y;S()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(G(s),e.params.pagination.renderBullet||(D(s,"button"),o(s,t.paginationBulletMessage.replace(/\{\{index\}\}/,Y(s)+1)))),s.matches(q(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const b=(t,s,p)=>{G(t),t.tagName!=="BUTTON"&&(D(t,"button"),t.addEventListener("keydown",d)),o(t,p),l(t,s)},A=t=>{O&&O!==t.target&&!O.contains(t.target)&&(f=!0),e.a11y.clicked=!0},j=()=>{f=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},m=t=>{T=new Date().getTime()},E=t=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-T<100)return;const s=t.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;O=s;const p=e.slides.indexOf(s)===e.activeIndex,L=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);p||L||t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{f||(e.params.loop?e.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")),0):e.slideTo(e.slides.indexOf(s),0),f=!1)}))},C=()=>{const t=e.params.a11y;t.itemRoleDescriptionMessage&&N(e.slides,t.itemRoleDescriptionMessage),t.slideRole&&D(e.slides,t.slideRole);const s=e.slides.length;t.slideLabelMessage&&e.slides.forEach((p,L)=>{const F=e.params.loop?parseInt(p.getAttribute("data-swiper-slide-index"),10):L,R=t.slideLabelMessage.replace(/\{\{index\}\}/,F+1).replace(/\{\{slidesLength\}\}/,s);o(p,R)})},M=()=>{const t=e.params.a11y;e.el.append(v);const s=e.el;t.containerRoleDescriptionMessage&&N(s,t.containerRoleDescriptionMessage),t.containerMessage&&o(s,t.containerMessage);const p=e.wrapperEl,L=t.id||p.getAttribute("id")||`swiper-wrapper-${$(16)}`,F=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";c(p,L),a(p,F),C();let{nextEl:R,prevEl:V}=e.navigation?e.navigation:{};R=g(R),V=g(V),R&&R.forEach(r=>b(r,L,t.nextSlideMessage)),V&&V.forEach(r=>b(r,L,t.prevSlideMessage)),z()&&g(e.pagination.el).forEach(x=>{x.addEventListener("keydown",d)}),X().addEventListener("visibilitychange",m),e.el.addEventListener("focus",E,!0),e.el.addEventListener("focus",E,!0),e.el.addEventListener("pointerdown",A,!0),e.el.addEventListener("pointerup",j,!0)};function I(){v&&v.remove();let{nextEl:t,prevEl:s}=e.navigation?e.navigation:{};t=g(t),s=g(s),t&&t.forEach(L=>L.removeEventListener("keydown",d)),s&&s.forEach(L=>L.removeEventListener("keydown",d)),z()&&g(e.pagination.el).forEach(F=>{F.removeEventListener("keydown",d)}),X().removeEventListener("visibilitychange",m),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",E,!0),e.el.removeEventListener("pointerdown",A,!0),e.el.removeEventListener("pointerup",j,!0))}h("beforeInit",()=>{v=W("span",e.params.a11y.notificationClass),v.setAttribute("aria-live","assertive"),v.setAttribute("aria-atomic","true")}),h("afterInit",()=>{e.params.a11y.enabled&&M()}),h("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&C()}),h("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&y()}),h("paginationUpdate",()=>{e.params.a11y.enabled&&u()}),h("destroy",()=>{e.params.a11y.enabled&&I()})}function ve(){const w=[{image:ie,title:"Airport Transfers"},{image:se,title:"Corporate Transfer"},{image:ne,title:"Event Transportation"},{image:le,title:"Weddings Transport"},{image:re,title:"Wineries / Other"},{image:de,title:"Endless Options, Seamless Journeys: Unleashing Our Versatile Fleet for Every Group Size"}];return H.jsx(ee,{modules:[ue,oe,ce,ge,pe],slidesPerView:1,loop:!0,Ally:!0,virtual:!0,speed:1100,autoplay:{delay:4500,disableOnInteraction:!1},pagination:{clickable:!0,dynamicBullets:!0},children:w.map((e,B)=>H.jsx(ae,{children:H.jsxs("div",{className:"carousel-container",children:[H.jsx("div",{className:"carousel-img",children:H.jsx("img",{src:e.image,alt:e.title})}),H.jsxs("div",{className:"carousel-content",children:[H.jsx("h3",{className:"header-1",children:e.title}),H.jsx(te,{to:"/contact",children:H.jsx("button",{className:"btn",children:"Request Booking"})})]})]})},B))})}export{ve as default};