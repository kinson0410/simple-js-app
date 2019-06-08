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


    for(var i=0;i<repository.length;i++){
      //start a head tag
      document.write('<h2 clsss="pokedex_name">' repository[i].name + '<span class="sub_text">('+'height:' + repository[i].height + ')</span>');
      if(repository[i].height>3){
        //if there any with height greater than 3 print span
        //and close the head tag
        document.write('<span class="big_pokemon">Wow, That is big!</span></h2>')
      }else{
        //else just close the head tag
        document.write('</h2>')
    }
