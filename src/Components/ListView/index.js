import React, { Component } from 'react';
import Spinner from '../Spinner/index';
import './listview.css';

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
            <div>
            {
                data.map(recipe => {
                    return(
                        <div key={recipe.uuid} className="list-item">{recipe.title}</div>
                    );
                })
            }
            </div>
        );
    }
}