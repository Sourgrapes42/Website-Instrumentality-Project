// ==UserScript==
// @name         u2.dmhy.org 自动填充签到文本
// @namespace    https://github.com/Sourgrapes42/
// @version      0.1
// @description  u2.dmhy.org 自动填充签到文本
// @author       Sourgrapes42
// @match        https://u2.dmhy.org/showup.php
// @updateURL    https://github.com/Sourgrapes42/Website-Instrumentality-Project/raw/master/dev/u2.dmhy.org/auto-fill-show-up-text.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=u2.dmhy.org
// @grant        none
// ==/UserScript==

(function () {
  const showUpInput = document.querySelector('[name="message"]');
  if (showUpInput) {
    showUpInput.value = "恶魔妈妈买面膜";
  }
})();
