//Funtion to hide content
export function hide(section) {
  section.classList.add('hide');
}

//Function to show content
export function show(section) {
  section.classList.remove('hide');
}