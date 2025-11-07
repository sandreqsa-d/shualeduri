import { useState } from 'react';
import './forms.css';
import Cards from './Cards';

const Forms = () => {
  const CardRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
  const MonthRegex = /^(0[1-9]|1[0-2])$/;
  const YearRegex = /^\d{2}$/;
  const CvcRegex = /^\d{3}$/;

  const [text, setText] = useState("JANE APPLESEED");
  const [cardNum, setCard] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCVC] = useState("000");

  const [showCardError, setShowCardError] = useState(false);
  const [showMonthError, setShowMonthError] = useState(false);
  const [showYearError, setShowYearError] = useState(false);
  const [showCvcError, setShowCvcError] = useState(false);

  const handleSubmit = () => {
    let swori = true;

    if (!CardRegex.test(cardNum)) {
      setShowCardError(true);
      swori = false;
    } else {
      setShowCardError(false);
    }

    if (!MonthRegex.test(month)) {
      setShowMonthError(true);
      swori = false;
    } else {
      setShowMonthError(false);
    }

    if (!YearRegex.test(year)) {
      setShowYearError(true);
      swori = false;
    } else {
      setShowYearError(false);
    }

    if (!CvcRegex.test(cvc)) {
      setShowCvcError(true);
      swori = false;
    } else {
      setShowCvcError(false);
    }

    if (swori) {
      localStorage.setItem("name", text);
      localStorage.setItem("month", month);
      localStorage.setItem("year", year);
      localStorage.setItem("cardNum", cardNum);
      localStorage.setItem("cvc", cvc);
      alert("Your info has been added!!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "1440px",
        height: "100vh",
        background: "linear-gradient(135deg, #21092f 0%, #37288b 33%, #5f1a71 66%, #63321c 100%)",
        justifyContent: "center",
        alignItems: "center",  
        backgroundSize:"33.3%", 
        backgroundRepeat: "no-repeat" 
      }}
    >




      <Cards text={text} cardNum={cardNum} month={month} year={year} cvc={cvc} />

      <div className="formsContainer">
        <div className='CardDetails'>
          <div className='CardInputs'>
            <label>CARDHOLDER NAME</label>
            <input
              className="inputField nameInput"
              type="text"
              value={text === "JANE APPLESEED" ? "" : text}
              onChange={(e) => setText(e.target.value || "JANE APPLESEED")}
              placeholder='e.g JANE APPLESEED'
            />
          </div>

          <div className='CardInputs'>
            <label>CARD NUMBER</label>
            <input
              className={`inputField cardInput ${showCardError ? "error" : ""}`}
              type="text"
              value={cardNum === "0000 0000 0000 0000" ? "" : cardNum}
              onChange={(e) => setCard(e.target.value || "0000 0000 0000 0000")}
              placeholder='e.g 1234 5678 9123 0000'
            />
            <p className="errorMsg" style={{ display: showCardError ? "block" : "none" }}>
              Invalid card number
            </p>
          </div>
        </div>

        <div className='MonthYearCVCInput'>
          <div className='monthYearinput'>
            <label>EXP.DATE (MM/YY)</label>
            <div className='MYINPUT'>
              <input
                className={`inputField monthInput ${showMonthError ? "error" : ""}`}
                type="number"
                value={month === "00" ? "" : month}
                onChange={(e) => setMonth(e.target.value || "00")}
                placeholder='MM'
                min={1}
                max={12}
              />
              <input
                className={`inputField yearInput ${showYearError ? "error" : ""}`}
                type="number"
                value={year === "00" ? "" : year}
                onChange={(e) => setYear(e.target.value || "00")}
                placeholder='YY'
                min={0}
              />
            </div>
            {(showMonthError || showYearError) && (
              <p className="errorMsg" style={{ display: "block" }}>
                {showMonthError ? "Invalid month (1-12)" : "Invalid year"}
              </p>
            )}
          </div>

          <div className='CvcInput'>
            <label>CVC</label>
            <input
              className={`inputField cvcInput ${showCvcError ? "error" : ""}`}
              type="number"
              value={cvc === "000" ? "" : cvc}
              onChange={(e) => setCVC(e.target.value || "000")}
              placeholder='e.g. 123'
            />
            <p className="errorMsg" style={{ display: showCvcError ? "block" : "none" }}>
              Invalid CVC
            </p>
          </div>
        </div>

        <button onClick={handleSubmit}>Submit</button>

        <button
          onClick={() => {
            const t = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', t);
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Forms;
