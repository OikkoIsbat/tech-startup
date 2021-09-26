import { useEffect, useState } from 'react';
import React from 'react';
import './Programmer.css';
import Employee from '../Employee/Employee';
import Cart from '../Cart/Cart';



const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    const handleAddToCart = (prog) => {
        var doc = document.getElementById('whoIsIt');
        doc.innerText = doc.innerText.concat(prog.name + '\n');

        const newCart = [...cart, prog];
        setCart(newCart);
    }

    return (
        <div className="Engineer-container">
            <div className="Programmer-container">
                {/* <h2>Total: {programmers.length}</h2> */}
                {
                    programmers.map(programmer => <Employee programmer={programmer}
                        handleAddToCart={handleAddToCart}
                    ></Employee>)
                }
            </div>
            <div className="cost-container">
                <Cart cart={cart}></Cart>


                <h3 id="whoIsIt"></h3>
            </div>

        </div>
    );
};

export default Programmer;