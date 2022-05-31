import {getLi, addLi} from './DOMelements.js';
//Function to store Local Storage
export function storeData(list) {
  localStorage.setItem('bookData',JSON.stringify(list));
}

export function loadData(list, nodeContainer) {
  const data = localStorage.getItem('bookData');
  if(data) {
    list = JSON.parse(data);
    list.forEach(book => {
      addLi(nodeContainer, getLi(book));
    })
  }
}

export function fillList () {
  const data = JSON.parse(localStorage.getItem('bookData'));
  return data;
}