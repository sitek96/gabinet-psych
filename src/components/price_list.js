import React from "react"
import "../styles/layout.scss"
import '../images/psychologist3-01.svg'

const hero = () => (

        <section className="section-price-list" id="price-list" >
            <h1>Cennik</h1>
            <div className="container">
                <div className="info-price-list">
                    <div className="price-list-line">
                        <p className="name-price-list">Konsultacja neuropsychologiczna </p>
                        <p className="price-price-list">150 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Poradnictwo dla rodziców </p>
                        <p className="price-price-list">120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoedukacja</p>
                        <p className="price-price-list">120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoterapia dzieci</p>
                        <p className="price-price-list">120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoterapia indywidualna </p>
                        <p className="price-price-list"> 120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoterapia rodzinna </p>
                        <p className="price-price-list">150 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoterapia uzależnień </p>
                        <p className="price-price-list">120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Psychoterapia uzależnień i współuzależnienia </p>
                        <p className="price-price-list">120 zł</p>
                    </div>
                    <div className="price-list-line">
                        <p className="name-price-list">Testy psychologiczne </p>
                        <p className="price-price-list">150 zł</p>
                    </div>
                </div>
                <div className="image-price-list">
                    <img src="psychologist3-01.svg"></img>
                </div>
            </div>
        </section>

)
    export default hero