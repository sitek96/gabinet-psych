import React from "react"
import "../styles/layout.scss"
import '../images/4824.png'

const hero = () => (
    <div className="body-hero">
        <div className="open-hero">
            <div className="layer-hero"></div>
            <div className="layer-hero"></div>
        </div>
        <section className="section-hero" >
            <div className="bannertext-hero">
                <h2>Gabinet Psychologiczny zmiana na lepsze</h2><br></br>
                <h3>Mgr. Aleksandra Ślączka Lebiedzińska</h3>
                <p> Psycholog dziecięcy <br></br>
                    Certyfikowany specjalista psychoterapii uzależnień <br></br>
                    Specjalista psychologii klinicznej</p>
              <a href="#about-me">więcej</a>
            </div>
            <img src="4824.png" className="therapy-session-hero"></img>
            <ul className="social-media">
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/gabinetpsychologicznyiterapeutyczny"><i className="fa fa-facebook"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.znanylekarz.pl/aleksandra-slaczka-lebiedzinska/psycholog-dzieciecy-psychoterapeuta/gubin"><i className="far fa-calendar-check"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://www.motowiwa.pl/"><i className="fas fa-car"></i></a></li>
            </ul>
        </section>
    </div>
)
    export default hero