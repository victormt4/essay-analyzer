(this["webpackJsonpessay-analyzer"]=this["webpackJsonpessay-analyzer"]||[]).push([[0],{143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(86),a(16)),s=a(146),u=a(4);a(87),a(88);function i(e){return r.a.createElement("div",{className:"word-count"},e.words.sort((function(e,t){return e.count<t.count?1:e.count>t.count?-1:0})).map((function(e){return r.a.createElement("div",{key:e.value,className:"word-count-group"},r.a.createElement("span",{className:"word-count-title"},e.value),r.a.createElement("span",{className:"word-count-subtitle"},e.count," repeti\xe7\xf5es"))})))}var m=a(147),d=(a(89),a(68)),h=a.n(d);function f(e){var t=r.a.useRef(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-text-container"},e.enableHighlights&&r.a.createElement("div",{onClick:function(a){"MARK"===a.target.tagName.toUpperCase()?e.setWord(a.target.getAttribute("data-word-value")):t.current.focus()},id:"input-text-highlight-container",dangerouslySetInnerHTML:function(){var t=e.value;return e.words.forEach((function(e){var a=new RegExp("(?<=(^|\\s))".concat(e.value,"(?=[\\s.;\\b])"),"gi");t=t.replace(a,'<mark class="mark" data-word-value="'.concat(e.value,'">').concat(e.value,"</mark>"))})),{__html:t}}()}),r.a.createElement(m.a.TextArea,{ref:t,value:e.value,className:"input-text",onChange:function(t){return e.processText(t.target.value,t)},autoSize:!0}),0===e.value.length&&r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:h.a,alt:"Vazio"}),r.a.createElement("span",null,"Que tal escrever algo? M\xednimo de 120 caracteres"))))}var p=a(53);a(143);function v(e){var t=r.a.useState({requestStatus:-1,synonyms:[]}),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){c((function(e){return Object(p.a)({},e,{requestStatus:1})})),fetch("https://cors-anywhere.herokuapp.com/https://www.sinonimos.com.br/".concat(e.word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")),{method:"GET",headers:{"x-requested-with":"xmlhttprequest","Content-Type":"text/plain; charset=ISO-8859-1"}}).then((function(e){return e.text()})).then((function(e){var t=document.createElement("div");t.innerHTML=e;var a=t.querySelectorAll(".s-wrapper .sinonimos a"),n=[];a.forEach((function(e){n.push(e.innerText)})),c((function(e){return Object(p.a)({},e,{synonyms:n,requestStatus:200})}))})).catch((function(e){return console.log(e)}))}),[e.word]),r.a.createElement("div",{className:"synonyms-selector"},r.a.createElement("span",{className:"synonyms-selector-title"},e.word),r.a.createElement("div",{className:"synonyms-container"},200===n.requestStatus?n.synonyms.slice(0,10).map((function(e){return r.a.createElement("span",{key:e},e)})):r.a.createElement("span",null,"carregando...")))}var E=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),o=Object(l.a)(c,2),m=o[0],d=o[1],h=r.a.useState(null),p=Object(l.a)(h,2),E=p[0],g=p[1],y=r.a.useState(!1),w=Object(l.a)(y,2),b=w[0],k=w[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"eSSay"),r.a.createElement("div",{className:"toggle-dark-mode-container"},r.a.createElement(s.a,{checkedChildren:r.a.createElement(u.a,{type:"bulb",theme:"filled"}),unCheckedChildren:r.a.createElement(u.a,{type:"bulb"}),onChange:function(e){var t=document.querySelector("body");e?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}}))),r.a.createElement("main",{className:"content"},r.a.createElement("aside",{className:"aside"},null!==E&&r.a.createElement(v,{word:E})),r.a.createElement("div",{className:"container"},r.a.createElement(f,{value:a,words:m,processText:function(e,t){var a="string"===typeof e?e:t.target.value;if(n(a),a.length>=120){k(!0);var r=a.split(" "),c=[];r.forEach((function(e){if(e.length>=3){var t=c.find((function(t){return t.value===e.toLowerCase()}));t?t.count=t.count+1:c.push({value:e.toLowerCase(),count:1})}})),d(c.filter((function(e){return e.count>2})))}else k(!1),d([]),g(null)},enableHighlights:b,setWord:g})),r.a.createElement("aside",{className:"aside"},m.length>0&&r.a.createElement(i,{words:m}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://github.com/victormt4/essay-analyzer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{type:"github"})),r.a.createElement("a",{href:"mailto:victor.mt4@gmail.com"},r.a.createElement(u.a,{type:"mail",theme:"filled"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/victor-mota-a01b8714a/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{type:"linkedin",theme:"filled"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,a){e.exports=a.p+"static/media/empty_image.6606dc27.svg"},81:function(e,t,a){e.exports=a(145)},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.ea1d39a6.chunk.js.map