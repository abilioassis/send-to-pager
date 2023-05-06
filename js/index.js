"use strict";

const pagerMsgEl = document.getElementById("pager-msg");
const phoneNumberEl = document.getElementById("phone-number");
const statusEl = document.getElementById("status");

addEventListenerToButtons();

function addEventListenerToButtons() {
  const btnsEl = document.getElementsByClassName("btn");
  const length = btnsEl.length;
  // assigning event handlers to buttons
  for (let idx = 0; idx < length; idx++) {
    const btnEl = btnsEl[idx];
    // check if this element has the 'reset' class
    if (btnEl.classList.contains("reset")) {
      // add the correct handler
      btnEl.addEventListener("click", function () {
        resetDisplays();
      });
      // check if this element has the 'send' class
    } else if (btnEl.classList.contains("send")) {
      // add the correct handler
      btnEl.addEventListener("click", function () {
        statusEl.style.visibility = "visible";
        setTimeout(sendToPager, 2000);
      });
    } else {
      // has the 'key' class
      btnEl.addEventListener("click", function () {
        // add the correct handler
        updatePhoneNumber(this);
      });
    }
  }
}

function resetDisplays() {
  pagerMsgEl.innerHTML = "Relax";
  phoneNumberEl.innerHTML = "";
}

function sendToPager() {
  const audio = new Audio("sound.wav");
  audio.play();
  pagerMsgEl.innerHTML = phoneNumberEl.innerHTML;
  statusEl.style.visibility = "hidden";
}

function updatePhoneNumber(btn) {
  if (phoneNumberEl.textContent.length < 10) {
    phoneNumberEl.innerHTML += btn.innerText;
  }
}
