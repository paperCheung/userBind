import{_ as B,r as a,d as C,c as d,a as t,b as s,t as b,f as o,o as u,g as M,i as h}from"./index-voEB5tqT.js";import{u as S,I as j,b as F,C as L,F as N,B as T,c as r}from"./index-AE9qm6yZ.js";const U={key:0,class:"flex flex-col items-center min-h-[100vh] p-[20px] bg-[#f1f5f9]"},$={class:"w-full p-[20px] pt-[50px] rounded-lg text-center bg-white"},q={class:"flex justify-center mb-[16px]"},A={class:"flex justify-center items-center w-[60px] h-[60px] rounded-full bg-[#07c160]"},D={class:"px-[10px] rounded-lg bg-[#fff]"},E={class:"flex"},G={class:"flex-1 text-left text-[#c8c9cc] break-all"},H={class:"my-[16px]"},J={key:1,class:"flex flex-col justify-center items-center pt-[80px]"},K={__name:"index",setup(O){const p=S(),f=a(!1),g=a(p.userInfo.openid),l=a(p.userInfo.phone),v=a(""),n=a(60),c=a(!1),w=C(()=>c.value?`${n.value}秒后重试`:"获取验证码"),y=()=>{if(!l.value){r("请输入手机号");return}if(!/^1[3-9]\d{9}$/.test(l.value)){r("请输入正确的手机号码");return}c.value=!0,n.value=60;const x=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(x),c.value=!1)},1e3);r("验证码已发送")},V=()=>{f.value=!0};return(x,e)=>{const z=j,m=N,_=T,I=L,k=F;return u(),d("div",null,[f.value?(u(),d("div",J,e[5]||(e[5]=[t("svg",{t:"1742549870464",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11180",width:"80",height:"80"},[t("path",{d:"M751.658667 569.088a29.994667 29.994667 0 0 1-21.162667-51.157333l183.552-183.722667a159.573333 159.573333 0 0 0 47.061333-113.536 159.488 159.488 0 0 0-47.061333-113.578667 160.426667 160.426667 0 0 0-226.944 0l-183.594667 183.765334a29.994667 29.994667 0 0 1-42.325333 0 30.122667 30.122667 0 0 1 0-42.368l183.594667-183.765334a220.330667 220.330667 0 0 1 376.064 155.989334 219.306667 219.306667 0 0 1-64.512 155.946666l-183.552 183.722667a29.909333 29.909333 0 0 1-21.205334 8.832l0.042667-0.128z m-119.68 449.194667a29.994667 29.994667 0 0 1-29.909334-29.952v-179.712c0-16.512 13.44-29.952 29.909334-29.952s29.909333 13.44 29.909333 29.952v179.712a29.994667 29.994667 0 0 1-29.909333 29.952z m358.997333-359.381334h-179.498667a29.994667 29.994667 0 0 1 0-59.904h179.498667a29.994667 29.994667 0 0 1 0 59.904z m-119.68 239.616a29.824 29.824 0 0 1-21.162667-8.789333l-119.68-119.808a29.994667 29.994667 0 0 1 42.325334-42.368l119.68 119.808a30.122667 30.122667 0 0 1 0 42.368 29.866667 29.866667 0 0 1-21.205334 8.789333h0.042667zM213.12 419.285333H33.621333a29.909333 29.909333 0 0 1 0-59.861333h179.498667a29.866667 29.866667 0 1 1 0 59.861333z m179.498667-179.669333a29.909333 29.909333 0 0 1-29.909334-29.952V29.952a29.909333 29.909333 0 1 1 59.818667 0v179.712a29.952 29.952 0 0 1-29.909333 29.952zM272.938667 299.477333a30.037333 30.037333 0 0 1-21.205334-8.746666L132.053333 170.922667a30.122667 30.122667 0 0 1 0-42.368 29.994667 29.994667 0 0 1 42.325334 0l119.68 119.808a29.994667 29.994667 0 0 1-21.162667 51.114666h0.042667zM224.042667 1018.282667a219.136 219.136 0 0 1-155.861334-64.597334 220.885333 220.885333 0 0 1 0-311.893333L251.733333 458.026667a29.994667 29.994667 0 0 1 42.325334 42.368L110.506667 684.16a160.938667 160.938667 0 0 0 0 227.2c30.293333 30.421333 70.570667 47.104 113.408 47.104s83.2-16.682667 113.450666-47.104l183.594667-183.808a29.994667 29.994667 0 0 1 42.325333 0 30.037333 30.037333 0 0 1 0 42.368l-183.594666 183.808a218.794667 218.794667 0 0 1-155.776 64.597333h0.128z",fill:"#fcca00","p-id":"11181"})],-1),t("div",{class:"mt-[30px] text-[18px] text-[#888]"},"您已完成手机号解绑",-1)]))):(u(),d("div",U,[t("div",$,[t("div",q,[t("div",A,[s(z,{name:"success",color:"#fff",size:"36"})])]),e[4]||(e[4]=t("div",{class:"mb-[30px] text-[16px] text-[#333]"},"您已完成手机号绑定，信息如下",-1)),t("div",D,[t("div",E,[e[2]||(e[2]=t("span",{class:"w-[80px] text-left text-[#c8c9cc]"},"openid",-1)),t("span",G,b(g.value),1)])]),s(k,{class:"mt-[10px]",onSubmit:V},{default:o(()=>[s(I,{inset:""},{default:o(()=>[s(m,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),label:"手机号",disabled:""},null,8,["modelValue"]),s(m,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=i=>v.value=i),center:"",label:"验证码",type:"digit",placeholder:"请输入验证码",rules:[{required:!0,message:"请填写验证码"}]},{button:o(()=>[s(_,{size:"small",type:"primary",class:"w-[86px]",disabled:c.value,onClick:M(y,["prevent"])},{default:o(()=>[h(b(w.value),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1}),t("div",H,[s(_,{round:"",block:"",type:"danger","native-type":"submit"},{default:o(()=>e[3]||(e[3]=[h("解 绑")])),_:1})])]),_:1})])]))])}}},R=B(K,[["__scopeId","data-v-c2e5d786"]]);export{R as default};
