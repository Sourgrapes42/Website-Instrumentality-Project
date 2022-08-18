// ==UserScript==
// @name         bgm.tv 删除时间线
// @namespace    https://github.com/Sourgrapes42/
// @version      0.2
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
  delBUtton.addEventListener("click", () => {
    const closeButtons = document.querySelectorAll(".tml_del");
    console.log("[ closeButtons ]-17-「Untitled-1」", closeButtons);
    const urls = Array.from(closeButtons).map((button) => {
      return button.getAttribute("href") + "&ajax=1";
    });
    if (urls.length === 0) {
      alert("没有可删除的时间线");
      return;
    }
    console.log("[ urls ]-28-「Untitled-1」", urls);
    urls.forEach((url, index) => {
      setTimeout(() => {
        fetch(url, {
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "include",
        });
      }, index * 100);
    });
    alert(`删除了${urls.length}条时间线，即将自动刷新`);
    setTimeout(() => {
      window.location.reload();
    }, urls.length * 100 + 1000);
  });
})();
