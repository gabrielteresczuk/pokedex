
import pokedex_img from '../images/pokedex.png';
import pokeball from '../images/pokeball.svg'
import volume from '../images/volume.svg'
import volumex from '../images/volumex.svg'


function Pokedex({datos,dPad,display,changeDisplay,sonido,apagar,play}) {

   

    let numero = '000';

    if (datos.id < 10){
        numero = '00'+datos.id
    }else if(datos.id < 100){
        numero = '0'+datos.id
    }else{
        numero = datos.id
    }


  return (
<>
<div className='pokedex__titulo'> <img src={pokeball} alt="pokeball"></img> Pokedex<span>React.js</span></div>
<div className='pokedex__cont'>
    <div className='Pokedex' style={{ backgroundImage: `url(${pokedex_img})` }}>
        <div className='pokemon__img' style={{ backgroundImage: `url(${datos.sprites.other['official-artwork']['front_default']})` }}> 
         
         </div>
         <div className='pokemon__number'>
            {numero}
         </div>

         <div className='pokemon__pad'>
            <div className='pad__row1'><button onClick={()=>dPad(10)}>˄</button> </div>
            <div className='pad__row2'><button onClick={()=>dPad(-1)}>˂</button><button onClick={()=>dPad(1)}>˃</button></div>
            <div className='pad__row3'><button onClick={()=>dPad(-10)}>˅</button></div>
         </div>
        <div className='pokemon__text'>
            <ul>
                <li>{display.lineaUno}</li>
                <li>{display.lineaDos}</li>
                <li>{display.lineaTres}</li>
            </ul>
        </div>
        <div className='pokemon__grid'>
            <div onClick={() => changeDisplay('HP')}>HP</div>
            <div onClick={() => changeDisplay('ATK')}>ATK</div>
            <div onClick={() => changeDisplay('DEF')}>DEF</div>
            <div onClick={() => changeDisplay('SATK')}>SATK</div>
            <div onClick={() => changeDisplay('SDEF')}>SDEF</div>
            <div onClick={() => changeDisplay('SPD')}>SPD</div>
            <div onClick={() => changeDisplay('AB1')}>AB1</div>
            <div onClick={() => changeDisplay('AB2')}>AB2</div>
            <div onClick={() => changeDisplay('MOV')}>MOV</div>
            <div onClick={() => changeDisplay('ALL')}>ALL</div>
        </div>
        <div className='pokedex__on'>
            <div onClick={apagar}>OFF</div><div onClick={sonido}> {play? <img src={volumex} alt='volumex'></img> : <img src={volume} alt='volume'></img>}</div>
        </div>
        <div className='pokemon__element'> {datos.types[0].type.name}</div>
        <div className='pokemon__type'> {datos.types[1]?.type.name}</div>
    </div>
    </div>
    <div className='pokedex__sub'>Coded by Gabriel Teresczuk</div>
</>
  )
}

export default Pokedex