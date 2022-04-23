import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components'


const Texto = (props) => 
{
  return (
    <>
      <h1>{props.text}</h1>
      <div>
        <input type="text" placeholder={props.placeholder} />
        <FiSearch size='15px' color='black'/>
      </div>
    </>)
}
export default Texto;

// //  = styled.h1`
//   h1{
//       color: 'red';
//   }

// `