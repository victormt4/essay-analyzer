(this["webpackJsonpessay-analyzer"]=this["webpackJsonpessay-analyzer"]||[]).push([[0],{142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),o=(a(85),a(26)),s=a(145),i=a(4);a(86),a(87);function u(e){return r.a.createElement("div",{className:"word-count"},e.words.sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0})).map((function(e){return r.a.createElement("div",{key:e.value,className:"word-count-group"},r.a.createElement("span",{className:"word-count-title"},e.value),r.a.createElement("span",{className:"word-count-subtitle"},e.count," repeti\xe7\xf5es"))})))}var m=a(146),d=(a(88),a(67)),v=a.n(d);function f(e){var t=r.a.useRef(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-text-container"},e.enableHighlights&&r.a.createElement("div",{onClick:function(a){"MARK"===a.target.tagName.toUpperCase()?e.setWord(a.target.getAttribute("data-word-value")):t.current.focus()},id:"input-text-highlight-container",dangerouslySetInnerHTML:function(){var t=e.value;return e.words.forEach((function(e){var a=new RegExp("".concat(e.value,"(?=[\\s.;])"),"gi");t=t.replace(a,'<mark class="mark" data-word-value="'.concat(e.value,'">').concat(e.value,"</mark>"))})),{__html:t}}()}),r.a.createElement(m.a.TextArea,{ref:t,value:e.value,className:"input-text",onChange:function(t){return e.processText(t.target.value,t)},autoSize:!0}),0===e.value.length&&r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:v.a,alt:"Vazio"}),r.a.createElement("span",null,"N\xe3o encontrei nenhum texto, que tal escrever algo? M\xednimo de 120 caracteres"))))}a(142);function h(e){return r.a.createElement("div",{className:"synonyms-selector"},r.a.createElement("span",{className:"synonyms-selector-title"},e.word))}var g=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),l=Object(o.a)(c,2),m=l[0],d=l[1],v=r.a.useState(null),g=Object(o.a)(v,2),E=g[0],p=g[1],w=r.a.useState(!1),y=Object(o.a)(w,2),b=y[0],k=y[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"eSSay"),r.a.createElement("div",{className:"toggle-dark-mode-container"},r.a.createElement(s.a,{checkedChildren:r.a.createElement(i.a,{type:"bulb",theme:"filled"}),unCheckedChildren:r.a.createElement(i.a,{type:"bulb"}),onChange:function(e){var t=document.querySelector("body");e?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}}))),r.a.createElement("main",{className:"content"},r.a.createElement("aside",{className:"aside"},null!==E&&r.a.createElement(h,{word:E})),r.a.createElement("div",{className:"container"},r.a.createElement(f,{value:a,words:m,processText:function(e,t){var a="string"===typeof e?e:t.target.value;if(n(a),a.length>=120){k(!0);var r=a.split(" "),c=[];r.forEach((function(e){if(e.length>=3){var t=c.find((function(t){return t.value===e.toLowerCase()}));t?t.count=t.count+1:c.push({value:e.toLowerCase(),count:1})}})),d(c.filter((function(e){return e.count>2})))}else k(!1),d([]),p(null)},enableHighlights:b,setWord:p})),r.a.createElement("aside",{className:"aside"},m.length>0&&r.a.createElement(u,{words:m}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://github.com/victormt4/essay-analyzer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{type:"github"})),r.a.createElement("a",{href:"mailto:victor.mt4@gmail.com"},r.a.createElement(i.a,{type:"mail",theme:"filled"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/victor-mota-a01b8714a/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,{type:"linkedin",theme:"filled"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a.p+"static/media/empty_image.6606dc27.svg"},80:function(e,t,a){e.exports=a(144)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.8d40ce3d.chunk.js.map