// register.js — التحقق من نموذج التسجيل

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = form["fullname"].value.trim();
    const email = form["email"].value.trim();
    const password = form["password"].value;
    const confirmPassword = form["confirm-password"].value;

    if (!fullname || !email || !password || !confirmPassword) {
      showMessage("يرجى تعبئة جميع الحقول", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("كلمة المرور غير متطابقة", "error");
      return;
    }

    // ✅ إذا كل شيء تمام
    showMessage("تم التسجيل بنجاح! ✅", "success");
    form.reset();
  });

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = type;
  }
});
