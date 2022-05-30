//Function to generate li
export function getLi(book) {
  //Declare elements
  const title = document.createElement('div');
  const author = document.createElement('div');
  const titleAuthorContainer = document.createElement('div');
  const removeBtn = document.createElement('button');
  const li = document.createElement('li');

  //Set classes and ids
  title.classList.add('title');
  author.classList.add('author');
  titleAuthorContainer.classList.add('containerTitleAuthor');
  removeBtn.classList.add('remove');
  removeBtn.setAttribute('id', `button${book.id}`);
  li.classList.add('book');
  li.setAttribute('id', book.id);

  //Set content
  title.innerHTML = book.title;
  author.innerHTML = book.author;
  removeBtn.innerText = 'Remove';
  removeBtn.type = 'button';

  //Create element
  titleAuthorContainer.appendChild(title);
  titleAuthorContainer.appendChild(author);
  li.appendChild(titleAuthorContainer);
  li.appendChild(removeBtn);

  //Return element
  return li;
}

//Function to add to page
export function addLi(node, li) {
  node.appendChild(li);
}

//Function to delete de book from DOM
export function deleteLi(id) {
  const li = document.getElementById(id);
  li.remove();
}

//Function to remove from list
export function removeFromList(nodeId, list) {
  const newList = list.filter(element => element.id !== nodeId);
  return newList;
}
