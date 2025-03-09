import{r as s,j as e,F as h,I as b}from"./index-Dtb_Igiy.js";import{z as d,y as m}from"./dialog-BWJi2U5U.js";function p({title:n,titleId:t,...r},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),n?s.createElement("title",{id:t},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"}))}const v=s.forwardRef(p);function j({title:n,titleId:t,...r},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),n?s.createElement("title",{id:t},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const k=s.forwardRef(j),y=({open:n,onClose:t,product:r})=>{const[a,i]=s.useState(0),u=`Halo, saya tertarik dengan produk ${r.name} yang ada di toko Anda. Bisa kirimkan informasi lebih lanjut?`,l=[r.image_url],x=()=>{const o=encodeURIComponent(u);window.open(`https://wa.me/6281210001234?text=${o}`,"_blank"),t()},g=()=>{i(o=>(o+1)%l.length)},f=()=>{i(o=>o===0?l.length-1:o-1)};return e.jsx(d,{appear:!0,show:n,as:s.Fragment,children:e.jsxs(m,{as:"div",className:"relative z-50",onClose:t,children:[e.jsx(d.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsx(d.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(m.Panel,{className:"relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-lg",children:[e.jsx("button",{onClick:t,className:"absolute right-4 top-4 z-10 rounded-full bg-background/10 p-2 text-muted-foreground transition-colors hover:bg-background/20 hover:text-foreground",children:e.jsx(h,{className:"size-5"})}),e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[l.length>0&&e.jsxs("div",{className:"relative w-full lg:w-1/2",children:[e.jsx("div",{className:"aspect-square",children:e.jsx(b,{src:l[a],alt:`${r.name||""} - Image ${a+1}`,className:"size-full object-cover"})}),l.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:f,className:"absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/70",children:e.jsx(v,{className:"size-6"})}),e.jsx("button",{onClick:g,className:"absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/70",children:e.jsx(k,{className:"size-6"})}),e.jsx("div",{className:"absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2",children:l.map((o,c)=>e.jsx("button",{onClick:()=>i(c),className:`size-2 rounded-full transition-all ${c===a?"w-4 bg-primary":"bg-background/50"}`},c))})]}),r.price&&e.jsx("div",{className:"absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg",children:r.price}),r.tkdn_number&&e.jsxs("div",{className:"absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg",children:["TKDN: ",r.tkdn_number]})]}),e.jsx("div",{className:"flex w-full flex-col lg:w-1/2",children:e.jsxs("div",{className:"space-y-6 p-6",children:[e.jsxs("div",{children:[e.jsx(m.Title,{className:"text-2xl font-bold tracking-tight text-foreground",children:r.name}),r.short_description&&e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:r.short_description})]}),r.description&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium text-foreground",children:"Detail Product"}),e.jsx("div",{className:"max-h-[280px] overflow-y-auto rounded-lg border border-border bg-background/50 p-4",children:e.jsx("div",{className:"prose prose-sm dark:prose-invert",children:e.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground",children:r.description})})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-medium text-foreground",children:"Available on Marketplace"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.padi_umkm_url&&e.jsx("a",{href:r.padi_umkm_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center rounded-lg bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF6B35]/90 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2",children:"PadiUMKM"}),r.ina_proc_url&&e.jsx("a",{href:r.ina_proc_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center rounded-lg bg-[#0047AB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0047AB]/90 focus:outline-none focus:ring-2 focus:ring-[#0047AB] focus:ring-offset-2",children:"InaPROC"}),r.blibli_url&&e.jsx("a",{href:r.blibli_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center rounded-lg bg-[#0095DA] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0095DA]/90 focus:outline-none focus:ring-2 focus:ring-[#0095DA] focus:ring-offset-2",children:"Blibli"})]})]}),e.jsx("button",{onClick:x,className:"mt-4 w-full rounded-lg bg-[#25D366] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#25D366]/90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",children:"Hubungi via WhatsApp"})]})})]})]})})})})]})})};export{y as W};
