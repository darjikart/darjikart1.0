import React from 'react'
// import Order from './Order'

function Card(props) {
    return (
        <a href='/order' key={props.keys} className="pro">
            <img src={props.image} alt="" />
            <div className="des">
                <span>adidas</span>
                <h5>{props.name}</h5>
                <div className="star">
                    {/* <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> */}
                    {props.rating}
                </div>
                <h4>{props.price}</h4>
            </div>

        </a>
    )
}
export default Card