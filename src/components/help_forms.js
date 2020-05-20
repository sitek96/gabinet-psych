import React from "react"
import "../images/depression.svg"
import "../images/healthcare-and-medical.svg"
import "../images/intelligence.svg"
import "../images/no-smoking.svg"
import "../images/thinking (1).svg"
import "../images/thinking.svg"

const help = () => (
    <section className="help-section" id="help">
        <h1>Formy Pomocy</h1>
        <div className="container">
            
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="depression.svg" width="100px"></img>
                        <h3>KONSULTACJA PSYCHOLOGICZNA</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Konsultacja psychologiczna jest psychologicznym świadczeniem zdrowotnym, które dotyczy badania stanu psychicznego pacjenta metodami psychologii klinicznej. Konsultacja psychologiczna jest oceną stanu psychicznego, rozumianą jako specjalistyczne postępowanie obejmujące: psychologiczną diagnozę problemową (może mieć ona charakter opisowy bądź różnicowy, stanowić diagnozę cząstkową lub całościową) oraz sformułowanie wskazań dotyczących dalszego postępowania z pacjentem. To od jednego do trzech spotkań, podczas których zbieram kompleksowy wywiad psychologiczny, określam wstępnie rodzaj problemu oraz wraz z pacjentem szukam różnych sposobów jego rozwiązania.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="healthcare-and-medical.svg" width="100px"></img>
                        <h3>PORADA PSYCHOLOGICZNA</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Porada psychologiczna jest specjalistycznym świadczeniem zdrowotnym nastawionym  na rozwiązanie zgłaszanego przez pacjenta, jego rodzinę lub opiekuna problemu. Porada obejmuje:</p>
                        <ol>
                            <li>wstępną rozmowę , otwierającą kontakt,</li>
                            <li>wywiad i obserwacje,</li>
                            <li>określenie problemu,</li>
                            <li>zakończenie kontaktu poprzez przekazanie pacjentowi obserwacji i wyjaśnień lub/i skierowanie go do odpowiedniej dla niego formy leczenia.</li>
                        </ol>
                        <p>Porada może obejmować pomoc psychologiczną i/lub dodatkowe kontrolne badania psychologiczne.</p>
                        <p>Specyficzną formą porady jest wizyta psychologa w domu pacjenta.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="intelligence.svg" width="100px"></img>
                        <h3>PSYCHOLOGICZNA INTERWENCJA W KRYZYSIE</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Specjalistyczne świadczenie zdrowotne polegające na udzielaniu  pomocy  w psychologicznym kryzysie wywołanym chorobą lub innymi okolicznościami. 
W stanie ostrego kryzysu potrzebna jest natychmiastowa pomoc trwająca aż do ustąpienia objawów. To forma pomocy, która skierowana jest do tych 
z Państwa, którzy borykają się z problemami nagłymi. Interwencja w kryzysie to forma pomocy, która ma na celu przywrócenie równowagi, poczucia bezpieczeństwa, odzyskanie umiejętności radzenia sobie i obniżenie lęków. </p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img  src="thinking (1).svg" width="100px"></img>
                        <h3>TERAPIA PSYCHOLOGICZNA</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Terapia psychologiczna jest specjalistycznym świadczeniem zdrowotnym udzielanym przez psychologa pacjentowi i/lub jego rodzinie, czy też opiekunowi. Celem terapii psychologicznej jest osiągnięcie przez pacjenta optymalnego poziomu funkcjonowania. Korzystając z terapii pacjent ma możliwość poznania i zrozumienia siebie i swoich zachowań w różnych sytuacjach. W trakcie terapii uzyskiwany będzie wgląd i zrozumienie źródła problemu/trudności. Terapię psychologiczną zwykle winna poprzedzać porada psychologiczna i/lub konsultacja psychologiczna. Terapia psychologiczna jest podstawową, zwyczajowo pierwszą formą pomocy psychologicznej pacjentowi i/lub jego rodzinie/opiekunowi.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="no-smoking.svg" width="100px"></img>
                        <h3>TERAPIA UZALEŻNIEŃ</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Terapia uzależnień to proces mający prowadzić do zaprzestania lub zmniejszenia częstotliwości przyjmowania substancji psychoaktywnych. Terapia uzależnień  behawioralnych to proces mający prowadzić  do zaprzestania lub zmniejszenia zachowań problemowych.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src="thinking.svg" width="100px"></img>
                        <h3>DIAGNOZA PSYCHOLOGICZNA</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Diagnoza w psychologii polega na opisie pozytywnych i negatywnych właściwości psychicznych oraz psychologicznych mechanizmów funkcjonowania jednostki, wyjaśnianiu problemów w funkcjonowaniu tej jednostki oraz prognozie skutków zachowań i zjawisk i możliwości modyfikowania tego co problematyczne w funkcjonowaniu. Ma na celu ustalenie mechanizmów psychologicznych, przyczyn oraz stopnia nieprawidłowości w różnych sytuacjach życiowych. W diagnozie psychologicznej posługuję się obserwacją, wywiadem oraz testami psychologicznymi atestowanymi przez Polskie Towarzystwo Psychologicznego. Wykonuję następujące badania: badania osobowości, badania ilorazu inteligencji, badania neuropsychologiczna.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
)
    export default help