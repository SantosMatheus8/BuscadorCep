import Cartao from './cartao'
import Texto from './texto'

const Main = () => 
{
  return (
  <div className="container">
      <Texto text="BUSCADOR CEP" placeholder="Digite seu cep..."/>
      <Cartao />
  </div>)
}

export default Main