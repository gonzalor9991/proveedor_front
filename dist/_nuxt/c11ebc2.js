/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{563:function(e,t,n){"use strict";n.r(t);var o=n(378),r=n(77),c=(n(380),n(207)),d=n(18),l=n(67);const f="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",w="google.c.a.c_id";var h,m;function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),o=new Uint8Array(n.length);for(let i=0;i<n.length;++i)o[i]=n.charCodeAt(i);return o}!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(h||(h={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(m||(m={}));const k="fcm_token_details_db",I="fcm_token_object_Store";const S="firebase-messaging-store";let T=null;function O(){return T||(T=Object(c.b)("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(S)}})),T}async function _(e){const t=M(e),n=await O(),o=await n.transaction(S).objectStore(S).get(t);if(o)return o;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes(k))return null}let t=null;return(await Object(c.b)(k,5,{upgrade:async(n,o,r,c)=>{var d;if(o<2)return;if(!n.objectStoreNames.contains(I))return;const l=c.objectStore(I),f=await l.index("fcmSenderId").get(e);if(await l.clear(),f)if(2===o){const e=f;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(d=e.createTime)&&void 0!==d?d:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:y(e.vapidKey)}}}else if(3===o){const e=f;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:y(e.auth),p256dh:y(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:y(e.vapidKey)}}}else if(4===o){const e=f;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:y(e.auth),p256dh:y(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:y(e.vapidKey)}}}}})).close(),await Object(c.a)(k),await Object(c.a)("fcm_vapid_details_db"),await Object(c.a)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await j(e,t),t}}async function j(e,t){const n=M(e),o=(await O()).transaction(S,"readwrite");return await o.objectStore(S).put(t,n),await o.done,t}function M({appConfig:e}){return e.appId}const C={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},A=new d.b("messaging","Messaging",C);async function D(e,t){const n={method:"DELETE",headers:await P(e)};try{const o=await fetch(`${K(e.appConfig)}/${t}`,n),r=await o.json();if(r.error){const e=r.error.message;throw A.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw A.create("token-unsubscribe-failed",{errorInfo:e})}}function K({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function P({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function E({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const body={web:{endpoint:n,auth:t,p256dh:e}};return o!==f&&(body.web.applicationPubKey=o),body}async function N(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:v(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},o=await _(e.firebaseDependencies);if(o){if(function(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,r=t.auth===e.auth,c=t.p256dh===e.p256dh;return n&&o&&r&&c}(o.subscriptionOptions,n))return Date.now()>=o.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await P(e),body=E(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(body)};let r;try{const n=await fetch(`${K(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(e){throw A.create("token-update-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw A.create("token-update-failed",{errorInfo:e})}if(!r.token)throw A.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await j(e.firebaseDependencies,o),n}catch(t){throw await F(e),t}}(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await D(e.firebaseDependencies,o.token)}catch(e){console.warn(e)}return x(e.firebaseDependencies,n)}return x(e.firebaseDependencies,n)}async function F(e){const t=await _(e.firebaseDependencies);t&&(await D(e.firebaseDependencies,t.token),await async function(e){const t=M(e),n=(await O()).transaction(S,"readwrite");await n.objectStore(S).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function x(e,t){const n=await async function(e,t){const n=await P(e),body=E(t),o={method:"POST",headers:n,body:JSON.stringify(body)};let r;try{const t=await fetch(K(e.appConfig),o);r=await t.json()}catch(e){throw A.create("token-subscribe-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw A.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw A.create("token-subscribe-no-token");return r.token}(e,t),o={token:n,createTime:Date.now(),subscriptionOptions:t};return await j(e,o),o.token}function R(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const title=t.notification.title;title&&(e.notification.title=title);const body=t.notification.body;body&&(e.notification.body=body);const image=t.notification.image;image&&(e.notification.image=image)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,o,r,c,d;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const link=null!==(r=null===(o=t.fcmOptions)||void 0===o?void 0:o.link)&&void 0!==r?r:null===(c=t.notification)||void 0===c?void 0:c.click_action;link&&(e.fcmOptions.link=link);const l=null===(d=t.fcmOptions)||void 0===d?void 0:d.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(t,e),t}function H(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function L(e){return A.create("missing-app-config-values",{valueName:e})}H("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),H("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class B{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=function(e){if(!e||!e.options)throw L("App Configuration Object");if(!e.name)throw L("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw L(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function W(e){var t;try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(e){throw A.create("failed-service-worker-registration",{browserErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}async function $(e,t){if(!navigator)throw A.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw A.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=f)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await W(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw A.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),N(e)}async function U(e,t,data){const n=function(e){switch(e){case m.NOTIFICATION_CLICKED:return"notification_open";case m.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:data["google.c.a.c_id"],message_name:data["google.c.a.c_l"],message_time:data["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function V(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===m.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(R(n)):e.onMessageHandler.next(R(n)));const o=n.data;var data;"object"==typeof(data=o)&&data&&w in data&&"1"===o["google.c.a.e"]&&await U(e,n.messageType,o)}const G="@firebase/messaging",J="0.9.14",Y=e=>{const t=new B(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>V(t,e))),t},z=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>$(t,e)}};function Q(e){return async function(e){if(!navigator)throw A.create("only-available-in-window");return e.swRegistration||await W(e),F(e)}(e=Object(d.u)(e))}function X(e,t){return function(e,t){if(!navigator)throw A.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=Object(d.u)(e),t)}Object(l._registerComponent)(new r.a("messaging",Y,"PUBLIC")),Object(l._registerComponent)(new r.a("messaging-internal",z,"PRIVATE")),Object(l.registerVersion)(G,J),Object(l.registerVersion)(G,J,"esm2017");const Z="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ee="FCM_MSG";var te,ne;function ie(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function oe(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),o=new Uint8Array(n.length);for(let i=0;i<n.length;++i)o[i]=n.charCodeAt(i);return o}!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(te||(te={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(ne||(ne={}));const ae="fcm_token_details_db",re="fcm_token_object_Store";const se="firebase-messaging-store";let ce=null;function de(){return ce||(ce=Object(c.b)("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(se)}})),ce}async function ue(e){const t=le(e),n=await de(),o=await n.transaction(se).objectStore(se).get(t);if(o)return o;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes(ae))return null}let t=null;return(await Object(c.b)(ae,5,{upgrade:async(n,o,r,c)=>{var d;if(o<2)return;if(!n.objectStoreNames.contains(re))return;const l=c.objectStore(re),f=await l.index("fcmSenderId").get(e);if(await l.clear(),f)if(2===o){const e=f;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(d=e.createTime)&&void 0!==d?d:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:ie(e.vapidKey)}}}else if(3===o){const e=f;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:ie(e.auth),p256dh:ie(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:ie(e.vapidKey)}}}else if(4===o){const e=f;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:ie(e.auth),p256dh:ie(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:ie(e.vapidKey)}}}}})).close(),await Object(c.a)(ae),await Object(c.a)("fcm_vapid_details_db"),await Object(c.a)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await pe(e,t),t}}async function pe(e,t){const n=le(e),o=(await de()).transaction(se,"readwrite");return await o.objectStore(se).put(t,n),await o.done,t}function le({appConfig:e}){return e.appId}const fe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ge=new d.b("messaging","Messaging",fe);async function we(e,t){const n={method:"DELETE",headers:await be(e)};try{const o=await fetch(`${he(e.appConfig)}/${t}`,n),r=await o.json();if(r.error){const e=r.error.message;throw ge.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw ge.create("token-unsubscribe-failed",{errorInfo:e})}}function he({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function be({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function me({p256dh:e,auth:t,endpoint:n,vapidKey:o}){const body={web:{endpoint:n,auth:t,p256dh:e}};return o!==Z&&(body.web.applicationPubKey=o),body}async function ye(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:oe(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ie(t.getKey("auth")),p256dh:ie(t.getKey("p256dh"))},o=await ue(e.firebaseDependencies);if(o){if(function(e,t){const n=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,r=t.auth===e.auth,c=t.p256dh===e.p256dh;return n&&o&&r&&c}(o.subscriptionOptions,n))return Date.now()>=o.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await be(e),body=me(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(body)};let r;try{const n=await fetch(`${he(e.appConfig)}/${t.token}`,o);r=await n.json()}catch(e){throw ge.create("token-update-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw ge.create("token-update-failed",{errorInfo:e})}if(!r.token)throw ge.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await pe(e.firebaseDependencies,o),n}catch(t){throw await ve(e),t}}(e,{token:o.token,createTime:Date.now(),subscriptionOptions:n}):o.token;try{await we(e.firebaseDependencies,o.token)}catch(e){console.warn(e)}return ke(e.firebaseDependencies,n)}return ke(e.firebaseDependencies,n)}async function ve(e){const t=await ue(e.firebaseDependencies);t&&(await we(e.firebaseDependencies,t.token),await async function(e){const t=le(e),n=(await de()).transaction(se,"readwrite");await n.objectStore(se).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function ke(e,t){const n=await async function(e,t){const n=await be(e),body=me(t),o={method:"POST",headers:n,body:JSON.stringify(body)};let r;try{const t=await fetch(he(e.appConfig),o);r=await t.json()}catch(e){throw ge.create("token-subscribe-failed",{errorInfo:e})}if(r.error){const e=r.error.message;throw ge.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw ge.create("token-subscribe-no-token");return r.token}(e,t),o={token:n,createTime:Date.now(),subscriptionOptions:t};return await pe(e,o),o.token}async function Ie(e,t){const n=function(e,t){var n,o;const r={};e.from&&(r.project_number=e.from);e.fcmMessageId&&(r.message_id=e.fcmMessageId);r.instance_id=t,e.notification?r.message_type=te.DISPLAY_NOTIFICATION.toString():r.message_type=te.DATA_MESSAGE.toString();r.sdk_platform=3..toString(),r.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(r.collapse_key=e.collapse_key);r.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(r.analytics_label=null===(o=e.fcmOptions)||void 0===o?void 0:o.analytics_label);return r}(t,await e.firebaseDependencies.installations.getId());!function(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}(e,n)}function Se(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}async function Te(e,t){const n=function({data:data}){if(!data)return null;try{return data.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Ie(t,n);const o=await _e();if(function(e){return e.some((e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))}(o))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=ne.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(o,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:o}=Notification;n&&o&&n.length>o&&console.warn(`This browser only supports ${o} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[ee]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const title=t.notification.title;title&&(e.notification.title=title);const body=t.notification.body;body&&(e.notification.body=body);const image=t.notification.image;image&&(e.notification.image=image)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,o,r,c,d;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const link=null!==(r=null===(o=t.fcmOptions)||void 0===o?void 0:o.link)&&void 0!==r?r:null===(c=t.notification)||void 0===c?void 0:c.click_action;link&&(e.fcmOptions.link=link);const l=null===(d=t.fcmOptions)||void 0===d?void 0:d.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function Oe(e){var t,n;const o=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG;if(!o)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const link=function(e){var t,n,o;const link=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(o=e.notification)||void 0===o?void 0:o.click_action;if(link)return link;return data=e.data,"object"==typeof data&&data&&"google.c.a.c_id"in data?self.location.origin:null;var data}(o);if(!link)return;const r=new URL(link,self.location.href),c=new URL(self.location.origin);if(r.host!==c.host)return;let d=await async function(e){const t=await _e();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(r);var l;return d?d=await d.focus():(d=await self.clients.openWindow(link),await(l=3e3,new Promise((e=>{setTimeout(e,l)})))),d?(o.messageType=ne.NOTIFICATION_CLICKED,o.isFirebaseMessaging=!0,d.postMessage(o)):void 0}function _e(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function je(e){return ge.create("missing-app-config-values",{valueName:e})}Se("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Se("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Me{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=function(e){if(!e||!e.options)throw je("App Configuration Object");if(!e.name)throw je("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw je(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}const Ce=e=>{const t=new Me(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",(e=>{e.waitUntil(Te(e,t))})),self.addEventListener("pushsubscriptionchange",(e=>{e.waitUntil(async function(e,t){var n,o;const{newSubscription:r}=e;if(!r)return void await ve(t);const c=await ue(t.firebaseDependencies);await ve(t),t.vapidKey=null!==(o=null===(n=null==c?void 0:c.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==o?o:Z,await ye(t)}(e,t))})),self.addEventListener("notificationclick",(e=>{e.waitUntil(Oe(e))})),t};function Ae(e,t){return function(e,t){if(void 0!==self.document)throw ge.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=Object(d.u)(e),t)}Object(l._registerComponent)(new r.a("messaging-sw",Ce,"PUBLIC"));class De{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return async function(e,t){return $(e=Object(d.u)(e),t)}(this._delegate,e)}async deleteToken(){return Q(this._delegate)}onMessage(e){return X(this._delegate,e)}onBackgroundMessage(e){return Ae(this._delegate,e)}}const Ke=e=>self&&"ServiceWorkerGlobalScope"in self?new De(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new De(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),Pe={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?Object(d.C)()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&Object(d.C)()&&Object(d.e)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};o.a.INTERNAL.registerComponent(new r.a("messaging-compat",Ke,"PUBLIC").setServiceProps(Pe)),o.a.registerVersion("@firebase/messaging-compat","0.1.14")}}]);