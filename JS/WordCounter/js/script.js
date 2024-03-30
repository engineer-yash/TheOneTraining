//? Counting Words, Letters, Capital Letters, Small Letters, Punctuation, Numbers, Special Characters
//! Window Load
window.onload = function () {
  updateCount();
};
//! Local Storage
document.getElementById("countme").value = localStorage.getItem("textArea");
document.getElementById("countme").addEventListener("input", function () {
  localStorage.setItem("textArea", document.getElementById("countme").value);
});
//! Update Count
function updateCount() {
  var text = prepareText(document.getElementById("countme").value);
  if (text.length) {
    document.getElementById("wordCount").innerHTML = text.split(' ').length;//word count
  } else {
    document.getElementById("wordCount").innerHTML = 0;
  }
  document.getElementById("letterCount").innerHTML = getLetterCount(text);
  document.getElementById("capitalCount").innerHTML = getCapitalCount(text);
  document.getElementById("smallCount").innerHTML = getSmallCount(text);
  document.getElementById("punctuationCount").innerHTML = getPuctuationCount(text);
  document.getElementById("numberCount").innerHTML = getNumberCount(text);
  document.getElementById("specialCount").innerHTML = getSpecialCount(text);
  document.getElementById("upper").addEventListener("click", upperCase);
  document.getElementById("lower").addEventListener("click", lowerCase);
  document.getElementById("title").addEventListener("click", titleCase);
  document.getElementById("reset").addEventListener("click", resetText);
  document.getElementById("totalCount").innerHTML = text.length;
}
//! Copy Text
function copyText() {
  var copyText = document.getElementById("countme");
  if (copyText.value === "") {
    alert("Please enter some text to copy");
  } else {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text Copied");
  }
}
//! Preparing Text
function prepareText(str) {
  // removes double spaces
  return str.trim().replace(/\s{2,}/g, " ");
}
//! Counting Functions
function getLetterCount(str) {
  return str.replace(/[^A-Za-z]/gi, "").length;
}
function getCapitalCount(str) {
  return str.replace(/[^A-Z]/g, "").length;
}
function getSmallCount(str) {
  return str.replace(/[^a-z]/g, "").length;
}
function getPuctuationCount(str) {
  return str.replace(/[^,:;\'\"\.?\-_]/g, "").length;
}
function getNumberCount(str) {
  return str.replace(/[^0-9]/g, "").length;
}
function getSpecialCount(str) {
  return str.replace(/[0-9A-Za-z\s]/g, "").length;
}
//! Case Functions
function upperCase() {
  document.getElementById("countme").value = document.getElementById("countme").value.toUpperCase();
  updateCount();
}
function lowerCase() {
  document.getElementById("countme").value = document.getElementById("countme").value.toLowerCase();
  updateCount();
}
function titleCase() {
  document.getElementById("countme").value = onlyFirstLetterUpper(document.getElementById("countme").value);
  updateCount();
}
function resetText() {
  document.getElementById("countme").value = "";
  localStorage.removeItem("textArea", document.getElementById("countme").value);
  updateCount();
}
function everyFirstLetterUpper(theString) {
  var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
  return newString;
}
function onlyFirstLetterUpper(theString) {
  var newString = theString.toLowerCase().replace(/(^\s*\w)/g, function (c) { return c.toUpperCase() });
  return newString;
}
function sentenceCase() {
  var theString = document.getElementById("countme").value;
  var newString = everyFirstLetterUpper(theString);
  document.getElementById("countme").value = newString
  updateCount();
}

