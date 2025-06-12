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
  if (easyread === null) return; // Only act if param is present

  await waitForHassConnection();
  const browserID = await waitForBrowserMod();

  const theme = easyread === "1" ? "easyread" : "default";

  window.browser_mod.sendCommand("browser_mod/theme", {
    browser_id: browserID,
    theme: theme
  });
})();
