bundleJsonp([8],{249:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var o=t[i](a),u=o.value}catch(e){return void r(e)}return o.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function i(){c.a.context.embedId&&(m=u()("#embed-input"),u()("#embed-select").on("change",a).trigger("change"))}function a(e){var t=c.a.context,r=u()(e.currentTarget).val().split("|"),n=d(r,2),i=n[0],a=n[1],o=t.embedId,p=void 0;if("v1"===i)p='<iframe src="http://embed.pixiv.net/code.php?id='+o+'" width="380" height="168" style="background:transparent" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';else{var f=s.default.html.escape("http://www.pixiv.net/member_illust.php?mode=medium&illust_id="+t.illustId),h=s.default.html.escape("http://www.pixiv.net/member.php?id="+t.userId);p=['<script src="'+l+'embed.js" data-id="'+o+'" data-size="'+i+'" data-border="'+a+'" charset="utf-8"></script>',"<noscript>","<p>",'<a href="'+f+'" target="_blank">'+s.default.html.escape(t.illustTitle)+"</a> ",'by <a href="'+h+'" target="_blank">'+s.default.html.escape(t.userName)+"</a> ",'on <a href="http://www.pixiv.net/" target="_blank">pixiv</a>',"</p>","</noscript>"].join("")}m.val(p),e.originalEvent&&m[0].focus()}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3),u=r.n(o),c=r(1),s=r(511),p=r(27);t.setup=i,r.d(t,"showSample",function(){return f});var d=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l="https://source.pixiv.net/source/",m=void 0,f=function(){var e=n(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=void 0,u()("#embed-sample").length||(r=u()(u.a.parseHTML(u()("#template-embed-sample").text().trim())),r.appendTo(document.body),t=u.a.getScript(l+"embed.js?20110525")),p.b.open("#embed-sample",{block:!0}),!t){e.next=7;break}return e.next=6,t;case 6:window.__pixiv__.embed();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}});