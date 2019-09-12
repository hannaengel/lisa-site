import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import profile from '../images/profile.png'


export default class IntroductionContainer extends Component {

//state here
    render() {
        return( 
            <Grid columns={2}>

                <Grid.Row>
                    <Grid.Column>
                        <img src={profile}>

                        </img>
                    </Grid.Column>

                    <Grid.Column>
                         <h1>About</h1>
                        <p>
                        Lisa Jones-Engel holds a PhD and was a Fulbright Scholar from 2014-2015. She is affiliated with the UW Department of Anthropology and Center for Studies in Demography and Ecology.
                        <Divider/>
                        </p>
                        <p>

Primates are compelling. More than any other species – we as humans are drawn to primates and this has led to a diverse human-primate interface. This interface is not only broad (e.g. urban/temple monkeys, primates as pets, bush meat, performing animals, and biomedical models) it also extends for thousands of years. Lisa, as part of the EEID (Evolutionary Emergence of Infectious Diseases Lab), focuses on the public health and primate conservation implications in environments where humans and primates come together. The unifying research theme is that contact between humans and macaques, both contemporary and within an evolutionary time frame, provides a context for the emergence of infectious agents. Over the past 14 years the team has established long-term collaborations in Asia, Gibraltar and most recently in South America that focus on not only which infectious agents are being transmitted but also what human and macaque behaviors facilitate pathogen transmission within shared environments. The multidisciplinary, translational research reflects the One Health paradigm, acknowledging that human and animal health is inextricably linked within the environments that they share. A good example is their direct detection assay for TB, which they developed in order to overcome logistical constraints in the field. This assay has now been tested in humans and holds promise as a new prospective approach to diagnosing TB as well enabling active TB case finding among at-risk populations.                        </p>

                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}