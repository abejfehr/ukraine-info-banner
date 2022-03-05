const TEST_QUERY_STRING = "ua-info-snippet";

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
  banner.style.padding = "2px";
  banner.style.backgroundColor = "purple";

  const bannerLink = document.createElement("button");
  bannerLink.innerHTML = "Россия вторгается в Украину";
  bannerLink.style.color = "white";
  bannerLink.style.margin = "0";
  bannerLink.style.background = "none";
  bannerLink.style.border = "none";
  bannerLink.style.textDecoration = "underline";
  bannerLink.style.cursor = "pointer";

  bannerLink.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.bottom = "0";
    overlay.style.right = "0";
    overlay.style.backgroundColor = "white";

    const overlayCloseButton = document.createElement("button");
    overlayCloseButton.innerHTML = "выхода";
    overlayCloseButton.addEventListener("click", () =>
      document.body.removeChild(overlay)
    );

    overlay.innerHTML = `
<h2>Россия вторгается в Украину
<p>Война ведется против ваших украинских братьев и унесла много жертв.
<p>Правду скрывает от вас ваше правительство.
<p>Пожалуйста, распространите информацию.
    `;
    overlay.prepend(overlayCloseButton);
    document.body.append(overlay);
  });

  banner.append(bannerLink);
  document.body.prepend(banner);
};

if (uaInfoTarget()) {
  createBanner();
}
