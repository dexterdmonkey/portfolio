"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[797],{797:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(43),l=s(213),n=s(475),d=s(579);const c=()=>{const[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)(null),[r,o]=(0,a.useState)(null),[i,x]=(0,a.useState)(!0),[h,u]=(0,a.useState)(null),b=async e=>{x(!0),u(null);try{const s=await l.A.get(e);t(s.data.results),c(s.data.next),o(s.data.previous)}catch(s){u("Failed to fetch Pokemon list")}finally{x(!1)}};return(0,a.useEffect)((()=>{b("https://pokeapi.co/api/v2/pokemon/")}),[]),(0,d.jsxs)("div",{className:"container mx-auto p-4",children:[(0,d.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Pokemon List"}),i&&(0,d.jsx)("div",{className:"text-center text-blue-500",children:"Loading..."}),h&&(0,d.jsx)("div",{className:"text-center text-red-500",children:h}),(0,d.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{className:"py-2 px-4 border-b",children:"No"}),(0,d.jsx)("th",{className:"py-2 px-4 border-b",children:"Name"})]})}),(0,d.jsx)("tbody",{children:e.map(((e,t)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"py-2 px-4 border-b text-center",children:(0,d.jsx)(n.k2,{to:"/dashboard/pokemon/".concat(e.name),children:t+1})}),(0,d.jsx)("td",{className:"py-2 px-4 border-b text-center",children:(0,d.jsx)(n.k2,{to:"/dashboard/pokemon/".concat(e.name),children:e.name})})]},e.name)))})]}),(0,d.jsxs)("div",{className:"flex content-end mt-4 gap-4 w-full",children:[r&&(0,d.jsx)("button",{className:"bg-blue-500 text-white py-2 px-4 rounded",onClick:()=>b(r),disabled:i,children:i?"Loading...":"Previous"}),s&&(0,d.jsx)("button",{className:"bg-blue-500 text-white py-2 px-4 rounded",onClick:()=>b(s),disabled:i,children:i?"Loading...":"Next"})]})]})}}}]);
//# sourceMappingURL=797.f8dd2f4b.chunk.js.map