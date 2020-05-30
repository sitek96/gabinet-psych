import React from "react"
import "../images/social-care.svg"
import "../images/kid-and-baby.svg"
import "../images/support.svg"
import "../images/Awesome Human Brain Hemispheres 1.svg"

const offer = () => (
    <section className="offer-section" id="offer">
        <h2>Oferta</h2>
        <div className="container"><div className="cards">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img width="100px" src="social-care.svg"></img>
                        <h3>Pomoc dorosłym i młodzieży</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <ul>
                            <li>uzależnień, w tym behawioralnych,</li>
                            <li>współuzależnienia</li>
                            <li>radzenia sobie z depresją, lękami</li>
                            <li>w trudnościach rozwojowych i kryzysach emocjonalnych,</li>
                            <li>w trudnościach w kontaktach społecznych (relacji z rówieśnikami).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img width="100px" src="kid-and-baby.svg"></img>
                        <h3>Pomoc dzieciom</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <ul>
                            <li>w sytuacjach trudnych, stresujących (konflikty szkolne, rodzinne, rozwód rodziców, straty, adaptacja)</li>
                            <li>w depresjach i lękach</li>
                            <li>w zaburzeniach zachowania, zaburzeniach jedzenia</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img width="100px" src="support.svg"></img>
                        <h3>Pomoc tym którzy</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <ul>
                            <li>mają trudności i nie wiedzą jak sobie z nimi poradzić – pragną zmiany w sobie i swoim życiu</li>
                            <li>szukają równowagi, harmonii i satysfakcji w życiu prywatnym i zawodowym</li>
                            <li>czują się samotni i niezrozumiali</li>
                            <li>cierpią na choroby psychosomatyczne</li>
                            <li>stoją w obliczu straty, rozstania, konfliktu, poważnej decyzji życiowej</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div><div className="offer-image">
            <img src="Awesome Human Brain Hemispheres 1.svg" ></img></div>
        </div>
    </section>
)
    export default offer