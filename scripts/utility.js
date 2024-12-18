function showElementsById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');

}

function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.style.backgroundColor = '#1DD100';
}

