import React from 'react'
import FormalAPI from '../API/Formal';
import Card from './Card';


const Formal = FormalAPI.map((elem) => {
    // console.log(elem);
    return(
      <Card keys={elem.id} image={elem.image} type={elem.type} name={elem.pName} rating={elem.rating} price={elem.price} />
    );
})



// function Formal() {
//   return (
//     <>
//     <section id="product1" class="section-p1">
//         <h2>Featured Products</h2>
//         <p>Summer collection New Modern Design</p>
//         <div class="pro-container">
//             {Formal}
//         </div>
//     </section>
//     </>
//   )
// }

export default Formal