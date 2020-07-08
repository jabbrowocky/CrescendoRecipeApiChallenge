import React, {useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import Spinner from "../Spinner";
import './viewitem.css';


export default function ViewItem() {
    const { id } = useParams();
    const url = `http://localhost:3001/recipes/${id}`;
    const [recipe, setRecipe] = useState({});
    const [isLoading, setLoading] = useState(true);

    async function fetchData(url) {
        const response = await fetch(url);
        response
            .json()
            .then(res => {
                setRecipe(res);
                setLoading(false);                
            }).catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchData(url);        
    }, [url]);
   
    return(
        isLoading 
        ? 
        <Spinner />
        :
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>Servings: {recipe.servings} Preptime: {recipe.prepTime} Cooktime: {recipe.cookTime}</p>
            <div>
                <h3>Ingredients:</h3>
                <ul style={{listStyleType:"none"}}>
                    {recipe.ingredients.map(ingredient => {
                        return (
                            <li>
                                <div>
                                    <span><em>{`${ingredient.amount} ${ingredient.measurement && ingredient.measurement} `}</em></span>{ingredient.name}
                                </div> 
                            </li>
                        );
                    })}
                </ul>
            </div>
            <img className="thumbnail" src={`http://localhost:3001${recipe.images.full}`} alt="thumbnail" />
            <br />
            <Link className="foo" to="/recipes">back</Link>

        </div>
    )
}

