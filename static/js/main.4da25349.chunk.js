(this["webpackJsonpessay-analyzer"]=this["webpackJsonpessay-analyzer"]||[]).push([[0],{120:function(e,t,n){e.exports=n(215)},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),c=(n(125),n(19)),s=n(217),l=n(222),u=n(223),h=n(224),m=n(225),f=n(226);n(126),n(127);function d(e){return a.a.createElement("div",{className:"word-count"},e.words.sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0})).map((function(e){return a.a.createElement("div",{key:e.value,className:"word-count-group"},a.a.createElement("span",{className:"word-count-title"},e.value),a.a.createElement("span",{className:"word-count-subtitle"},e.count," repeti\xe7\xf5es"))})))}n(218),n(128);var g=n(49),p=n.n(g);var v=n(77);n(160);function w(e){var t=a.a.useState({requestStatus:-1,synonyms:[]}),n=Object(c.a)(t,2),r=n[0],o=n[1];return a.a.useEffect((function(){o((function(e){return Object(v.a)({},e,{requestStatus:1})})),fetch("https://cors-anywhere.herokuapp.com/https://www.sinonimos.com.br/".concat(e.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")),{method:"GET",headers:{"x-requested-with":"xmlhttprequest","Content-Type":"text/plain; charset=ISO-8859-1"}}).then((function(e){return e.text()})).then((function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.querySelectorAll(".s-wrapper .sinonimos a"),r=[];n.forEach((function(e){r.push(e.innerText)})),o((function(e){return Object(v.a)({},e,{synonyms:r,requestStatus:200})}))})).catch((function(e){return console.log(e)}))}),[e.word]),a.a.createElement("div",{className:"synonyms-selector"},!e.hideTitle&&a.a.createElement("span",{className:"synonyms-selector-title"},e.word),a.a.createElement("div",{className:"synonyms-container"},200===r.requestStatus?r.synonyms.slice(0,10).map((function(t){return a.a.createElement("span",{key:t,onClick:function(){return e.replaceWord(t)}},t)})):a.a.createElement("span",null,"carregando...")))}var E={SM:function(){return window.matchMedia("(min-width: 576px)").matches},MD:function(){return window.matchMedia("(min-width: 768px)").matches},LG:function(){return window.matchMedia("(min-width: 992px)").matches},XL:function(){return window.matchMedia("(min-width: 1200px)").matches}},k=n(219),x=n(80);n(161);function y(e){var t=a.a.createElement("div",{className:"word-count-popover-content"},e.words.sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0})).map((function(e){return a.a.createElement("div",{key:e.value,className:"word-count-group"},a.a.createElement("span",{className:"word-count-popover-title"},e.value),a.a.createElement("span",{className:"word-count-popover-subtitle"},e.count," repeti\xe7\xf5es"))})));return a.a.createElement("div",{className:"word-count-popover"},a.a.createElement(k.a,{content:t,trigger:"click",placement:"bottomRight"},a.a.createElement(x.a,{shape:"round",type:"primary"},e.words?e.words.length:0," palavras repetidas")))}var b=n(3),L=n(4),O=n(103),N=n(105),S=n(39),C=n(119),j=n(220),M=n(221),W=n(79),T=function(e){var t,n,r=e.Pos;function a(e,t){for(var n=function(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}(e),r=n,a=0;a<t.length;a++)-1==r.indexOf(t.charAt(a))&&(r+=t.charAt(a));return n==r?e:new RegExp(e.source,r)}function o(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function i(e,t,n){t=a(t,"g");for(var o=n.line,i=n.ch,c=e.lastLine();o<=c;o++,i=0){t.lastIndex=i;var s=e.getLine(o),l=t.exec(s);if(l)return{from:r(o,l.index),to:r(o,l.index+l[0].length),match:l}}}function c(e,t,n){if(!o(t))return i(e,t,n);t=a(t,"gm");for(var c,s=1,l=n.line,u=e.lastLine();l<=u;){for(var h=0;h<s&&!(l>u);h++){var m=e.getLine(l++);c=null==c?m:c+"\n"+m}s*=2,t.lastIndex=n.ch;var f=t.exec(c);if(f){var d=c.slice(0,f.index).split("\n"),g=f[0].split("\n"),p=n.line+d.length-1,v=d[d.length-1].length;return{from:r(p,v),to:r(p+g.length-1,1==g.length?v+g[0].length:g[g.length-1].length),match:f}}}}function s(e,t,n){for(var r,a=0;a<=e.length;){t.lastIndex=a;var o=t.exec(e);if(!o)break;var i=o.index+o[0].length;if(i>e.length-n)break;(!r||i>r.index+r[0].length)&&(r=o),a=o.index+1}return r}function l(e,t,n){t=a(t,"g");for(var o=n.line,i=n.ch,c=e.firstLine();o>=c;o--,i=-1){var l=e.getLine(o),u=s(l,t,i<0?0:l.length-i);if(u)return{from:r(o,u.index),to:r(o,u.index+u[0].length),match:u}}}function u(e,t,n){if(!o(t))return l(e,t,n);t=a(t,"gm");for(var i,c=1,u=e.getLine(n.line).length-n.ch,h=n.line,m=e.firstLine();h>=m;){for(var f=0;f<c&&h>=m;f++){var d=e.getLine(h--);i=null==i?d:d+"\n"+i}c*=2;var g=s(i,t,u);if(g){var p=i.slice(0,g.index).split("\n"),v=g[0].split("\n"),w=h+p.length,E=p[p.length-1].length;return{from:r(w,E),to:r(w+v.length-1,1==v.length?E+v[0].length:v[v.length-1].length),match:g}}}}function h(e,t,n,r){if(e.length==t.length)return n;for(var a=0,o=n+Math.max(0,e.length-t.length);;){if(a==o)return a;var i=a+o>>1,c=r(e.slice(0,i)).length;if(c==n)return i;c>n?o=i:a=i+1}}function m(e,a,o,i){if(!a.length)return null;var c=i?t:n,s=c(a).split(/\r|\n\r?/);e:for(var l=o.line,u=o.ch,m=e.lastLine()+1-s.length;l<=m;l++,u=0){var f=e.getLine(l).slice(u),d=c(f);if(1==s.length){var g=d.indexOf(s[0]);if(-1==g)continue e;o=h(f,d,g,c)+u;return{from:r(l,h(f,d,g,c)+u),to:r(l,h(f,d,g+s[0].length,c)+u)}}var p=d.length-s[0].length;if(d.slice(p)==s[0]){for(var v=1;v<s.length-1;v++)if(c(e.getLine(l+v))!=s[v])continue e;var w=e.getLine(l+s.length-1),E=c(w),k=s[s.length-1];if(E.slice(0,k.length)==k)return{from:r(l,h(f,d,p,c)+u),to:r(l+s.length-1,h(w,E,k.length,c))}}}}function f(e,a,o,i){if(!a.length)return null;var c=i?t:n,s=c(a).split(/\r|\n\r?/);e:for(var l=o.line,u=o.ch,m=e.firstLine()-1+s.length;l>=m;l--,u=-1){var f=e.getLine(l);u>-1&&(f=f.slice(0,u));var d=c(f);if(1==s.length){var g=d.lastIndexOf(s[0]);if(-1==g)continue e;return{from:r(l,h(f,d,g,c)),to:r(l,h(f,d,g+s[0].length,c))}}var p=s[s.length-1];if(d.slice(0,p.length)==p){var v=1;for(o=l-s.length+1;v<s.length-1;v++)if(c(e.getLine(o+v))!=s[v])continue e;var w=e.getLine(l+1-s.length),E=c(w);if(E.slice(E.length-s[0].length)==s[0])return{from:r(l+1-s.length,h(w,E,w.length-s[0].length,c)),to:r(l,h(f,d,p.length,c))}}}}function d(e,t,n,o){var s;this.atOccurrence=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof o?s=o.caseFold:(s=o,o=null),"string"==typeof t?(null==s&&(s=!1),this.matches=function(n,r){return(n?f:m)(e,t,r,s)}):(t=a(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?l:i)(e,t,r)}:this.matches=function(n,r){return(n?u:c)(e,t,r)})}String.prototype.normalize?(t=function(e){return e.normalize("NFD").toLowerCase()},n=function(e){return e.normalize("NFD")}):(t=function(e){return e.toLowerCase()},n=function(e){return e}),d.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){for(var n=this.matches(t,this.doc.clipPos(t?this.pos.from:this.pos.to));n&&0==e.cmpPos(n.from,n.to);)t?n.from.ch?n.from=r(n.from.line,n.from.ch-1):n=n.from.line==this.doc.firstLine()?null:this.matches(t,this.doc.clipPos(r(n.from.line-1))):n.to.ch<this.doc.getLine(n.to.line).length?n.to=r(n.to.line,n.to.ch+1):n=n.to.line==this.doc.lastLine()?null:this.matches(t,r(n.to.line+1,0));if(n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var a=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:a,to:a},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var a=e.splitLines(t);this.doc.replaceRange(a,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+a.length-1,a[a.length-1].length+(1==a.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new d(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new d(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],a=this.getSearchCursor(t,this.getCursor("from"),n);a.findNext()&&!(e.cmpPos(a.to(),this.getCursor("to"))>0);)r.push({anchor:a.from(),head:a.to()});r.length&&this.setSelections(r,0)}))},z=(n(195),n(196),n(197),function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(O.a)(this,Object(N.a)(t).call(this,e))).state={enableBackground:!0,drawer:!1,marker:null},T(W.a),n.popupOpen=!1,n.processText=n.processText.bind(Object(S.a)(n)),n.clickOnWord=n.clickOnWord.bind(Object(S.a)(n)),n.replaceWord=n.replaceWord.bind(Object(S.a)(n)),n}return Object(C.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.editor=Object(W.a)(document.getElementById("code-mirror-node"),{lineWrapping:!0}),this.editor.focus(),this.editor.on("change",this.processText),this.editor.getWrapperElement().addEventListener("click",this.clickOnWord)}},{key:"processText",value:function(e,t){var n=this.editor.getValue();n.length?this.setState({enableBackground:!1}):this.setState({enableBackground:!0});var r=[];n.split(" ").forEach((function(e){if(e.length>=3){var t=r.find((function(t){return t.value===e.toLowerCase()}));t?t.count=t.count+1:r.push({value:e.toLowerCase(),count:1})}})),r=r.filter((function(e){return e.count>2})),this.highlightText(r),this.props.setWords(r)}},{key:"highlightText",value:function(e){var t=this;this.clearMarks(),e.forEach((function(e){for(var n=new RegExp("(?<=(^|\\s))".concat(e.value,"(?=[\\s.;\\b])"),"gi"),r=t.editor.getSearchCursor(n);r.findNext();){var a={from:r.from(),to:r.to()};t.editor.markText(a.from,a.to,{className:"text-marker"}).word=e}}))}},{key:"clearMarks",value:function(){this.editor.getAllMarks().forEach((function(e){return e.clear()}))}},{key:"clickOnWord",value:function(e){var t=this.editor.coordsChar({left:e.clientX,top:e.clientY}),n=this.editor.findMarksAt(t);n.length&&this.setState({drawer:!0,marker:n[0]})}},{key:"replaceWord",value:function(e){this.setState({drawer:!1});var t=this.state.marker.find(),n=t.from,r=t.to;this.editor.replaceRange(e,n,r)}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"code-mirror-wrapper",style:{position:"relative"}},a.a.createElement("div",{id:"code-mirror-node"}),this.state.enableBackground&&a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:p.a,alt:"Vazio"}),a.a.createElement("span",null,"Que tal escrever algo? M\xednimo de 120 caracteres"))),null!==this.state.marker&&a.a.createElement(j.a,{title:"Sin\xf4nimos de ".concat(this.state.marker.word.value),placement:"bottom",closable:!0,onClose:function(){return e.setState({drawer:!1})},visible:this.state.drawer,height:"50%"},a.a.createElement(M.a,{closable:!0,message:"Dica: clique em um dos sin\xf4nimos para substituir no texto",type:"success"}),a.a.createElement(w,{word:this.state.marker.word.value,hideTitle:!0,replaceWord:this.replaceWord})))}}]),t}(a.a.Component));var D=function(){var e=a.a.useState(""),t=Object(c.a)(e,2),n=(t[0],t[1],a.a.useState([])),r=Object(c.a)(n,2),o=r[0],i=r[1],g=a.a.useState(null),p=Object(c.a)(g,2),v=p[0],k=(p[1],a.a.useState(!1)),x=Object(c.a)(k,2),b=(x[0],x[1],a.a.useState(E.MD())),L=Object(c.a)(b,2),O=L[0],N=L[1];return a.a.useEffect((function(){var e=function(e){N(E.MD())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"eSSay"),a.a.createElement("div",{className:"toggle-dark-mode-container"},a.a.createElement(s.a,{checkedChildren:a.a.createElement(l.a,null),unCheckedChildren:a.a.createElement(u.a,null),onChange:function(e){var t=document.querySelector("body");e?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}}))),a.a.createElement("main",{className:"content"},O&&a.a.createElement("aside",{className:"aside"},null!==v&&a.a.createElement(w,{word:v})),a.a.createElement("div",{className:"container"},!O&&a.a.createElement(y,{words:o}),a.a.createElement(z,{setWords:i})),O&&a.a.createElement("aside",{className:"aside"},o.length>0&&a.a.createElement(d,{words:o}))),a.a.createElement("footer",{className:"footer"},a.a.createElement("a",{href:"https://github.com/victormt4/essay-analyzer",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(h.a,null)),a.a.createElement("a",{href:"mailto:victor.mt4@gmail.com"},a.a.createElement(m.a,null)),a.a.createElement("a",{href:"https://www.linkedin.com/in/victor-mota-a01b8714a/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(f.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,n){e.exports=n.p+"static/media/empty_image.6606dc27.svg"}},[[120,1,2]]]);
//# sourceMappingURL=main.4da25349.chunk.js.map