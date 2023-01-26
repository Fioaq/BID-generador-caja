import React, {useState} from 'react'
import styled from 'styled-components';

const Error= styled.p`
    color: red;
`

const Input = (props) => {
    const [inputs, setInputs] = useState('');
    const {color, setColor} = props;
    const [error, setError] = useState('');

    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }

    const handleSubmit= e =>{
        e.preventDefault();
        setError('');
        if(isColor(inputs)){
            let aux= [...color];
            aux.push(inputs);
            setColor(aux);
            setInputs("");
        }else{
            setError("*Color no válido");
            setInputs('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Color</label>
            <input type='text' value={inputs} onChange={e => setInputs(e.target.value)}/>
            <button type='submit'>Add</button>
            <Error>{error}</Error>
        </form>
    )
}

export default Input