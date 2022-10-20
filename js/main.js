'use strict';

//Data
let books = [
  {
    title: 'Codigo Limpio',
    author: 'Robert C. Martin',
    description: 'Clean Code, o Código Limpio, es una filosofía de desarrollo de software que consiste en aplicar técnicas simples que facilitan la escritura y lectura de un código, volviéndolo más fácil de entender',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
  {
    title: 'Algoritmia rezonar para crear',
    author: 'Christoph Haro',
    description: 'Algoritmia rezonar para crear',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
  {
    title: 'Sprint',
    author: [ 'John Zeratsky', 'Branden Kowitz' ],
    description: 'Sprint',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61RRViAYqdL.jpg',
  },
];

//---------------------------------------------------------------------------

//selection of elements
//inputs and buttons of new-form 
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const descriptInput = document.querySelector('.descript-input');
const formAddButton = document.getElementById('add-button-act');
const cancelButton = document.querySelector('.button-cancel');
const labelError = document.querySelector('.error-label');

//root render books
const resultList = document.querySelector('.data-list');

//inputs and buttons of search
const searchIcon = document.querySelector('.plusIcon');
const searchTitleInput = document.getElementById('titleSearchInput');
const searchAuthorInput = document.getElementById('authorSearchInput');
const searchButton = document.querySelector('.search-button');
const serchError = document.querySelector('.error-search');

//---------------------------------------------------------------------------
// Display votation cards
const votationListCards = document.querySelector('.votation');
const likesCount = document.querySelector('.liks');
const dislikesCount = document.querySelector('.disliks');
//---------------------------------------------------------------------------
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

// form cancel
cancelButton.addEventListener( 'click', () => {
  if( titleInput !== '' || authorInput !== '' || descriptInput !== '' ) {
    titleInput = '';
    authorInput = '';
    descriptInput = '';
    hideForm();
  };
});
//---------------------------------------------------------------------------

let recommendedBooks = [];
let booksToReview = [...new Set( ...recommendedBooks )];

const createBook = ( title, author, descript ) => (
  {
  title: `${title}`, 
  author: `${author}`, 
  description: `${descript}`,
  }
);

// add a recommended book 
formAddButton.addEventListener( 'click', ( event ) => {
  event.preventDefault();
  let titleForm = titleInput.value;
  let authorForm = authorInput.value;
  let descriptForm = descriptInput.value;

  if( titleForm.length === 0 && authorForm.length === 0 ) {
    return labelError.innerHTML = 'You must type a title';
  };
  if( recommendedBooks.includes( titleForm ) ) {
    return labelError.innerHTML = 'This book is already in the list';
  }
  recommendedBooks.push( createBook( titleForm, authorForm, descriptForm ) );
  booksToBeVoteRender( booksToReview );
});

const booksToBeVoteRender = ( results ) => {
  const voteItems = results.values();
  console.log(voteItems)
  return voteItems;
};
// resultList.innerHTML = voteItems;

// rendervoteCards function
const makeListVoteItem = ({ title, author, description }) => (
  `<li class="votation-card">
    <div class="votation-header">
      <h1 class="votation-Title">${ title }</h1>
      <span class="material-icons icons-outlined expandIcon">expand_circle_down</span>
    </div>
    <h3 class="votation-author">${ author }</h3>
    <div class="votation-main close">
      <p class="votation-descript ">${ description }</p>
    </div>
    <div class="votation-items">
      <span class="material-icons votation-icon likeIcon">thumb_up</span>
      <p class="liks"></p>
      <span class="material-icons votation-icon dislikeIcon">thumb_down_alt</span>
      <p class="disliks"></p>
    </div>
  </li>`
);
  
  //  ${ likes} ${ description } code complete console.log(recommendedBooks);
//---------------------------------------------------------------------------

// renderBook function
const makeListItem = ({  title, author, description, image  }) => (
  `<li class="data-card">
    <div class="card_img-frame">
      <img class="frame-image" src=${ image } />
    </div>
    <header class="card-header">
      <h3 class="card-title">${ title }</h3>
      <h3 class="card-author">${ author }</h3>
    </header>
    <p class="card-description">${ description }</p>
   </li>`
  );


const renderResults = ( results ) => {
  const listItems = results.map( result => makeListItem( result ));
  resultList.innerHTML = listItems;
};



// Autenticate bookSearch and throw error
searchButton.addEventListener( 'click', (event) => {
  event.preventDefault();
  if( searchTitleInput.value.length === 0 && searchAuthorInput.value.length === 0 ) {
    return serchError.innerHTML = 'Debe rellenar alguno de los campos';
  }
  const foundBooks = books.filter( book => {
    const matchesTitle = searchTitleInput.value.length > 0 ? book.title.toLocaleLowerCase().includes(searchTitleInput.value.toLocaleLowerCase()) : true;
    const matchesAuthor = searchAuthorInput.value.length > 0 ? book.author.toLocaleLowerCase().includes(searchAuthorInput.value.toLocaleLowerCase()) : true;
    return matchesTitle && matchesAuthor;
  });

  renderResults(foundBooks);
});