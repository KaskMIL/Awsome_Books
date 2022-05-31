import {getLi, addLi} from './DOMelements.js';
//Function to store Local Storage
export function storeData(list) {
  localStorage.setItem('bookData',JSON.stringify(list));
}

export function loadData(nodeContainer) {
  const data = JSON.parse(localStorage.getItem('bookData'));
  if(data) {
    data.forEach(book => {
      addLi(nodeContainer, getLi(book));
    })
  };
  return data;
}