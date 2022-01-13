import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch','Naruto','Dragon Ball','Attack on Titans','One Piece']
    const [categories, setCategories] = useState(['One Punch']);
    
  /*   const handleAdd = () => {
        setCategories([
            ...categories,
            'Boruto'
        ])
    } */
    
    
    return (
        <>
            <h2>Gif Expert App</h2>
                <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul>
                {categories.map(category => (
                   <GifGrid category={category} key={category}/>
                ))}
            </ul>
        </>
    )
}

export default GifExpertApp
