import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from "../Spinner";
import FullWidthTabs from "./tabs";
import './viewitem.scss';


export default function ViewItem() {
    const { id } = useParams();
    const recipeUrl = `http://localhost:3001/recipes/${id}`;
    const [recipe, setRecipe] = useState({});
    const [isLoading, setLoading] = useState(true);

    async function fetchRecipes(url) {
        const response = await fetch(url);
        response
            .json()
            .then(res => {
                setRecipe(res);
                setLoading(false);                
            }).catch(err => console.log(err));
    }
    
    useEffect(() => {
        fetchRecipes(recipeUrl);        
    }, [recipeUrl]);
   
    return(
        isLoading 
        ? 
        <Spinner />
        :
        <div className="recipe-card">
            <div className="recipe-header">
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <ul className="recipe-details">
                    <li>Servings: {recipe.servings}</li> 
                    <li>Preptime: {recipe.prepTime} minutes</li>
                    <li>Cooktime: {recipe.cookTime} minutes</li>
                </ul>
            </div>
            
            
            <img className="thumbnail" src={`http://localhost:3001${recipe.images.full}`} alt="thumbnail" />
            <FullWidthTabs labelValues={["Ingredients", "Directions"]} 
            paneValues={[<IngredientsList className="custom-list" ingredients={recipe.ingredients} />, 
            <InstructionList className="custom-list" directions={recipe.directions} />]} />
            
        </div>
    )
}

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
                    const special = specials.filter(spec => spec.ingredientId === ingredient.uuid);
                    return (
                        <li key={ingredient.name}>
                            <div>
                                <span><em>{`${ingredient.amount !== null ? ingredient.amount : ""} ${ingredient.measurement && ingredient.measurement}  `}</em></span>
                                {ingredient.name}{special.length > 0 && <div className="">special available</div>}
                            </div> 
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const InstructionList = ({directions, className}) => {
    console.log(directions);
    return (
        <div className={className}>            
            <ul className='instructions'>
                {directions.map(step => {
                    return (
                        <li>
                            <div>
                                {step.instructions}<span><em>{step.optional && ' (optional)'}</em></span>
                            </div> 
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}
