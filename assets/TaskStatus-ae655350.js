import{d as x,c as D,a as n,F as c,r as h,o,w as S,v as $,b as d,e as G,_ as L,E as C,f as w,G as A,n as u,l as g,H as N,p as m,t as k,u as U}from"./index-75810c09.js";const B={id:"AppCheckboxGroup"},P=["id","name","value"],T=["for"],E=x({__name:"AppCheckboxGroup",props:{groupName:{},modelValue:{},source:{}},emits:["update:modelValue"],setup(y,{emit:b}){const p=y,i=b,l=D({get(){return p.modelValue},set(s){i("update:modelValue",s)}});return(s,_)=>(o(),n("div",B,[(o(!0),n(c,null,h(s.source,r=>(o(),n(c,{key:r},[S(d("input",{id:r,name:r,value:r,"onUpdate:modelValue":_[0]||(_[0]=f=>l.value=f),type:"checkbox",class:"hidden"},null,8,P),[[$,l.value]]),d("label",{class:"btn btn-xs text-black bg-white",for:r},[G(s.$slots,"default",{value:r},void 0,!0)],8,T)],64))),128))]))}});const v=L(E,[["__scopeId","data-v-29e71733"]]),F=d("h2",null,"処理名を選択してください",-1),M=d("h2",null,"実行状況を選択してください",-1),j=d("h2",null,"起動ユーザを選択してください",-1),H={class:"table"},I=["onClick"],R=x({__name:"TaskStatus",setup(y){const b=N(),p=C(["taskid","user","data_name","status","begin","end","log","download"]),i=C([]),l=w({data_name:[],user:[],status:[]}),s=w({data_name:[],user:[],status:[]});A().then(a=>{i.value=a,l.data_name=s.data_name=a.map(e=>e.data_name).Distinct(),l.user=s.user=a.map(e=>e.user).Distinct(),l.status=s.status=a.map(e=>e.status).Distinct()});const _=D(()=>i.value.filter(a=>s.data_name.includes(a.data_name)&&s.user.includes(a.user)&&s.status.includes(a.status))),r=x({props:{record:Object,keyProp:String},setup(a){const e=a.record[a.keyProp];switch(a.keyProp){case"taskid":return()=>u("span",null,[e]);case"user":return()=>u("span",null,[e]);case"data_name":return()=>u("span",null,[e]);case"status":return()=>u("span",null,[e]);case"begin":return()=>u("span",null,[new Date(e).toLocaleString()]);case"end":return()=>u("span",null,[new Date(e).toLocaleString()]);case"log":return()=>u("span",null,[e]);case"download":return()=>e&&u("a",{class:"btn btn-sm",href:e},[m("DL")])}}}),f=a=>{b.push(`/TaskLog?id=${a.taskid}`)};return(a,e)=>(o(),n("div",null,[F,u(v,{"group-name":"status",modelValue:s.data_name,"onUpdate:modelValue":e[0]||(e[0]=t=>s.data_name=t),source:l.data_name},{default:g(({value:t})=>[m(k(t),1)]),_:1},8,["modelValue","source"]),M,u(v,{"group-name":"status",modelValue:s.status,"onUpdate:modelValue":e[1]||(e[1]=t=>s.status=t),source:l.status},{default:g(({value:t})=>[m(k(t),1)]),_:1},8,["modelValue","source"]),j,u(v,{"group-name":"user",modelValue:s.user,"onUpdate:modelValue":e[2]||(e[2]=t=>s.user=t),source:l.user},{default:g(({value:t})=>[m(k(t),1)]),_:1},8,["modelValue","source"]),d("table",H,[d("thead",null,[(o(!0),n(c,null,h(p.value,t=>(o(),n("th",{key:t},k(t),1))),128))]),d("tbody",null,[(o(!0),n(c,null,h(_.value,t=>(o(),n("tr",{key:t.taskid,onClick:V=>f(t)},[(o(!0),n(c,null,h(p.value,V=>(o(),n("td",{key:V},[u(U(r),{record:t,"key-prop":V},null,8,["record","key-prop"])]))),128))],8,I))),128))])])]))}});export{R as default};