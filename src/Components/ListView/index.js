import React, { Component } from 'react';
import Spinner from '../Spinner/index';
import './listview.scss';
import {Link} from 'react-router-dom';

export default class ListView extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            data: [],
        }
    }
    componentDidMount() {

        this.getRecipes().then(data => this.setState({data: data, loading: false}));
    }
    getRecipes = async () => {
        const response = await fetch('http://localhost:3001/recipes', {headers: {'Content-Type': 'application/json'}});
        return response.json();
    }
    render(){
        const { data, loading } = this.state;
        
        if(loading === true) return <Spinner />;
        
        return(
            <div className="recipe-grid">
            {
                data.map(recipe => {
                    
                    return(
                        <Link className="view-button" to={`/view/${recipe.uuid}`}>
                            <div key={recipe.uuid} className="list-item">
                                <div className="thumbnail">
                                    <div className="thumbnail-outer">
                                        <div 
                                        className="thumbnail-inner" 
                                        style={{backgroundImage: `url(http://localhost:3001${recipe.images.medium})`, 
                                            backgroundSize: 'cover', 
                                            backgroundRepeat: 'no-repeat'}} />
                                        
                                    </div>
                                </div>                                
                                <h4>{recipe.title}</h4>
                                <div className="hover-description">
                                    <div className="hover-description-inner">{recipe.description}</div>
                                </div>                          
                            </div>
                        </Link>
                    );
                })
            }
            </div>
        );
    }
}