import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
export default class PublicationsCar extends Component {

//state here
    render() {
        return( 
            <div>
      

              <div id="carousel-pub" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-pub" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-pub" data-slide-to="1"></li>
                    <li data-target="#carousel-pub" data-slide-to="2"></li>
                    <li data-target="#carousel-pub" data-slide-to="3"></li>
                    <li data-target="#carousel-pub" data-slide-to="4"></li>
                    <li data-target="#carousel-pub" data-slide-to="5"></li>
                    <li data-target="#carousel-pub" data-slide-to="6"></li>
                    <li data-target="#carousel-pub" data-slide-to="7"></li>
                    <li data-target="#carousel-pub" data-slide-to="8"></li>
                    <li data-target="#carousel-pub" data-slide-to="9"></li>
                   


                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                         <ul>
                        <li>
                        Jones-Engel L, Bard K.A. (1996). Precision grips in young chimpanzees. 
                        </li>
                        <Divider />
                        <li>
                        Jones-Engel L., Engel G.A., Schillaci M.A., Babo R., Froehlich J.W. (2001). Detection of antibodies to 
                        selected human pathogens among wild and pet macaques in Sulawesi, Indonesia. Amer J Primatol, 54, 171-178.
                        </li>
                        <Divider />
                        <li>
                        Schillaci MA, Jones-Engel L., Heidrich J.E., Miller G.P., Froehlich, J.W. (2001). A field methodology for 
                        lateral cranial radiography of nonhuman primates. Am J of Phys Anthropol, 116, 278-284.
                        </li>
                        <Divider />
                        <li>
                        Engel G.A., Jones-Engel L., Schillaci M.A., Suaryana K.G., Putra A., Fuentes A., Henkel R. (2002). Human 
                        exposure to herpesvirus B-seropositive macaques, Bali, Indonesia. Emerg Infect Dis, 8, 789-795.
                       </li>
                    
                      </ul>
                        </div>

                    <div class="carousel-item">
                            <ul>
                                <li>
                                Jones-Engel L., Schillaci M.A., Engel G.A. (2003). Interaction between humans and nonhuman primates. In: 
                                Setchell J., Curtis D., editors. Field & laboratory methods in Primatology. Cambridge: Cambridge University Press, p 15-24.
                                </li>
                                <Divider />

                               <li>Froehlich, J.W., Schillaci, M.A., Jones-Engel, L., Froehlich, D.J., Pullen, B. (2003). A Sulawesi beachhead by 
                                longtail monkeys (Macaca fascicularis) on Kabena Island, Indonesia. Anthropologie, XLI/1-2, 67-74.
                                </li>
                                <Divider />

                                <li>
                                Jones-Engel L., Engel G.A., Schillaci M.A., Kyes K., Paputangan U., Allan J., Grant R., Froehlich, J.W., Kyes R.C., (2004). A serological survey of antibody prevalence to endemic primate pathogens among pet macaques from Sulawesi, Indonesia. Amer J Primatol, 62(1), 42-43. 
                                </li>
                                <Divider />

                                <li>
                                Jones-Engel L., Engel G.A., Schillaci M., Froehlich J.W., Paputungnan U., Kyes R. (2004). Prevalence of 
                                Enteric Parasites among Pet Macaques in Sulawesi, Indonesia. Amer J Primatol, 62, 71-82. 
                                </li>
                                <Divider />

                                             
                            </ul>
                        </div>

                        <div class="carousel-item">
                        <ul>
                            <li>
                            Jones-Engel L., Engel G.A., Schillaci M., Fuentes A., Suaryana K.G., Rompis A., Putra A., Wandia I., 
                            Paputangan U., Allan J., Grant R., Kuller L., Henkel R., Kyes R. (2002). Serological, epidemiological and ethnoprimatological evidence for bidirectional pathogen transmission between humans and primates in Indonesia. Abstract of the Healthy Ecosystem, Healthy People: Linkages between biodiversity, ecosystem health and human health, p.10.
                        </li>
                        <Divider/>
                            <li>
                            Chalise M.K., Jones-Engel L., Engel G.A., Heidrich J., Kyes R.C., Grant R. (2004). Health status of semi- 
                            provisioned free-ranging temple rhesus monkeys of Kathmandu Valley, Nepal. Folia Primatol, 75(1), 363-364.
                            </li>
                            <Divider/>
                            <li>
                            Schillaci M.A., Froehlich J.W., Supriatna J., Jones-Engel, L. (2005). The effects of hybridization on growth 
                            allometry and craniofacial from in Sulawesi macaques. J Hum Evol. 49(3), 335-69. 
                         </li>
                         <Divider/>
                         <li>
                            Grant R., Vinh C., Watanabe R., McLain R., Kuller L., Poland B., Jones-Engel L., Iskandriati D., Pamungkas 
                            J., Kyes R.C., Anderson D. (2005). A novel type-D simian retrovirus (srv) in newly imported M. nemestrina similar to endogenous langur monkey retrovirus: Evidence of cross-genus transmission. Amer J Primatol, 66(S1), 77-78.
                         </li>
                    
                        </ul>
                    </div>
                    
                    {/* <div class="carousel-item">
                            <ul>
                                <li>
                                Grant R., Watanabe R., Kuller L., Poland B., Vinh C., McLain R., Jones-Engel L., Schillaci M., Lee B., 
                                Pamungkas J., Iskandriati D., Kyes R., Anderson D. (2005). Comparison of Wild-Type SRV in Indonesia and Singapore. J. Med. Primatol. 34, 332-333.
                                </li>
                                <Divider/>
                                <li>
                                Jones-Engel L., Engel G.A., Schillaci M., Rompis A., Putra A., Suryana K., Fuentes A., Beer B., Hicks S., 
                                White R., Wilson B. & Allan J. (2005). Primate to Human Retroviral Transmission in Asia. Emerging Infect Dis.11(7),1028-35. 
                                </li>
                                <Divider/>
                                <li>
                                Jones-Engel L., Engel G.A., Schillaci M.A. (2005). An ethnoprimatological assessment of disease transmission 
                                among humans and wild and pet macaques on the Indonesian island of Sulawesi. In Commensalism and Conflict: The primate-human interface. Eds. J. Patterson and J. Wallis, pp. 196-221.
                                </li>
                                <Divider/>
                                <li>
                                Jones-Engel L., Schillaci M.A., Engel G.A., Paputungan U., Froehlich J.W. (2005). Characterizing primate pet 
                                ownership in Sulawesi: implications for disease transmission. In J. Patterson and J. Wallis eds. Commensalism and Conflict: The primate-human interface. ASP, p 197-221.
                                </li>
                            </ul>
                        </div>
                        <div class='carousel-item' >
                            <ul>
                            <li>
                                Kyes R.C., Jones-Engel L., Huettmann F. (2004). Primate Conservation Biology: Moving towards a 
                                comprehensive approach to population assessment. Folia Primatol, 75(1), 389. 
                                </li>  
                                <Divider/>
                          
                                    <li>
                                    Schillaci MA., Jones-Engel L., Engel G.A., Paramastri Y., Iskander E., Wilson B., Allan J., Kyes R., Grant R. 
                                    (2005). Prevalence of enzootic simian viruses among urban performance monkeys in Indonesia. Trop Med Int Health, 10, 1305-14.
                                    </li>
                                    <Divider />
                                    <li>
                                    Kyes R.C., Jones-Engel L., Chalise M.K., Engel G.A., Heidrich J., Grant R., Bajimaya S.S., 
                                        McDonough J., Glenn Smith D., Ferguson B. (2006). Genetic Characterization of Rhesus Macaques (Macaca mulatta) in Nepal. Amer J Primatol, 68, 445-55.
                                    </li>
                                    <Divider />
                                    <li>
                                    Jones-Engel L., Engel G.A., Heidrich J., Chalise M., Poudel N., Viscidi R., Barry P., Allan J., Grant R., Kyes 
                                    R. (2006). Temple Monkeys and Health Implications of Commensalism, Kathmandu, Nepal. Emerg Infect Dis, 12, 900-906. PMC3373059. 
                                    </li>
                            </ul>
                        </div>

                        <div class='carousel-item'>
                            <li>
                            Jones-Engel L., Engel G.A., Schillaci M.A., Heidrich J., Lee B., Chalise M.K., Kyes R.C., Travis D. (2006). Considering Human to Primate Transmission of Measles Virus through the Prism of Risk Analysis. Amer J Primatol, 68, 868-879
                            </li>
                            <Divider />
                            <li>
                            Engel G.A., Hungerford L., Jones-Engel L., Travis D., Fuentes A., Schillaci M., Kyes R. (2006). Risk 
                            Assessment: A Model for Predicting Cross-Species Transmission of SFV from Macaques (M. fascicularis) to Humans at a Monkey Temple in Bali, Indonesia. Amer J Primatol, 68, 934-948.
                            </li>
                            <Divider />
                            <li>
                            Jones-Engel L., Engel G.A., (2006). Disease Risk Analysis: A Paradigm for Using Health-Based Data to 
                                Inform Primate Conservation and Public Health. Amer J Primatol, 68, 851-854.
                            </li>
                            <Divider />
                            <li>
                            Travis D.A., Hungerford L., Engel G.A., Jones-Engel L. (2006). Disease risk analysis: a tool for primate 
                            conservation planning and decision making. Amer J Primatol, 68, 855-867. 
                            </li>
                        </div>

                        <div class='carousel-item>'>
                            <ul>
                                <li>
                                Schillaci M.A., Jones-Engel L., Engel G.A., Kyes R. (2006). Exposure to human respiratory viruses among 
                                urban performing monkeys in Indonesia. Amer J Trop Med Hyg, 75, 716-719.

                                </li>
                                <Divider />
                                <li>
                                Cohn D.L., Smith V., Pizarro M., Jones-Engel L., Engel G.A., Fuentes A., Shaw E., Cortes J. (2007). 
                                Pediculosis in Macaca sylvanus of Gibraltar. Vet Parasitol, 145,116-119. PMC1924910. 
                                </li>
                                <Divider />
                                <li>
                                Schillaci M.A., Jones-Engel L., Lee B.P., Fuentes A., Aggimarangsee N., Engel G.A., Sutthipat T. (2007). 
                                Morphology and somatometric growth of long-tailed macaques (Macaca fascicularis fascicularis) in Singapore. Biol J Lin Soc, 92, 675-694
                                </li>
                                <Divider />
                                <li>
                                Jones-Engel L., Steinkraus K., Murray S., Engel G.A., Grant R., Aggimarangsee N., Lee B.P.Y.-H., May C., 
                                Schillaci M.A., Chutthapati T., Somgird C., Vojtech L., Zhao J., Linial M. (2007). Sensitive assays for simian foamy virus reveal a high prevalence of infection in commensal, free-ranging, Asian monkeys. J of Virol, 81, 7330-7. PMC1933339.
                                </li>
                                
                            </ul>
                        </div>

                        <div class='carousel-item>'>
                            <ul>
                                <li>
                                Schillaci M.A., Jones-Engel L., Heidrich J., Benamore R., Pereira A., Paul A. (2008).Thoracic radiography of 
                                    pet macaques in Sulawesi, Indonesia. J Med Primatol, 37, 141-145.

                                </li>
                                <Divider />
                                <li>
                                Schillaci M.A., Jones-Engel L., Engel G.A., Fuentes A. (2008). Characterizing the threat to the blood supply 
                                associated with nonoccupational exposure to emerging simian retroviruses. Transfusion, 48, 398-401

                                </li>
                                <Divider />
                                <li>
                                Fuentes A., Kalchik S., Gettler L., Kwiatt A., Konecki M., Jones-Engel L. (2008). Characterizing Human- 
                                        Macaque Interactions in Singapore. Amer J Primatol, 70,1-5. 

                                </li>
                                <Divider />
                                <li>
                                Engel G.A., Pizarro M., Shaw E., Cortes J., Fuentes F., Barry P., Lerche N., Grant R., Cohn D., Jones-Engel 
                                L. (2008). Unique pattern of enzootic primate viruses in Gibraltar macaques. Emerg Infec Dis, 14(7), 1112- 1115. PMC2600335.
                                </li>
                                
                            </ul>
                        </div>

                        <div class='carousel-item>'>
                            <ul>
                                <li>
                                Jones-Engel L., May C., Engel G.A., Steinkraus K., Schillaci M.A., Fuentes A., Rompis A., Chalise M.K., 
                                Aggimarangsee N., Feeroz M.M., Grant R., Allan J., Putra A., Wandia I.N., Watanabe R., Kuller L., Thongsawat S., Chaiwarith R., Kyes R., Linial M. (2008). Diverse contexts of zoonotic transmission of simian foamy viruses in Asia. Emerg Infec Dis, 14(8), 1200-1208. PMC2562341. 

                                </li>
                                <Divider />
                                <li>
                                Sha J.C., Fuentes A., Gumert M., Jones-Engel L., Lee B., Chan S. (2009). Macaque–Human Interactions and 
                                    the Societal Perceptions of Macaques in Singapore. Am J Primatol, 71(10):825-39.

                                </li>
                                <Divider />
                                <li>
                                Sha J.C., Gumert M., Lee B., Fuentes A, Chan S., Jones-Engel L. (2009). Status of the long-tailed macaque 
                            (Macaca fascicularis) in Singapore and implications for management. Biodiver Cons 18, 2909-2906. 
                                </li>
                                <Divider />
                                <li>
                                Schillaci M.A., Parrish S., Jones-Engel L. (2009). Radiographic measurement of the cardiothoracic ratio in pet 
                                macaques from Sulawesi, Indonesia. Radiography, 15, 29-33. 

                                </li>
                                
                            </ul>
                        </div>

                        <div class='carousel-item>'>
                            <ul>
                                <li>
                                Engel G.A., O’Hara T.M., Cardona-Marek T., Heidrich J., Chalise M., Kyes R., Jones-Engel L. (2010). 
                                    Synanthropic Primates in Asia: Potential Sentinels for Environmental Toxins. Amer J Phys Anthro, 142(3), 453-460. PMC2901096.

                                </li>
                                <Divider />
                                <li>
                                Schillaci M.A., Lischka A.R., Karamitsos A.A., Engel G.A., Paul N., Ramoul R., Rompis A., Putra A., Wandia 
                                I.N., Jones-Engel L. (2010) Radiographic measurement of the cardiothoracic ratio in a feral population of long-tailed macaques (Macaca fascicularis). Radiography, 16, 163-166. 
                                </li>
                                <Divider />
                                <li>
                                Dietrich E.A., Jones-Engel L., Hu S.-L. (2010). Evolution of the Antiretroviral Restriction Factor TRIMCyp 
                                    in Old World Primates. PloS one, 5(11), e14019. PMC2982814. 

                                </li>
                                <Divider />
                                <li>
                                Negovetich N.J., Feeroz M.M., Jones-Engel L., Walker D., Alam S.M.R., Hasan K., Seiler P., Ferguson A., 
                                Friedman K., Barman S., Franks J., Turner J., Krauss S., Webby R.J., Webster R.G. (2011). Live Bird Markets of Bangladesh: H9N2 Viruses and the Near Absence of Highly Pathogenic H5N1 Influenza. PLoS One, 6 (4), e19311. PMC3082571

                                </li>
                                
                            </ul>
                        </div> */}

                        <a class="carousel-control-prev" href="#carousel-pub" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel-pub" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
              </div> 
            </div>
            </div>


        )
    }
}