const sellerForm = document.getElementById("seller-form");

sellerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thank you! Your seller application has been submitted.");
  sellerForm.reset();
});
