import React, { Component } from 'react'
import TopBarContainer from './TopBarContainer'
import IntroductionContainer from './IntroductionContainer'
import MissionContainer  from './MissionContainer'
import PublicationsContainer  from './PublicationsContainer'
import GalleryContainer  from './GalleryContainer'
import ContactContainer  from './ContactContainer'


export default class DisplayContainer extends Component {

    componentDidMount(){
        window.addEventListener('scroll', this.scroll);
    }
    

    scroll = () => {
         window.requestAnimationFrame(() => this.loop())
  
     }

    loop = () => {
    const elementsToShow = Array.from(document.querySelectorAll('.inline-photo')); 
    let l = elementsToShow.length
    
    while ( l > 0){
        let element = elementsToShow[l - 1]
        if (this.isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
            }
        l = l-1
        };
    
    }

    // Helper function from: http://stackoverflow.com/a/7557433/274826
     isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
    }


    render() {
        return( 
            <div>
                 <TopBarContainer />
                <MissionContainer />
                <IntroductionContainer />
                <PublicationsContainer />
                <GalleryContainer />
                <ContactContainer />
            </div>
        )
    }
}