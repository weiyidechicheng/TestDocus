import{_ as m}from"./NuxtImg.vue.9e809eaa.js";import{k as f,m as i,r as _,o as s,e as c,u as e,c as h,s as u,P as k,V as v,t as w,p as b,j as g,f as V,b as B}from"./entry.e1e529aa.js";/* empty css                        */const I=t=>(b("data-v-3c798ec4"),t=t(),g(),t),S={key:1,class:"loaded"},x=["poster"],C=["src"],P=["src","type"],$=["autoplay","src"],N=I(()=>V("button",null,null,-1)),j=[N],E=f({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=_(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,n;return r.src||((n=(o=r.sources)==null?void 0:o[0])==null?void 0:n.src)||!1});return(o,n)=>{const y=m;return s(),c("div",{class:w(["video-player",{loaded:e(p)}])},[(e(a)?e(a).poster:t.poster)?(s(),h(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),c("div",S,[e(a)?e(a).name==="youtube"?(s(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,$)):u("",!0):(s(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),c("source",{key:0,src:e(d)},null,8,C)):u("",!0),(s(!0),c(k,null,v(t.sources,l=>(s(),c("source",{key:l.src||l,src:l.src||l,type:l.type},null,8,P))),128))],8,x))])):u("",!0),e(p)?u("",!0):(s(),c("div",{key:2,class:"play-button",onClick:n[0]||(n[0]=l=>p.value=!0)},j))],2)}}}),F=B(E,[["__scopeId","data-v-3c798ec4"]]);export{F as default};
