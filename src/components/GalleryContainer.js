import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
export default class GalleryContainer extends Component {

//state here
    render() {
        return( 
            <Container>
            <h1> Gallery</h1>
            <p>
                PHOTOS HERE            
            </p>
            <Divider />
        </Container>
        )
    }
}