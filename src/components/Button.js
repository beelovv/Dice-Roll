import './Button.css'
export default function Button ({children ,onClick}){
    
    return(<div className="roll-btn-container">
    <button onClick={onClick} className='dice-roll-button'>{children}</button>
</div>)
}