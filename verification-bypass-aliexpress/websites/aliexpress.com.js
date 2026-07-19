
console.log("Aliexpress bypass script is running");

browser.webRequest.onBeforeRequest.addListener(
  async function (details) {
    console.log("Request intercepted:", details.url);

    await browser.scripting.executeScript({
      target: {
        tabId: details.tabId,
      },
      func: () => {
        console.log("INIT");
        // If the element is already there, just remove it
        document
          .querySelectorAll(
            ".ls_ke, .ho_g9, img[src='https://ae-pic-a1.aliexpress-media.com/kf/S082ae95bce89462b9548a1d53f222ab4p/72x72.png'], .J_SAFETY_FILER_MODAL, ._1FlkA",
          )
          .forEach((elt) => elt.remove());
        document
          .querySelectorAll("img.nf_bj")
          .forEach((elt) => elt.classList.remove("nf_bj"));
        document
          .querySelectorAll(".card-dsa-wrapper")
          .forEach((elt) => elt.classList.remove("card-dsa-wrapper"));
        document
          .querySelectorAll(".dsa--visible--wrapper")
          .forEach((elt) => elt.classList.remove("dsa--visible--wrapper"));
      },
    });
  },
  {
    urls: [
      "https://aplus.aliexpress.com/Product.Exposure.Event*",
      "https://assets.aliexpress-media.com/g/AWSC/fireyejs/*/fireyejs.js",
    ],
  },
  [],
);
