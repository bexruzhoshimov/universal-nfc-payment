document.addEventListener("DOMContentLoaded", function () {
  let selectedType = "UZCARD";
  let toastTimer = null;

  function formatAmount(num) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function formatCardNumber(raw) {
    const digits = raw.replace(/\D/g, "");
    const matched = digits.match(/.{1,4}/g);
    return matched ? matched.join(" ") : raw;
  }

  function getRawCardNumber() {
    const raw = selectedType === "UZCARD" ? CONFIG.CARD_UZCARD : CONFIG.CARD_HUMO;
    return raw.replace(/\D/g, "");
  }

  function showToast(message) {
    const toastEl = document.getElementById("toast");
    toastEl.textContent = message;
    toastEl.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.add("hidden");
    }, 2000);
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(ta);
  }

  function copyToClipboard(text) {
    showToast("Nusxalandi");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    }
    fallbackCopy(text);
    return Promise.resolve();
  }

  function updateCardView() {
    const raw = selectedType === "UZCARD" ? CONFIG.CARD_UZCARD : CONFIG.CARD_HUMO;
    document.getElementById("card-number").textContent = formatCardNumber(raw);
    document.getElementById("card-holder").textContent = CONFIG.CARDHOLDER;

    const uzBtn = document.getElementById("btn-uzcard");
    const humoBtn = document.getElementById("btn-humo");

    if (selectedType === "UZCARD") {
      uzBtn.classList.add("active");
      humoBtn.classList.remove("active");
    } else {
      humoBtn.classList.add("active");
      uzBtn.classList.remove("active");
    }
  }

  function init() {
    document.getElementById("amount-text").textContent = formatAmount(CONFIG.AMOUNT);
    document.getElementById("currency-text").textContent = CONFIG.CURRENCY;

    updateCardView();

    document.getElementById("btn-uzcard").addEventListener("click", function () {
      selectedType = "UZCARD";
      updateCardView();
    });

    document.getElementById("btn-humo").addEventListener("click", function () {
      selectedType = "HUMO";
      updateCardView();
    });

    document.getElementById("copy-amount-btn").addEventListener("click", function () {
      copyToClipboard(String(CONFIG.AMOUNT));
    });

    document.getElementById("copy-card-btn").addEventListener("click", function () {
      copyToClipboard(getRawCardNumber());
    });

    const appsGrid = document.getElementById("apps-container");
    if (Array.isArray(CONFIG.APPS)) {
      CONFIG.APPS.forEach(function (app) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "app-btn";
        btn.textContent = app.name;
        btn.addEventListener("click", function () {
          // Nusxalash tugagach o'tamiz, aks holda Safari clipboard yozuvini bekor qilishi mumkin
          copyToClipboard(getRawCardNumber()).then(function () {
            window.location.href = app.url;
          });
        });
        appsGrid.appendChild(btn);
      });
    }
  }

  init();
});
