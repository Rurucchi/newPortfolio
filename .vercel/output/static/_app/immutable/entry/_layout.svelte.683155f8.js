import{S as ee,i as se,s as te,k as f,q as P,a as g,l as _,m as d,r as q,h as r,c as $,n as u,C as S,b as x,D as n,E as B,g as C,d as N,f as le,o as ae,F as oe,y as ne,z as ce,A as re,G as ie,H as fe,I as _e,B as de,v as ue}from"../chunks/index.c933b56c.js";import"../chunks/paths.4dff8142.js";import{s as M}from"../chunks/styles.module.deaf014b.js";const ve="_mainContainer_947s7_1",he="_flexRow_947s7_19",me="_line_947s7_35",pe="_selector_947s7_49",E={mainContainer:ve,flexRow:he,line:me,selector:pe};function Ee(v){let e,o,c,a,t,l,s,i,m,h,D,I,z,F,V,G,p,k,w,T,U,L;return{c(){e=f("nav"),o=f("ul"),c=f("div"),a=f("li"),t=f("a"),l=P("Home"),s=g(),i=f("div"),m=g(),h=f("div"),D=f("li"),I=f("a"),z=P("Stack"),F=g(),V=f("div"),G=g(),p=f("div"),k=f("li"),w=f("a"),T=P("Projects"),U=g(),L=f("div"),this.h()},l(b){e=_(b,"NAV",{class:!0});var A=d(e);o=_(A,"UL",{class:!0});var y=d(o);c=_(y,"DIV",{class:!0});var R=d(c);a=_(R,"LI",{});var J=d(a);t=_(J,"A",{href:!0,class:!0});var K=d(t);l=q(K,"Home"),K.forEach(r),J.forEach(r),s=$(R),i=_(R,"DIV",{class:!0}),d(i).forEach(r),R.forEach(r),m=$(y),h=_(y,"DIV",{class:!0});var j=d(h);D=_(j,"LI",{});var O=d(D);I=_(O,"A",{href:!0,class:!0});var Q=d(I);z=q(Q,"Stack"),Q.forEach(r),O.forEach(r),F=$(j),V=_(j,"DIV",{class:!0}),d(V).forEach(r),j.forEach(r),G=$(y),p=_(y,"DIV",{class:!0});var H=d(p);k=_(H,"LI",{});var W=d(k);w=_(W,"A",{href:!0,class:!0});var X=d(w);T=q(X,"Projects"),X.forEach(r),W.forEach(r),U=$(H),L=_(H,"DIV",{class:!0}),d(L).forEach(r),H.forEach(r),y.forEach(r),A.forEach(r),this.h()},h(){u(t,"href","/"),u(t,"class","svelte-1ho371c"),u(i,"class",E.line),u(c,"class",E.selector),u(I,"href","/stack"),u(I,"class","svelte-1ho371c"),u(V,"class",E.line),u(h,"class",E.selector),u(w,"href","/projects"),u(w,"class","svelte-1ho371c"),u(L,"class",E.line),u(p,"class",E.selector),u(o,"class",S(E.flexRow)+" svelte-1ho371c"),u(e,"class",E.mainContainer)},m(b,A){x(b,e,A),n(e,o),n(o,c),n(c,a),n(a,t),n(t,l),n(c,s),n(c,i),n(o,m),n(o,h),n(h,D),n(D,I),n(I,z),n(h,F),n(h,V),n(o,G),n(o,p),n(p,k),n(k,w),n(w,T),n(p,U),n(p,L)},p:B,i:B,o:B,d(b){b&&r(e)}}}class ge extends ee{constructor(e){super(),se(this,e,null,Ee,te,{})}}function Y(v){let e,o,c,a,t,l;return{c(){e=f("div"),o=f("div"),c=f("p"),a=P("Loading..."),t=g(),l=f("div"),this.h()},l(s){e=_(s,"DIV",{});var i=d(e);o=_(i,"DIV",{class:!0});var m=d(o);c=_(m,"P",{class:!0});var h=d(c);a=q(h,"Loading..."),h.forEach(r),t=$(m),l=_(m,"DIV",{class:!0}),d(l).forEach(r),m.forEach(r),i.forEach(r),this.h()},h(){u(c,"class",S(M.loadingMessage)+" svelte-14nc07w"),u(l,"class",S(M.loadingBar)+" svelte-14nc07w"),u(o,"class",S(M.loadingScreen)+" svelte-14nc07w")},m(s,i){x(s,e,i),n(e,o),n(o,c),n(c,a),n(o,t),n(o,l)},p:B,d(s){s&&r(e)}}}function Z(v){let e,o,c,a;o=new ge({});const t=v[2].default,l=oe(t,v,v[1],null);return{c(){e=f("div"),ne(o.$$.fragment),c=g(),l&&l.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var i=d(e);ce(o.$$.fragment,i),c=$(i),l&&l.l(i),i.forEach(r),this.h()},h(){u(e,"class",S(M.outlet)+" svelte-14nc07w")},m(s,i){x(s,e,i),re(o,e,null),n(e,c),l&&l.m(e,null),a=!0},p(s,i){l&&l.p&&(!a||i&2)&&ie(l,t,s,s[1],a?_e(t,s[1],i,null):fe(s[1]),null)},i(s){a||(C(o.$$.fragment,s),C(l,s),a=!0)},o(s){N(o.$$.fragment,s),N(l,s),a=!1},d(s){s&&r(e),de(o),l&&l.d(s)}}}function $e(v){let e,o,c,a=v[0]&&Y(),t=v[0]&&Z(v);return{c(){e=f("div"),a&&a.c(),o=g(),t&&t.c(),this.h()},l(l){e=_(l,"DIV",{class:!0});var s=d(e);a&&a.l(s),o=$(s),t&&t.l(s),s.forEach(r),this.h()},h(){u(e,"class","body svelte-14nc07w")},m(l,s){x(l,e,s),a&&a.m(e,null),n(e,o),t&&t.m(e,null),c=!0},p(l,[s]){l[0]?a?a.p(l,s):(a=Y(),a.c(),a.m(e,o)):a&&(a.d(1),a=null),l[0]?t?(t.p(l,s),s&1&&C(t,1)):(t=Z(l),t.c(),C(t,1),t.m(e,null)):t&&(ue(),N(t,1,1,()=>{t=null}),le())},i(l){c||(C(t),c=!0)},o(l){N(t),c=!1},d(l){l&&r(e),a&&a.d(),t&&t.d()}}}function Ie(v,e,o){let{$$slots:c={},$$scope:a}=e,t=!1;const l=async()=>{await setTimeout("",2e3),o(0,t=!0)};return ae(async()=>{l()}),v.$$set=s=>{"$$scope"in s&&o(1,a=s.$$scope)},[t,a,c]}class Ve extends ee{constructor(e){super(),se(this,e,Ie,$e,te,{})}}export{Ve as default};
