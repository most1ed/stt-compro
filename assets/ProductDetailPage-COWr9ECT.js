import{b as o,u as d,r as m,j as e,L as x,I as u}from"./index-Dtb_Igiy.js";import{W as p}from"./WhatsAppContact-C0jF3DHz.js";import"./dialog-BWJi2U5U.js";const j=()=>{const{productId:a}=o(),{data:t,loading:c,error:n}=d("products"),[i,r]=m.useState(!1);if(c)return e.jsx(x,{});if(n||!t)return e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-lg text-destructive",children:"Error loading product"})});const s=t.find(l=>l.id===a);return s?e.jsxs("div",{className:"bg-background",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"lg:grid lg:grid-cols-2 lg:gap-x-8",children:[e.jsx("div",{className:"relative h-0 pb-[75%] lg:pb-[100%]",children:e.jsx(u,{src:s.image_url,alt:s.name,className:"absolute inset-0 size-full rounded-lg object-cover object-center"})}),e.jsxs("div",{className:"mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-foreground",children:s.name}),e.jsxs("div",{className:"mt-3",children:[e.jsx("h2",{className:"sr-only",children:"Product information"}),e.jsx("p",{className:"text-3xl tracking-tight text-foreground",children:s.price})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"sr-only",children:"Description"}),e.jsx("div",{className:"space-y-6 text-base text-muted-foreground",children:s.description})]}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"button",onClick:()=>r(!0),className:"flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",children:"Contact Sales"})})]})]})}),e.jsx(p,{open:i,onClose:()=>r(!1),product:s})]}):e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-lg text-destructive",children:"Product not found"})})};export{j as ProductDetailPage,j as default};
