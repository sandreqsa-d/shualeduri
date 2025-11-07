import './Cards.css';


const Cards = ({ text, month, year, cardNum, cvc }) => {

    return (
        <div style={{ margin: "auto", position: "absolute", top: "50px", left: " 167px" }}>

            <div className='firstCard'>
                <div className='allC'>
                    <div className='bigC'></div>
                    <div className='smallC'></div></div>
                <h1 style={{ fontSize: "28px" }}>{cardNum}</h1>
                <div className='text'>

                    <h1>{text}</h1>
                    <div className='Month'>
                        <h1>{month}</h1>
                        <h1> / </h1>
                        <h1>{year}</h1>
                    </div>
                </div>
            </div >


            <div className='secondCard'>
                <div style={{
                    height: "54px", backgroundColor: "#2f2f2f",
                    padding: "0px",
                    marginBottom: "24px"
                }}></div>
                <h1>{cvc}</h1>
                <p>roca gshia shen shen ar xar</p>
            </div>


        </div>
    )
}

export default Cards
