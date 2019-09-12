import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
export default class TopBarContainer extends Component {

//state here
    render() {
        return( 
            <Menu color='green' borderless size='massive' fluid widths={6} >
                <Menu.Item as='a'>
                    About
                </Menu.Item>

                <Menu.Item as='a'>
                    Mission
                </Menu.Item>

                <Menu.Item as='a'>
                    Career
                </Menu.Item>

                <Menu.Item as='a'>
                    Publications
                </Menu.Item>

                <Menu.Item as='a'>
                    Gallery 
                </Menu.Item>

                <Menu.Item as='a'>
                    Contact
                </Menu.Item>
            </Menu>
        )
    }
}