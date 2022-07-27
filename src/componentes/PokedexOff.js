
import pokedex_img from '../images/pokedex.png';
import pokeball from '../images/pokeball.svg'
import volume from '../images/volume.svg'



function PokedexOff({apagar}) {

   
  return (
<>
<div className='pokedex__titulo'> <img src={pokeball} alt="pokeball"></img> Pokedex<span>React.js</span></div>
<div className='pokedex__cont'>
    <div className='Pokedex' style={{ backgroundImage: `url(${pokedex_img})` }}>
        <div className='pokemon__img' > 
         
         </div>
         <div className='pokemon__number'>
           
         </div>

         <div className='pokemon__pad'>
            <div className='pad__row1'><button >˄</button> </div>
            <div className='pad__row2'><button >˂</button><button >˃</button></div>
            <div className='pad__row3'><button >˅</button></div>
         </div>
        <div className='pokemon__text'>
            <ul>
                <li>Off...</li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className='pokemon__grid'>
            <div >HP</div>
            <div >ATK</div>
            <div >DEF</div>
            <div >SATK</div>
            <div >SDEF</div>
            <div >SPD</div>
            <div >AB1</div>
            <div >AB2</div>
            <div >MOV</div>
            <div >ALL</div>
        </div>
        <div className='pokedex__on'>
            <div onClick={apagar}>ON</div><div ><img src={volume} alt='volumex'></img></div>
        </div>
        <div className='pokemon__element'> </div>
        <div className='pokemon__type'> </div>
    </div>
    </div>
    <div className='pokedex__sub'>Coded by Gabriel Teresczuk</div>
</>
  )
}

export default PokedexOff