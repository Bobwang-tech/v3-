import{a,y as e,c as s,R as l,j as t,g as o,o as n,b as i,z as u,t as d,u as r,e as m,w as c}from"./index.1f0b9af7.js";const p={style:{"margin-bottom":"15px"}},g={style:{display:"flex","align-items":"center"}},b=u("span",null,"切换权限：",-1),v=a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:v}){const f=e(),y=s((()=>f.roles)),h=l(y.value[0]);return t(h,(async a=>{await f.changeRoles(a),v("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return n(),i("div",null,[u("div",p,"你的权限："+d(r(y)),1),u("div",g,[b,m(l,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=a=>h.value=a)},{default:c((()=>[m(s,{label:"editor"}),m(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}});export{v as _};
