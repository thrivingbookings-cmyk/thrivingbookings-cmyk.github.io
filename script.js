/* ============================================================
   THRIVING BOOKING AGENCY — script.js
   Root folder: C:\Users\Griff Concepts\Desktop\Website\
   ============================================================ */

/* ------------------------------------------------------------------ */
/*  Scroll Reset on Reload                                            */
/* ------------------------------------------------------------------ */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
});

/* ------------------------------------------------------------------ */
/*  Mobile Menu Toggle                                                */
/* ------------------------------------------------------------------ */
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

/* ------------------------------------------------------------------ */
/*  Course Section — Tab Logic                                        */
/* ------------------------------------------------------------------ */
const tabMaritime = document.getElementById("tab-maritime");
const tabHospitality = document.getElementById("tab-hospitality");
const contentMaritime = document.getElementById("content-maritime");
const contentHospitality = document.getElementById("content-hospitality");

tabMaritime.addEventListener("click", () => {
  tabMaritime.classList.add("tab-active");
  tabHospitality.classList.remove("tab-active");
  contentMaritime.classList.remove("hidden");
  contentHospitality.classList.add("hidden");
});

tabHospitality.addEventListener("click", () => {
  tabHospitality.classList.add("tab-active");
  tabMaritime.classList.remove("tab-active");
  contentHospitality.classList.remove("hidden");
  contentMaritime.classList.add("hidden");
});

/* ------------------------------------------------------------------ */
/*  Enquiry Form — AJAX Submission                                    */
/*  Submits the form to Formspree without reloading the page.         */
/* ------------------------------------------------------------------ */
const form = document.getElementById("enquiryForm");
const toast = document.getElementById("toast");
const submitBtn = form.querySelector('button[type="submit"]');
const toastText = toast.querySelector("span");
const successOverlay = document.getElementById("successOverlay");
const formIframe = document.getElementById("formspreeFrame");
const sourcePageInput = document.getElementById("source_page");
const replyToInput = document.getElementById("reply_to");
const emailInput = form.querySelector('input[name="email"]');
let formSubmitted = false;

sourcePageInput.value = window.location.href;

form.addEventListener("submit", () => {
  replyToInput.value = emailInput?.value || "";
  sourcePageInput.value = window.location.href;
  formSubmitted = true;
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;
});

formIframe.addEventListener("load", () => {
  if (!formSubmitted) return;
  formSubmitted = false;

  form.reset();
  submitBtn.innerText = "Submit Request";
  submitBtn.disabled = false;
  successOverlay.classList.remove("hidden");
  setTimeout(() => {
    successOverlay.classList.add("hidden");
  }, 3000);
});
