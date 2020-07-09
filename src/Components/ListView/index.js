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
                    console.log(recipe.images.medium)
                    return(
                        <Link className="view-button" to={`/view/${recipe.uuid}`}>
                            <div key={recipe.uuid} className="list-item">
                                <img src={`http://localhost:3001${recipe.images.medium}`} alt="preview-thumb" />
                                <h4>{recipe.title}</h4>                          
                            </div>
                        </Link>
                    );
                })
            }
            </div>
        );
    }
}