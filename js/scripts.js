var pokemonRepository = (function(){

 var repository=[
  {name:'Bulbasaur',
   height:0.7,
   types:['grass','poison']
  },
  {name:'Charmander',
   height:0.6,
   types:'fire'
  },
  {name:'Squirtle',
   height:0.5,
   types:'water'
  },
  {name:'Arbok',
   height:3.5,
   types:'poison'
  }
];

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
     $pokemonInfoButton.innerText = "pokemon.name";
     $pokemonInfoButton.addEventListner ('click',function(event){
       showDetails(pokemon);
     });

     $listItem.appendChild($pokemonInfoButton);
     $pokemonList.appendChild($listItem);
   }

   function showDetails(pokemon) {
     console.log (pokemon)
   }

   return {
    getAll: getAll,
    add: add,
    getListItem: getListItem


  };

})(); // end of pokemonRepository


 pokemonRepository.getAll().forEach(function(pokemon) {

   pokemonRepository.addListItem(pokemon);

});
