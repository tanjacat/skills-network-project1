let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increase count by 1
  displayCount(); // Display the count
  checkCountValue();//Check the count value and show a message
}
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post has reached 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post has reached 20 followers! Keep up the great work!");
  }
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count; // Display the count in HTML
}
