// Function to set border
export default function setBorder(booksContainer, booksList) {
  const data = JSON.parse(localStorage.getItem('bookData'));
  if (booksList.length > 0 || data.length > 0) {
    booksContainer.classList.add('border');
  } else if (booksList.length === 0 && data.length === 0) {
    booksContainer.classList.remove('border');
  }
}