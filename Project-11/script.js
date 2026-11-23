const inputs = document.querySelectorAll(".otp");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  // OTP Paste Feature
  input.addEventListener("paste", (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, inputs.length);

    pastedData.split("").forEach((digit, i) => {
      inputs[i].value = digit;
    });

    const nextIndex = Math.min(pastedData.length, inputs.length - 1);
    inputs[nextIndex].focus();
    });

});