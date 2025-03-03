import{c as S,a as m,r as d,j as e,A as B,m as _,I as n,L as K,b as h}from"./index-DiMdh7v4.js";import{A as O}from"./ArticleModal-DMZB3RXT.js";import{B as T}from"./BrandLogo-BWWptQ05.js";import{W as U}from"./WhatsAppContact-DGnb8Mb3.js";import"./dialog-DmGJ8NQM.js";import"./use-is-mounted-B-iswdkE.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],D=S("ChevronLeft",$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E=S("ChevronRight",R),W=()=>{const{data:s,loading:u,error:x}=m("sliders"),[a,r]=d.useState(0),[p,o]=d.useState(!0);d.useEffect(()=>{let l;return p&&s&&(l=setInterval(()=>{r(i=>(i+1)%s.length)},5e3)),()=>clearInterval(l)},[p,s]);const f=()=>{s&&(o(!1),r(l=>(l+1)%s.length))},g=()=>{s&&(o(!1),r(l=>(l-1+s.length)%s.length))};return u||x||!s?null:e.jsxs("section",{className:"relative h-screen w-full overflow-hidden",children:[e.jsx(B,{mode:"wait",children:e.jsxs(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"absolute inset-0",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx(n,{className:"size-full object-cover",src:s[a].image_desktop_url,alt:s[a].title}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"})]}),e.jsx("div",{className:"relative z-10 flex h-full items-center",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs(_.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"max-w-3xl",children:[e.jsx("h1",{className:"mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl",children:s[a].title}),e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-primary/90 md:text-3xl",children:s[a].subtitle}),e.jsx("p",{className:"mb-8 text-lg text-white/80 md:text-xl",children:s[a].description})]})})})]},a)}),e.jsx("button",{onClick:g,className:"absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Previous slide",children:e.jsx(D,{className:"size-6"})}),e.jsx("button",{onClick:f,className:"absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Next slide",children:e.jsx(E,{className:"size-6"})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2",children:s.map((l,i)=>e.jsx("button",{onClick:()=>{o(!1),r(i)},className:`size-2.5 rounded-full transition-all duration-300 ${a===i?"w-8 bg-white":"bg-white/50 hover:bg-white/80"}`,"aria-label":`Go to slide ${i+1}`},i))})]})},X=()=>{const{data:s,loading:u}=m("products"),{data:x,loading:a}=m("articles"),{data:r,loading:p}=m("portfolios"),{data:o,loading:f}=m("testimonials"),{data:g,loading:l}=m("brands"),[i,L]=d.useState(null),[P,k]=d.useState(!1),[C,y]=d.useState(!1),[c,z]=d.useState({name:"",images:[],price:"",shortDescription:"",description:"",tkdnNumber:"",marketplaceLinks:{padiUmkm:"",inaProc:"",blibli:""}}),A=t=>!t||t===""||isNaN(Number(t))?"Call":`Rp ${Number(t).toLocaleString("id-ID")}`,I=t=>{L(t),k(!0)},M=t=>{z({name:t.name,images:t.image_url?[t.image_url]:[],price:A(t.price),shortDescription:t.short_description||"",description:t.description,tkdnNumber:t.tkdn_number,marketplaceLinks:{padiUmkm:t.padi_umkm_url,inaProc:t.ina_proc_url,blibli:t.blibli_url}}),y(!0)},j=s==null?void 0:s.filter(t=>t.is_featured==="TRUE"),N=x==null?void 0:x.slice(0,3),v=r==null?void 0:r.slice(0,3),b=o==null?void 0:o.slice(0,3);return u||a||p||f||l?e.jsx(K,{}):e.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[e.jsx(W,{}),e.jsx("section",{className:"relative overflow-hidden py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Produk Unggulan"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Solusi terbaik untuk kebutuhan teknologi Anda"})]}),e.jsxs(h,{to:"/products",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:j==null?void 0:j.map(t=>e.jsxs("article",{onClick:()=>M(t),className:"group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden",children:[e.jsx(n,{src:t.image_url,alt:t.name,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute left-4 top-4",children:e.jsx("span",{className:"rounded-full bg-accent/90 px-3 py-1.5 text-xs font-medium text-accent-foreground backdrop-blur",children:t.category})})]}),e.jsx("div",{className:"flex flex-1 flex-col justify-between p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold tracking-tight text-foreground",children:e.jsx(h,{to:`/products/${t.id}`,children:t.name})}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:t.description})]})})]},t.id))})]})}),e.jsx("section",{className:"relative bg-accent/5 py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Portfolio Kami"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Proyek-proyek yang telah kami selesaikan"})]}),e.jsxs(h,{to:"/portfolio",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:v==null?void 0:v.map(t=>e.jsxs("article",{className:"group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-card",children:[e.jsx("div",{className:"absolute inset-0 bg-card",children:e.jsx(n,{src:t.image_url,alt:t.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card/80 via-card/40"}),e.jsxs("div",{className:"relative space-y-4 p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx("time",{dateTime:t.completion_date,className:"text-muted-foreground",children:t.completion_date}),e.jsx("span",{className:"size-1 rounded-full bg-muted-foreground"}),e.jsx("span",{children:t.category})]}),e.jsx("h3",{className:"text-xl font-semibold text-foreground",children:t.title}),e.jsx("p",{className:"line-clamp-2 text-sm text-muted-foreground",children:t.description})]})]},t.id))})]})}),e.jsx("section",{className:"relative bg-background py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Testimoni Klien"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Apa kata mereka tentang layanan kami"})]}),e.jsxs(h,{to:"/testimonial",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:b==null?void 0:b.map(t=>e.jsxs("article",{className:"flex flex-col space-y-4 rounded-2xl bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(n,{src:t.avatar_url,alt:t.name,className:"size-12 rounded-full"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-foreground",children:t.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[t.position," at ",t.company]})]})]}),e.jsx("div",{className:"flex",children:[...Array(5)].map((G,w)=>e.jsx("svg",{className:`size-5 ${w<Number(t.rating)?"text-yellow-400":"text-gray-300"}`,fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},w))}),e.jsx("p",{className:"text-sm text-muted-foreground",children:t.testimonial})]},t.id))})]})}),e.jsx("section",{className:"relative border-t border-border py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Artikel Terbaru"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Informasi dan tips seputar teknologi"})]}),e.jsxs(h,{to:"/blog",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:N==null?void 0:N.map(t=>e.jsxs("article",{className:"group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",onClick:()=>I(t),children:[e.jsx("div",{className:"relative aspect-[16/9] overflow-hidden",children:e.jsx(n,{src:t.image_url,alt:t.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsxs("div",{className:"flex flex-1 flex-col justify-between p-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[e.jsx("time",{dateTime:t.published_date,className:"text-muted-foreground",children:new Date(t.published_date).toLocaleDateString()}),e.jsx("span",{className:"rounded-full bg-accent px-3 py-1.5 font-medium text-accent-foreground",children:t.category})]}),e.jsx("h3",{className:"mt-4 text-xl font-semibold tracking-tight text-foreground",children:t.title}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:t.excerpt})]}),e.jsx("div",{className:"mt-6 flex items-center gap-4",children:e.jsx("p",{className:"text-sm font-semibold text-foreground",children:t.author})})]})]},t.id))})]})}),e.jsx("section",{className:"relative bg-muted py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("h2",{className:"text-center text-lg font-semibold leading-8 text-foreground",children:"Partner & Technology Stack"}),e.jsx("div",{className:"mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",children:g==null?void 0:g.map(t=>e.jsx(T,{src:t.logo_url,alt:t.name},t.id))})]})}),e.jsx("section",{className:"relative bg-accent/5 py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl",children:"Temukan Kami Di"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Kunjungi toko kami di marketplace resmi"})]}),e.jsxs("div",{className:"mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-3",children:[e.jsxs("a",{href:"https://padiumkm.id/store/631a57817255a77e0e706d20",target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center gap-4 transition-transform hover:-translate-y-1",children:[e.jsx("div",{className:"relative flex h-[80px] w-[180px] items-center justify-center overflow-hidden rounded-lg bg-white/90 p-4 shadow-sm transition-all group-hover:bg-white/95 group-hover:shadow-md",children:e.jsx(n,{src:"/logo-shop-1.png",alt:"PadiUMKM",className:"size-full object-contain"})}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"PadiUMKM"})]}),e.jsxs("a",{href:"https://katalog.inaproc.id/pt-surya-sakti-teknologi-indonesia",target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center gap-4 transition-transform hover:-translate-y-1",children:[e.jsx("div",{className:"relative flex h-[80px] w-[180px] items-center justify-center overflow-hidden rounded-lg bg-white/90 p-4 shadow-sm transition-all group-hover:bg-white/95 group-hover:shadow-md",children:e.jsx(n,{src:"/logo-shop-2.png",alt:"INAProc",className:"size-full object-contain"})}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"INAProc"})]}),e.jsxs("a",{href:"https://siplah.blibli.com/merchant-detail/SPSS-0004?itemPerPage=40&page=0&merchantId=SPSS-0004",target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center gap-4 transition-transform hover:-translate-y-1",children:[e.jsx("div",{className:"relative flex h-[80px] w-[180px] items-center justify-center overflow-hidden rounded-lg bg-white/90 p-4 shadow-sm transition-all group-hover:bg-white/95 group-hover:shadow-md",children:e.jsx(n,{src:"/siplah_blibli.png",alt:"BliBli",className:"size-full object-contain"})}),e.jsx("span",{className:"text-sm font-medium text-foreground",children:"BliBli"})]})]})]})}),e.jsx(O,{isOpen:P,onClose:()=>k(!1),article:i}),e.jsx(U,{isOpen:C,onClose:()=>y(!1),productName:c.name,productImages:c.images,productPrice:c.price,productShortDescription:c.shortDescription,productDescription:c.description,tkdnNumber:c.tkdnNumber,marketplaceLinks:c.marketplaceLinks})]})};export{X as HomePage,X as default};
