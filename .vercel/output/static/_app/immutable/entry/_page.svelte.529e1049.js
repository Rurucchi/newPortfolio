import{S,i as X,s as K,k as o,l,m as h,h as u,n as e,b as R,D as n,K as at,E as M,a as L,c as y,L as U,q as z,y as Q,r as P,z as W,A as Y,g as Z,d as tt,B as et}from"../chunks/index.c933b56c.js";import{s as G}from"../chunks/styles.module.deaf014b.js";import{h as T}from"../chunks/singletons.f37df801.js";const st="_buttonContainer_ns74f_1",rt="_arrow_ns74f_33",nt={buttonContainer:st,arrow:rt};T.disable_scroll_handling;const ot=T.goto;T.invalidate;T.invalidateAll;T.preload_data;T.preload_code;T.before_navigate;T.after_navigate;function lt(m){let t,a,i,s;return{c(){t=o("button"),a=o("div"),this.h()},l(c){t=l(c,"BUTTON",{class:!0});var r=h(t);a=l(r,"DIV",{class:!0}),h(a).forEach(u),r.forEach(u),this.h()},h(){e(a,"class",nt.arrow),e(t,"class",nt.buttonContainer)},m(c,r){R(c,t,r),n(t,a),i||(s=at(t,"click",m[1],{once:!0}),i=!0)},p:M,i:M,o:M,d(c){c&&u(t),i=!1,s()}}}function it(m){function t(i){ot(`/${i}`,!0)}return[t,()=>{t("stack")}]}class ct extends S{constructor(t){super(),X(this,t,it,lt,K,{})}}const ut="_mainContainer_i1qml_1",ft="_button_i1qml_29",ht="_icon_i1qml_59",q={mainContainer:ut,button:ft,icon:ht};function dt(m){let t,a,i,s,c,r,v,k,f,$,D,b,_,x,B,C;return{c(){t=o("div"),a=o("a"),i=o("button"),s=o("img"),r=L(),v=o("a"),k=o("button"),f=o("img"),D=L(),b=o("button"),_=o("img"),this.h()},l(p){t=l(p,"DIV",{class:!0});var d=h(t);a=l(d,"A",{href:!0,target:!0,rel:!0});var w=h(a);i=l(w,"BUTTON",{class:!0});var A=h(i);s=l(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(u),w.forEach(u),r=y(d),v=l(d,"A",{href:!0,target:!0,rel:!0});var E=h(v);k=l(E,"BUTTON",{class:!0});var V=h(k);f=l(V,"IMG",{src:!0,alt:!0,class:!0}),V.forEach(u),E.forEach(u),D=y(d),b=l(d,"BUTTON",{class:!0});var g=h(b);_=l(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(u),d.forEach(u),this.h()},h(){U(s.src,c="src\\static\\logo\\githublogo.png")||e(s,"src",c),e(s,"alt","github"),e(s,"class",q.icon),e(i,"class",q.button),e(a,"href",m[0]),e(a,"target","_blank"),e(a,"rel","noreferrer"),U(f.src,$="src/static/logo/linkedinlogo.png")||e(f,"src",$),e(f,"alt","linkedin"),e(f,"class",q.icon),e(k,"class",q.button),e(v,"href",m[1]),e(v,"target","_blank"),e(v,"rel","noreferrer"),U(_.src,x="src/static/logo/copy.svg")||e(_,"src",x),e(_,"alt","copy"),e(_,"class",q.icon),e(b,"class",q.button),e(t,"class",q.mainContainer)},m(p,d){R(p,t,d),n(t,a),n(a,i),n(i,s),n(t,r),n(t,v),n(v,k),n(k,f),n(t,D),n(t,b),n(b,_),B||(C=at(b,"click",m[2]),B=!0)},p(p,[d]){d&1&&e(a,"href",p[0]),d&2&&e(v,"href",p[1])},i:M,o:M,d(p){p&&u(t),B=!1,C()}}}function _t(){return navigator.clipboard.writeText(window.location),alert("Copied url!"),0}function gt(m,t,a){let{ghLink:i}=t,{liLink:s}=t;const c=()=>_t();return m.$$set=r=>{"ghLink"in r&&a(0,i=r.ghLink),"liLink"in r&&a(1,s=r.liLink)},[i,s,c]}class mt extends S{constructor(t){super(),X(this,t,gt,dt,K,{ghLink:0,liLink:1})}}function vt(m){let t,a,i,s,c,r,v,k,f,$,D,b,_,x,B,C,p,d,w,A,E,V;return w=new mt({props:{ghLink:"https://github.com/Rurucchi",liLink:"https://www.linkedin.com/in/lenny-xiong/"}}),E=new ct({}),{c(){t=o("div"),a=o("div"),i=L(),s=o("div"),c=o("div"),r=o("img"),k=L(),f=o("div"),$=o("h1"),D=z("Hello!"),b=L(),_=o("h1"),x=z("I'm Lenny Xiong"),B=L(),C=o("h2"),p=z("I code things for the web!!"),d=L(),Q(w.$$.fragment),A=L(),Q(E.$$.fragment),this.h()},l(g){t=l(g,"DIV",{class:!0});var I=h(t);a=l(I,"DIV",{class:!0}),h(a).forEach(u),i=y(I),s=l(I,"DIV",{class:!0});var H=h(s);c=l(H,"DIV",{class:!0});var N=h(c);r=l(N,"IMG",{src:!0,alt:!0,class:!0}),k=y(N),f=l(N,"DIV",{class:!0});var O=h(f);$=l(O,"H1",{class:!0});var j=h($);D=P(j,"Hello!"),j.forEach(u),b=y(O),_=l(O,"H1",{class:!0});var F=h(_);x=P(F,"I'm Lenny Xiong"),F.forEach(u),O.forEach(u),N.forEach(u),B=y(H),C=l(H,"H2",{});var J=h(C);p=P(J,"I code things for the web!!"),J.forEach(u),d=y(H),W(w.$$.fragment,H),H.forEach(u),A=y(I),W(E.$$.fragment,I),I.forEach(u),this.h()},h(){e(a,"class",G.homeBg),U(r.src,v="src/static/pfp/pfp.png")||e(r,"src",v),e(r,"alt","pfp"),e(r,"class",G.pfp),e($,"class","svelte-dgzdfp"),e(_,"class","svelte-dgzdfp"),e(f,"class",G.nameContainer),e(c,"class",G.pfpContainer),e(s,"class",G.infoContainer),e(t,"class",G.appContainer)},m(g,I){R(g,t,I),n(t,a),n(t,i),n(t,s),n(s,c),n(c,r),n(c,k),n(c,f),n(f,$),n($,D),n(f,b),n(f,_),n(_,x),n(s,B),n(s,C),n(C,p),n(s,d),Y(w,s,null),n(t,A),Y(E,t,null),V=!0},p:M,i(g){V||(Z(w.$$.fragment,g),Z(E.$$.fragment,g),V=!0)},o(g){tt(w.$$.fragment,g),tt(E.$$.fragment,g),V=!1},d(g){g&&u(t),et(w),et(E)}}}class wt extends S{constructor(t){super(),X(this,t,null,vt,K,{})}}export{wt as default};
