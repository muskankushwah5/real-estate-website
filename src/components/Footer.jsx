import React from 'react'

import "../App.css";
const Footer = () => {
  return (
    <footer id="footer" class="footer section">
                    <div class="footer-flex">

                        <div class="flex-item">
                            <div class="inline-block">

                                © talal-Al-ghamin  2023<br />All Rights Resevered

                            </div>
                        </div>


                        <div class="flex-item lang_sw">
                            <ul>
                                <li class="active"><a class=" active glink nturl notranslate" title="English" href="#">ENG</a></li>
                                <li><a class="glink nturl notranslate" title="French" href="#">FRA</a></li>
                                <li><a class="glink nturl notranslate" title="German" href="#">GER </a></li>
                            </ul>
                        </div>
                        <div class="flex-item">
                            <div class="social-list">


                                <a target="_blank" class="fa fa-instagram" href="/"></a>


                                <a target="_blank" href="/" class="icon ion-social-facebook"></a>




                                <a target="_blank" href="/" class="icon ion-social-linkedin"></a>



                            </div>
                        </div>
                    </div>


                </footer>
  )
}

export default Footer