
import './App.css';
import Jatekter from './komponensek/Jatekter';
import { useState } from "react"

function App() {
  //const allapotLista = [true, false, true, true, false, false, true, false, true]
  const [allapotLista, setallapotLista]=useState([true, false, true, true, false, false, true, false, true])
 

  function kattintas(adat){
    const slista = [...allapotLista]
    slista[adat] = !slista[adat]
 //   if(slista[adat] === true){
//      slista[adat] = false
 //   }else{
  //    slista[adat] = true
    

    setallapotLista([...allapotLista])
  }

  return (
    <div className="App">
      <header className="App-header">LightOn</header>
      <article className="jatekter">
        <Jatekter lista = {allapotLista} kattintas = {kattintas} />
      </article>
    </div>
  );
}
export default App;
