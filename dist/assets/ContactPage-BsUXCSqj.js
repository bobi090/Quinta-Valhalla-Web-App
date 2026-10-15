import{c as z,r as m,R as M,d as I,P as T,e as _,j as e,h as P,V as O,G as B}from"./index-DG3D73i7.js";import{A as q,S as H}from"./SectionHeading-BUjdkESi.js";import{c as w}from"./utils-DdwWbjLO.js";import{C as G,F as U}from"./FaqSection-BtmO4i1x.js";import{C as W}from"./check-vdFAS9cL.js";import{F as V}from"./FadeIn-DhOs4Pd2.js";import{E as $}from"./external-link-DHzZ6kLq.js";/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F={name:"car",size:24,node:[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]};F.node;const Q=z(F);/**
 * @license lucide-react v1.47.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};D.node;const J=z(D),N={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function k(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(r[1],16)/255,parseInt(r[2],16)/255,parseInt(r[3],16)/255]}function K(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function A(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?k(t):N[t.toLowerCase()]?k(N[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):K(t)}class S extends Array{constructor(r){return Array.isArray(r)?super(...r):super(...A(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(r){this[0]=r}set g(r){this[1]=r}set b(r){this[2]=r}set(r){return Array.isArray(r)?this.copy(r):this.copy(A(...arguments))}copy(r){return this[0]=r[0],this[1]=r[1],this[2]=r[2],this}}const Y=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Z=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uLightMode;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );
  vec3 m = max(
      0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
      0.0
  );
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  vec3 auroraColor = intensity * rampColor;
  if (uLightMode > 0.5) {
    float energy = clamp(max(intensity, 0.0), 0.0, 1.0);
    float coverage = clamp(auroraAlpha * (0.55 + 0.45 * energy), 0.0, 0.86);
    vec3 chroma = pow(clamp(rampColor, 0.0, 1.0), vec3(1.2));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 0.0001);
    fragColor = vec4(mix(vec3(1.0), chroma, min(coverage * 1.08, 0.94)), 1.0);
  } else {
    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
  }
}
`;function X(t){const{colorStops:r=["#42376fff","#7cff67","#5227FF"],amplitude:i=1,blend:h=.5,lightMode:u=!1}=t,f=m.useRef(t);f.current=t;const v=m.useRef(null);return m.useEffect(()=>{const c=v.current;if(!c)return;const l=new M({alpha:!0,premultipliedAlpha:!0,antialias:!0}),s=l.gl;s.clearColor(0,0,0,0),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.canvas.style.backgroundColor="transparent";let n;function x(){if(!c)return;const o=c.offsetWidth,d=c.offsetHeight;l.setSize(o,d),n&&(n.uniforms.uResolution.value=[o,d])}window.addEventListener("resize",x);const p=new I(s);p.attributes.uv&&delete p.attributes.uv;const g=r.map(o=>{const d=new S(o);return[d.r,d.g,d.b]});n=new T(s,{vertex:Y,fragment:Z,uniforms:{uTime:{value:0},uAmplitude:{value:i},uColorStops:{value:g},uResolution:{value:[c.offsetWidth,c.offsetHeight]},uBlend:{value:h},uLightMode:{value:u?1:0}}});const b=new _(s,{geometry:p,program:n});c.appendChild(s.canvas);let y=0;const a=o=>{y=requestAnimationFrame(a);const{time:d=o*.01,speed:C=1}=f.current;if(n){n.uniforms.uTime.value=d*C*.1,n.uniforms.uAmplitude.value=f.current.amplitude??1,n.uniforms.uBlend.value=f.current.blend??h,n.uniforms.uLightMode.value=f.current.lightMode??u?1:0;const L=f.current.colorStops??r;n.uniforms.uColorStops.value=L.map(R=>{const j=new S(R);return[j.r,j.g,j.b]}),l.render({scene:b})}};return y=requestAnimationFrame(a),x(),()=>{var o;cancelAnimationFrame(y),window.removeEventListener("resize",x),c&&s.canvas.parentNode===c&&c.removeChild(s.canvas),(o=s.getExtension("WEBGL_lose_context"))==null||o.loseContext()}},[i]),e.jsx("div",{ref:v,className:"w-full h-full"})}const E=({value:t,onValueChange:r,options:i,placeholder:h="Seleccionar…",className:u,id:f,name:v,disabled:c=!1})=>{const[l,s]=m.useState(!1),[n,x]=m.useState(-1),p=m.useRef(null),g=m.useRef(null),b=i.find(a=>a.value===t);m.useEffect(()=>{const a=o=>{p.current&&!p.current.contains(o.target)&&s(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),m.useEffect(()=>{if(!l)return;const a=o=>{o.key==="Escape"&&s(!1)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[l]);const y=m.useCallback(a=>{if(!c){if(!l&&(a.key==="Enter"||a.key===" "||a.key==="ArrowDown")){a.preventDefault(),s(!0),x(i.findIndex(o=>o.value===t));return}if(l)switch(a.key){case"ArrowDown":a.preventDefault(),x(o=>(o+1)%i.length);break;case"ArrowUp":a.preventDefault(),x(o=>(o-1+i.length)%i.length);break;case"Enter":case" ":a.preventDefault(),n>=0&&(r(i[n].value),s(!1));break;case"Escape":s(!1);break}}},[l,n,i,t,r,c]);return m.useEffect(()=>{var o;if(!l||n<0||!g.current)return;(o=g.current.querySelectorAll('[role="option"]')[n])==null||o.scrollIntoView({block:"nearest"})},[n,l]),e.jsxs("div",{ref:p,className:"relative w-full",onKeyDown:y,children:[v&&e.jsx("input",{type:"hidden",name:v,value:t}),e.jsxs("button",{type:"button",id:f,role:"combobox","aria-expanded":l,"aria-haspopup":"listbox",disabled:c,onClick:()=>{c||(s(!l),x(i.findIndex(a=>a.value===t)))},className:w("w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 text-sm font-sans text-on-surface transition-all duration-300","hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",l&&"border-primary ring-1 ring-primary",c&&"opacity-50 cursor-not-allowed",u),children:[e.jsx("span",{className:w(!b&&"text-outline-variant"),children:b?b.label:h}),e.jsx(G,{size:16,strokeWidth:2,className:w("text-on-surface-variant shrink-0 transition-transform duration-200",l&&"rotate-180")})]}),l&&e.jsx("ul",{ref:g,role:"listbox","aria-activedescendant":n>=0?`select-option-${i[n].value}`:void 0,className:w("absolute z-50 mt-1.5 w-full max-h-60 overflow-y-auto rounded-xl border border-outline-variant/40 bg-surface-container-lowest shadow-lg","py-1.5 focus:outline-none","animate-in fade-in-0 zoom-in-95"),style:{animation:"selectFadeIn 150ms ease-out"},children:i.map((a,o)=>{const d=a.value===t,C=o===n;return e.jsxs("li",{id:`select-option-${a.value}`,role:"option","aria-selected":d,onMouseEnter:()=>x(o),onClick:()=>{r(a.value),s(!1)},className:w("flex items-center justify-between px-4 py-2.5 text-sm font-sans cursor-pointer transition-colors duration-150",C&&"bg-primary/[0.06]",d?"text-primary font-semibold":"text-on-surface hover:bg-primary/[0.04]"),children:[e.jsx("span",{children:a.label}),d&&e.jsx(W,{size:14,strokeWidth:2.5,className:"text-primary shrink-0"})]},a.value)})}),l&&e.jsx("style",{children:`
          @keyframes selectFadeIn {
            from { opacity: 0; transform: scale(0.97) translateY(-4px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `})]})},ee=()=>{const[t,r]=m.useState({name:"",phone:"",eventType:"Cumpleaños",estimatedDate:"",guestCount:"50 a 100",notes:""}),i=u=>{r({...t,[u.target.name]:u.target.value})},h=u=>{if(u.preventDefault(),!t.name||!t.phone)return;const f=P(t);window.open(f,"_blank")};return e.jsxs("section",{className:"py-24 relative overflow-hidden",id:"contacto-seccion",children:[e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx(X,{colorStops:["#032517","#5E7153","#C5A880"],amplitude:1.2,blend:.6,speed:.4})}),e.jsx("div",{className:"absolute inset-0 z-0 bg-primary/60 pointer-events-none"}),e.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 relative z-10",children:[e.jsx(V,{triggerOnce:!0,direction:"up",duration:.8,children:e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-12 md:mb-16",children:[e.jsx("h2",{className:"font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight leading-tight",children:"Consultá por tu evento"}),e.jsx(q,{colorClass:"bg-white/40",iconColorClass:"text-white/70"}),e.jsx("p",{className:"font-sans text-base sm:text-lg text-white/80 leading-relaxed",children:"Completá el formulario para que podamos asesorarte y confirmar disponibilidad."})]})}),e.jsx("div",{className:"max-w-2xl mx-auto p-8 sm:p-10 md:p-12 rounded-3xl bg-surface-container-lowest border border-secondary/25 shadow-sm",children:e.jsxs("form",{onSubmit:h,className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"Nombre *"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,value:t.name,onChange:i,placeholder:"Tu nombre",className:"w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"WhatsApp *"}),e.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0,value:t.phone,onChange:i,placeholder:"Ej: 11 5555-8888",className:"w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"eventType",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"Tipo de Evento"}),e.jsx(E,{id:"eventType",name:"eventType",value:t.eventType,onValueChange:u=>r({...t,eventType:u}),options:[{value:"Casamiento",label:"Casamiento"},{value:"15 Años",label:"15 Años"},{value:"18 Años",label:"18 Años"},{value:"Cumpleaños",label:"Cumpleaños"},{value:"Egresados",label:"Fiesta de Egresados"},{value:"Otro",label:"Otro"}],placeholder:"Seleccioná el tipo"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"guestCount",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"Invitados Estimados"}),e.jsx(E,{id:"guestCount",name:"guestCount",value:t.guestCount,onValueChange:u=>r({...t,guestCount:u}),options:[{value:"Hasta 50",label:"Hasta 50"},{value:"50 a 70",label:"50 a 70"},{value:"70 a 100",label:"70 a 100"},{value:"Más de 100",label:"Más de 100"}],placeholder:"Cantidad estimada"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"estimatedDate",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"Fecha"}),e.jsx("input",{type:"text",id:"estimatedDate",name:"estimatedDate",value:t.estimatedDate,onChange:i,placeholder:"Ej: Noviembre 2026 o fecha específica",className:"w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"notes",className:"block text-xs font-sans font-semibold uppercase tracking-wider text-on-surface-variant mb-2",children:"Consultas adicionales"}),e.jsx("textarea",{id:"notes",name:"notes",rows:3,value:t.notes,onChange:i,placeholder:"¿Algo que quieras contarnos sobre tu evento?",className:"w-full px-4 py-3.5 rounded-xl bg-surface border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans text-on-surface placeholder:text-outline-variant transition-colors duration-300 hover:border-primary/50 resize-y"})]}),e.jsx("div",{className:"pt-4",children:e.jsxs("button",{type:"submit",className:"w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-primary text-surface font-sans text-base font-semibold hover:opacity-80 transition-opacity duration-200",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"w-5 h-5 fill-current shrink-0","aria-hidden":"true",children:e.jsx("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})}),e.jsx("span",{children:"Enviar mensaje por WhatsApp"})]})})]})})]})]})},le=()=>e.jsxs("main",{className:"flex-grow pt-24 pb-20",children:[e.jsx(ee,{}),e.jsx("section",{className:"py-16 bg-surface-container-low border-y border-outline-variant/30",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[e.jsx(H,{badge:"Ubicación",badgeIcon:"explore",title:"Cómo llegar a Quinta Valhalla"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[e.jsx("div",{className:"lg:col-span-5",children:e.jsxs("div",{className:"p-6 rounded-2xl bg-surface-container-lowest border border-secondary/25 shadow-xs space-y-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2 text-primary font-serif text-lg font-semibold",children:[e.jsx(Q,{size:22,className:"text-secondary"}),e.jsx("span",{children:"Dónde nos ubicamos"})]}),e.jsx("p",{className:"font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed",children:"Nos encontramos a pocas cuadras de 20 de Junio, por la bajada de la nueva autopista Presidente Perón, con acceso rapido desde distintos puntos de Zona Oeste."})]}),e.jsx("hr",{className:"border-outline-variant/30"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2 text-primary font-serif text-lg font-semibold",children:[e.jsx(J,{size:22,className:"text-secondary"}),e.jsx("span",{children:"Dirección"})]}),e.jsx("p",{className:"font-sans text-sm text-on-surface-variant leading-relaxed font-semibold",children:O}),e.jsxs("a",{href:B,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 mt-3 text-xs font-sans font-semibold text-primary hover:text-secondary transition-colors",children:[e.jsx("span",{children:"Abrir en Google Maps"}),e.jsx($,{size:14})]})]})]})}),e.jsx("div",{className:"lg:col-span-7 rounded-3xl overflow-hidden border border-secondary/30 shadow-md relative min-h-[380px] bg-surface-container",children:e.jsx("iframe",{title:"Mapa de Ubicación Quinta Valhalla en 20 de Junio",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.636671077755!2d-58.7237731!3d-34.775768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc3711e435919%3A0x3286a91f30639faf!2sQuinta%20Valhalla!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar",width:"100%",height:"100%",style:{border:0,minHeight:"380px"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full"})})]})]})}),e.jsx(U,{})]});export{le as ContactPage};
