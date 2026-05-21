/* Shared app logic — language + WhatsApp */
(() => {
  "use strict";

  const I18N = window.TWR_I18N;
  const WA = window.TWR_WA;
  const STORAGE_KEY = "twr.lang";
  const DEFAULT_LANG = "pt";

  if (!I18N) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function waUrl(message) {
    return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
  }

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-PT" : lang);

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    $$("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      if (dict[key] != null) {
        el.href = waUrl(dict[key]);
      }
    });

    const stripeUrl = window.TWR_STRIPE_PAY_LINK;
    if (stripeUrl) {
      $$("[data-stripe-pay]").forEach((el) => {
        el.href = stripeUrl;
      });
    }
  }

  function setLanguage(lang, { persist = true } = {}) {
    if (!I18N[lang]) lang = DEFAULT_LANG;

    $$(".lang-btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    applyTranslations(lang);

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    }
  }

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  function initialLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (_) {}
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    if (I18N[nav]) return nav;
    return DEFAULT_LANG;
  }

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const bookBtn = $("#bookBtn");
  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const htmlLang = document.documentElement.getAttribute("lang") || "pt-PT";
      const code = htmlLang.startsWith("pt") ? "pt" : htmlLang.slice(0, 2);
      const dict = I18N[code] || I18N[DEFAULT_LANG];
      window.open(waUrl(dict._book), "_blank", "noopener");
    });
  }

  setLanguage(initialLanguage(), { persist: false });
})();
