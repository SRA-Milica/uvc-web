import{d as m,E as _,o as e,a as t,b as o,F as d,r as u,t as p,w as g,a5 as h,_ as k,n as V,a6 as S}from"./index-75810c09.js";const T={headers:["Col 1","Col 2","Col 3","Col 4","Col 5","Col 6"],rows:[["Row 1, Col 1","1","Row 1, Col 3","Row 1, Col 4","Row 1, Col 5","Row 1, Col 6"],["Row 2, Col 1","2","Row 2, Col 3","Row 2, Col 4","Row 2, Col 5","Row 2, Col 6"],["Row 3, Col 1","3","Row 3, Col 3","Row 3, Col 4","Row 3, Col 5","Row 3, Col 6"],["Row 4, Col 1","4","Row 4, Col 3","Row 4, Col 4","Row 4, Col 5","Row 4, Col 6"],["Row 5, Col 1","5","Row 5, Col 3","Row 5, Col 4","Row 5, Col 5","Row 5, Col 6"]]},$={headers:["Col 1","Col 2","Col 3","Col 4","Col 5","Col 6"],rows:[["Row 1, Col 1","Row 1, Col 2","Row 1, Col 3","Row 1, Col 4","Row 1, Col 5","Row 1, Col 6"],["Row 2, Col 1","Row 2, Col 2","Row 2, Col 3","Row 2, Col 4","Row 2, Col 5","Row 2, Col 6"],["Row 3, Col 1","Row 3, Col 2","Row 3, Col 3","Row 3, Col 4","Row 3, Col 5","Row 3, Col 6"],["Row 4, Col 1","Row 4, Col 2","Row 4, Col 3","Row 4, Col 4","Row 4, Col 5","Row 4, Col 6"],["Row 5, Col 1","Row 5, Col 2","Row 5, Col 3","Row 5, Col 4","Row 5, Col 5","Row 5, Col 6"]]},R={table1:T,table2:$},E={class:"container mx-auto px-4"},B={class:"overflow-x-auto mb-8"},D={class:"mb-4"},L={class:"min-w-full border-collapse mb-8 table"},U={class:"bg-blue-700 text-white"},A=["onUpdate:modelValue"],M={class:"overflow-x-auto"},N={class:"mb-4"},F={class:"min-w-full border-collapse table"},j={class:"bg-green-700 text-white"},P={key:0},q=["onUpdate:modelValue"],z=m({__name:"AppList",setup(y){const r=_({headers:R.table1.headers,rows:R.table1.rows}),w=_({headers:R.table2.headers,rows:R.table2.rows}),C=_(!1);function f(i,n){if(i<0||i>=r.value.headers.length){console.error("Invalid column index.");return}let s=[...r.value.rows];s.sort((l,b)=>{const a=l[i],c=b[i];return n==="asc"?a.localeCompare(c,void 0,{numeric:!0,sensitivity:"base"}):c.localeCompare(a,void 0,{numeric:!0,sensitivity:"base"})}),r.value.rows=s}function v(i,n){f(i,n)}function x(){C.value=!C.value}return(i,n)=>(e(),t("div",E,[o("div",B,[o("div",D,[o("button",{onClick:n[0]||(n[0]=s=>v(1,"asc")),class:"px-4 py-2 bg-blue-500 text-white rounded"},"Sort Column 2 Asc"),o("button",{onClick:n[1]||(n[1]=s=>v(1,"desc")),class:"px-4 py-2 bg-blue-500 text-white rounded"},"Sort Column 2 Desc")]),o("table",L,[o("thead",null,[o("tr",U,[(e(!0),t(d,null,u(r.value.headers,(s,l)=>(e(),t("th",{key:l,class:"px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider"},p(s),1))),128))])]),o("tbody",null,[(e(!0),t(d,null,u(r.value.rows,(s,l)=>(e(),t("tr",{key:l,class:"bg-white even:bg-gray-100 cursor-pointer"},[(e(!0),t(d,null,u(s,(b,a)=>(e(),t("td",{key:a,class:"px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900"},[g(o("input",{"onUpdate:modelValue":c=>r.value.rows[l][a]=c,class:"w-full border-none focus:ring-0"},null,8,A),[[h,r.value.rows[l][a]]])]))),128))]))),128))])])]),o("div",M,[o("div",N,[o("button",{onClick:x,class:"px-4 py-2 bg-green-500 text-white rounded"},p(C.value?"Save Changes":"Edit Table 2"),1)]),o("table",F,[o("thead",null,[o("tr",j,[(e(!0),t(d,null,u(w.value.headers,(s,l)=>(e(),t("th",{key:l,class:"px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium uppercase tracking-wider"},p(s),1))),128))])]),o("tbody",null,[(e(!0),t(d,null,u(w.value.rows,(s,l)=>(e(),t("tr",{key:l,class:"bg-white even:bg-gray-100 cursor-pointer"},[(e(!0),t(d,null,u(s,(b,a)=>(e(),t("td",{key:a,class:"px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900"},[C.value?g((e(),t("input",{key:1,"onUpdate:modelValue":c=>w.value.rows[l][a]=c,class:"w-full border-none focus:ring-0"},null,8,q)),[[h,w.value.rows[l][a]]]):(e(),t("span",P,p(b),1))]))),128))]))),128))])])])]))}});const G=k(z,[["__scopeId","data-v-92cb8620"]]),H={class:"mb-5 px-10 pt-8"},J=S('<div class="grid grid-cols-12 items-center"><div class="col-span-12 md:col-span-3 text-center page-title-container"><div class="flex items-center justify-between pl-3 page-title"><span class="title-icon mdi mdi-account-check-outline hidden sm:inline"></span><span class="title-text">Table 1</span></div></div></div>',1),K={class:"pb-10"},Q=m({__name:"ListPage",setup(y){return(r,w)=>(e(),t("div",H,[J,o("div",K,[V(G)])]))}});export{Q as default};