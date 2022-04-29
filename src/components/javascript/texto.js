import { FiSearch } from 'react-icons/fi';
import '../css/texto.css'

const Texto = (props) => 
{
  return (
    <>
      <h1>{props.text}</h1>
      <div className="inputIcon-container">
        <input type="text" placeholder={props.placeholder} onChange={props.change}/>
        <button className='container__botaoBusca' onClick={props.clique}>
          <FiSearch size='15px' color='white' />
        </button>
      </div>
    </>)
} 

export default Texto;