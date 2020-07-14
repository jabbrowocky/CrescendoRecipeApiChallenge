import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from "../Spinner";
import FullWidthTabs from "./tabs";
import AvTimerIcon from '@material-ui/icons/AvTimer';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ScheduleIcon from '@material-ui/icons/Schedule';
import InstructionList from './instructionlist';
import IngredientsList from './ingredientslist';
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
                    <li><RestaurantIcon style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '5px'}} />Servings: {recipe.servings}</li> 
                    <li><AvTimerIcon style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '5px'}} />Preptime: {recipe.prepTime} minutes</li>
                    <li><ScheduleIcon style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '5px'}} />Cooktime: {recipe.cookTime} minutes</li>
                </ul>
            </div>
            
            
            <img className="thumbnail" src={`http://localhost:3001${recipe.images.full}`} alt="thumbnail" />
            <FullWidthTabs labelValues={["Ingredients", "Directions"]} 
            paneValues={[<IngredientsList className="custom-list" ingredients={recipe.ingredients} />, 
            <InstructionList className="custom-list" directions={recipe.directions} />]} />
            
        </div>
    )
}


