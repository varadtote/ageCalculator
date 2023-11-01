import React, { useState, useEffect } from "react";

function AgeDisplay({ updateAge, ageInfo }) {
  const [Age, setAge] = useState({ year: 0, month: 0, day: 0 });
  useEffect(() => {
    setAge(ageInfo);
  }, [updateAge, ageInfo]);

  return (
    <div className="result">
      <div className="resultCard">
        <span className="displayNumber">{Age.year}</span> <p>years</p>
      </div>
      <div className="resultCard">
        <span className="displayNumber">{Age.month}</span> <p>months</p>
      </div>
      <div className="resultCard">
        <span className="displayNumber">{Age.day}</span> <p>days</p>
      </div>
    </div>
  );
}

export default AgeDisplay;
