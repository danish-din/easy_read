// easy_read.js - Home Assistant Easy Read Mode integration
(async function() {
  function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function waitForBrowserMod() {
    return new Promise((resolve) => {
      function check() {
        if (window.browser_mod && window.browser_mod.browserID) {
          resolve(window.browser_mod.browserID);
        } else {
          setTimeout(check, 200);
        }
      }
      check();
    });
  }

  function waitForHassConnection() {
    return new Promise((resolve) => {
      function check() {
        if (window.hassConnection) {
          resolve(window.hassConnection);
        } else {
          setTimeout(check, 200);
        }
      }
      check();
    });
  }

  const easyread = getQueryParam("easyread");
  if (!easyread) return; // Only act if param is present

  // Set zoom level based on easyread param (default 1x)
  const zoom = parseFloat(easyread) || 1;
  document.documentElement.style.setProperty('zoom', zoom);
  document.body.style.setProperty('zoom', zoom);

  // Optionally, set a data attribute for custom CSS
  document.documentElement.setAttribute('data-easyread-zoom', zoom);
})();
