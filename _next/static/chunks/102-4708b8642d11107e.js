"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{9138:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"addLocale",{enumerable:!0,get:function(){return h}}),n(5624);let h=function(m){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return m};(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},5295:function(j,e,n){function h(m,t,r,a){return!1}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return h}}),n(5624),(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},1102:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});let h=n(459),m=n(5559),t=h._(n(6763)),r=n(2121),a=n(9550),o=n(1230),i=n(9084),y=n(9138),b=n(7959),R=n(5277),u=n(8889),s=n(5295),f=n(1044),g=n(3673),O=new Set;function _(l,p,v,P,w,x){if(typeof window<"u"&&(x||(0,a.isLocalURL)(p))){if(!P.bypassPrefetchedCheck){let N=p+"%"+v+"%"+(P.locale!==void 0?P.locale:"locale"in l?l.locale:void 0);if(O.has(N))return;O.add(N)}(async()=>x?l.prefetch(p,w):l.prefetch(p,v,P))().catch(N=>{})}}function d(l){return typeof l=="string"?l:(0,o.formatUrl)(l)}let c=t.default.forwardRef(function(l,p){let v,P,{href:w,as:x,children:N,prefetch:D=null,passHref:B,replace:W,shallow:q,scroll:F,locale:C,onClick:V,onMouseEnter:Z,onTouchStart:G,legacyBehavior:k=!1,...se}=l;v=N,k&&(typeof v=="string"||typeof v=="number")&&(v=(0,m.jsx)("a",{children:v}));let S=t.default.useContext(b.RouterContext),ce=t.default.useContext(R.AppRouterContext),T=S??ce,U=!S,$=D!==!1,Y=D===null?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:L,as:M}=t.default.useMemo(()=>{if(!S){let z=d(w);return{href:z,as:x?d(x):z}}let[E,A]=(0,r.resolveHref)(S,w,!0);return{href:E,as:x?(0,r.resolveHref)(S,x):A||E}},[S,w,x]),J=t.default.useRef(L),X=t.default.useRef(M);k&&(P=t.default.Children.only(v));let K=k?P&&typeof P=="object"&&P.ref:p,[ee,te,re]=(0,u.useIntersection)({rootMargin:"200px"}),fe=t.default.useCallback(E=>{(X.current!==M||J.current!==L)&&(re(),X.current=M,J.current=L),ee(E),K&&(typeof K=="function"?K(E):typeof K=="object"&&(K.current=E))},[M,K,L,re,ee]);t.default.useEffect(()=>{T&&te&&$&&_(T,L,M,{locale:C},{kind:Y},U)},[M,L,te,C,$,S?.locale,T,U,Y]);let Q={ref:fe,onClick(E){k||typeof V!="function"||V(E),k&&P.props&&typeof P.props.onClick=="function"&&P.props.onClick(E),T&&!E.defaultPrevented&&function(A,z,H,ne,oe,de,ae,pe,ie){let{nodeName:he}=A.currentTarget;if(he.toUpperCase()==="A"&&(function(I){let ue=I.currentTarget.getAttribute("target");return ue&&ue!=="_self"||I.metaKey||I.ctrlKey||I.shiftKey||I.altKey||I.nativeEvent&&I.nativeEvent.which===2}(A)||!ie&&!(0,a.isLocalURL)(H)))return;A.preventDefault();let le=()=>{let I=ae==null||ae;"beforePopState"in z?z[oe?"replace":"push"](H,ne,{shallow:de,locale:pe,scroll:I}):z[oe?"replace":"push"](ne||H,{scroll:I})};ie?t.default.startTransition(le):le()}(E,T,L,M,W,q,F,C,U)},onMouseEnter(E){k||typeof Z!="function"||Z(E),k&&P.props&&typeof P.props.onMouseEnter=="function"&&P.props.onMouseEnter(E),T&&($||!U)&&_(T,L,M,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:Y},U)},onTouchStart:function(E){k||typeof G!="function"||G(E),k&&P.props&&typeof P.props.onTouchStart=="function"&&P.props.onTouchStart(E),T&&($||!U)&&_(T,L,M,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:Y},U)}};if((0,i.isAbsoluteUrl)(M))Q.href=M;else if(!k||B||P.type==="a"&&!("href"in P.props)){let E=C!==void 0?C:S?.locale,A=S?.isLocaleDomain&&(0,s.getDomainLocale)(M,E,S?.locales,S?.domainLocales);Q.href=A||(0,f.addBasePath)((0,y.addLocale)(M,E,S?.defaultLocale))}return k?t.default.cloneElement(P,Q):(0,m.jsx)("a",{...se,...Q,children:v})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},5457:function(j,e){Object.defineProperty(e,"__esModule",{value:!0}),function(m,t){for(var r in t)Object.defineProperty(m,r,{enumerable:!0,get:t[r]})}(e,{cancelIdleCallback:function(){return h},requestIdleCallback:function(){return n}});let n=typeof self<"u"&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(m){let t=Date.now();return self.setTimeout(function(){m({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},h=typeof self<"u"&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(m){return clearTimeout(m)};(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},2121:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"resolveHref",{enumerable:!0,get:function(){return b}});let h=n(9044),m=n(1230),t=n(1235),r=n(9084),a=n(5624),o=n(9550),i=n(685),y=n(595);function b(R,u,s){let f,g=typeof u=="string"?u:(0,m.formatWithValidation)(u),O=g.match(/^[a-zA-Z]{1,}:\/\//),_=O?g.slice(O[0].length):g;if((_.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+g+"' passed to next/router in page: '"+R.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let d=(0,r.normalizeRepeatedSlashes)(_);g=(O?O[0]:"")+d}if(!(0,o.isLocalURL)(g))return s?[g]:g;try{f=new URL(g.startsWith("#")?R.asPath:R.pathname,"http://n")}catch{f=new URL("/","http://n")}try{let d=new URL(g,f);d.pathname=(0,a.normalizePathTrailingSlash)(d.pathname);let c="";if((0,i.isDynamicRoute)(d.pathname)&&d.searchParams&&s){let p=(0,h.searchParamsToUrlQuery)(d.searchParams),{result:v,params:P}=(0,y.interpolateAs)(d.pathname,d.pathname,p);v&&(c=(0,m.formatWithValidation)({pathname:v,hash:d.hash,query:(0,t.omit)(p,P)}))}let l=d.origin===f.origin?d.href.slice(d.origin.length):d.href;return s?[l,c||l]:l}catch{return s?[g]:g}}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},8889:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return o}});let h=n(6763),m=n(5457),t=typeof IntersectionObserver=="function",r=new Map,a=[];function o(i){let{rootRef:y,rootMargin:b,disabled:R}=i,u=R||!t,[s,f]=(0,h.useState)(!1),g=(0,h.useRef)(null),O=(0,h.useCallback)(_=>{g.current=_},[]);return(0,h.useEffect)(()=>{if(t){if(u||s)return;let _=g.current;if(_&&_.tagName)return function(d,c,l){let{id:p,observer:v,elements:P}=function(w){let x,N={root:w.root||null,margin:w.rootMargin||""},D=a.find(W=>W.root===N.root&&W.margin===N.margin);if(D&&(x=r.get(D)))return x;let B=new Map;return x={id:N,observer:new IntersectionObserver(W=>{W.forEach(q=>{let F=B.get(q.target),C=q.isIntersecting||q.intersectionRatio>0;F&&C&&F(C)})},w),elements:B},a.push(N),r.set(N,x),x}(l);return P.set(d,c),v.observe(d),function(){if(P.delete(d),v.unobserve(d),P.size===0){v.disconnect(),r.delete(p);let w=a.findIndex(x=>x.root===p.root&&x.margin===p.margin);w>-1&&a.splice(w,1)}}}(_,d=>d&&f(d),{root:y?.current,rootMargin:b})}else if(!s){let _=(0,m.requestIdleCallback)(()=>f(!0));return()=>(0,m.cancelIdleCallback)(_)}},[u,b,y,s,g.current]),[O,s,(0,h.useCallback)(()=>{f(!1)},[])]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),j.exports=e.default)},2708:function(j,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"escapeStringRegexp",{enumerable:!0,get:function(){return m}});let n=/[|\\{}()[\]^$+*?.-]/,h=/[|\\{}()[\]^$+*?.-]/g;function m(t){return n.test(t)?t.replace(h,"\\$&"):t}},7959:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return h}});let h=n(459)._(n(6763)).default.createContext(null)},1230:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(o,i){for(var y in i)Object.defineProperty(o,y,{enumerable:!0,get:i[y]})}(e,{formatUrl:function(){return t},formatWithValidation:function(){return a},urlObjectKeys:function(){return r}});let h=n(8028)._(n(9044)),m=/https?|ftp|gopher|file/;function t(o){let{auth:i,hostname:y}=o,b=o.protocol||"",R=o.pathname||"",u=o.hash||"",s=o.query||"",f=!1;i=i?encodeURIComponent(i).replace(/%3A/i,":")+"@":"",o.host?f=i+o.host:y&&(f=i+(~y.indexOf(":")?"["+y+"]":y),o.port&&(f+=":"+o.port)),s&&typeof s=="object"&&(s=String(h.urlQueryToSearchParams(s)));let g=o.search||s&&"?"+s||"";return b&&!b.endsWith(":")&&(b+=":"),o.slashes||(!b||m.test(b))&&f!==!1?(f="//"+(f||""),R&&R[0]!=="/"&&(R="/"+R)):f||(f=""),u&&u[0]!=="#"&&(u="#"+u),g&&g[0]!=="?"&&(g="?"+g),""+b+f+(R=R.replace(/[?#]/g,encodeURIComponent))+(g=g.replace("#","%23"))+u}let r=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(o){return t(o)}},685:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t,r){for(var a in r)Object.defineProperty(t,a,{enumerable:!0,get:r[a]})}(e,{getSortedRoutes:function(){return h.getSortedRoutes},isDynamicRoute:function(){return m.isDynamicRoute}});let h=n(3825),m=n(7926)},595:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"interpolateAs",{enumerable:!0,get:function(){return t}});let h=n(6449),m=n(3159);function t(r,a,o){let i="",y=(0,m.getRouteRegex)(r),b=y.groups,R=(a!==r?(0,h.getRouteMatcher)(y)(a):"")||o;i=r;let u=Object.keys(b);return u.every(s=>{let f=R[s]||"",{repeat:g,optional:O}=b[s],_="["+(g?"...":"")+s+"]";return O&&(_=(f?"":"/")+"["+_+"]"),g&&!Array.isArray(f)&&(f=[f]),(O||s in R)&&(i=i.replace(_,g?f.map(d=>encodeURIComponent(d)).join("/"):encodeURIComponent(f))||"/")})||(i=""),{params:u,result:i}}},7926:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isDynamicRoute",{enumerable:!0,get:function(){return t}});let h=n(2071),m=/\/\[[^/]+?\](?=\/|$)/;function t(r){return(0,h.isInterceptionRouteAppPath)(r)&&(r=(0,h.extractInterceptionRouteInformation)(r).interceptedRoute),m.test(r)}},9550:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isLocalURL",{enumerable:!0,get:function(){return t}});let h=n(9084),m=n(5556);function t(r){if(!(0,h.isAbsoluteUrl)(r))return!0;try{let a=(0,h.getLocationOrigin)(),o=new URL(r,a);return o.origin===a&&(0,m.hasBasePath)(o.pathname)}catch{return!1}}},1235:function(j,e){function n(h,m){let t={};return Object.keys(h).forEach(r=>{m.includes(r)||(t[r]=h[r])}),t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return n}})},9044:function(j,e){function n(r){let a={};return r.forEach((o,i)=>{a[i]===void 0?a[i]=o:Array.isArray(a[i])?a[i].push(o):a[i]=[a[i],o]}),a}function h(r){return typeof r!="string"&&(typeof r!="number"||isNaN(r))&&typeof r!="boolean"?"":String(r)}function m(r){let a=new URLSearchParams;return Object.entries(r).forEach(o=>{let[i,y]=o;Array.isArray(y)?y.forEach(b=>a.append(i,h(b))):a.set(i,h(y))}),a}function t(r){for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return o.forEach(y=>{Array.from(y.keys()).forEach(b=>r.delete(b)),y.forEach((b,R)=>r.append(R,b))}),r}Object.defineProperty(e,"__esModule",{value:!0}),function(r,a){for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]})}(e,{assign:function(){return t},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return m}})},6449:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getRouteMatcher",{enumerable:!0,get:function(){return m}});let h=n(9084);function m(t){let{re:r,groups:a}=t;return o=>{let i=r.exec(o);if(!i)return!1;let y=R=>{try{return decodeURIComponent(R)}catch{throw new h.DecodeError("failed to decode param")}},b={};return Object.keys(a).forEach(R=>{let u=a[R],s=i[u.pos];s!==void 0&&(b[R]=~s.indexOf("/")?s.split("/").map(f=>y(f)):u.repeat?[y(s)]:y(s))}),b}}},3159:function(j,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(u,s){for(var f in s)Object.defineProperty(u,f,{enumerable:!0,get:s[f]})}(e,{getNamedMiddlewareRegex:function(){return R},getNamedRouteRegex:function(){return b},getRouteRegex:function(){return o}});let h=n(2071),m=n(2708),t=n(3257);function r(u){let s=u.startsWith("[")&&u.endsWith("]");s&&(u=u.slice(1,-1));let f=u.startsWith("...");return f&&(u=u.slice(3)),{key:u,repeat:f,optional:s}}function a(u){let s=(0,t.removeTrailingSlash)(u).slice(1).split("/"),f={},g=1;return{parameterizedRoute:s.map(O=>{let _=h.INTERCEPTION_ROUTE_MARKERS.find(c=>O.startsWith(c)),d=O.match(/\[((?:\[.*\])|.+)\]/);if(_&&d){let{key:c,optional:l,repeat:p}=r(d[1]);return f[c]={pos:g++,repeat:p,optional:l},"/"+(0,m.escapeStringRegexp)(_)+"([^/]+?)"}if(!d)return"/"+(0,m.escapeStringRegexp)(O);{let{key:c,repeat:l,optional:p}=r(d[1]);return f[c]={pos:g++,repeat:l,optional:p},l?p?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:f}}function o(u){let{parameterizedRoute:s,groups:f}=a(u);return{re:RegExp("^"+s+"(?:/)?$"),groups:f}}function i(u){let{interceptionMarker:s,getSafeRouteKey:f,segment:g,routeKeys:O,keyPrefix:_}=u,{key:d,optional:c,repeat:l}=r(g),p=d.replace(/\W/g,"");_&&(p=""+_+p);let v=!1;(p.length===0||p.length>30)&&(v=!0),isNaN(parseInt(p.slice(0,1)))||(v=!0),v&&(p=f()),_?O[p]=""+_+d:O[p]=d;let P=s?(0,m.escapeStringRegexp)(s):"";return l?c?"(?:/"+P+"(?<"+p+">.+?))?":"/"+P+"(?<"+p+">.+?)":"/"+P+"(?<"+p+">[^/]+?)"}function y(u,s){let f,g=(0,t.removeTrailingSlash)(u).slice(1).split("/"),O=(f=0,()=>{let d="",c=++f;for(;c>0;)d+=String.fromCharCode(97+(c-1)%26),c=Math.floor((c-1)/26);return d}),_={};return{namedParameterizedRoute:g.map(d=>{let c=h.INTERCEPTION_ROUTE_MARKERS.some(p=>d.startsWith(p)),l=d.match(/\[((?:\[.*\])|.+)\]/);if(c&&l){let[p]=d.split(l[0]);return i({getSafeRouteKey:O,interceptionMarker:p,segment:l[1],routeKeys:_,keyPrefix:s?"nxtI":void 0})}return l?i({getSafeRouteKey:O,segment:l[1],routeKeys:_,keyPrefix:s?"nxtP":void 0}):"/"+(0,m.escapeStringRegexp)(d)}).join(""),routeKeys:_}}function b(u,s){let f=y(u,s);return{...o(u),namedRegex:"^"+f.namedParameterizedRoute+"(?:/)?$",routeKeys:f.routeKeys}}function R(u,s){let{parameterizedRoute:f}=a(u),{catchAll:g=!0}=s;if(f==="/")return{namedRegex:"^/"+(g?".*":"")+"$"};let{namedParameterizedRoute:O}=y(u,!1);return{namedRegex:"^"+O+(g?"(?:(/.*)?)":"")+"$"}}},3825:function(j,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getSortedRoutes",{enumerable:!0,get:function(){return h}});class n{insert(t){this._insert(t.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(t){t===void 0&&(t="/");let r=[...this.children.keys()].sort();this.slugName!==null&&r.splice(r.indexOf("[]"),1),this.restSlugName!==null&&r.splice(r.indexOf("[...]"),1),this.optionalRestSlugName!==null&&r.splice(r.indexOf("[[...]]"),1);let a=r.map(o=>this.children.get(o)._smoosh(""+t+o+"/")).reduce((o,i)=>[...o,...i],[]);if(this.slugName!==null&&a.push(...this.children.get("[]")._smoosh(t+"["+this.slugName+"]/")),!this.placeholder){let o=t==="/"?"/":t.slice(0,-1);if(this.optionalRestSlugName!=null)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+o+'" and "'+o+"[[..."+this.optionalRestSlugName+']]").');a.unshift(o)}return this.restSlugName!==null&&a.push(...this.children.get("[...]")._smoosh(t+"[..."+this.restSlugName+"]/")),this.optionalRestSlugName!==null&&a.push(...this.children.get("[[...]]")._smoosh(t+"[[..."+this.optionalRestSlugName+"]]/")),a}_insert(t,r,a){if(t.length===0){this.placeholder=!1;return}if(a)throw Error("Catch-all must be the last part of the URL.");let o=t[0];if(o.startsWith("[")&&o.endsWith("]")){let b=function(R,u){if(R!==null&&R!==u)throw Error("You cannot use different slug names for the same dynamic path ('"+R+"' !== '"+u+"').");r.forEach(s=>{if(s===u)throw Error('You cannot have the same slug name "'+u+'" repeat within a single dynamic path');if(s.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+s+'" and "'+u+'" differ only by non-word symbols within a single dynamic path')}),r.push(u)},i=o.slice(1,-1),y=!1;if(i.startsWith("[")&&i.endsWith("]")&&(i=i.slice(1,-1),y=!0),i.startsWith("...")&&(i=i.substring(3),a=!0),i.startsWith("[")||i.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+i+"').");if(i.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+i+"').");if(a)if(y){if(this.restSlugName!=null)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+t[0]+'" ).');b(this.optionalRestSlugName,i),this.optionalRestSlugName=i,o="[[...]]"}else{if(this.optionalRestSlugName!=null)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+t[0]+'").');b(this.restSlugName,i),this.restSlugName=i,o="[...]"}else{if(y)throw Error('Optional route parameters are not yet supported ("'+t[0]+'").');b(this.slugName,i),this.slugName=i,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(t.slice(1),r,a)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function h(m){let t=new n;return m.forEach(r=>t.insert(r)),t.smoosh()}},9084:function(j,e){Object.defineProperty(e,"__esModule",{value:!0}),function(c,l){for(var p in l)Object.defineProperty(c,p,{enumerable:!0,get:l[p]})}(e,{DecodeError:function(){return s},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return O},NormalizeError:function(){return f},PageNotFoundError:function(){return g},SP:function(){return R},ST:function(){return u},WEB_VITALS:function(){return n},execOnce:function(){return h},getDisplayName:function(){return o},getLocationOrigin:function(){return r},getURL:function(){return a},isAbsoluteUrl:function(){return t},isResSent:function(){return i},loadGetInitialProps:function(){return b},normalizeRepeatedSlashes:function(){return y},stringifyError:function(){return d}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function h(c){let l,p=!1;return function(){for(var v=arguments.length,P=Array(v),w=0;w<v;w++)P[w]=arguments[w];return p||(p=!0,l=c(...P)),l}}let m=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,t=c=>m.test(c);function r(){let{protocol:c,hostname:l,port:p}=window.location;return c+"//"+l+(p?":"+p:"")}function a(){let{href:c}=window.location,l=r();return c.substring(l.length)}function o(c){return typeof c=="string"?c:c.displayName||c.name||"Unknown"}function i(c){return c.finished||c.headersSent}function y(c){let l=c.split("?");return l[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(l[1]?"?"+l.slice(1).join("?"):"")}async function b(c,l){let p=l.res||l.ctx&&l.ctx.res;if(!c.getInitialProps)return l.ctx&&l.Component?{pageProps:await b(l.Component,l.ctx)}:{};let v=await c.getInitialProps(l);if(p&&i(p))return v;if(!v)throw Error('"'+o(c)+'.getInitialProps()" should resolve to an object. But found "'+v+'" instead.');return v}let R=typeof performance<"u",u=R&&["mark","measure","getEntriesByName"].every(c=>typeof performance[c]=="function");class s extends Error{}class f extends Error{}class g extends Error{constructor(l){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+l}}class O extends Error{constructor(l,p){super(),this.message="Failed to load static file for page: "+l+" "+p}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function d(c){return JSON.stringify({message:c.message,stack:c.stack})}}}]);
