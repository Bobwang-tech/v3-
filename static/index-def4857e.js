import{k as e,as as a,a4 as l,W as s,a2 as n,b1 as u,x as t,f as o,aG as d,ay as r,I as i,aE as c,U as m,ak as v}from"./runtime-core.esm-bundler-9099a418.js";function p(){return new Promise(((e,a)=>{setTimeout((()=>{Math.random()>.5?e({code:0,data:[{key:1,label:"苹果",value:1},{key:2,label:"香蕉",value:2},{key:3,label:"橘子",value:3}],message:"成功"}):a(new Error("不小心出错了！"))}),3e3)}))}function b(l){const{apiFun:s}=l,n=e([]),u=e(!1),t=e("");return a((()=>{u.value=!0,n.value=[],s().then((e=>(u.value=!1,n.value=e.data,e.data)),(e=>(u.value=!1,n.value=[{value:"-1",label:e.message,disabled:!0}],Promise.reject(e))))})),{options:n,loading:u,selectedValue:t}}const f={class:"app-container"},g=l({__name:"index",setup(e){const{loading:a,options:l,selectedValue:g}=b({apiFun:p});return(e,p)=>{const b=d("el-option"),k=d("el-select");return r(),s("div",f,[n(k,{loading:t(a),modelValue:t(g),"onUpdate:modelValue":p[0]||(p[0]=e=>o(g)?g.value=e:null)},{default:u((()=>[(r(!0),s(i,null,c(t(l),((e,a)=>(r(),m(b,v(e,{key:a}),null,16)))),128))])),_:1},8,["loading","modelValue"])])}}});export{g as default};
