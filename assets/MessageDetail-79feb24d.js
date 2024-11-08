import{d as ye,f as X,S as Y,c as p,L as xe,M as U,N as E,E as r,O as we,j as ke,a as i,b as s,t as d,p as M,u as g,F as Me,r as De,P as Z,s as b,Q as Ne,w as G,v as J,n as S,l as Ce,R as Se,T as Te,U as Ie,H as Re,V as Ue,W as Ee,X as ee,Y as te,Z as Ve,$ as V,a0 as Be,o as c,a1 as se,a2 as ae,a3 as Fe,a4 as B}from"./index-75810c09.js";/* empty css                            */const $e={class:"px-10"},Le={key:0,class:"card"},je={class:"flex flex-col md:flex-row md:justify-between p-10"},Pe={class:"mb-5"},qe={class:"text-lg"},ze={class:"text-lg"},He={class:"text-lg"},Ae=s("div",{class:"hidden md:block text-5xl"},[s("span",{class:"mdi mdi-message-alert"})],-1),Oe={class:"p-10"},We={key:0,class:"flex flex-col items-center"},Ke={class:"mb-2 cursor-default"},Qe=s("span",{class:"mdi mdi-file-document mr-1"},null,-1),Xe={class:"message-buttons p-10 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full"},Ye={key:1,class:"w-full mt-10"},Ze={class:"mt-10 text-right"},Ge={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Je={class:"bg-white p-6 rounded-md shadow-lg w-full max-w-md"},et=s("h2",{class:"text-xl font-semibold mb-4"},"Update Scheduled Dates",-1),tt={class:"filters mb-10"},st={class:"flex items-center"},at=s("span",{class:"ml-2"},"Email notification",-1),ot={class:"flex items-center"},lt=s("span",{class:"ml-2"},"Push notification",-1),nt={key:0},it={class:"date-picker mb-4"},ct=s("label",{class:"label mb-2",for:"date-from"},"Date From",-1),ut={class:"date-picker mb-4"},rt=s("label",{class:"label mb-2",for:"date-to"},"Date To",-1),dt={class:"col-span-2 mb-2"},mt=s("label",{class:"label mb-2"},"Notification Time",-1),vt={key:1,class:"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4",role:"alert"},ft={key:2,class:"mt-10 text-right"},pt=ye({__name:"MessageDetail",props:{id:{type:String,required:!0}},setup(oe){var A,O,W,K,Q;const F=X(Y.auth),$=F.id||"",le=p(()=>F.role===xe),ne=oe,D=p({get(){const e=ne.id;return isNaN(Number(e))?e:Number(e)},set(e){return isNaN(Number(e))?e:e.toString()}}),y=U(E.DB,"messages"),t=r(null),T=async()=>{var a,l;const e=await Se(y,D.value);t.value=e||null,t.value!==null&&(x.value=t.value.schedule_date_from,w.value=t.value.schedule_date_to,u.value=t.value.scheduled_notification_datetime??0,m.value=!!((a=t.value)!=null&&a.is_notify_mail),v.value=!!((l=t.value)!=null&&l.is_notify_push))};we(()=>{T()}),ke(D,()=>{T()});const N=r(""),L=()=>{t.value&&t.value.confirmed_receivers.includes($)?N.value="Message Confirmed as Read":N.value="I have read this"},ie=p(()=>N.value==="Message Confirmed as Read"?"confirmed-button":"recieved-button"),ce=p(()=>t.value&&t.value.context?t.value.context.split("。").filter(e=>e.trim()!=="").map(e=>e+"。"):[]),ue=async()=>{const e=D.value,a=$;if(t.value&&!t.value.confirmed_receivers.includes(a)){t.value.confirmed_receivers=t.value.confirmed_receivers?`${t.value.confirmed_receivers},${a}`:a;const l={confirmed_receivers:t.value.confirmed_receivers};try{await Te(y,e,l),L()}catch(o){console.error("Error saving confirmation:",o)}}else console.warn("Receiver already confirmed for this message.")},re=async()=>{const e=D.value;try{await Ie(y,e),console.log("Message deleted successfully."),t.value=null}catch(a){console.error("Error deleting message:",a)}},de=Re(),m=r(!!((A=t.value)!=null&&A.is_notify_mail)),v=r(!!((O=t.value)!=null&&O.is_notify_push)),C=r(!1),x=r(((W=t.value)==null?void 0:W.schedule_date_from)??0),w=r(((K=t.value)==null?void 0:K.schedule_date_to)??0),u=r(((Q=t.value)==null?void 0:Q.scheduled_notification_datetime)??0),j=p({get(){return new Date(x.value)},set(e){e===null?x.value=0:x.value=e.getTime()}}),P=p({get(){return new Date(w.value)},set(e){e===null?w.value=0:w.value=e.getTime()}}),q=p({get(){return new Date(u.value)},set(e){e===null?u.value=0:u.value=e.getTime(),t.value!==null&&(t.value.scheduled_notification_datetime=e.getTime())}}),me=r(Date.now()),ve=()=>{C.value=!C.value},z=()=>{C.value=!1},fe=U(E.DB,"notifications"),_e=async e=>{try{const o=(await V.get(fe)).data.find(n=>{const f=String(e).trim();return String(n.messageId).trim()===f});if(o){const n=o.notificationId;return console.log("Notification ID:",n),n}else return console.log("No matching notification found."),null}catch(a){return console.error("Error fetching notifications:",a),null}},ge=async()=>{var a,l,o,n;if(!t.value){console.error("No message data available.");return}const e=t.value.id;if(!e){console.error("Message ID is not provided");return}try{if(v.value!==((a=t.value)==null?void 0:a.is_notify_push)||m.value!==((l=t.value)==null?void 0:l.is_notify_mail)){const f=t.value.target_mails??[],h=t.value.title;if(v.value!==((o=t.value)==null?void 0:o.is_notify_push)){const _=await _e(e);if(_&&await Ue(_),v.value){const R=X(Y.token_info).filter(k=>f.includes(k["user-id"])).map(k=>k.token);if(u.value){const k=U(E.Web,"messages",e),be=await Ee(u.value,R??[],ee(h),te(e,"messages"),k);console.log(be)}}}if(m.value!==((n=t.value)==null?void 0:n.is_notify_mail)&&m.value&&u.value){const _=await Ve(u.value,f??[],ee(h),te(e,"messages"),e.toString());console.log(_)}await pe(e,m.value,v.value,x.value,w.value,u.value),T()}z()}catch(f){console.error("Error updating message:",f)}},pe=async(e,a,l,o,n,f)=>{if(!e){console.error("Message ID is not provided");return}try{const _=(await V.get(`${y}/?id=${e}`)).data[0];if(!_){console.error("No existing message data found");return}console.log("Existing Message Data:",_);const I={..._,is_notify_mail:a,is_notify_push:l,schedule_date_from:o,schedule_date_to:n,scheduled_notification_datetime:f};console.log("Updated Message Data:",I),await V.put(`${y}/${e}`,I);const R=`/message/${e}`;de.push(R)}catch(h){console.error("Error updating message data:",h)}};L();const H=e=>{var l;const a=(l=e.split("/").pop())==null?void 0:l.split("?")[0].split("%2F").pop();return a===void 0?"N/A":a},he=async e=>{const l=await(await fetch(e)).blob(),o=document.createElement("a");o.href=window.URL.createObjectURL(l),o.download=H(e),document.body.appendChild(o),o.click(),document.body.removeChild(o)};return(e,a)=>{const l=Be("router-link");return c(),i("div",$e,[t.value?(c(),i("div",Le,[s("div",je,[s("div",null,[s("h1",Pe,d(t.value.title),1),s("p",qe,[M("From: "),s("b",null,d(g(se)(t.value.sender_id).organization)+" "+d(g(se)(t.value.sender_id).name),1)]),s("p",ze,[M("Category: "),s("b",null,d(t.value.category),1)]),s("p",He,[M("Publication Date: "),s("b",null,d(g(ae)(t.value.schedule_date_from))+" - "+d(g(ae)(t.value.schedule_date_to)),1)])]),Ae]),s("div",Oe,[(c(!0),i(Me,null,De(ce.value,(o,n)=>(c(),i("div",{class:"text-lg",key:n},[s("p",null,d(o),1)]))),128)),t.value.attachment_url?(c(),i("div",We,[s("p",Ke,d(H(t.value.attachment_url)),1),s("a",{onClick:a[0]||(a[0]=Z(o=>he(t.value.attachment_url),["prevent"])),class:"button success-button link"},[Qe,M(" Download File ")])])):b("",!0)]),s("div",Xe,[t.value.category===g(Fe)?(c(),i("button",{key:0,class:Ne(["button success-button",ie.value]),onClick:ue},d(N.value),3)):b("",!0),s("button",{class:"button danger-button",onClick:re},"Delete Message"),t.value.schedule_date_from>me.value?(c(),i("div",Ye,[s("div",Ze,[s("button",{class:"button primary-button",onClick:Z(ve,["prevent"])}," Edit scheduled dates ")]),C.value?(c(),i("div",Ge,[s("div",Je,[et,s("div",tt,[s("label",st,[G(s("input",{type:"checkbox",class:"toggle toggle-lg [--tglbg:#D8D8DB]","onUpdate:modelValue":a[1]||(a[1]=o=>m.value=o)},null,512),[[J,m.value]]),at]),s("label",ot,[G(s("input",{type:"checkbox",class:"toggle toggle-lg [--tglbg:#D8D8DB]","onUpdate:modelValue":a[2]||(a[2]=o=>v.value=o)},null,512),[[J,v.value]]),lt]),m.value||v.value?(c(),i("div",nt,[s("div",it,[ct,S(g(B),{"auto-apply":"",format:"yyyy/MM/dd","input-class-name":"input","enable-time-picker":!1,modelValue:j.value,"onUpdate:modelValue":a[3]||(a[3]=o=>j.value=o),required:"",class:"custom-datepicker"},null,8,["modelValue"])]),s("div",ut,[rt,S(g(B),{"auto-apply":"",format:"yyyy/MM/dd","input-class-name":"input","enable-time-picker":!1,modelValue:P.value,"onUpdate:modelValue":a[4]||(a[4]=o=>P.value=o),required:"",class:"custom-datepicker"},null,8,["modelValue"])]),s("div",dt,[mt,S(g(B),{enableTime:"true",format:"yyyy/MM/dd HH:mm","input-class-name":"input",modelValue:q.value,"onUpdate:modelValue":a[5]||(a[5]=o=>q.value=o),required:"",class:"custom-input"},null,8,["modelValue"])])])):b("",!0)]),s("div",{class:"flex justify-between mt-6"},[s("button",{class:"button secondary-button",onClick:z},"Close"),s("button",{class:"button primary-button",onClick:ge}," Update ")])])])):b("",!0)])):b("",!0)])])):(c(),i("div",vt," Message could not be found or has been deleted. ")),le.value?(c(),i("div",ft,[S(l,{class:"button primary-button",to:"/sent_messages"},{default:Ce(()=>[M("Return to inbox")]),_:1})])):b("",!0)])}}});export{pt as default};
