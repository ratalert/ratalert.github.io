(this.webpackJsonpRatAlert=this.webpackJsonpRatAlert||[]).push([[6],{16:function(e,t,r){"use strict";r.r(t);var a,d,i=r(22),n=r(29),c=r(21),o=r(26),s=r.n(o),p=(r(940),r(146),r(285),r(0)),j=r(48),v=r(66),m=(r(286),r(432)),h=r(147),w=(r(52),r(49)),b=(r(57),r(434),r(1)),P=r(38).ethers,T=0,l=0;d="localhost",a=h.d.localhost,T=1337;var C,O="full",x=!1;if(!C){var _=(new Date).getHours();C=_>=7&&_<=9?"morning":_>=10&&_<=17?"day":_>=18&&_<=20?"evening":"night"}var E,u,y=navigator.onLine?new P.providers.StaticJsonRpcProvider("https://rpc.scaffoldeth.io:48544"):null,I=navigator.onLine?new P.providers.StaticJsonRpcProvider("https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406"):null,k=navigator.onLine?new P.providers.StaticJsonRpcProvider("https://mainnet.infura.io/v3/"+h.b):null,S=a.rpcUrl;Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.ratalert.com",REACT_APP_MODE:"full",REACT_APP_ETH_ENV:"matic",REACT_APP_GRAPH_URI:"//api.thegraph.com/subgraphs/name/ratalert/ratalert",REACT_APP_GRAPH_ETH_ENV:"matic"}).REACT_APP_PROVIDER&&Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.ratalert.com",REACT_APP_MODE:"full",REACT_APP_ETH_ENV:"matic",REACT_APP_GRAPH_URI:"//api.thegraph.com/subgraphs/name/ratalert/ratalert",REACT_APP_GRAPH_ETH_ENV:"matic"}).REACT_APP_PROVIDER;Math.round((new Date).getTime()/1e3);t.default=function(e){var t,r,o,h,P,_,S,g=I&&I._isProvider?I:y&&y._network?y:k,A=Object(p.useState)(),R=Object(c.a)(A,2),N=R[0],M=R[1],f=Object(p.useState)(),H=Object(c.a)(f,2),D=H[0],B=H[1],L="";Object(w.g)(E,Object(n.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getBlock(E._lastBlockNumber);case 2:l=e.sent.timestamp,t=new CustomEvent("blockTime",{bubbles:!0,detail:{lastBlockTime:l}}),window.dispatchEvent(t);case 5:case"end":return e.stop()}}),e)}))));var U=Object(p.useState)(),V=Object(c.a)(U,2),K=(V[0],V[1]);Object(p.useEffect)((function(){K(window.location.pathname)}),[K]);var W=Object(p.useState)(!1),J=Object(c.a)(W,2);J[0],J[1];var F=function(){"morning"===C?C="day":"day"===C?C="evening":"evening"===C?C="night":"night"===C&&(C="morning");var e=new CustomEvent("dayTime",{bubbles:!0,detail:{dayTime:C}});window.dispatchEvent(e)};return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[L,Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,userSigner:r,mainnetProvider:g,blockExplorer:u,setAddress:B,setInjectedProvider:M,injectedProvider:N,active:1,dayTime:C,dayTimeSwitch:F,debug:x,chainId:T,networkName:d,appMode:O,content:Object(b.jsx)(m.j,{tx:h,appMode:O,contractConfig:P,readContracts:_,writeContracts:S,userSigner:r,address:D,provider:E,targetNetwork:a,setInjectedProvider:M,chainId:T,lastBlockTime:l,dayTime:C,debug:x,localBalance:o,networkName:d})})}),Object(b.jsx)(v.a,{exact:!0,path:"/game",children:Object(b.jsx)(m.n,(t={tx:h,readContracts:_,writeContracts:S,address:D,provider:E,userSigner:r,mainnetProvider:g,blockExplorer:u,setAddress:B,appMode:O,setInjectedProvider:M,injectedProvider:N,active:2,dayTime:C,dayTimeSwitch:F,debug:x,chainId:T,networkName:d},Object(i.a)(t,"appMode",O),Object(i.a)(t,"content",Object(b.jsx)(m.m,{tx:h,contractConfig:P,readContracts:_,writeContracts:S,userSigner:r,address:D,provider:E,targetNetwork:a,chainId:T,lastBlockTime:l,dayTime:C,debug:x,localBalance:o,networkName:d,appMode:O})),t))}),Object(b.jsx)(v.a,{path:"/leaderboard",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:3,injectedProvider:N,setInjectedProvider:M,dayTime:C,appMode:O,chainId:T,networkName:d,dayTimeSwitch:F,content:Object(b.jsx)(m.k,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,networkName:d})})}),Object(b.jsx)(v.a,{path:"/claims",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:4,appMode:O,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,networkName:d,dayTimeSwitch:F,content:Object(b.jsx)(m.c,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,networkName:d})})}),Object(b.jsx)(v.a,{path:"/whitepaper",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:5,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.q,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/gameplay",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:5,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.g,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/roadmap",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:6,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.o,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/faq",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:7,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.f,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/giveaway",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:9,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.h,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/admin",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,appMode:O,provider:E,active:7,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.b,{tx:h,chainId:T,readContracts:_,writeContracts:S,appMode:O,address:D,provider:E,dayTime:C,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/infographics",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:9,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.i,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})}),Object(b.jsx)(v.a,{path:"/infographics",children:Object(b.jsx)(m.n,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,active:9,injectedProvider:N,setInjectedProvider:M,dayTime:C,chainId:T,appMode:O,dayTimeSwitch:F,networkName:d,content:Object(b.jsx)(m.i,{tx:h,readContracts:_,writeContracts:S,address:D,provider:E,dayTime:C,appMode:O,setInjectedProvider:M,networkName:d})})})]})]})})}}}]);
//# sourceMappingURL=6.49f0503e.chunk.js.map