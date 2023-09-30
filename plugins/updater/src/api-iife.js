if("__TAURI__"in window){var __TAURI_UPDATER__=function(e){"use strict";var n=Object.defineProperty,t=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)},r=(e,n,r)=>(t(e,n,"read from private field"),r?r.call(e):n.get(e)),i=(e,n,r,i)=>(t(e,n,"write to private field"),i?i.call(e,r):n.set(e,r),r);function a(e,n=!1){let t=window.crypto.getRandomValues(new Uint32Array(1))[0],r=`_${t}`;return Object.defineProperty(window,r,{value:t=>(n&&Reflect.deleteProperty(window,r),e?.(t)),writable:!1,configurable:!0}),t}((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})({},{Channel:()=>o,PluginListener:()=>l,addPluginListener:()=>d,convertFileSrc:()=>_,invoke:()=>c,transformCallback:()=>a});var s,o=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)})(this,s,(()=>{})),this.id=a((e=>{r(this,s).call(this,e)}))}set onmessage(e){i(this,s,e)}get onmessage(){return r(this,s)}toJSON(){return`__CHANNEL__:${this.id}`}};s=new WeakMap;var l=class{constructor(e,n,t){this.plugin=e,this.event=n,this.channelId=t}async unregister(){return c(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function d(e,n,t){let r=new o;return r.onmessage=t,c(`plugin:${e}|register_listener`,{event:n,handler:r}).then((()=>new l(e,n,r.id)))}async function c(e,n={},t){return new Promise(((r,i)=>{let s=a((e=>{r(e),Reflect.deleteProperty(window,`_${o}`)}),!0),o=a((e=>{i(e),Reflect.deleteProperty(window,`_${s}`)}),!0);window.__TAURI_IPC__({cmd:e,callback:s,error:o,payload:n,options:t})}))}function _(e,n="asset"){return window.__TAURI__.convertFileSrc(e,n)}class u{constructor(e){this.currentVersion=e.currentVersion,this.version=e.version,this.date=e.date,this.body=e.body}async downloadAndInstall(e){const n=new o;return null!=e&&(n.onmessage=e),c("plugin:updater|download_and_install",{onEvent:n})}}return e.Update=u,e.check=async function(e){return(null==e?void 0:e.headers)&&(e.headers=Array.from(new Headers(e.headers).entries())),c("plugin:updater|check",{...e}).then((e=>e.available?new u(e):null))},e}({});Object.defineProperty(window.__TAURI__,"updater",{value:__TAURI_UPDATER__})}