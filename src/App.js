import Cartao from './components/javascript/cartao'
import Texto from './components/javascript/texto'
import React, { useState } from 'react'
import api from './api'


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function buscaAPI()
  { 
    try 
    {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
    }catch{
      alert("Digite um cep válido")
    }
    
  }

  return (
    <div className="container">
    <Texto text="BUSCADOR CEP" placeholder="Digite seu cep..." change={(e) => setInput(e.target.value)} clique={buscaAPI}/>

    {Object.keys(cep).length > 1 && (  //Se tiver algumas propriedade dentro do objeto cep, ele vai retornar o CARTAO, enquanto um cep válido não for digitado, o cartão não aparece.
      <Cartao cep={cep.cep} rua={cep.logradouro} bairro={cep.bairro} cidade={cep.localidade} estado={cep.uf}/>
    )}
    </div>    
  );
}

export default App;
