(this["webpackJsonpmegastash-website"]=this["webpackJsonpmegastash-website"]||[]).push([[51,81],{149:function(e,n,t){"use strict";var a=t(57);function s(e){e.register(a),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=s,s.displayName="handlebars",s.aliases=[]},57:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,i){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(s,(function(e){if("function"===typeof i&&!i(e))return e;for(var s,r=o.length;-1!==t.code.indexOf(s=n(a,r));)++r;return o[r]=e,s})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var s=0,i=Object.keys(t.tokenStack);!function o(r){for(var l=0;l<r.length&&!(s>=i.length);l++){var u=r[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=i[s],p=t.tokenStack[c],g="string"===typeof u?u:u.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++s;var k=g.substring(0,d),b=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof u?r.splice.apply(r,[l,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return r}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.af05ceac.chunk.js.map