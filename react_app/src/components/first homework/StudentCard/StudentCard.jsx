import React from "react";
import student from './data';

const StudentCard = () => {
  const cardStyle = {
    width: "280px",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(18, 55, 102, 0.06)",
    margin: "auto"
  };

  const nameStyle = {
    fontSize: "22px",
    marginBottom: "8px"
  };

  const infoStyle = {
    fontSize: "16px",
    margin: "0"
  };

  const listStyle = {
    paddingLeft: "18px",
    marginTop: "8px"
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{student.name}</h2>
      <p style={infoStyle}>Вік: {student.age}</p>
      <p style={infoStyle}>Група: {student.group}</p>
      <p style={infoStyle}>Хобі: {student.hobby}</p>

      <h4 style={{ marginTop: "12px", marginBottom: "4px" }}>Курси:</h4>
      <ul style={listStyle}>
        {student.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCard;
