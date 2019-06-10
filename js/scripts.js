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

   return {
    getAll: getAll,
    add: add
  };

})();

 pokemonRepository.getAll().forEach(function(pokemon){
  //start a head tag
  document.write('<h2 clsss="pokedex_name">' + pokemon.name + '<span class="sub_text">('+'height:' + pokemon.height + ')</span>');
  if(pokemon.height>3){
    //if there any with height greater than 3 print span
    //and close the head tag
    document.write('<span class="big_pokemon">Wow, That is big!</span></h2>')
  }else{
    //else just clost the head tag
    document.write('</h2>')
  }
 });
