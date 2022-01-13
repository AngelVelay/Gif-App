import React,{useState} from 'react'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (inputValue.trim().length > 2) {
            //Añadir sin pasar el estado por props , solamente pasando la funcion
            setCategories(cats => [inputValue, ...cats]);
            
        }
        setInputValue('');
    }






    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Busca algun GIF'/> 
        </form>
    )
}

export default AddCategory
