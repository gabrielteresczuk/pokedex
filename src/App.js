import { useEffect, useState } from 'react';
import './App.css';
import Pokedex from './componentes/Pokedex';
import audioMP3 from './audio/audio.mp3';
import PokedexOff from './componentes/PokedexOff';

function App() {

  const [datos, setDatos] = useState('');
  const [id, setId] = useState(1);
  const [display, setDisplay] = useState('');
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(audioMP3));
  const [estado, setEstado] = useState(true);

  //const audio = new Audio(audioMP3);
  

  useEffect(() => {

    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(response => response.json())
    .then(data => {
      setDatos(data);
      setDisplay({
        lineaUno: 'Name: '+data.name,
        lineaDos:'Height: '+data.height,
        lineaTres:'Weight: '+data.weight
    });
    });

  

  }, [id]);

  useEffect(() => {

    if(play){
      audio.play();
    }else{
      audio.pause();
    }

  }, [play,audio])
  
  const apagar = () =>{

    if(play){
      setPlay(!play);
    }

    setEstado(!estado);

   

  }

  const sonido = () =>{
    setPlay(!play);
  }

  const changeDisplay = (action) =>{
    //console.log(action);

    if(action === 'ALL'){
        setDisplay({
            lineaUno: 'Name: '+datos.name,
            lineaDos:'Height: '+datos.height,
            lineaTres:'Weight: '+datos.weight
        });
    }
    if(action === 'HP'){
        setDisplay({
            lineaUno: 'HEALTH POINTS: ',
            lineaDos:datos.stats[0].base_stat
        });
    }

    if(action === 'ATK'){
        setDisplay({
            lineaUno: 'ATACK POINTS: ',
            lineaDos:datos.stats[1].base_stat
        });
    }

    if(action === 'DEF'){
        setDisplay({
            lineaUno: 'DEFENSE POINTS: ',
            lineaDos:datos.stats[2].base_stat
        });
    }

    if(action === 'SATK'){
        setDisplay({
            lineaUno: 'SPECIAL ATTACK POINTS: ',
            lineaDos:datos.stats[3].base_stat
        });
    }

    if(action === 'SDEF'){
        setDisplay({
            lineaUno: 'SPECIAL DEFENSE POINTS: ',
            lineaDos:datos.stats[4].base_stat
        });
    }

    if(action === 'SPD'){
        setDisplay({
            lineaUno: 'SPEED POINTS: ',
            lineaDos:datos.stats[5].base_stat
        });
    }

    if(action === 'AB1'){
        setDisplay({
            lineaUno: 'Ability 1: ',
            lineaDos: datos.abilities[0].ability.name,
        });
    }

    if(action === 'AB2'){
        setDisplay({
            lineaUno: 'Ability 2: ',
            lineaDos: datos.abilities[1].ability.name,
        });
    }

    if(action === 'MOV'){
        setDisplay({
            lineaUno: 'M1:' + datos.moves[0].move.name,
            lineaDos: 'M2:' + datos.moves[1].move.name,
            lineaTres: 'M3:' + datos.moves[2].move.name,
        });
    }
}

  const dPad = (valor) =>{

    let nuevoId; 

    if(id + valor < 1){
      nuevoId = 1;
    }else if(id + valor > 151){
      nuevoId = 151;
    }else{
      nuevoId = id + valor;
    }

    setId(nuevoId);

  }





  return (
      <div className='App'>

        {
          estado?
          datos &&  <Pokedex datos={datos} dPad={dPad}  display={display} changeDisplay={changeDisplay} sonido={sonido} apagar={apagar} play={play}/>
          :
          <PokedexOff apagar={apagar}/>
        }
      </div>
  );
}

export default App;
