import React from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebookF, faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(faLinkedin);
library.add(faFacebookSquare);
library.add(faGithub);



const Employee = (props) => {
    //console.log(props);
    const { img, name, skill, age, country, salary } = props.programmer;
    const element = <FontAwesomeIcon icon={faPlus} />

    const element2 = <FontAwesomeIcon icon={faGithub} />

    const element3 = <FontAwesomeIcon icon={faLinkedin} />



    return (
        <div class="employee-card">
            <img src={img} class="emp-img" alt="" srcset="" />
            <h4>Name: {name}</h4>
            <h4>Skill: {skill}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Remuneration: ${salary}</h4>
            <button onClick={() => props.handleAddToCart(props.programmer)} className="buy-button">{element} Add To Cart</button>

            <span class="icon-git">{element2}</span> <span class="icon-linked-in">{element3}</span>



        </div>
    );
};

export default Employee;