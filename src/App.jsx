import { useState } from "react";
import "./App.css";
import './mediaStyles.css'
import ArrowSVG from "./ArrowSVG";
import { calculateAge } from "./AgeCalculator";
import { Input } from "./components/Input";
import AgeDisplay from "./components/AgeDisplay";

function App() {
  // error states

  const [error, setError] = useState({
    dayError: false,
    monthError: false,
    yearError: false,
  });

  function ageCalculator(stringValue, obj) {
    let check = handleError(obj);
    console.log("check", check);
    if (check) {
      let res = calculateAge(stringValue);

      return setAge({
        ...Age,
        day: res.days,
        month: res.months,
        year: res.years,
      });
    }
  }

  function handleError(obj) {
    let isValid = true;
    let date = obj.day;
    let month = obj.month;
    let year = obj.year;
    let currentYear = new Date();

    if (!date && !month && !year) {
      isValid = false;
      setError({ dayError: true, monthError: true, yearError: true });
    } else if (date < 0 || date > 31 || !date) {
      setError({ ...Error, dayError: true });
      isValid = false;
    } else if (month < 0 || month > 12 || !month) {
      setError({ ...Error, monthError: true });
      isValid = false;
    } else if (year > new Date().getFullYear() || !year) {
      setError({ ...Error, yearError: true });
      isValid = false;
    }

    return isValid;
  }

  function handleBtn(obj) {
    let date = `${obj.year}-${obj.month}-${obj.day}`;
    console.log(date);
    ageCalculator(date, obj);
  }

  const [Age, setAge] = useState({ year: "--", month: "--", day: "--" });
  const [DOB, setDOB] = useState({ year: "", month: "", day: "" });
  function dobChange(parameter, value) {
    setError({
      dayError: false,
      monthError: false,
      yearError: false,
    });
    setDOB({ ...DOB, [parameter]: parseInt(value) });
  }

  return (
    <div className="App">
      <div className="layout">
        {/* // day input  */}
        <div className="InputGrid">
          {error.dayError ? (
            <Input
              classStyles={{ color: "red", input: { border: "1px solid red" } }}
              inputStyle={{ border: "1px solid red" }}
              key="birthDay"
              minLength={1}
              maxlengthValue={2}
              label="DAY"
              placeHolder="DD"
              value={DOB.day}
              onChange={(e) => dobChange("day", e.target.value)}
              errorText={"Must be a valid day"}
            />
          ) : (
            <Input
              key="birthDay"
              minLength={1}
              maxlengthValue={2}
              label="DAY"
              placeHolder="DD"
              value={DOB.day}
              onChange={(e) => dobChange("day", e.target.value)}
            />
          )}

          {error.monthError ? (
            <Input
              classStyles={{ color: "red", input: { border: "1px solid red" } }}
              inputStyle={{ border: "1px solid red" }}
              key="birthMonth"
              className="monthValue"
              minLength={1}
              maxlengthValue={2}
              label="MONTH"
              placeHolder="MM"
              value={DOB.month}
              onChange={(e) => dobChange("month", e.target.value)}
              errorText={"Must be a valid month"}
            />
          ) : (
            <Input
              key="birthMonth"
              className="monthValue"
              minLength={1}
              maxlengthValue={2}
              label="MONTH"
              placeHolder="MM"
              value={DOB.month}
              onChange={(e) => dobChange("month", e.target.value)}
            />
          )}

          {error.yearError ? (
            <Input
              classStyles={{ color: "red", input: { border: "1px solid red" } }}
              inputStyle={{ border: "1px solid red" }}
              key="birthYear"
              maxlengthValue={4}
              label="YEAR"
              placeHolder="YYYY"
              value={DOB.year}
              errorText={"Must be a valid year"}
              onChange={(e) => dobChange("year", e.target.value)}
            />
          ) : (
            <Input
              key="birthYear"
              maxlengthValue={4}
              label="YEAR"
              placeHolder="YYYY"
              value={DOB.year}
              onChange={(e) => dobChange("year", e.target.value)}
            />
          )}
        </div>

        <button onClick={() => handleBtn(DOB)}>
          <ArrowSVG />
        </button>
        {/* // result  */}
        <AgeDisplay updateAge={setAge} ageInfo={Age} />
      </div>
    </div>
  );
}

export default App;
