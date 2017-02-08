var m3_u = (location.protocol=='https:'?'https://aladdin.genieesspv.jp/yie/ld/jsk':'http://aladdin.genieesspv.jp/yie/ld/jsk');
var m3_r = Math.floor(Math.random()*99999999999);
document.write ("<scr"+"ipt type='text/javascript' src='"+m3_u);
document.write ("?zoneid=8984");
document.write ('&amp;cb=' + m3_r);
document.write (document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : ''));
document.write ("&amp;loc=" + escape(window.location));
if ((typeof(document.GEN_ct0) != 'undefined') && (document.GEN_ct0.substring(0,4) == 'http')) {document.write ("&amp;ct0=" + escape(document.GEN_ct0));}
if (document.referrer) document.write ("&amp;referer=" + escape(document.referrer));
document.write ("'><\/scr"+"ipt>");
