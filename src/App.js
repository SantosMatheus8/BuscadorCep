import Cartao from './components/javascript/cartao'
import Texto from './components/javascript/texto'
import React, { useState } from 'react'
function App() {

  const [input, setInput] = useState("")
  const a = "a"

  function aux(){ alert(`Valor do input : ${input}`)}

  return (
    <div className="container">
    <Texto text="BUSCADOR CEP" placeholder="Digite seu cep..." change={(e) => setInput(e.target.value)} clique={aux}/>
    <Cartao cep={input} rua={a} bairro={a} cidade={a} estado={a}/>
    </div>    
  );
}

export default App;
