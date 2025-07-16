let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}
function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Title: </strong>${book.name}</p>
        <p><strong>Author's Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>Number of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editBook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
 function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }