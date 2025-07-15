function groceryTracker(amount1, amount2, amount3) {
  // Convert to numbers (in case strings are passed)
  const total = parseFloat(amount1) + parseFloat(amount2) + parseFloat(amount3);
  return total.toFixed(2); // Return the sum with two decimal places
}

function calculateTotal() {
  const item1 = document.getElementById("grocery1").value || 0;
  const item2 = document.getElementById("grocery2").value || 0;
  const item3 = document.getElementById("grocery3").value || 0;

  const total = groceryTracker(item1, item2, item3);
  document.getElementById("totalResult").innerText = `Total grocery cost: $${total}`;
}
