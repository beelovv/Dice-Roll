import  './Dice.css'


export default function Dice ({imgSrc}) {
    return(
        <div className='conainer-dice'>
            <img className="dice-img" src={imgSrc}/>
        </div>
    )
}