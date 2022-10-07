'use strict';

let books = [
  {
    title: 'Código Limpio',
    autor: 'Robert C. Martin',
    description: 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
  {
    title: 'Código Limpio',
    autor: 'Robert C. Martin',
    description: 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
  {
    title: 'Código Limpio',
    autor: 'Robert C. Martin',
    description: 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
];

//elements
//inputs and buttons of new-form 
const titleInput = document.querySelector('.title-input').value;
const autorInput = document.querySelector('.autor-input').value;
const descriptInput = document.querySelector('.descript-input').value;
const requireInputs = [titleInput, descriptInput];
const addFormButton = document.querySelector('.add-button-act');
const cancelButton = document.querySelector('.button-cancel');
const labelError = document.querySelector('.error-label');

//root render books
const itemCard = document.querySelector('.book-data');
const resultList = document.querySelector('.list');

//inputs and buttons of search
const searchIcon = document.querySelector('.plusIcon');
const searchTitle = document.querySelector('.search-title').value;
const searchAutor = document.querySelector('.search-autor').value;
const searchButton = document.querySelector('.search-button');
const serchError = document.querySelector('.error-search');

// renderBook function
const renderBook = ( title, autor, description ) => {
  `<li class="card">
      <article>
        <h3 class="card-title"><strong>${ title }:</strong> Manual de estilo para el desarrollo ágil de software</h3>
        <h4 class="card-autor">${ autor }</h4>
        <p class="card-description">${ description }</p>
      </article>
    </li>`;
}

itemCard.innerHTML = renderBook( titleInput, autorInput, descriptInput );

//Display form
const formSection = document.querySelector('.new-form-act');
const showForm = () => formSection.classList.remove('collapsed');
const hideForm = () => formSection.classList.add('collapsed');
const addButton = document.querySelector('.item');

const handleForm = (event) => {
  event.preventDefault();
  if( formSection.classList.contains('collapsed') ) {
    searchIcon.innerHTML = 'highlight_off';
    return showForm();
  } else {
    searchIcon.innerHTML = 'add_circle';
    return hideForm();
  }
}
addButton.addEventListener( 'click', handleForm );

//validate search / Require inputs 
addFormButton.addEventListener( 'click', () => {
  if( titleInput !== '' ) {
    books.push(
      {
        title: `${titleInput}`,
        autor: `${autorInput}`,
        description: `${descriptInput}`,
      },
    );
  } else {
      return labelError.innerHTML = 'debe agregar el título';
  };
});

// form cancel
cancelButton.addEventListener( 'click', () => {
  if( titleInput !== '' || autorInput !== '' || descriptInput !== '' ) {
    titleInput = '';
    autorInput = '';
    descriptInput = '';
    pictureInput = '';
    hideForm();
  };
});

// Autenticate bookSearch and throw error
searchButton.addEventListener( 'click', () => {
  if( books.title.includes( searchTitle) || books.autor.includes( searchAutor)) {
    console.log(`si está ese libro`);
  }
  if( searchTitle === '' && searchAutor === '' ){
    return serchError.innerHTML += 'Debe rellenar alguno de los campos';
  }
  else {
    return 'No se encontró ese libro';
  };
  searchTitle = '';
  searchAutor = '';
});