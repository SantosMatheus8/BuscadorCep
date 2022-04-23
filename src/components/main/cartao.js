

const Cartao = (props) => 
{
  return (
  <>
    <p>CEP : {props.cep}</p>
    <p>Rua : {props.rua}</p>
    <p>Bairro : {props.bairro}</p>
    <p>Cidade : {props.cidade}</p>
    <p>Estado :{props.estado}</p>
  </>)
}

export default Cartao