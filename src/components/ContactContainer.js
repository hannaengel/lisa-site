import React, { Component } from 'react'
import { Container, Divider} from 'semantic-ui-react'
export default class ContactContainer extends Component {

//state here
    render() {
        return( 
            <Container>
                <h1> Contact</h1>
                <p>
                    email 
                </p>
                <Divider />
            </Container>
        )
    }
}