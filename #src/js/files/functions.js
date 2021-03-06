//=================

//Tabs
let tabs = document.querySelectorAll('._tabs');
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll('._tabs-item');
  let tabs_blocks = tab.querySelectorAll('._tabs-block');
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener('click', function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}

let subTabs = document.querySelectorAll('._sub-tabs');
for (let index = 0; index < subTabs.length; index++) {
  let subTab = subTabs[index];
  let subTabs_items = subTab.querySelectorAll('._sub-tabs-item');
  let subTabs_blocks = subTab.querySelectorAll('._sub-tabs-block');
  for (let index = 0; index < subTabs_items.length; index++) {
    let subTabs_item = subTabs_items[index];
    subTabs_item.addEventListener('click', function (e) {
      for (let index = 0; index < subTabs_items.length; index++) {
        let subTabs_item = subTabs_items[index];
        subTabs_item.classList.remove('_sub-active');
        subTabs_blocks[index].classList.remove('_sub-active');
      }
      subTabs_item.classList.add('_sub-active');
      subTabs_blocks[index].classList.add('_sub-active');
      e.preventDefault();
    });
  }
}

let radio = document.querySelectorAll('.method-settings__radio-item');

//=======================================================
//Clock
function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  document.getElementById('id_clock').innerHTML =
    hours + ':' + minutes + ':' + seconds;
  setTimeout('digitalClock()', 1000);
}

digitalClock();

//=========================================================
//Progress

function userProgress(flag) {
  time = 60000;
  let start = 0;
  let progressElement = document.getElementById('progress');
  let intervalId = setInterval(() => {
    if (start > 100) {
      clearInterval(intervalId);
    } else {
      progressElement.value = start;
    }
    start++;
  }, 1000);
}

function timePassed() {
  let start = 0;
  let progressElement = document.getElementById('time-passed');
  let intervalId = setInterval(() => {
    if (start > 60) {
      clearInterval(intervalId);
    } else {
      if (start < 10) {
        progressElement.innerHTML = `00:0${start}`;
      } else {
        progressElement.innerHTML = `00:${start}`;
      }
    }
    start++;
  }, 1000);
}

function timeLeft() {
  let start = 59;
  let progressElement = document.getElementById('time-left');
  let intervalId = setInterval(() => {
    if (start < 0) {
      clearInterval(intervalId);
    } else {
      if (start < 10) {
        progressElement.innerHTML = `-00:0${start}`;
      } else {
        progressElement.innerHTML = `-00:${start}`;
      }
    }
    start--;
  }, 1000);
}

function progress() {
  userProgress();
  timePassed();
  setTimeout(() => {
    timeLeft();
  }, 1000);
}
