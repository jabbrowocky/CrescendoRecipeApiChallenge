import React, { useEffect, useState } from 'react';
import SimplePopover from './tooltip';

const IngredientsList = ({ingredients, className}) => {
    const [specials, setSpecials] = useState([]);
    

    const getSpecials = async url => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setSpecials(data)
        });
    }
    useEffect(() => {
        getSpecials('http://localhost:3001/specials');              
    }, []);
    
    return (
        <div className={className}>
        
            <ul>
                {ingredients.map(ingredient => {
                    const [ special ] = specials.filter(spec => spec.ingredientId === ingredient.uuid);
                                     
                    return (
                        <li key={ingredient.name}>
                            <div>
                                <span><em>{`${ingredient.amount !== null ? ingredient.amount : ""} ${ingredient.measurement && ingredient.measurement}  `}</em></span>
                                {ingredient.name}
                                { special  && 
                                    <SimplePopover>
                                        <div className="special-details">
                                            <h3>{special.title}</h3>
                                            <p>{special.type}</p>
                                            {special.text && special.text}
                                        </div>    
                                    </SimplePopover>
                                }
                                
                            </div> 
                        </li>
                    );
                })}
            </ul>
            
        </div>
    );
}

export default IngredientsList;