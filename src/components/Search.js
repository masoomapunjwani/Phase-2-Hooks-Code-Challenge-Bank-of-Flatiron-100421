import React, { useEffect, useState } from "react";

function Search() {

  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (value.length > 0) {
      fetch('http://localhost:8001/transactions').then(
        response => response.json()
      ).then(responseData => {
        setResult([]);
        let searchQury = value.toLowerCase();
        for (const key in responseData) {
          let transactions = responseData[key].name.toLowerCase();
          if (transactions.slice(0, searchQury.length).indexOf(searchQury) !== -1) {
            setResult(preResult => {
              return [...preResult, responseData[key].name]
            })
          }
        }
      }).catch(error => {
        console.log(error)
      })
    } else {
      setResult([]);
    }

  }, [value]);
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      

       <i className="circular search link icon">
      </i>
     

    </div>
  );
}

export default Search;
