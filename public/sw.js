if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a9afbc87a1a462d13c2447e54d612ee6"},{url:"/_next/static/VroMDsZEfYJP_ImsCZFlm/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/VroMDsZEfYJP_ImsCZFlm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/157-10496e4bfd6bd0f4.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/167-cebe5f246f86e91d.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/201-e37ace9b94b758fa.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/236-ff5e14e37fb63692.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/274-eac22ddfdc1e5143.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/285-4bf1a3e62b494364.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/314-8d7c75ee33ce9d45.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/51-9dd437a18f22251a.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/511-0a8ecd4f1b7247d2.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/571-237151adc0246c06.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/654.0c7c8de62df65b05.js",revision:"0c7c8de62df65b05"},{url:"/_next/static/chunks/741-a9677a603b284041.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/749-b375e37865840cc2.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/781-7591caae8b252b7a.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/843-9a66f698251123ab.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/863-24e84ff04b3552fd.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/864-f512b50e957f6f8f.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/_not-found-ce26f624f06a643c.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/account/page-58332085fa3373fb.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/home/page-55426ad32b5015c5.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/layout-d5647ed7d41e07cf.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/login/page-da7339d01c9f715f.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/map/page-7ac5f2c173b12092.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/page-6c67600735222f28.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/app/sign-up/page-63f1ee10e50c5d3f.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/d0deef33.562456e2aa94d93c.js",revision:"562456e2aa94d93c"},{url:"/_next/static/chunks/fd9d1056-7a2952fed8821d10.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/main-92c1e84ee546ae5b.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/main-app-fda61e17a39f0acf.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d2f8bc35a3fc6ab6.js",revision:"VroMDsZEfYJP_ImsCZFlm"},{url:"/_next/static/css/45ccd052f26a170a.css",revision:"45ccd052f26a170a"},{url:"/_next/static/css/47133fa523ef1c81.css",revision:"47133fa523ef1c81"},{url:"/_next/static/css/d3e383b9ef67ddcb.css",revision:"d3e383b9ef67ddcb"},{url:"/_next/static/media/05a31a2ca4975f99.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/1a142ec2652f2d06.woff2",revision:"be388d4ee0f6f0e3c704c90545794e2d"},{url:"/_next/static/media/2053df8159b25386.woff2",revision:"89a487243655b1945e8b173e3632e315"},{url:"/_next/static/media/513657b02c5c193f.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/64ea2a5aaa4dedd3.woff2",revision:"9b04ab384e20d8caa6e96f623bdd9a23"},{url:"/_next/static/media/891487401855818d.woff2",revision:"c39f8c869c3ce6e1cecf63da09b0c4f4"},{url:"/_next/static/media/9d9b9cae20d87d18.woff2",revision:"5fd8c4e4408334cab1a4eb5280e70ff1"},{url:"/_next/static/media/b63e4df112f8dce1.woff2",revision:"bfd216fcfe1902b6c614806673a86381"},{url:"/_next/static/media/c9a5bc6a7c948fb0.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/dba81c1208da12ee.p.woff2",revision:"61ad024295cbcb211b4fda1d44905bf9"},{url:"/_next/static/media/ec159349637c90ad.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/leaflet/images/layers-2x.png",revision:"4f0283c6ce28e888000e978e537a6a56"},{url:"/leaflet/images/layers.png",revision:"a6137456ed160d7606981aa57c559898"},{url:"/leaflet/images/marker-icon-2x.png",revision:"59685d3070912b18adc2bf2cf26bcefe"},{url:"/leaflet/images/marker-icon.png",revision:"6351d96e6fa63f69349d4c14c355f99c"},{url:"/leaflet/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/leaflet/images/red-marker-icon-2x.png",revision:"8acfd4077751247586ea5cc88090774d"},{url:"/manifest.json",revision:"7f59b1052a683defed138d1007d6cb7d"},{url:"/service-worker.js",revision:"1aad1febe501e31c520ddf98d6bbaafa"},{url:"/vnpt_logo.ico",revision:"ddb3c2de9474bdeafde673b91b4ed4a4"},{url:"/vnpt_logo.png",revision:"3b27ea9e28c7704f91ecb508842d6784"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
