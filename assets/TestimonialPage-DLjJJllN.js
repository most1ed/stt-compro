import{r as t,u as n,j as e,I as c,e as x}from"./index-Broskb1k.js";function d({title:s,titleId:l,...r},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":l},r),s?t.createElement("title",{id:l},s):null,t.createElement("path",{fillRule:"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",clipRule:"evenodd"}))}const m=t.forwardRef(d),o=()=>{const{data:s,loading:l,error:r}=n("testimonials");return l?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-lg",children:"Loading testimonials..."})}):r?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-lg text-red-600",children:"Error loading testimonials"})}):e.jsx("div",{className:"bg-white py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Testimonial Pelanggan"}),e.jsx("p",{className:"mt-2 text-lg leading-8 text-gray-600",children:"Apa kata mereka tentang layanan kami"})]}),e.jsx("div",{className:"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:s==null?void 0:s.map(a=>e.jsxs("article",{className:"flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200",children:[e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsx(c,{src:a.avatar_url,alt:`${a.name}'s profile picture`,className:"size-16 rounded-full bg-gray-50"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold leading-6 tracking-tight text-gray-900",children:a.name}),e.jsxs("p",{className:"text-sm leading-6 text-gray-600",children:[a.position," at ",a.company]})]})]}),e.jsx("div",{className:"mt-4 flex items-center gap-x-1",children:[0,1,2,3,4].map(i=>e.jsx(m,{className:x(Number(a.rating)>i?"text-yellow-400":"text-gray-200","size-5 flex-none"),"aria-hidden":"true"},i))}),e.jsx("p",{className:"mt-4 text-base leading-6 text-gray-600",children:a.testimonial})]},a.id))})]})})};export{o as TestimonialPage,o as default};
