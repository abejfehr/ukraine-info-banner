(()=>{var o="ua-info-banner",a=t=>{for(var n=window.location.search.substring(1),e=n.split("&"),r=0;r<e.length;r++){var s=e[r].split("=");if(s[0]==t)return decodeURIComponent(s[1])}},l=t=>!!(navigator.languages!=null&&navigator.languages.find(e=>e.toLocaleLowerCase().indexOf(t)>-1)||navigator.language.toLocaleLowerCase().indexOf(t)>-1),i=()=>a(o)&&a(o)!=="false"&&a(o)!=="0"?!0:l("ru"),d=()=>{let t=document.createElement("div");t.style.width="100vw",t.style.margin=`-${getComputedStyle(document.body).margin}`,t.style.textAlign="center",t.style.padding="4px 0 8px 0",t.style.backgroundColor="#313638";let n=document.createElement("button");n.innerHTML='\u{1F1F7}\u{1F1FA} <span style="text-decoration: underline;">\u0420\u043E\u0441\u0441\u0438\u044F \u0432\u0442\u043E\u0440\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0443</span> \u{1F1FA}\u{1F1E6}',n.style.color="#E8E9EB",n.style.margin="0",n.style.width="100%",n.style.background="none",n.style.border="none",n.style.cursor="pointer",n.addEventListener("click",()=>{let e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.bottom="0",e.style.right="0",e.style.backgroundColor="white";let r=document.createElement("button");r.innerHTML="\u0432\u044B\u0445\u043E\u0434\u0430",r.addEventListener("click",()=>document.body.removeChild(e)),e.innerHTML=`
<h2>\u0420\u043E\u0441\u0441\u0438\u044F \u0432\u0442\u043E\u0440\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0443
<p>\u0412\u043E\u0439\u043D\u0430 \u0432\u0435\u0434\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0442\u0438\u0432 \u0432\u0430\u0448\u0438\u0445 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u0431\u0440\u0430\u0442\u044C\u0435\u0432 \u0438 \u0443\u043D\u0435\u0441\u043B\u0430 \u043C\u043D\u043E\u0433\u043E \u0436\u0435\u0440\u0442\u0432.
<p>\u041F\u0440\u0430\u0432\u0434\u0443 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043E\u0442 \u0432\u0430\u0441 \u0432\u0430\u0448\u0435 \u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E.
<p>\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.
    `,e.prepend(r),document.body.append(e)}),t.append(n),document.body.prepend(t)};i()&&d();})();
