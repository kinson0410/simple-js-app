// define pokemonRepository with api list
var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


   function getAll() {
     return repository;
   }

   function add(pokemon) {
     if (typeof(pokemon) === 'object') {
       repository.push(pokemon);
     } else {
       console.log ('Please input an object')
     }
   }

//create new list and list item,
//create button, and assign pokemon's name to the button,
//append button to the list,
   function addListItem(pokemon) {

     var $pokemonList = document.querySelector('.pokemon_list');
     var $listItem = document.createElement('li');
     var $pokemonInfoButton = document.createElement('button');

     $listItem.classList.add('pokemon_listItem');
     $pokemonInfoButton.classList.add('name_button');
     $pokemonInfoButton.innerText = pokemon.name;

     //create event function
     $pokemonInfoButton.addEventListener('click',function(){
       showDetails(pokemon);
     });


     //Append child
     $listItem.appendChild($pokemonInfoButton);
     $pokemonList.appendChild($listItem);
   }


//Load or fetch the pokemon list from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

//Load detailed data for a given Pokemon from the API
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  //show details when clicking the button

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
    });
  }

  //create modal content
  function showModal(item){
    var $modalContainer = document.querySelector('#modal_container');

    //clear modal content
    $modalContainer.innerHTML = '';

    // modal elements
    var modal = document.createElement('div');
    modal.classList.add('modal');

    var nameElement = document.createElement('h2');
    nameElement.innerText = item.name;

    var imageElement = document.createElement('img');
    imageElement.classList.add('modal_img');
    imageElement.setAttribute('src',item.imageUrl)
    console.log(imageElement)

    var heightElement = document.createElement('p');
    heightElement.innerText = 'height:' + item.height;

    var typeElement = document.createElement('p');
    typeElement.innerText = 'type:' + item.types;

    //create closing button in modal
    var closeButton = document.createElement('button');
    closeButton.classList.add('modal_close');
    closeButton.innerText = 'Close';
    closeButton.addEventListener('click', hideModal);

    //apend modal
    modal.appendChild(closeButton);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typeElement);
    $modalContainer.appendChild(modal);

    //add visible class
    $modalContainer.classList.add('is-visible');
  }

    //hide modal functions
    function hideModal() {
      var $modalContainer = document.querySelector('#modal_container');
      $modalContainer.classList.remove('is-visible');

    //hide with ESC key
    window.addEventListener('keydown', (e) => {
      var $modalContainer = document.querySelector ('#modal_container');

      if (
        e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
      ) {
        hideModal();
      }
    });

    //hide when click outside of modal
    $modalContainer.addEventListener('click', (e) => {
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });

  }

  //return functions
   return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal

  };

})(); // end of pokemonRepository

//Call function in repository
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
