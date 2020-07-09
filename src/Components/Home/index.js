import React from 'react';
import './home.scss';
import hamburgerPicture from '../../photos/hamburger-and-fries-photo.jpg';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return(
        <div className="container-outer">
            <div className="banner"></div>
            <div className="container">
                <div className="section-secondary">
                    <p>In the days of old we scoured the world for places to find new recipes. We asked our friends,
                    our families...anyone who might know how to shake things up for us. Well those days are long gone! 
                    With RecipEase you'll never need to look back, every recipe is a matter of a couple clicks away.</p>
                </div>
                <div className="side-by-side">
                    <div className="text">
                        <div>Delicious recipes are abound, look no further than RecipEase.  We've got you covered from, burgers to salads, we have it all! All the recipes you'll ever need in one easy location.
                        <NavLink className="callout" to="/recipes">Start Searching Now!</NavLink>
                        </div>
                    </div>
                    <div className="image">
                    <img src={hamburgerPicture} alt="" />
                    <small>Photo by Jonathan Borba from Pexels</small>
                    </div>
                </div>

            </div>            
        </div>
    )
}