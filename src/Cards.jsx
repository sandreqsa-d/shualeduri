import './Cards.css';


const Cards = ({ text, month, year, cardNum, cvc }) => {

    return (
        <div>

            <div className='firstCard'>
                <h1>{text}</h1>
                <h1>{cardNum}</h1>
                <div className='Month'><h1>{month}</h1><h1> / </h1>
                <h1>{year}</h1></div>
                

            </div >
            <div className='secondCard'>
                <h1>{cvc}</h1>
            </div>
        </div>
    )
}

export default Cards
