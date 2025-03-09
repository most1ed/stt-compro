import{c as _,u as o,r as c,j as e,A as I,m as C,I as g,L as O,a as m}from"./index-MbjWce6d.js";import{A as $}from"./ArticleModal-Cf8Ipsxd.js";import{B}from"./BrandLogo-2FiOb8yt.js";import{W as E}from"./WhatsAppContact-CrY-8imF.js";import"./dialog-CDy8ITAG.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],M=_("ChevronLeft",R);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],W=_("ChevronRight",T),q=()=>{const{data:s,loading:u,error:d}=o("sliders"),[l,r]=c.useState(0),[h,n]=c.useState(!0);c.useEffect(()=>{let a;return h&&s&&(a=setInterval(()=>{r(i=>(i+1)%s.length)},5e3)),()=>clearInterval(a)},[h,s]);const p=()=>{s&&(n(!1),r(a=>(a+1)%s.length))},x=()=>{s&&(n(!1),r(a=>(a-1+s.length)%s.length))};return u||d||!s?null:e.jsxs("section",{className:"relative h-screen w-full overflow-hidden",children:[e.jsx(I,{mode:"wait",children:e.jsxs(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"absolute inset-0",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx(g,{className:"size-full object-cover",src:s[l].image_desktop_url,alt:s[l].title}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"})]}),e.jsx("div",{className:"relative z-10 flex h-full items-center",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"max-w-3xl",children:[e.jsx("h1",{className:"mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl",children:s[l].title}),e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-primary/90 md:text-3xl",children:s[l].subtitle}),e.jsx("p",{className:"mb-8 text-lg text-white/80 md:text-xl",children:s[l].description})]})})})]},l)}),e.jsx("button",{onClick:x,className:"absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Previous slide",children:e.jsx(M,{className:"size-6"})}),e.jsx("button",{onClick:p,className:"absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all duration-300 hover:bg-black/50","aria-label":"Next slide",children:e.jsx(W,{className:"size-6"})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2",children:s.map((a,i)=>e.jsx("button",{onClick:()=>{n(!1),r(i)},className:`size-2.5 rounded-full transition-all duration-300 ${l===i?"w-8 bg-white":"bg-white/50 hover:bg-white/80"}`,"aria-label":`Go to slide ${i+1}`},i))})]})},J=()=>{const{data:s,loading:u}=o("products"),{data:d,loading:l}=o("articles"),{data:r,loading:h}=o("portfolios"),{data:n,loading:p}=o("testimonials"),{data:x,loading:a}=o("brands"),[i,b]=c.useState(null),[L,y]=c.useState(!1),[A,k]=c.useState(!1),[w,S]=c.useState(null),z=t=>{b(t),y(!0)},P=t=>{S(t),k(!0)},f=s==null?void 0:s.filter(t=>t.is_featured==="TRUE"),j=d==null?void 0:d.slice(0,3),v=r==null?void 0:r.slice(0,3),N=n==null?void 0:n.slice(0,3);return u||l||h||p||a?e.jsx(O,{}):e.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[e.jsx(q,{}),e.jsx("section",{className:"relative overflow-hidden py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Produk Unggulan"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Solusi terbaik untuk kebutuhan teknologi Anda"})]}),e.jsxs(m,{to:"/products",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:f==null?void 0:f.map(t=>e.jsxs("article",{onClick:()=>P(t),className:"group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden",children:[e.jsx(g,{src:t.image_url,alt:t.name,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute left-4 top-4",children:e.jsx("span",{className:"rounded-full bg-accent/90 px-3 py-1.5 text-xs font-medium text-accent-foreground backdrop-blur",children:t.category})})]}),e.jsx("div",{className:"flex flex-1 flex-col justify-between p-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold tracking-tight text-foreground",children:e.jsx(m,{to:`/products/${t.id}`,children:t.name})}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:t.description})]})})]},t.id))})]})}),e.jsx("section",{className:"relative bg-accent/5 py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Portfolio Kami"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Proyek-proyek yang telah kami selesaikan"})]}),e.jsxs(m,{to:"/portfolio",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:v==null?void 0:v.map(t=>e.jsxs("article",{className:"group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-card",children:[e.jsx("div",{className:"absolute inset-0 bg-card",children:e.jsx(g,{src:t.image_url,alt:t.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card/80 via-card/40"}),e.jsxs("div",{className:"relative space-y-4 p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx("time",{dateTime:t.completion_date,className:"text-muted-foreground",children:t.completion_date}),e.jsx("span",{children:"•"}),e.jsx("span",{children:t.category})]}),e.jsx("h3",{className:"text-xl font-semibold tracking-tight text-card-foreground",children:e.jsx(m,{to:`/portfolio/${t.id}`,children:t.title})}),e.jsx("p",{className:"line-clamp-3 text-sm text-muted-foreground",children:t.description}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-sm font-medium text-card-foreground",children:t.client})})]})]},t.id))})]})}),e.jsx("section",{className:"relative py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 sm:flex-row",children:[e.jsxs("div",{className:"max-w-2xl text-center sm:text-left",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Artikel Terbaru"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Berita dan informasi terkini seputar teknologi"})]}),e.jsxs(m,{to:"/articles",className:"group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",children:["Lihat Semua",e.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})]}),e.jsx("div",{className:"mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:j==null?void 0:j.map(t=>e.jsxs("article",{onClick:()=>z(t),className:"group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",children:[e.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden",children:[e.jsx(g,{src:t.image_url,alt:t.title,className:"size-full object-cover transition-transform duration-300 group-hover:scale-105"}),e.jsx("div",{className:"absolute left-4 top-4",children:e.jsx("span",{className:"rounded-full bg-accent/90 px-3 py-1.5 text-xs font-medium text-accent-foreground backdrop-blur",children:t.category})})]}),e.jsxs("div",{className:"flex flex-1 flex-col justify-between p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold tracking-tight text-foreground",children:t.title}),e.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground",children:t.content})]}),e.jsx("div",{className:"mt-6 flex items-center gap-4",children:e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-medium text-foreground",children:t.author}),e.jsx("p",{className:"text-muted-foreground",children:t.publish_date})]})})]})]},t.id))})]})}),e.jsx("section",{className:"relative bg-accent/5 py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Testimoni Klien"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Apa kata mereka tentang kami"})]}),e.jsx("div",{className:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3",children:N==null?void 0:N.map(t=>e.jsxs("figure",{className:"rounded-2xl bg-card p-8 shadow-lg ring-1 ring-muted/10",children:[e.jsx("blockquote",{className:"text-foreground",children:e.jsx("p",{className:"text-lg leading-8",children:t.testimonial})}),e.jsxs("figcaption",{className:"mt-6 flex items-center gap-x-4",children:[e.jsx(g,{src:t.avatar_url,alt:t.name,className:"size-10 rounded-full bg-muted"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:t.name}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[t.position," at ",t.company]})]})]})]},t.id))})]})}),e.jsx("section",{className:"relative py-20 sm:py-32",children:e.jsxs("div",{className:"container relative mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",children:"Brand Partner"}),e.jsx("p",{className:"mt-4 text-lg leading-8 text-muted-foreground",children:"Dipercaya oleh brand-brand terkemuka"})]}),e.jsx("div",{className:"mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5",children:x==null?void 0:x.map(t=>e.jsx(B,{src:t.logo_url,alt:t.name},t.id))})]})}),w&&e.jsx(E,{open:A,onClose:()=>{k(!1),S(null)},product:w}),i&&e.jsx($,{article:i,isOpen:L,onClose:()=>{y(!1),b(null)}})]})};export{J as HomePage,J as default};
