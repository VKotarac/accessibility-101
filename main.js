import "./style.css";

document
  .getElementById("sendFormButton")
  .addEventListener("click", () => alert("Form was sent"));

// Add support for checking checkbox with Enter key
document.getElementById("rememberMe").addEventListener("keydown", function (e) {
  e.key === "Enter" && this.click();
});
