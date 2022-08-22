// ==UserScript==
// @name         bgm.tv 删除时间线
// @namespace    https://github.com/Sourgrapes42/
// @version      0.3
// @description  bgm.tv 删除时间线
// @author       Sourgrapes42
// @match        https://bgm.tv/user/*/timeline
// @updateURL    https://github.com/Sourgrapes42/Website-Instrumentality-Project/raw/master/dev/bgm.tv/del-bgm-timeline.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bgm.tv
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const delBUtton = document.createElement("button");
  delBUtton.innerText = "删除时间线";

  const tmlContent = document.getElementById("tmlContent");
  if (tmlContent) {
    tmlContent.parentElement.insertBefore(delBUtton, tmlContent);
  }
  delBUtton.addEventListener("click", async () => {
    const closeButtons = document.querySelectorAll(".tml_del");
    const urls = Array.from(closeButtons).map((button) => {
      return button.getAttribute("href") + "&ajax=1";
    });
    if (urls.length === 0) {
      alert("没有可删除的时间线");
      return;
    }
    for (let index = 0; index < urls.length; index++) {
      const url = urls[index];
      await fetch(url, {
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      });
    }
    alert(`删除了${urls.length}条时间线，即将自动刷新`);
    window.location.reload();
  });
})();
