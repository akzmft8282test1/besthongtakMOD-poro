import "./icon.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url !== undefined &&
    (tab.url.includes("https://pokerogue.net/") ||
      tab.url.includes("https://beta.pokerogue.net/") ||
      tab.url.includes("https://mokerogue.net/"))
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["injector.js"],
      })
      .catch((err) =>
        console.log("Script injection skipped or already handled: ", err),
      );
  }
});
