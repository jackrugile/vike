function E(e,t){let o;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,o=new Error(e),Error.stackTraceLimit=n}return o.stack=X(o.stack,t),o}function X(e,t){if(!e)return e;const o=ee(e);let n=0;return o.filter(l=>l.includes(" (internal/")||l.includes(" (node:internal")?!1:n<t&&Z(l)?(n++,!1):!0).join(`
`)}function Z(e){return e.startsWith("    at ")}function ee(e){return e.split(/\r?\n/)}function F(e,t){const o=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return o[e]=o[e]||t}function D(e){return Array.from(new Set(e))}const x=F("assertPackageInstances.ts",{instances:[]});function te(){const e=D(x.instances);if(e.length>1)throw new Error(`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`)}function B(){if(!!x.checkBundle&&!(x.instances.length<=1))throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)")}function Er(){x.checkBundle=!0,B()}function oe(e){x.instances.push(e),te(),B()}const re="0.4.49",m={projectName:"vite-plugin-ssr",projectVersion:re,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};oe(m.projectVersion);const N=`[${m.npmPackageName}@${m.projectVersion}]`,ne=`${N}[Bug]`,se=`${N}[Wrong Usage]`,ae=`${N}[Warning]`,le=`${N}[Info]`,R=2;function s(e,t){if(e)return;const o=(()=>{if(!t)return"";const r=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${r}.`})();throw E([`${ne} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${m.projectName} more robust.`,o].join(" "),R)}function g(e,t){if(e)return;const o=t.startsWith("[")?"":" ";throw E(`${se}${o}${t}`,R)}function Fr(e){const t=e.startsWith("[")?"":" ";return E(`${N}${t}${e}`,R)}const U=F("assert.ts",{alreadyLogged:new Set});function ie(e,t,{onlyOnce:o,showStackTrace:n}){if(e)return;const r=`${ae} ${t}`;if(o){const{alreadyLogged:l}=U,a=o===!0?r:o;if(l.has(a))return;l.add(a)}console.warn(n?new Error(r):r)}function Rr(e,t,{onlyOnce:o}){if(e)return;const n=`${le} ${t}`;if(o){const{alreadyLogged:r}=U,l=n;if(r.has(l))return;r.add(l)}console.log(n)}function $(e,t,o){return typeof e=="string"?L(e.split(""),t,o).join(""):L(e,t,o)}function L(e,t,o){const n=[];let r=t>=0?t:e.length+t;s(r>=0&&r<=e.length);let l=o>=0?o:e.length+o;for(s(l>=0&&l<=e.length);!(r===l||(r===e.length&&(r=0),r===l));){const a=e[r];s(a!==void 0),n.push(a),r++}return n}function _e(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ce(e,t){s(_e(e),{url:e}),s(t.startsWith("/"),{url:e,baseUrl:t});const[o,...n]=e.split("#");s(o!==void 0);const r=["",...n].join("#")||null;s(r===null||r.startsWith("#"));const l=r===null?"":M(r.slice(1)),[a,...i]=o.split("?");s(a!==void 0);const _=["",...i].join("?")||null;s(_===null||_.startsWith("?"),{url:e,searchOriginal:_});const u={},j={};Array.from(new URLSearchParams(_||"")).forEach(([b,y])=>{u[b]=y,j[b]=[...j[b]||[],y]});const{origin:f,pathnameResolved:S}=de(a,t);s(f===null||f===M(f),{origin:f}),s(S.startsWith("/"),{url:e,pathnameResolved:S}),s(f===null||e.startsWith(f),{url:e,origin:f});const T=a.slice((f||"").length);{const b=`${f||""}${T}${_||""}${r||""}`;s(e===b,{url:e,urlRecreated:b})}let{pathname:c,hasBaseUrl:p}=pe(S,t);return c=ue(c),s(c.startsWith("/")),{origin:f,pathname:c,pathnameOriginal:T,hasBaseUrl:p,search:u,searchAll:j,searchOriginal:_,hash:l,hashOriginal:r}}function M(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function ue(e){return e.split("/").map(t=>M(t).split("/").join("%2F")).join("/")}function de(e,t){var o;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let n,r;try{const l=new URL(e);n=l.origin,r=l.pathname}catch{n=null;let a=typeof window<"u"&&((o=window==null?void 0:window.document)===null||o===void 0?void 0:o.baseURI);a=a||"http://fake.example.org"+t,r=new URL(e,a).pathname}return s(r.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:r}),s(r===r.split("?")[0].split("#")[0]),{origin:n,pathnameResolved:r}}function fe(e){s(e.startsWith("/"))}function ge(e){s(e.startsWith("/")),s(!e.includes("?")),s(!e.includes("#"))}function pe(e,t){ge(e),fe(t);let o=e;if(s(o.startsWith("/")),s(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let n=t;return t.endsWith("/")&&o===$(t,0,-1)&&(n=$(t,0,-1),s(o===n)),o.startsWith(n)?(s(o.startsWith("/")||o.startsWith("http")),s(o.startsWith(n)),o=o.slice(n.length),o.startsWith("/")||(o="/"+o),s(o.startsWith("/")),{pathname:o,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function G(e,t){Object.assign(e,t)}function I(e){return e instanceof Function||typeof e=="function"}function O(e){return typeof e=="object"&&e!==null}function Ir(e){return(t,o)=>{const n=e(t),r=e(o);return n===r?0:n>r?-1:1}}function be(e){return(t,o)=>{const n=e(t),r=e(o);if(s([!0,!1,null].includes(n)),s([!0,!1,null].includes(r)),n===r)return 0;if(n===!0||r===!1)return-1;if(r===!0||n===!1)return 1;s(!1)}}function me(e){return be(t=>{const o=e(t);return o===null?null:!o})}function ye(){return typeof window<"u"&&typeof window.scrollY=="number"}function d(e,t,o="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return o==="undefined";if(o==="unknown")return!0;const r=e[t];return o==="array"?Array.isArray(r):o==="string[]"?Array.isArray(r)&&r.every(l=>typeof l=="string"):o==="function"?I(r):Array.isArray(o)?typeof r=="string"&&o.includes(r):o==="null"?r===null:o==="undefined"?r===void 0:o==="true"?r===!0:o==="false"?r===!1:typeof r===o}function ve(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const he=e=>e!=null,je="\\";function V(e){s(e&&!e.includes(je),`Wrongly formatted path: ${e}`)}function Se(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function xe(e){return!e||e.includes(".")||e.includes("\\")?!1:!!(!e.includes("/")||e.split("/").length===2&&e.startsWith("@"))}const Oe=["clientRouting"];function Ne(e){Oe.forEach(t=>{if(s(e.fileExports),!(t in e.fileExports))return;const o=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${o})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${o}`)})}const J=["render","clientRouting","prerender","doNotPrerender"];function Pe(e,t){g(!J.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function $e(e){const t={};e.forEach(r=>{Te(r).forEach(({exportName:a,exportValue:i,isFromDefaultExport:_})=>{var u;s(a!=="default"),t[a]=(u=t[a])!==null&&u!==void 0?u:[],t[a].push({exportValue:i,filePath:r.filePath,_filePath:r.filePath,_fileType:r.fileType,_isFromDefaultExport:_})})});const o=ze(),n={};return Object.entries(t).forEach(([r,l])=>{l.forEach(({exportValue:a,_fileType:i,_isFromDefaultExport:_})=>{var u;n[r]=(u=n[r])!==null&&u!==void 0?u:a,i===".page"&&!_&&(r in o||(o[r]=a))})}),s(!("default"in n)),s(!("default"in t)),{exports:n,exportsAll:t,pageExports:o}}function Te(e){const{filePath:t,fileExports:o}=e;s(o);const n=[];return Object.entries(o).sort(me(([r])=>r==="default")).forEach(([r,l])=>{let a=r==="default";if(a)if(!Se(t))r="Page";else{g(O(l),`The \`export default\` of ${t} should be an object.`),Object.entries(l).forEach(([i,_])=>{Pe(i,t),n.push({exportName:i,exportValue:_,isFromDefaultExport:a})});return}n.push({exportName:r,exportValue:l,isFromDefaultExport:a})}),n.forEach(({exportName:r,isFromDefaultExport:l})=>{s(!(l&&J.includes(r)))}),n}function ze(){return new Proxy({},{get(...e){return ye()||ie(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function H(e){const t=".page.",o=$(e.split(t),0,-1).join(t);return s(!o.includes("\\")),o}function h(e){V(e),s(e.startsWith("/")||xe(e.split("/")[0]),{filePath:e})}function Wr(e){const t=e.filter(o=>W(o));if(g(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const o=t[0];return s(o),o}return null}function W(e){return s(!e.includes("\\")),e.includes("/_error")}function Me(e){const t=r=>n.pageId===r||n.isDefaultPageFile&&(n.isRendererPageFile||Fe(r,n.filePath)),o=we(e),n={filePath:e,fileType:o,isRelevant:t,isDefaultPageFile:w(e),isRendererPageFile:w(e)&&Ee(e),isErrorPageFile:W(e),pageId:H(e)};return n}function we(e){V(e);const o=e.split("/").slice(-1)[0].split("."),n=o.slice(-3)[0],r=o.slice(-2)[0];if(r==="page")return".page";if(s(n==="page",{filePath:e}),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";s(!1,{filePath:e})}function w(e){return h(e),W(e)?!1:e.includes("/_default")}function Ee(e){return h(e),e.includes("/renderer/")}function Fe(e,t){h(e),h(t),s(!e.endsWith("/")),s(!t.endsWith("/")),s(w(t));const o=$(t.split("/"),0,-1).filter(n=>n!=="_default").join("/");return e.startsWith(o)}const Re=[".page",".page.server",".page.route",".page.client"];function Ie(e){s(d(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),s(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),s(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),s(d(e,"pageFilesLazy","object")),s(d(e,"pageFilesEager","object")),s(d(e,"pageFilesExportNamesLazy","object")),s(d(e,"pageFilesExportNamesEager","object")),s(d(e.pageFilesLazy,".page")),s(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server"));const t={};P(e.pageFilesLazy).forEach(({filePath:n,pageFile:r,globValue:l})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const i=l;A(i),r.loadFile=async()=>{"fileExports"in r||(r.fileExports=await i(),Ne(r))}}),P(e.pageFilesExportNamesLazy).forEach(({filePath:n,pageFile:r,globValue:l})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const i=l;A(i),r.loadExportNames=async()=>{if(!("exportNames"in r)){const _=await i();g("exportNames"in _,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),s(d(_,"exportNames","string[]"),r.filePath),r.exportNames=_.exportNames}}}),P(e.pageFilesEager).forEach(({filePath:n,pageFile:r,globValue:l})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const i=l;s(O(i)),r.fileExports=i}),P(e.pageFilesExportNamesEager).forEach(({filePath:n,pageFile:r,globValue:l})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const i=l;s(O(i)),s(d(i,"exportNames","string[]"),r.filePath),r.exportNames=i.exportNames});const o=Object.values(t);return o.forEach(({filePath:n})=>{s(!n.includes("\\"))}),o}function P(e){const t=[];return Object.entries(e).forEach(([o,n])=>{s(Re.includes(o)),s(O(n)),Object.entries(n).forEach(([r,l])=>{const a=Me(r);s(a.fileType===o),t.push({filePath:r,pageFile:a,globValue:l})})}),t}function A(e){s(I(e))}const v=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function Lr(e){v.pageFilesAll=Ie(e)}async function Ar(e,t){e?(s(!v.pageFilesGetter),s(t===void 0)):(s(v.pageFilesGetter),s(typeof t=="boolean"),(!v.pageFilesAll||!t)&&await v.pageFilesGetter()),s(v.pageFilesAll);const o=v.pageFilesAll,n=We(o);return{pageFilesAll:o,allPageIds:n}}function We(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(H);return D(t)}function Le(e,t){return q(e,t,!0)}function kr(e,t){return q(e,t,!1)}function q(e,t,o){const n=o?".page.client":".page.server",r=Ae(n,t),l=e.filter(c=>c.isRelevant(t)),a=c=>l.filter(p=>p.isRendererPageFile&&p.fileType===c).sort(r)[0],i=c=>{const p=l.filter(y=>y.pageId===t&&y.fileType===c);g(p.length<=1,`Merge the following files into a single file: ${p.map(y=>y.filePath).join(" ")}`);const b=p[0];return s(b===void 0||!b.isDefaultPageFile),p[0]},_=l.filter(c=>c.isDefaultPageFile&&!c.isRendererPageFile&&(c.fileType===n||c.fileType===".page"));_.sort(r);const u=a(n),j=a(".page"),f=i(n),S=i(".page");return[f,S,..._,u,j].filter(he)}function Ae(e,t){return(l,a)=>{s(l.isDefaultPageFile&&a.isDefaultPageFile);{const i=l.isRendererPageFile,_=a.isRendererPageFile;if(!i&&_)return-1;if(!_&&i)return 1;s(i===_)}{const i=k(t,l.filePath),_=k(t,a.filePath);if(i<_)return-1;if(_<i)return 1;s(i===_)}{if(l.fileType===e&&a.fileType!==e)return-1;if(a.fileType===e&&l.fileType!==e)return 1}{if(l.fileType===".page"&&a.fileType!==".page")return 1;if(a.fileType===".page"&&l.fileType!==".page")return-1}return 0}}function k(e,t){h(e),h(t);let o=0;for(;o<e.length&&o<t.length&&e[o]===t[o];o++);const n=e.slice(o),r=t.slice(o),l=n.split("/").length,a=r.split("/").length;return l+a}function ke(e,t){return Le(e,t)}const Ce="modulepreload",De=function(e){return"/"+e},C={},Cr=function(t,o,n){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=De(r),r in C)return;C[r]=!0;const l=r.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":Ce,l||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),l)return new Promise((_,u)=>{i.addEventListener("load",_),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Be=["overrideDefaultPages"],Dr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"})),Ue=[],Br=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"})),Ge=[],Ur=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ge},Symbol.toStringTag,{value:"Module"})),Ve=[],Gr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"})),Je=[],Vr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"})),He=["headings","default"],Jr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"})),qe=["headings","default"],Hr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"})),Ye=["headings","default"],qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"})),Ke=["headings","default"],Yr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"})),Qe=["headings","default"],Kr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"})),Xe=["headings","default"],Qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"})),Ze=["headings","default"],Xr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"})),et=["headings","default"],Zr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"})),tt=["headings","default"],en=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"})),ot=["headings","default"],tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"})),rt=["headings","default"],on=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"})),nt=["headings","default"],rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"})),st=["headings","default"],nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"})),at=["headings","default"],sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"})),lt=["render","Page"],an=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"})),it=["headings","default"],ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"})),_t=["headings","default"],_n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"})),ct=["headings","default"],cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"})),ut=["headings","default"],un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"})),dt=["headings","default"],dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"})),ft=["headings","default"],fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"})),gt=["headings","default"],gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"})),pt=["headings","default"],pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"})),bt=["headings","default"],bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"})),mt=["headings","default"],mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"})),yt=["headings","default"],yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"})),vt=["headings","default"],vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"})),ht=["headings","default"],hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"})),jt=["headings","default"],jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"})),St=["headings","default"],Sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:St},Symbol.toStringTag,{value:"Module"})),xt=["headings","default"],xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"})),Ot=["headings","default"],On=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Nt=["headings","default"],Nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"})),Pt=["headings","default"],Pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"})),$t=["headings","default"],$n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"})),Tt=["headings","default"],Tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),zt=["headings","default"],zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zt},Symbol.toStringTag,{value:"Module"})),Mt=["headings","default"],Mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mt},Symbol.toStringTag,{value:"Module"})),wt=["headings","default"],wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"})),Et=["headings","default"],En=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"})),Ft=["headings","default"],Fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"})),Rt=["headings","default"],Rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"})),It=["headings","default"],In=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"})),Wt=["headings","default"],Wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wt},Symbol.toStringTag,{value:"Module"})),Lt=["headings","default"],Ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"})),At=["headings","default"],An=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"})),kt=["headings","default"],kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"})),Ct=["headings","default"],Cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"})),Dt=["headings","default"],Dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dt},Symbol.toStringTag,{value:"Module"})),Bt=["headings","default"],Bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bt},Symbol.toStringTag,{value:"Module"})),Ut=["headings","default"],Un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ut},Symbol.toStringTag,{value:"Module"})),Gt=["headings","default"],Gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gt},Symbol.toStringTag,{value:"Module"})),Vt=["headings","default"],Vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vt},Symbol.toStringTag,{value:"Module"})),Jt=["headings","default"],Jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jt},Symbol.toStringTag,{value:"Module"})),Ht=["headings","default"],Hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"})),qt=["headings","default"],qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qt},Symbol.toStringTag,{value:"Module"})),Yt=["headings","default"],Yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yt},Symbol.toStringTag,{value:"Module"})),Kt=["headings","default"],Kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kt},Symbol.toStringTag,{value:"Module"})),Qt=["headings","default"],Qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qt},Symbol.toStringTag,{value:"Module"})),Xt=["headings","default"],Xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xt},Symbol.toStringTag,{value:"Module"})),Zt=["headings","default"],Zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zt},Symbol.toStringTag,{value:"Module"})),eo=["headings","default"],es=Object.freeze(Object.defineProperty({__proto__:null,exportNames:eo},Symbol.toStringTag,{value:"Module"})),to=["headings","default"],ts=Object.freeze(Object.defineProperty({__proto__:null,exportNames:to},Symbol.toStringTag,{value:"Module"})),oo=["headings","default"],os=Object.freeze(Object.defineProperty({__proto__:null,exportNames:oo},Symbol.toStringTag,{value:"Module"})),ro=["headings","default"],rs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ro},Symbol.toStringTag,{value:"Module"})),no=["headings","default"],ns=Object.freeze(Object.defineProperty({__proto__:null,exportNames:no},Symbol.toStringTag,{value:"Module"})),so=["Page"],ss=Object.freeze(Object.defineProperty({__proto__:null,exportNames:so},Symbol.toStringTag,{value:"Module"})),ao=["headings","default"],as=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ao},Symbol.toStringTag,{value:"Module"})),lo=["headings","default"],ls=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lo},Symbol.toStringTag,{value:"Module"})),io=["headings","default"],is=Object.freeze(Object.defineProperty({__proto__:null,exportNames:io},Symbol.toStringTag,{value:"Module"})),_o=["headings","default"],_s=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_o},Symbol.toStringTag,{value:"Module"})),co=["headings","default"],cs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:co},Symbol.toStringTag,{value:"Module"})),uo=["headings","default"],us=Object.freeze(Object.defineProperty({__proto__:null,exportNames:uo},Symbol.toStringTag,{value:"Module"})),fo=["headings","default"],ds=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fo},Symbol.toStringTag,{value:"Module"})),go=["headings","default"],fs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:go},Symbol.toStringTag,{value:"Module"})),po=["headings","default"],gs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:po},Symbol.toStringTag,{value:"Module"})),bo=["headings","default"],ps=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bo},Symbol.toStringTag,{value:"Module"})),mo=["headings","default"],bs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mo},Symbol.toStringTag,{value:"Module"})),yo=["headings","default"],ms=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yo},Symbol.toStringTag,{value:"Module"})),vo=["headings","default"],ys=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vo},Symbol.toStringTag,{value:"Module"})),ho=["headings","default"],vs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ho},Symbol.toStringTag,{value:"Module"})),jo=["headings","default"],hs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jo},Symbol.toStringTag,{value:"Module"})),So=["headings","default"],js=Object.freeze(Object.defineProperty({__proto__:null,exportNames:So},Symbol.toStringTag,{value:"Module"})),xo=["headings","default"],Ss=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xo},Symbol.toStringTag,{value:"Module"})),Oo=["headings","default"],xs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Oo},Symbol.toStringTag,{value:"Module"})),No=["headings","default"],Os=Object.freeze(Object.defineProperty({__proto__:null,exportNames:No},Symbol.toStringTag,{value:"Module"})),Po=["headings","default"],Ns=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Po},Symbol.toStringTag,{value:"Module"})),$o=["headings","default"],Ps=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$o},Symbol.toStringTag,{value:"Module"})),To=["headings","default"],$s=Object.freeze(Object.defineProperty({__proto__:null,exportNames:To},Symbol.toStringTag,{value:"Module"})),zo=["headings","default"],Ts=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zo},Symbol.toStringTag,{value:"Module"})),Mo=["headings","default"],zs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mo},Symbol.toStringTag,{value:"Module"})),wo=["headings","default"],Ms=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wo},Symbol.toStringTag,{value:"Module"})),Eo=["headings","default"],ws=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Eo},Symbol.toStringTag,{value:"Module"})),Fo=["headings","default"],Es=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Fo},Symbol.toStringTag,{value:"Module"})),Ro=["headings","default"],Fs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ro},Symbol.toStringTag,{value:"Module"})),Io=["headings","default"],Rs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Io},Symbol.toStringTag,{value:"Module"})),Wo=["headings","default"],Is=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wo},Symbol.toStringTag,{value:"Module"})),Lo=["headings","default"],Ws=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lo},Symbol.toStringTag,{value:"Module"})),Ao=["headings","default"],Ls=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ao},Symbol.toStringTag,{value:"Module"})),ko=["headings","default"],As=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ko},Symbol.toStringTag,{value:"Module"})),Co=["headings","default"],ks=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Co},Symbol.toStringTag,{value:"Module"})),Do=["headings","default"],Cs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Do},Symbol.toStringTag,{value:"Module"})),Bo=["headings","default"],Ds=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bo},Symbol.toStringTag,{value:"Module"})),Uo=["headings","default"],Bs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Uo},Symbol.toStringTag,{value:"Module"})),Go=["headings","default"],Us=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Go},Symbol.toStringTag,{value:"Module"})),Vo=["headings","default"],Gs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vo},Symbol.toStringTag,{value:"Module"})),Jo=["headings","default"],Vs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jo},Symbol.toStringTag,{value:"Module"})),Ho=["headings","default"],Js=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ho},Symbol.toStringTag,{value:"Module"})),qo=["headings","default"],Hs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qo},Symbol.toStringTag,{value:"Module"})),Yo=["headings","default"],qs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yo},Symbol.toStringTag,{value:"Module"})),Ko=["headings","default"],Ys=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ko},Symbol.toStringTag,{value:"Module"})),Qo=["headings","default"],Ks=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qo},Symbol.toStringTag,{value:"Module"})),Xo=["headings","default"],Qs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xo},Symbol.toStringTag,{value:"Module"})),Zo=["headings","default"],Xs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zo},Symbol.toStringTag,{value:"Module"})),er=["headings","default"],Zs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:er},Symbol.toStringTag,{value:"Module"})),tr=["headings","default"],ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tr},Symbol.toStringTag,{value:"Module"})),or=["headings","default"],ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:or},Symbol.toStringTag,{value:"Module"})),rr=["headings","default"],oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rr},Symbol.toStringTag,{value:"Module"})),nr=["headings","default"],ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nr},Symbol.toStringTag,{value:"Module"})),sr=["headings","default"],na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:sr},Symbol.toStringTag,{value:"Module"})),ar=["headings","default"],sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ar},Symbol.toStringTag,{value:"Module"})),lr=["headings","default"],aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lr},Symbol.toStringTag,{value:"Module"})),ir=["headings","default"],la=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ir},Symbol.toStringTag,{value:"Module"})),_r=["headings","default"],ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_r},Symbol.toStringTag,{value:"Module"})),cr=["headings","default"],_a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:cr},Symbol.toStringTag,{value:"Module"})),ur=["headings","default"],ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ur},Symbol.toStringTag,{value:"Module"})),dr=["headings","default"],ua=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dr},Symbol.toStringTag,{value:"Module"})),fr=["headings","default"],da=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fr},Symbol.toStringTag,{value:"Module"})),gr=["headings","default"],fa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gr},Symbol.toStringTag,{value:"Module"})),pr=["headings","default"],ga=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pr},Symbol.toStringTag,{value:"Module"})),br=["headings","default"],pa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:br},Symbol.toStringTag,{value:"Module"})),mr=["headings","default"],ba=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mr},Symbol.toStringTag,{value:"Module"})),yr=["headings","default"],ma=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yr},Symbol.toStringTag,{value:"Module"})),vr=["headings","default"],ya=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vr},Symbol.toStringTag,{value:"Module"})),hr=["headings","default"],va=Object.freeze(Object.defineProperty({__proto__:null,exportNames:hr},Symbol.toStringTag,{value:"Module"})),jr=["render"],ha=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jr},Symbol.toStringTag,{value:"Module"}));function ja(e){const t=window.location.href,{origin:o,searchOriginal:n,hashOriginal:r,pathnameOriginal:l}=ce(t,"/");let a;if(e!=null&&e.withoutHash){a=`${l}${n||""}`;const i=`${o||""}${a}${r||""}`;s(t===i,{url:t,urlRecreated:i})}else{a=`${l}${n||""}${r||""}`;const i=`${o||""}${a}`;s(t===i,{url:t,urlRecreated:i})}return a}const Sr=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),o=t[1],n=t[2];return new RegExp(o,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Y(e){const t=JSON.parse(e);return K(t)}function K(e){return typeof e=="string"?xr(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,o])=>{e[t]=K(o)}),e)}function xr(e){for(const{match:t,deserialize:o}of Sr)if(t(e))return o(e,Y);return e}function Sa(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;s(t);const o=Y(t);s(d(o,"pageContext","object"));const{pageContext:n}=o;return s(d(n,"_pageId","string")),G(n,{_pageContextRetrievedFromServer:{...n},_comesDirectlyFromServer:!0}),n}function Or(e,t){if(!(t in e.exports))return null;const o=e.exports[t],n=e.exportsAll[t][0];s(n.exportValue===o);const{filePath:r}=n;return s(r),s(!t.endsWith(")")),g(I(o),`\`export { ${t} }\` of ${r} should be a function`),{hook:o,filePath:r}}function Nr(e,t){Or(e,t)}function Pr(e){const t=Object.entries(e);for(const o in e)delete e[o];t.sort(([o],[n])=>ve(o,n)).forEach(([o,n])=>{e[o]=n})}const z=F("releasePageContextCommon.ts",{});function xa(e){s("exports"in e),s("exportsAll"in e),s("pageExports"in e),s(O(e.pageExports));const t=e.exports.Page;return G(e,{Page:t}),wr(e),Pr(e),s([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?zr(e):e}const $r=["then","toJSON"],Tr=["_pageId"];function zr(e){return new Proxy(e,{get:o});function t(n){return!(n in e||$r.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function o(n,r){return z.disableAssertPassToClient!==r&&Mr(e._pageContextRetrievedFromServer,r,t(r)),z.disableAssertPassToClient=r,window.setTimeout(()=>{z.disableAssertPassToClient=void 0},0),e[r]}}function Mr(e,t,o){if(!o||e===null)return;const n=Object.keys(e).filter(r=>!Tr.includes(r));g(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(r=>`'${r}'`).join(", ")}]\`.)`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function wr(e){Object.entries(e).forEach(([t,o])=>{delete e[t],e[t]=o})}const Q="__whileFetchingAssets";async function Oa(e,t){const o=ke(e,t);try{await Promise.all(o.map(i=>{var _;return(_=i.loadFile)===null||_===void 0?void 0:_.call(i)}))}catch(i){throw i&&Object.assign(i,{[Q]:!0}),i}const{exports:n,exportsAll:r,pageExports:l}=$e(o);return{exports:n,exportsAll:r,pageExports:l,_pageFilesLoaded:o}}function Na(e){return e?e[Q]===!0:!1}function Pa(e){var t;if(d(e.exports,"render"))Nr(e,"render");else{const o=e._pageFilesLoaded.filter(r=>r.fileType===".page.client");let n;if(o.length===0){const r=(t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+r}else n="One of the following files should export a `render()` hook: "+o.map(r=>r.filePath).join(" ");g(!1,n)}}export{Tn as $,tn as A,on as B,rn as C,nn as D,sn as E,an as F,ln as G,_n as H,cn as I,un as J,dn as K,fn as L,gn as M,pn as N,bn as O,mn as P,yn as Q,vn as R,hn as S,jn as T,Sn as U,xn as V,On as W,Nn as X,Pn as Y,$n as Z,Cr as _,s as a,As as a$,zn as a0,Mn as a1,wn as a2,En as a3,Fn as a4,Rn as a5,In as a6,Wn as a7,Ln as a8,An as a9,us as aA,ds as aB,fs as aC,gs as aD,ps as aE,bs as aF,ms as aG,ys as aH,vs as aI,hs as aJ,js as aK,Ss as aL,xs as aM,Os as aN,Ns as aO,Ps as aP,$s as aQ,Ts as aR,zs as aS,Ms as aT,ws as aU,Es as aV,Fs as aW,Rs as aX,Is as aY,Ws as aZ,Ls as a_,kn as aa,Cn as ab,Dn as ac,Bn as ad,Un as ae,Gn as af,Vn as ag,Jn as ah,Hn as ai,qn as aj,Yn as ak,Kn as al,Qn as am,Xn as an,Zn as ao,es as ap,ts as aq,os as ar,rs as as,ns as at,ss as au,as as av,ls as aw,is as ax,_s as ay,cs as az,W as b,ks as b0,Cs as b1,Ds as b2,Bs as b3,Us as b4,Gs as b5,Vs as b6,Js as b7,Hs as b8,qs as b9,Lr as bA,N as bB,Fr as bC,F as bD,ja as bE,kr as bF,xa as bG,Sa as bH,Oa as bI,Wr as bJ,Or as bK,Y as bL,fe as bM,Ar as bN,ke as bO,_e as bP,Rr as bQ,Na as bR,Nr as bS,Pa as bT,Er as bU,Ys as ba,Ks as bb,Qs as bc,Xs as bd,Zs as be,ea as bf,ta as bg,oa as bh,ra as bi,na as bj,sa as bk,aa as bl,la as bm,ia as bn,_a as bo,ca as bp,ua as bq,da as br,fa as bs,ga as bt,pa as bu,ba as bv,ma as bw,ya as bx,va as by,ha as bz,g as c,d,ie as e,O as f,Dr as g,Ir as h,I as i,Br as j,Ur as k,Gr as l,be as m,Vr as n,G as o,ce as p,Jr as q,Hr as r,$ as s,qr as t,Yr as u,Kr as v,Qr as w,Xr as x,Zr as y,en as z};
