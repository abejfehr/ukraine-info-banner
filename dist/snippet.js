(()=>{var o="ua-info-banner",s=r=>{for(var n=window.location.search.substring(1),e=n.split("&"),t=0;t<e.length;t++){var a=e[t].split("=");if(a[0]==r)return decodeURIComponent(a[1])}},l=r=>!!(navigator.languages!=null&&navigator.languages.find(e=>e.toLocaleLowerCase().indexOf(r)>-1)||navigator.language.toLocaleLowerCase().indexOf(r)>-1),i=()=>s(o)&&s(o)!=="false"&&s(o)!=="0"?!0:l("ru"),d=()=>{let r=document.createElement("div");r.style.width="100vw",r.style.margin=`-${getComputedStyle(document.body).margin}`,r.style.textAlign="center",r.style.padding="4px 0 8px 0",r.style.backgroundColor="#313638";let n=document.createElement("button");n.innerHTML='\u{1F1F7}\u{1F1FA}&nbsp;&nbsp;<span style="text-decoration: underline;">\u0420\u043E\u0441\u0441\u0438\u044F \u0432\u0442\u043E\u0440\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0443</span>&nbsp;&nbsp;\u{1F1FA}\u{1F1E6}',n.style.color="#E8E9EB",n.style.margin="0",n.style.width="100%",n.style.background="none",n.style.border="none",n.style.fontWeight="bold",n.style.cursor="pointer",n.addEventListener("click",()=>{let e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.bottom="0",e.style.right="0",e.style.padding="30px",e.style.backgroundColor="white";let t=document.createElement("button");t.classList.add("ua-info-banner__btn"),t.style.position="absolute",t.style.top="5px",t.style.right="18px",t.style.border="none",t.style.background="transparent",t.style.verticalAlign="middle",t.style.cursor="pointer",t.title="\u0432\u044B\u0445\u043E\u0434\u0430",t.innerHTML='<span style="font-size: 48px">\xD7</span>',t.addEventListener("click",()=>document.body.removeChild(e)),e.innerHTML=`
<div style="text-align: center">
<style>.ua-info-banner__btn:hover, .ua-info-banner__btn:focus { color: blue; }</style>
<h2>\u0420\u043E\u0441\u0441\u0438\u044F \u0432\u0442\u043E\u0440\u0433\u0430\u0435\u0442\u0441\u044F \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0443</h2>
<p>\u0412\u043E\u0439\u043D\u0430 \u0432\u0435\u0434\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0442\u0438\u0432 \u0432\u0430\u0448\u0438\u0445 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0445 \u0431\u0440\u0430\u0442\u044C\u0435\u0432 \u0438 \u0443\u043D\u0435\u0441\u043B\u0430 \u043C\u043D\u043E\u0433\u043E \u0436\u0435\u0440\u0442\u0432.
<p>\u041F\u0440\u0430\u0432\u0434\u0443 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043E\u0442 \u0432\u0430\u0441 \u0432\u0430\u0448\u0435 \u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E.
<p>\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.
</div>
    `,e.prepend(t),document.body.append(e)}),r.append(n),document.body.prepend(r),window.ua_info_banner=!0};i()&&d();})();
