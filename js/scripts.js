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
]

  document.write ('<h2 class="pokedex_name">');
    for(var i=0;i<repository.length;i++){
      document.write(repository[i].name + '('+'height:' + repository[i].height + ')' + '<br>');
      if(repository[i].height>3){
        document.write('<div class="big_pokemon">Wow, That is big!</div>')
      }
    }
  document.write ('</h2>');
