import React, { Component } from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'
import PublicationsCar from './PublicationsCar.js'


export default class PublicationsContainer extends Component {
//state here
    render() {
        return(


            <div className='pub-div divider'>
            
            <Grid  >
            <Grid.Column className='pub-text'>
            <h1 className='center'> Publications</h1>
            <PublicationsCar />
            </Grid.Column >
           
          
        </Grid>
        </div>
  
        )
    }
}