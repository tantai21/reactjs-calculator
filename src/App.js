import { useState } from 'react';
import './App.css'
function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  }
  const Clear = () => {
    setResult("");
  }

  const backspace = (e) => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculator = () => {
    try {
      setResult(eval(result).toString());

    } catch (error) {
      setResult("ERROR")
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" placeholder="0" id="input" value={result} disabled />
        </div>
        <div className="buttons">
          <button type="button" onClick={Clear} id="clear" >Clear </button>
          <button type="button" onClick={backspace} id="backspace" >C </button>
          <button type="button" onClick={handleClick} value="/" className="input-button" >/ </button>
          <button type="button" onClick={handleClick} value="*" className="input-button" >* </button>
          <button type="button" onClick={handleClick} value="7" className="input-button" >7 </button>
          <button type="button" onClick={handleClick} value="8" className="input-button" >8 </button>
          <button type="button" onClick={handleClick} value="9" className="input-button" >9 </button>
          <button type="button" onClick={handleClick} value="-" className="input-button" >- </button>
          <button type="button" onClick={handleClick} value="6" className="input-button" >6 </button>
          <button type="button" onClick={handleClick} value="5" className="input-button" >5 </button>
          <button type="button" onClick={handleClick} value="4" className="input-button" >4 </button>
          <button type="button" onClick={handleClick} value="+" className="input-button" >+ </button>
          <button type="button" onClick={handleClick} value="1" className="input-button" >1 </button>
          <button type="button" onClick={handleClick} value="2" className="input-button" >2 </button>
          <button type="button" onClick={handleClick} value="3" className="input-button" >3 </button>
          <button type="button" onClick={calculator} value="=" id="equal" >= </button>
          <button type="button" onClick={handleClick} value="0" className="input-button number0" >0 </button>
          <button type="button" onClick={handleClick} value="." className="input-button" >.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
