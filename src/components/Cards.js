import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../images/img-9.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img1 from '../images/img-1.jpg';
import img8 from '../images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Posjetite epske destinacije </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            id="1"
                            src={img9}
                            text="Otkrijte prekrasne vodopade u divljini Amazone"
                            label="Avantura"
                            path="/services" 
                        />
                        <CardItem 
                            id="2"
                            src={img2}
                            text="Zaljubite u otočje Bali i njegove plaže"
                            label="Avantura"
                            path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            id="3"
                            src={img3}
                            text="Atlantski ocean"
                            label="Misterija"
                            path="/services"
                        />
                        <CardItem
                            id="4"
                            src={img1}
                            text="Himalaja"
                            label="Avantura"
                            path="/services"
                        />
                        <CardItem
                            id="5"
                            src={img8}
                            text="Pustinjske ture Saharom"
                            label="Adrenalin"
                            path="/services"
                        />
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default Cards;