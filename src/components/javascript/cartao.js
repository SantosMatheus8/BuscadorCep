import '../css/cartao.css'

const Cartao = (props) => 
{
  return (
  <main className="cartao-container">
    <p className="cartao__p cartao__cep">CEP : {props.cep}</p>
    <p className="cartao__p">Rua : {props.rua}</p>
    <p className="cartao__p">Bairro : {props.bairro}</p>
    <p className="cartao__p">Cidade : {props.cidade}</p>
    <p className="cartao__p">Estado : {props.estado}</p>
  </main>)
}

export default Cartao