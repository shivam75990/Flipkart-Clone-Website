let balance = 1000;
const balanceAmount = document.getElementById("balance-amount");
const addAmountInput = document.getElementById("add-amount");
const addMoneyBtn = document.getElementById("add-money-btn");
const transactionList = document.getElementById("transaction-list");

addMoneyBtn.addEventListener("click", () => {
  const amount = parseInt(addAmountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  balance += amount;
  balanceAmount.textContent = balance;

  const li = document.createElement("li");
  li.textContent = `Added ₹${amount}`;
  transactionList.appendChild(li);

  addAmountInput.value = "";
  alert(`₹${amount} added successfully!`);
});
