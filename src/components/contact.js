import React, { useState }  from "react"
import PropTypes from "prop-types"
import axios from "axios";
import "../styles/layout.scss"

const Contact = ({ siteTitle }) => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/fffe3512-aa95-4305-aad9-30317902c713",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Dziękuję za wiadomość!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return(
        <section id="contact" className="section-contact">
            <div className="container-contact">
                <div className="container-contact-forms">
                    <div className="container-contact-forms-content">
                        <h1>&bull; Wiadomość &bull;</h1>
                        <div className="underline"></div>
                        <div className="icon_wrapper">
                            <svg className="icon" viewBox="0 0 511.974 511.974">
                            <path d="M511.872,195.725c-0.053-0.588-0.17-1.169-0.35-1.732c-0.117-0.503-0.28-0.994-0.486-1.468
                                c-0.239-0.463-0.525-0.901-0.853-1.306c-0.329-0.481-0.71-0.924-1.135-1.323c-0.137-0.119-0.196-0.282-0.341-0.401
                                l-82.065-63.735V59.704c0-14.138-11.462-25.6-25.6-25.6h-92.476L271.539,5.355c-9.147-7.134-21.974-7.134-31.121,0
                                l-37.035,28.749h-92.476c-14.138,0-25.6,11.461-25.6,25.6v66.057L3.268,189.496c-0.145,0.12-0.205,0.282-0.341,0.401
                                c-0.425,0.398-0.806,0.842-1.135,1.323c-0.328,0.405-0.614,0.842-0.853,1.306c-0.207,0.473-0.369,0.965-0.486,1.468
                                c-0.178,0.555-0.295,1.127-0.35,1.707c0,0.179-0.102,0.333-0.102,0.512V486.37c0.012,5.428,1.768,10.708,5.009,15.061
                                c0.051,0.077,0.06,0.171,0.119,0.239c0.06,0.068,0.188,0.145,0.273,0.239c4.794,6.308,12.25,10.027,20.173,10.061h460.8
                                c7.954-0.024,15.441-3.761,20.241-10.103c0.068-0.085,0.171-0.111,0.23-0.196c0.06-0.085,0.068-0.162,0.12-0.239
                                c3.241-4.354,4.997-9.634,5.009-15.061V196.237C511.974,196.058,511.881,195.904,511.872,195.725z M250.854,18.82
                                c2.98-2.368,7.2-2.368,10.18,0l19.686,15.283h-49.493L250.854,18.82z M27.725,494.904l223.13-173.321
                                c2.982-2.364,7.199-2.364,10.18,0l223.189,173.321H27.725z M494.908,481.6L271.539,308.117c-9.149-7.128-21.972-7.128-31.121,0
                                L17.041,481.6V209.233L156.877,317.82c3.726,2.889,9.088,2.211,11.977-1.515c2.889-3.726,2.211-9.088-1.515-11.977
                                L25.276,194.018l60.032-46.652v65.937c0,4.713,3.821,8.533,8.533,8.533c4.713,0,8.533-3.821,8.533-8.533v-153.6
                                c0-4.713,3.82-8.533,8.533-8.533h290.133c4.713,0,8.533,3.82,8.533,8.533v153.6c0,4.713,3.82,8.533,8.533,8.533
                                s8.533-3.821,8.533-8.533v-65.937l60.032,46.652l-142.31,110.507c-2.448,1.855-3.711,4.883-3.305,7.928s2.417,5.637,5.266,6.786
                                c2.849,1.149,6.096,0.679,8.501-1.232l140.083-108.774V481.6z"/>
                            <path d="M358.374,204.77v-34.133c0-56.554-45.846-102.4-102.4-102.4c-56.554,0-102.4,45.846-102.4,102.4
                                s45.846,102.4,102.4,102.4c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533c-47.128,0-85.333-38.205-85.333-85.333
                                s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333v34.133c0,9.426-7.641,17.067-17.067,17.067
                                s-17.067-7.641-17.067-17.067v-34.133c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533
                                c0,18.851-15.282,34.133-34.133,34.133c-18.851,0-34.133-15.282-34.133-34.133s15.282-34.133,34.133-34.133
                                c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533c-22.915-0.051-43.074,15.13-49.354,37.168
                                c-6.28,22.038,2.847,45.565,22.347,57.601c19.5,12.036,44.622,9.65,61.507-5.843c1.858,18.046,17.543,31.464,35.659,30.505
                                C344.25,237.91,358.431,222.912,358.374,204.77z"/>
                            </svg>
                        </div>
                        <form onSubmit={handleOnSubmit} name="mail">

                            <div className="name">
                                <label htmlFor="name"></label>
                                <input type="text" placeholder="Nazywam się" name="name" id="name_input" required/>
                            </div>
                            <div className="email">
                                <label htmlFor="email"></label>
                                <input type="email" placeholder="Mój mail to" name="email" id="email_input" required/>
                            </div>
                            <div className="telephone">
                                <label htmlFor="name"></label>
                                <input type="text" placeholder="Mój numer to" name="telephone" id="telephone_input" required/>
                            </div>
                            <div className="subject">
                                <label htmlFor="subject"></label>
                                <select placeholder="Subject line" defaultValue="temat"  name="subject" id="subject_input" required>
                                    <option  disabled hidden>temat</option>
                                    <option>Chciałbym zadać pytanie</option>
                                    <option>Chciałbym zapisać się na wizytę</option>
                                </select>
                            </div>
                            <div className="message">
                                <label htmlFor="message"></label>
                                <textarea name="message" placeholder="Tu napisz wiadomość" id="message_input" cols="30" rows="5" required></textarea>
                            </div>
                            <div className="submit">
                                <input type="submit" value="Wyślij wiadomość" id="form_button"  disabled={serverState.submitting}/>
                            </div>
                            {serverState.status && (
                                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                        </p>
                                    )}
                        </form>
                    </div>
                </div>
                <div className="container-contact-info">
                <div className="box-contact">
                        <div className="icon-contact">
                            <i className="fa fa-map-marker " aria-hidden="true"></i>
                                <h4>Adres 1</h4>
                                <h3>Zielona Góra, 65-001, ul.Wandy 27 lok. 5</h3>
                                <h3>Gabinet psychologiczny "Zmiana na lepsze"</h3>

                        </div>
                    </div>
                    <div className="box-contact">
                        <div className="icon-contact">
                            <i className="fa fa-map-marker " aria-hidden="true"></i>
                                <h4>Adres 2</h4>

                                <h3>Gubin, 66-620, ul. drukarska 9</h3>
                                <h3>Pracownia Psychologiczna "Motowiwa"</h3>
                        </div>
                    </div>
                    <div className="box-contact">
                        <div className="icon-contact">
                            <i className="fa fa-phone " aria-hidden="true"></i>
                                <h4>Telefon</h4>
                                <h3>+48 601 297 952</h3>
                        </div>
                    </div>
                    <div className="box-contact">
                        <div className="icon-contact">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <h4>Email</h4>
                            <h3>oolusia1978@wp.pl</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
Contact.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Contact.defaultProps = {
    siteTitle: ``,
  }
}
export default Contact
