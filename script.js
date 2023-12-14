let start = document.querySelector(".start");
let reset = document.querySelector(".reload");
let skip = document.querySelector(".skip");
let second = 0;
let mints = 0;
let lesecond = 0;
let lemints = 0;
let timein = null;
let statue = "stop";
function timer() {
  second++;
  if (second / 60 === 1) {
    second = 0;
    mints++;
  }
  if (second < 10) {
    lesecond = "0" + second;
  } else {
    lesecond = second;
  }

  if (mints < 10) {
    lemints = "0" + mints;
  } else {
    lemints = mints;
  }
  var final1 = document.getElementById("mints");
  final1.innerText = lemints;
  var final2 = document.getElementById("second");
  final2.innerText = lesecond;
  var title = document.getElementById("title");
  title.innerText = lemints + ":" + lesecond;
}
start.addEventListener("click", function () {
  if (statue == "stop") {
    timein = window.setInterval(timer, 1000);
    statue = "start";
    let final1 = document.getElementById("mints");
    let final2 = document.getElementById("second");

    let icon = document.getElementById("startimg");
    if (icon.src == "file:///G:/Jo/T%20imer/images/start.svg") {
      icon.src = "images/pause.svg";
    } else if (icon.src == "file:///G:/Jo/T%20imer/images/start%20green.svg") {
      icon.src = "images/pause green.svg";
    } else if (
      icon.src == "file:///G:/Jo/T%20imer/images/start%20blue.svg"
    ) {
      icon.src = "images/pause blue.svg";
    }
    final1.style.fontWeight = "800";
    final2.style.fontWeight = "800";
  } else {
    window.clearInterval(timein);
    statue = "stop";
    let icon = document.getElementById("startimg");

    if (icon.src == "file:///G:/Jo/T%20imer/images/pause.svg") {
      icon.src = "images/start.svg";
    } else if (icon.src == "file:///G:/Jo/T%20imer/images/pause%20green.svg") {
      icon.src = "images/start green.svg";
    } else if (
      icon.src == "file:///G:/Jo/T%20imer/images/pause%20blue.svg"
    ) {
      icon.src = "images/start blue.svg";
    }
    let final1 = document.getElementById("mints");
    let final2 = document.getElementById("second");
    final1.style.fontWeight = "200";
    final2.style.fontWeight = "200";
  }
});
reset.addEventListener("click", function () {
  window.clearInterval(timein);
  second = 0;
  mints = 0;
  let icon = document.getElementById("startimg");
  if (icon.src == "file:///G:/Jo/T%20imer/images/pause.svg") {
    icon.src = "images/start.svg";
  } else if (icon.src == "file:///G:/Jo/T%20imer/images/pause%20green.svg") {
    icon.src = "images/start green.svg";
  } else if (
    icon.src == "file:///G:/Jo/T%20imer/images/pause%20blue.svg"
  ) {
    icon.src = "images/start blue.svg";
  }
  var title = document.getElementById("title");
  title.innerText = "Timer";
  var final1 = document.getElementById("mints");
  final1.innerText = "00";
  var final2 = document.getElementById("second");
  final2.innerText = "00";
  final1.style.fontWeight = "200";
  final2.style.fontWeight = "200";
});

skip.addEventListener("click", function () {
  window.clearInterval(timein);
  second = 0;
  mints = 0;

  let licon = document.getElementById("startimg");
  if (licon.src == "file:///G:/Jo/T%20imer/images/start.svg") {
    licon.src = "images/start.svg";
  } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20green.svg") {
    licon.src = "images/start green.svg";
  } else if (
    licon.src == "file:///G:/Jo/T%20imer/images/start%20blue.svg"
  ) {
    licon.src = "images/start blue.svg";
  }
  var title = document.getElementById("title");
  title.innerText = "Timer";
  var final1 = document.getElementById("mints");
  final1.innerText = "00";
  var final2 = document.getElementById("second");
  final2.innerText = "00";
  final1.style.fontWeight = "200";
  final2.style.fontWeight = "200";
  let con = document.body;
  let tit = document.querySelector(".tit");
  let time = document.querySelector(".time");
  let titcon = document.getElementById("favicon");
  let reload = document.getElementById("reload");
  let start = document.getElementById("start");
  let skip = document.getElementById("skip");
  let co1 = document.getElementById("co1");
  let co3 = document.getElementById("co3");
  let icon = document.getElementById("icon");
  let text = document.getElementById("text");
  if (icon.src == "file:///G:/Jo/T%20imer/ph_brain-fill.svg") {
    titcon.href = "images/short.ico";
    icon.src = "images/green.svg";
    text.style.color = "var(--color-green)";
    time.style.color = "var(--color-green)";
    con.style.background = "var(--bg-green)";
    reload.style.background = "var(--button-green)";
    start.style.background = "var(--start-green)";
    skip.style.background = "var(--button-green)";
    co1.src = "images/reload green.svg";
    licon.src = "images/start green.svg";
    co3.src = "images/skip green.svg";
    tit.style.background = "var(--border-green)";
    tit.style.borderColor = "var(--color-green)";
    if (licon.src == "file:///G:/Jo/T%20imer/images/start.svg") {
      licon.src = "images/start.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20green.svg") {
      licon.src = "images/start green.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20blue.svg") {
      licon.src = "images/start blue.svg";
    }
  } else if (icon.src == "file:///G:/Jo/T%20imer/images/green.svg") {
    titcon.href = "images/long.ico";
    icon.src = "images/blue.svg";
    text.style.color = "var(--color-blue)";
    time.style.color = "var(--color-blue)";
    con.style.background = "var(--bg-blue)";
    reload.style.background = "var(--button-blue)";
    start.style.background = "var(--start-blue)";
    skip.style.background = "var(--button-blue)";
    co1.src = "images/reload blue.svg";
    licon.src = "images/start blue.svg";
    co3.src = "images/skip blue.svg";
    tit.style.background = "var(--border-blue)";
    tit.style.borderColor = "var(--color-blue)";
    if (licon.src == "file:///G:/Jo/T%20imer/images/start.svg") {
      licon.src = "images/start.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20green.svg") {
      licon.src = "images/start green.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20blue.svg") {
      licon.src = "images/start blue.svg";
    }
  } else if (icon.src == "file:///G:/Jo/T%20imer/images/blue.svg") {
    titcon.href = "images/focus.ico";
    icon.src = "ph_brain-fill.svg";
    text.style.color = "var(--color-pink)";
    time.style.color = "var(--color-pink)";
    con.style.background = "var(--bg-pink)";
    reload.style.background = "var(--button-pink)";
    start.style.background = "var(--start-pink)";
    skip.style.background = "var(--button-pink)";
    co1.src = "images/reload.svg";
    licon.src = "images/start.svg";
    co3.src = "images/skip.svg";
    tit.style.background = "var(--border-pink)";
    tit.style.borderColor = "var(--color-pink)";
    if (licon.src == "file:///G:/Jo/T%20imer/images/start.svg") {
      licon.src = "images/start.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20green.svg") {
      licon.src = "images/start green.svg";
    } else if (licon.src == "file:///G:/Jo/T%20imer/images/start%20blue.svg") {
      licon.src = "images/start blue.svg";
    }
  }
});
