const TEST_QUERY_STRING = "ua-info-banner";

const getQueryString = (key: string) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == key) {
      return decodeURIComponent(pair[1]);
    }
  }
};

const isLanguagePresent = (lang) => {
  if (navigator.languages != undefined) {
    const ru = navigator.languages.find(
      (language) => language.toLocaleLowerCase().indexOf(lang) > -1
    );

    if (ru) {
      return true;
    }
  }

  if (navigator.language.toLocaleLowerCase().indexOf(lang) > -1) {
    return true;
  }

  return false;
};

const uaInfoTarget = () => {
  if (
    getQueryString(TEST_QUERY_STRING) &&
    getQueryString(TEST_QUERY_STRING) !== "false" &&
    getQueryString(TEST_QUERY_STRING) !== "0"
  ) {
    return true;
  }

  return isLanguagePresent("ru");
};

const createBanner = () => {
  const banner = document.createElement("div");
  banner.style.width = "100vw";
  banner.style.margin = `-${getComputedStyle(document.body).margin}`;
  banner.style.textAlign = "center";
  banner.style.padding = "4px 0 8px 0";
  banner.style.backgroundColor = "#313638";

  const bannerBtn = document.createElement("button");
  bannerBtn.innerHTML =
    '🇷🇺&nbsp;&nbsp;<span style="text-decoration: underline;">Россия вторгается в Украину</span>&nbsp;&nbsp;🇺🇦';
  bannerBtn.style.color = "#E8E9EB";
  bannerBtn.style.margin = "0";
  bannerBtn.style.width = "100%";
  bannerBtn.style.background = "none";
  bannerBtn.style.border = "none";
  bannerBtn.style.fontWeight = "bold";
  bannerBtn.style.cursor = "pointer";

  bannerBtn.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.bottom = "0";
    overlay.style.right = "0";
    overlay.style.backgroundColor = "white";

    const overlayCloseBtn = document.createElement("button");
    overlayCloseBtn.style.position = "absolute";
    overlayCloseBtn.style.top = "5px";
    overlayCloseBtn.style.right = "5px";
    overlayCloseBtn.style.border = "none";
    overlayCloseBtn.style.background = "transparent";
    overlayCloseBtn.style.verticalAlign = "middle";
    overlayCloseBtn.title = "выхода";
    overlayCloseBtn.innerHTML = '<span style="font-size: 48px">×</span>';
    overlayCloseBtn.addEventListener("click", () =>
      document.body.removeChild(overlay)
    );

    overlay.innerHTML = `
<div style="text-align: center">
<h2>Россия вторгается в Украину</h2>
<p>Война ведется против ваших украинских братьев и унесла много жертв.
<p>Правду скрывает от вас ваше правительство.
<p>Пожалуйста, распространите информацию.
</div>
    `;
    overlay.prepend(overlayCloseBtn);
    document.body.append(overlay);
  });

  banner.append(bannerBtn);
  document.body.prepend(banner);

  // @ts-ignore setting a property on window
  window.ua_info_banner = true;
};

if (uaInfoTarget()) {
  createBanner();
}
