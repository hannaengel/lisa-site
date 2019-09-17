import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import grooming from '../images/grooming.jpg'
import hands from '../images/hands.jpg'
import primate from '../images/primate.png'
import toolbox from '../images/toolbox.jpg'
import profile from '../images/profile.png'


export default class GalleryContainer extends Component {

//state here
    render() {
        return( 
           <div>
            <h1 className='gallery-title'>Gallery</h1>

            <div className='gal-container'>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={toolbox}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={hands}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={primate}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>

            <div className='gal-div'>
                <h3>Photos by Lynn Johnson</h3>
            </div>
        </div>
        )
    }
}