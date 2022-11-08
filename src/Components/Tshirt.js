import React from 'react'
import tshirts from '../API/T-Shirts';
import Card from './Card';


const Tshirt = tshirts.map((elem)=>{
    return(
        <Card keys={elem.id} image={elem.img} type={elem.type} name={elem.pName} rating={elem.rating} price={elem.price} />  
    )
})

// function Tshirt() {
//   return (
//     <section id="product1" class="section-p1">
//         <h2>Featured Products</h2>
//         <p>Summer collection New Modern Design</p>
//         <div class="pro-container">
//             {tshirts}
//         </div>
        
//     </section>
//   )
// }

export default Tshirt