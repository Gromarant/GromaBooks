'use strict';

let bookOnemage = 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg';
let bookOneName = 'Código Limpio';
let bookOneAutor = 'Robert C. Martin';
let bookOneDescipt = 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender';

let bookTwomage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgCOMTY0J8QmCQeb9Ini92f_OsLVdY0Y--w&usqp=CAU';
let bookTwoName = 'Fiona';
let bookTwoAutor = 'British Shorthair';
let bookTwoDescipt = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';

let bookThreemage = 'https://www.librerialunanueva.com/imagenes/9788441/978844154499.JPG';
let bookThreeName = 'Cielo';
let bookThreeAutor = 'British Shorthair';
let bookThreeDescipt = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';

const itemCard = document.querySelector('.book-data');
const bookOne = `<li class="card">
<article>
  <img class="card-img" src=${ bookOnemage } alt="código limpio"/>
  <h3 class="card-title"><strong>${ bookOneName }:</strong> Manual de estilo para el desarrollo ágil de software</h3>
  <h4 class="card-autor">${ bookOneAutor }</h4>
  <p class="card-description">${ bookOneDescipt }</p>
</article>
</li>`;

const bookTwo = `<li class="card">
<img class="card-img" src=${ bookTwomage } alt="book"/>
<h3 class="card-title">${ bookTwoName }</h3>
<h4 class="card-autor">${ bookTwoAutor }</h4>
<p class="card-description">${ bookTwoDescipt }</p>
</li>`

const bookThree = `<li class="card">
<img class="card-img" src=${ bookThreemage } alt="book"/>
<h3 class="card-title">${ bookThreeName }</h3>
<h4 class="card-autor">${ bookThreeAutor }</h4>
<p class="card-description">${ bookThreeDescipt }</p>
</li>`

itemCard.innerHTML = bookOne + bookTwo + bookThree;

const searchDescriptInput = document.querySelector('.search-description');
searchDescriptInput.classList.add('.js_in_search_desc');
searchDescriptInput.value = '';
const descriptText = searchDescriptInput.value;

const resultList = document.querySelector('.list');
const searchByDescript = ( descriptText ) => {
  if(bookOneDescipt.includes( descriptText )) {
    return resultList = bookOne;
  } 
  if(bookTwoDescipt.includes( descriptText )) {
    return resultList = bookTwo;
  } 
  if(bookThreeDescipt.includes( descriptText )) {
    return resultList = bookThree;
  } else {
    return 'No se encontró ese libro';
  }
}

const formSection = document.querySelector('.new-form-act');
const addBook = document.querySelector('.item');
addBook.addEventListener( 'click', () => {

  if( formSection.classList.contains('collapsed') ) {
    return formSection.classList.remove('collapsed');
  } else {
    return formSection.classList.add('collapsed');
  }
});

const pictureInput = document.querySelector('.pictute-input').value;
const titleInput = document.querySelector('.title-input').value;
const descriptInput = document.querySelector('.descript-input').value;
const labelError = document.querySelector('.error-label');

const requireInputs = [pictureInput, titleInput, descriptInput];

const addBookButton = document.querySelector('.add-button-act');
addBookButton.addEventListener( 'click', () => {
    if( pictureInput === '' || titleInput === '' || descriptInput === '' ) {
      return labelError.innerHTML = 'Debe rellenar los campos obligatorios';
    }
});

const SearchDescript = document.querySelector('.search-description').value;
const searchAutor = document.querySelector('.search-autor').value;
const searchButton = document.querySelector('.search-button');
const serchError = document.querySelector('.error-search');

searchButton.addEventListener( 'click', () => {
  if( SearchDescript === '' && searchAutor === '' ) {
    alert('Debe rellenar los campos obligatorios');
    SearchDescript = '';
    searchAutor = '';
  }
})