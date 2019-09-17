import React, { Component } from 'react'
import $ from 'jquery'

export default class MissionContainer extends Component {
  
    // someHandler = (e) => {
    //     e.persist()
    //     if (e.target.className = 'section-one'){
    //         $('.section-one').hover(function() {
    //             $('.container').toggleClass('before');
    //         });

    //         $('.section-two').hover(function() {
    //             $('.container').toggleClass('after');
    //         });
    //     }
    // }

    someOtherHandler = (e) => {
        // console.log(e)
    }

    render() {
        return( 
        <div>
         <div  className="container">
           <div 
           className="section-one">
             <div className="content center">
               <h2> "Where they walk monkeys dance:
                Our complex relationship with macaques"
            </h2>
                <p>
                Lisa Jones-Engel, PhD
                </p>
             </div>
           </div>

           <div className="section-two">
             <div className="content">
             </div>
           </div>
         </div>
         <div className="cta">
         </div>
         </div>
        )
    }
}