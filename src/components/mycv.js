import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Mycv extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="cv-grid">
                    <Cell col={12}>
                        <img src="img/eu.jpg" alt="poza-profil" className="photo-profil"/>

                        <div className="banner-text">
                            <h1>Timis Alin</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | Git</p>

                            <div className="social-links">

                                {/* LinkedIN */}
                                <a href="https://www.linkedin.com/in/timisalin/"  rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                 {/* Github */}
                                 <a href="https://github.com/timisalin01"  rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                 {/* Faceebook */}
                                 <a href="https://www.facebook.com/timis.alin.5"  rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                 {/* Instagram */}
                                 <a href="https://www.instagram.com/timisalin01/"  rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </div>

                        </div>

                    </Cell>
                </Grid> 
            </div>
        )
    }
}

export default Mycv;