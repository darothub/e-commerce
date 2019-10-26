import React, {useState} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

function LeftNav(props) {
    // let [lang, setLang] = useState('ENG')
    // let [currency, setCurrency] = useState('USD')
    const optionsLang = props.option.map(item =>{
        return <option>{item.lang}</option>;
    })
    const optionsCurrency = props.option.map(item => {
      return <option>{item.symbol}</option>;
    });
  return (
    <div className="col-md-1.5  my-md-2 pad-zero mx-md-0 mx-auto">
      <select >{optionsLang}</select>
      <select>{optionsCurrency}</select>
    </div>
  );
}

export default LeftNav;
