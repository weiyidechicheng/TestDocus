import b from"./TabsHeader.da342b07.js";import v from"./ComponentPlaygroundProps.d862c2c4.js";import{_ as x}from"./ComponentPlaygroundSlots.vue.bc53b5a1.js";import{_ as g}from"./ComponentPlaygroundTokens.vue.8bfa0c37.js";import{a as k}from"./index.ceee6c89.js";import{k as D,r as V,o as n,e as C,h as P,u as o,c as m,a8 as T,s,b as B}from"./entry.e1e529aa.js";import"./ProseH4.799d13d6.js";import"./ProseCodeInline.c9d84208.js";import"./Badge.3ce7f481.js";import"./ContentSlot.7066d235.js";import"./ProseP.1abaf6c9.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=v,i=x,f=g;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const z=B(j,[["__scopeId","data-v-ff75821c"]]);export{z as default};