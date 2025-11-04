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

  return (
    <div className="formsContainer">
      <input
        className="inputField nameInput"
        type="text"
        value={text === "JANE APPLESEED" ? "" : text}
        onChange={(e) => setText(e.target.value || "JANE APPLESEED")}
        placeholder='e.g JANE APPLESEED'
      />

      <input
        className="inputField cardInput"
        type="text"
        value={cardNum === "0000 0000 0000 0000" ? "" : cardNum}
        onChange={(e) => setCard(e.target.value || "0000 0000 0000 0000")}
        placeholder='e.g 1234 5678 9123 0000'
      />

      <input
        className="inputField monthInput"
        type="number"
        value={month === "00" ? "" : month}
        onChange={(e) => setMonth(e.target.value || "00")}
        placeholder='MM'
        min={1}
        max={12}
      />

      <input
        className="inputField yearInput"
        type="number"
        value={year === "00" ? "" : year}
        onChange={(e) => setYear(e.target.value || "00")}
        placeholder='YY'
        min={0}
      />

      <input
        className="inputField cvcInput"
        type="number"
        value={cvc === "000" ? "" : cvc}
        onChange={(e) => setCVC(e.target.value || "000")}
        placeholder='e.g. 123'
      />

      <button className="submitBtn" onClick={() => {
        if (
         
          CardRegex.test(cardNum) &&
          MonthRegex.test(month) &&
          YearRegex.test(year) &&
          CvcRegex.test(cvc)
        ) {
          localStorage.setItem("name", text);
          localStorage.setItem("month", month);
          localStorage.setItem("year", year);
          localStorage.setItem("cardNum", cardNum);
          localStorage.setItem("cvc", cvc);
          alert("your info has been added!!")
        } else {
          alert("Check your inputs");
        }
      }}>
        Submit
      </button>

      <Cards text={text} cardNum={cardNum} month={month} year={year} cvc={cvc} />
    </div>
  )
}

export default Forms;
