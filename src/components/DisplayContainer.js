import React, { Component } from 'react'
import TopBarContainer from './TopBarContainer'
import IntroductionContainer from './IntroductionContainer'
import MissionContainer  from './MissionContainer'
import PublicationsContainer  from './PublicationsContainer'
import GalleryContainer  from './GalleryContainer'
import ContactContainer  from './ContactContainer'


export default class DisplayContainer extends Component {

//state here
    render() {
        return( 
            <div>

                <TopBarContainer />
                <IntroductionContainer />
                <MissionContainer />
                <PublicationsContainer />
                <GalleryContainer />
                <ContactContainer />
            </div>
        )
    }
}