import React, { Component } from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'
export default class PublicationsContainer extends Component {

//state here
    render() {
        return(


            <div className='pub-div divider'>
            
            <Grid columns={2} >
            <Grid.Column className='pub-text'>
            <h1 className='center'> Publications</h1>
            <ul>
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            <li></li>
            <Divider />
            </ul>
            </Grid.Column >
           
            <Grid.Column>
            </Grid.Column>
        </Grid>
        </div>
  
        )
    }
}