import react from 'react';
import './Button.css'

function Button (props){
    console.log(props.btnName)


    return(
        <button className='customBTN'>{props.btnName}</button>
    )
}


export default Button;