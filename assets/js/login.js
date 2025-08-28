// login.js — التحقق من نموذج تسجيل الدخول

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const messageBox = document.getElementById("login-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form["email"].value.trim();
    const password = form["password"].value;

    if (!email || !password) {
      showMessage("يرجى إدخال البريد وكلمة المرور", "error");
      return;
    }

    // ✅ تم الإدخال بنجاح
    showMessage("تم تسجيل الدخول بنجاح ✅", "success");
    form.reset();
  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = type;
  }
});
