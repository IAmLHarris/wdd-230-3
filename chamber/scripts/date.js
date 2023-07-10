// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

const halfdate = new Intl.DateTimeFormat("en-US").format(now);

let atrdate = halfdate.replace("/", "-");
let whatdate = atrdate.replace("/", "-");

// If you are reading this, I beg of you, please tell me why on Earth I
// have to do this twice. It looks for the slash, and replaces it with the dash,
// but it only does it once?? Not twice?? That makes no sense at all. I hate this.
// I miss python and programming so much.

// "full" or long, medium, short options ... try them

datefield.textContent = fulldate;
datefield.setAttribute("datetime", whatdate);
