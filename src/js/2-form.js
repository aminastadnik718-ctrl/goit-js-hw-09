
const form = document.querySelector(".feedback-form");

const formData = {
  email: "",
  message: "",
};

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  const parsed = JSON.parse(savedData);

  formData.email = parsed.email || "";
  formData.message = parsed.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(formData)
  );
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  form.reset();

  formData.email = "";
  formData.message = "";
});