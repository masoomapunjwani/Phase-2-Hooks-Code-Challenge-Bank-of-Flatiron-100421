import React, { useEffect, useState } from "react";

function Transaction() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:8001/transactions").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      });
    });
  }, []);

  console.log(data)
  return (
    <>
     {
      data.map((item) => (
      <tr>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
      </tr>
    ))}
    </>
   
  );
}

export default Transaction;

