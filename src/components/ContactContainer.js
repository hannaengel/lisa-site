import React, { Component } from 'react'
import { Container, Divider} from 'semantic-ui-react'
export default class ContactContainer extends Component {

//state here
    render() {
        return( 
            <div>
                <div className='contact-title'>
                <h1> Contact</h1>
                <p>
                Email: ljengel@uw.edu || @Peta
                </p>
                </div>
              
            </div>
        )
    }
}