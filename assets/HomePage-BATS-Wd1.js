import{c as k,u as c,r as g,j as e,A,m as w,I as r,L as z,a as m}from"./index-BHmIjwUX.js";import{A as P}from"./ArticleModal-D__Qcw0u.js";import"./dialog-DFicxeng.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],I=k("ChevronLeft",C);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],T=k("ChevronRight",M),B=()=>{const{data:t,loading:u,error:d}=c("sliders"),[a,i]=g.useState(0),[h,o]=g.useState(!0);g.useEffect(()=>{let l;return h&&t&&(l=setInterval(()=>{i(n=>(n+1)%t.length)},5e3)),()=>clearInterval(l)},[h,t]);const p=()=>{t&&(o(!1),i(l=>(l+1)%t.length))},x=()=>{t&&(o(!1),i(l=>(l-1+t.length)%t.length))};return u||d||!t?null:e.jsxs("section",{className:"relative h-screen w-full overflow-hidden",children:[e.jsx(A,{mode:"wait",children:e.jsxs(w.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"absolute inset-0",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx(r,{className:"size-full object-cover",src:t[a].image_desktop_url,alt:t[a].title}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"})]}),e.jsx("div",{className:"relative z-10 flex h-full items-center",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs(w.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"max-w-3xl",children:[e.jsx("h1",{className:"mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl",children:t[a].title}),e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-primary/90 md:text-3xl",children:t[a].subtitle}),e.jsx("p",{className:"mb-8 text-lg text-white/80 md:text-xl",children:t[a].description})]})})})]},a)}),e.jsx("button",{onClick:x,className:"absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Previous slide",children:e.jsx(I,{className:"size-6"})}),e.jsx("button",{onClick:p,className:"absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Next slide",children:e.jsx(T,{className:"size-6"})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2",children:t.map((l,n)=>e.jsx("button",{onClick:()=>{o(!1),i(n)},className:`size-2.5 rounded-full transition-all duration-300 ${a===n?"w-8 bg-white":"bg-white/50 hover:bg-white/80"}`,"aria-label":`Go to slide ${n+1}`},n))})]})},U=()=>{const{data:t,loading:u}=c("products"),{data:d,loading:a}=c("articles"),{data:i,loading:h}=c("portfolios"),{data:o,loading:p}=c("testimonials"),{data:x,loading:l}=c("brands"),[n,S]=g.useState(null),[_,b]=g.useState(!1),f=t==null?void 0:t.filter(s=>s.is_featured==="TRUE"),j=d==null?void 0:d.slice(0,3),N=i==null?void 0:i.slice(0,3),v=o==null?void 0:o.slice(0,3),L=s=>{S(s),b(!0)};return u||a||h||p||l?e.jsx(z,{}):e.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[e.jsx(B,{}),e.jsx("section",{className:"relative overflow-hidden py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Produk Unggulan"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Solusi terbaik untuk kebutuhan teknologi Anda"})]}),e.jsxs(m,{to:"/products",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:f==null?void 0:f.map(s=>e.jsxs("article",{className:"group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden",children:[e.jsx(r,{src:s.image_url,alt:s.name,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute left-4 top-4",children:e.jsx("span",{className:"rounded-full bg-accent/90 px-3 py-1.5 text-xs font-medium text-accent-foreground backdrop-blur",children:s.category})})]}),e.jsx("div",{className:"flex flex-1 flex-col justify-between p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold tracking-tight text-foreground",children:e.jsx(m,{to:`/products/${s.id}`,children:s.name})}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:s.description})]})})]},s.id))})]})}),e.jsx("section",{className:"relative bg-accent/5 py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Portfolio Kami"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Proyek-proyek yang telah kami selesaikan"})]}),e.jsxs(m,{to:"/portfolio",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:N==null?void 0:N.map(s=>e.jsxs("article",{className:"group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-card",children:[e.jsx("div",{className:"absolute inset-0 bg-card",children:e.jsx(r,{src:s.image_url,alt:s.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card/80 via-card/40"}),e.jsxs("div",{className:"relative space-y-4 p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx("time",{dateTime:s.completion_date,children:s.completion_date}),e.jsx("span",{className:"size-1 rounded-full bg-muted-foreground"}),e.jsx("span",{children:s.category})]}),e.jsx("h3",{className:"text-xl font-semibold text-foreground",children:s.title}),e.jsx("p",{className:"line-clamp-2 text-sm text-muted-foreground",children:s.description})]})]},s.id))})]})}),e.jsx("section",{className:"relative bg-background py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Testimoni Klien"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Apa kata mereka tentang layanan kami"})]}),e.jsxs(m,{to:"/testimonial",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:v==null?void 0:v.map(s=>e.jsxs("article",{className:"flex flex-col space-y-4 rounded-2xl bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{src:s.avatar_url,alt:s.name,className:"size-12 rounded-full"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground",children:s.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[s.position," at ",s.company]})]})]}),e.jsx("div",{className:"flex",children:[...Array(5)].map((K,y)=>e.jsx("svg",{className:`size-5 ${y<Number(s.rating)?"text-yellow-400":"text-gray-300"}`,fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},y))}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.testimonial})]},s.id))})]})}),e.jsx("section",{className:"relative border-t border-border py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Artikel Terbaru"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Informasi dan tips seputar teknologi"})]}),e.jsxs(m,{to:"/blog",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:j==null?void 0:j.map(s=>e.jsxs("article",{className:"group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",onClick:()=>L(s),children:[e.jsx("div",{className:"relative aspect-[16/9] overflow-hidden",children:e.jsx(r,{src:s.image_url,alt:s.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsxs("div",{className:"flex flex-1 flex-col justify-between p-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[e.jsx("time",{dateTime:s.published_date,className:"text-muted-foreground",children:new Date(s.published_date).toLocaleDateString()}),e.jsx("span",{className:"rounded-full bg-accent px-3 py-1.5 font-medium text-accent-foreground",children:s.category})]}),e.jsx("h3",{className:"mt-4 text-xl font-semibold tracking-tight text-foreground",children:s.title}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:s.excerpt})]}),e.jsx("div",{className:"mt-6 flex items-center gap-4",children:e.jsx("p",{className:"text-sm font-semibold text-foreground",children:s.author})})]})]},s.id))})]})}),e.jsx("section",{className:"relative bg-muted py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("h2",{className:"text-center text-lg font-semibold leading-8 text-foreground",children:"Partner & Technology Stack"}),e.jsx("div",{className:"mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8",children:x==null?void 0:x.map(s=>e.jsx(r,{className:"col-span-2 max-h-12 w-full object-contain grayscale transition hover:grayscale-0 lg:col-span-1",src:s.logo_url,alt:s.name},s.id))})]})}),e.jsx("section",{className:"relative bg-background py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("h2",{className:"text-center text-3xl font-bold tracking-tight text-foreground",children:"Temukan Kami Di"}),e.jsxs("div",{className:"mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-8 sm:max-w-xl sm:grid-cols-3",children:[e.jsxs("a",{href:"https://padiumkm.id/store/631a57817255a77e0e706d20",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-4",children:[e.jsx(r,{src:"/logo-shop-1.png",alt:"PadiUMKM",className:"h-16 w-auto"}),e.jsx("span",{className:"text-sm font-medium",children:"PadiUMKM"})]}),e.jsxs("a",{href:"https://katalog.inaproc.id/pt-surya-sakti-teknologi-indonesia",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-4",children:[e.jsx(r,{src:"/logo-shop-2.png",alt:"INAProc",className:"h-16 w-auto"}),e.jsx("span",{className:"text-sm font-medium",children:"INAProc"})]}),e.jsxs("a",{href:"https://siplah.blibli.com/merchant-detail/SPSS-0004?itemPerPage=40&page=0&merchantId=SPSS-0004",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-4",children:[e.jsx(r,{src:"/logo-shop-1.png",alt:"BliBli",className:"h-16 w-auto"}),e.jsx("span",{className:"text-sm font-medium",children:"BliBli"})]})]})]})}),e.jsx(P,{isOpen:_,onClose:()=>b(!1),article:n})]})};export{U as HomePage,U as default};
