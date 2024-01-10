// ********* POUR REACT  *****************

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/cv.css";
import "./js/cv.js"




const Cv = () => {
    return (
        <main className=" container border ">
            <div className="row align-items-start ">
                {/* <!-- colonne de gauche --> */}
                <div className="col-4 pColonneGauche">
                    <div>
                        <img src="../img/id.jpg" className="rounded-circle shadow mx-auto d-block" width="30%"
                            alt="photo de profil" />
                    </div>
                    <div id="contact" className="px-3 pt-3">
                        <h2 className="text-center fw-bold fs-5">CONTACT</h2>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                <path
                                    d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                <path
                                    d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
                            </svg> +33 6 01 95 14 47
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-envelope" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> fabricekx@gmail.com
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg> (06) Grasse, France
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                            <a href="https://github.com/fabricekx">https://github.com/fabricekx
                            </a>
                        </div>

                    </div>
                    <div id="profil" className="px-3 pt-3">
                        <h2 className="text-center fw-bold fs-5">PROFIL</h2>
                        <div className="pTextJustifie fst-italic"> Grâce à mon titre professionnel de Développeur Web et à ma
                            formation initiale d’ingénieur agronome qui m’apporte rigueur, connaissances scientifiques,
                            polyvalence et compétences managériales, je suis en capacité de mener à bien vos projets de
                            développement Web en collaboration avec vos équipes techniques et opérationnelles

                        </div>
                    </div>
                    {/* <!-- Boutons langues et softskills --> */}
                    <div className="px-3 pt-3">
                        <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" checked />
                        <label className="btn btn-secondary " id="option1" for="option1">LANGUES</label>

                        <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off" />
                        <label className="btn btn-secondary " id="option2" for="option2">SOFT SKILLS</label>

                        <div className="row pt-3 pColonneDroite" id="langues" style={{display : "flex",position: "relative"}} >
                            <div className="col-4">Français

                            </div>
                            <div className="col-8">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "100%"}}>Maternelle</div>
                                </div>
                            </div>

                            <div className="col-4">Anglais

                            </div>
                            <div className="col-8">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "80%"}}
                                >Courant</div>
                                </div>
                            </div>

                            <div className="col-4">Portugais

                            </div>
                            <div className="col-8">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "50%"}}>Opérationnel</div>
                                </div>
                            </div>

                            <div className="col-4">Espagnol

                            </div>
                            <div className="col-8">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "30%"}}>Notions </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="px-3 pt-3">
                        <div className="row pt-3 pColonneDroite" id="softskills" style={{position:"relative" , display: "none", bottom:  "10%"}}>
                            <p>Selon méthode AccessFirst</p>
                            <div className="col-6">Autonomie
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "90%"}}>9</div>
                                </div>
                            </div>


                            <div className="col-6">Force de proposition
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "100%"}}>10</div>
                                </div>
                            </div>

                            <div className="col-6">Prise de recul
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "90%"}}>9</div>
                                </div>
                            </div>

                            <div className="col-6">Capacité d'adaptation
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "100%"}}>10</div>
                                </div>
                            </div>

                            <div className="col-6"> Gestion du stress
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "100%"}}>10</div>
                                </div>
                            </div>

                            <div className="col-6">Sens de l'organisation
                            </div>
                            <div className="col-6">
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar text-end p-1" style={{width: "80%"}}>8</div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>




                {/* <!-- colonne de droite --> */}
                <div className="col-md-8 col-12 pColonneDroite ps-2">
                    <div id="blocNom" className="pt-1">
                        <h1 className="text-center">Fabrice Hendrikx</h1>
                        <div id="sousTitre" style={{height: "3rem"}}>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>Developpeur Web Full Stack </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>Front End </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>Back End </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>HTML5 CSS3 </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>Bootsrap </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>JavaScript TypeScript </p>
                            <p className="text-end fs-3 fw-bold" style={{display : "none"}}>SQL PHP </p>




                        </div>

                    </div>
                    {/* <!-- contact2 caché --> */}
                    <div id="contact2" className=" pt-3" >
                        <h2 className="text-light" >Contact</h2>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-phone-vibrate" viewBox="0 0 16 16">
                                <path
                                    d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                <path
                                    d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z" />
                            </svg> +33 6 01 95 14 47
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-envelope" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg> fabricekx@gmail.com
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg> (06) Grasse, France
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-github" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                            <a href="https://github.com/fabricekx">https://github.com/fabricekx
                            </a>
                        </div>

                    </div>
                    {/* <!-- profil2 cache --> */}
                    <div id="profil2" className=" pt-3">
                        <h2 className="text-light">Profil</h2>
                        <div className="pTextJustifie fst-italic"> Grâce à mon titre professionnel de Développeur Web et à ma
                            formation initiale d’ingénieur agronome qui m’apporte rigueur, connaissances scientifiques,
                            polyvalence et compétences managériales, je suis en capacité de mener à bien vos projets de
                            développement Web en collaboration avec vos équipes techniques et opérationnelles

                        </div>
                    </div>

                    <div id="blocExperience" className="pt-3">
                        <h2 className="text-light">Expérience Professionnelle</h2>
                        <div className="row" style={{height : "150px" , overflowY : "scroll"}}>

                            <div className="col-lg-2 col-3 fw-semibold">
                                2022-2023

                            </div>
                            <div className="col-lg-10 col-8 pTextJustifie">
                                Chef d’équipe, bureau d’études Alyce (Nice 06), suivi de la production, formation et
                                management des enquêteurs
                            </div>

                            <div className="col-lg-2 col-3 fw-semibold">
                                2012-2021
                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Formateur et Animateur freelance. Préparation des modules de formation, suivi des
                                stagiaires, référent RSE, préparation d’ateliers thématiques pour différents publics.
                            </div>

                            <div className="col-lg-2 col-3 fw-semibold">
                                2003-2011
                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Responsable de secteur , animateur et formateur. Planète Sciences Méditerranée (Grasse 06).
                                Gestion administrative et opérationnelle des projets, gestion d’équipes, animation et
                                formation </div>
                            <div className="col-lg-2 col-3 fw-semibold">
                                2003
                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Chargé de Mission. Cres21 (Montpellier 34). Bureau d’étude et conseil en urbanisme et
                                environnement
                            </div>

                            <div className="col-lg-2 col-3 fw-semibold">
                                2000-2001
                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Chercheur stagiaire au jardin Botanique de Horta (Açores, P.)
                            </div>

                            <div className="col-lg-2 col-3 fw-semibold">
                                1999-2000
                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Enseignant à l’institut agronomique de La Reid (B.), niveau Licence </div>





                        </div>


                    </div>

                    <div id="blocFormation" className="pt-3">
                        <h2 className="text-light">Formation</h2>
                        <div className="row">
                            <div className="col-lg-2 col-3 fw-semibold">
                                2023-2024

                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Developpeur Web & Web Mobile, Titre professionnel niveau 5, AFPA, Cannes (06)
                            </div>

                            <div className="col-lg-2 col-3 fw-semibold">
                                2002-2003

                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Niveau Master Droit et Gestion de l,’environnement, Montpellier (34)
                            </div>


                            <div className="col-lg-2 col-3 fw-semibold">
                                1993-1998

                            </div>
                            <div className="col-lg-10 col-9 pTextJustifie">
                                Grade d’ingénieur Agronome, Ulg Agro-Bio Tech, Gembloux (B.)
                            </div>
                        </div>
                    </div>

                    <div id="blocCompétences" className="pt-3">
                        <h2 className="text-light">Compétences / Hard Skills</h2>
                        <div className="row">
                            {/* <!-- BLOCK FRONT END --> */}
                            <div className="col-md-6 col-12 text-center " id="front">
                                <div className="fs-5 fw-bold"> FRONT END </div>
                                <div className="row text-start">
                                    <div className="col-6"> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                                        viewBox="0 0 384 512">
                                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
                                        <path
                                            d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                                    </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                                            viewBox="0 0 384 512">

                                            <path
                                                d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                                        </svg> HTML/CSS
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-wordpress" viewBox="0 0 16 16">
                                            <path
                                                d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z" />
                                            <path
                                                d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z" />
                                            <path fill-rule="evenodd"
                                                d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8m.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8" />
                                        </svg> WordPress
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "40%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18"
                                            viewBox="0 0 576 512">
                                            <path
                                                d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z" />
                                        </svg> Bootstrap
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "60%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                                    </svg>
                                        JavaScript
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "70%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                        </svg>
                                        JQuery/ React
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "50%"}}></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            {/* <!-- BACK END --> */}
                            <div className="col-md-6 col-12 text-center" id="back">
                                <div className="fs-5 fw-bold"> BACK END </div>

                                <div className="row text-start">
                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                                            viewBox="0 0 640 512">
                                            <path
                                                d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                        </svg>
                                        SQL
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "80%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                                            viewBox="0 0 640 512">
                                            <path
                                                d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
                                        </svg>
                                        PHP
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "50%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm133.7 143.5c-11.5 .4-19.4-6.5-19.8-16.9-.3-9.2 6.7-13.4 6.5-18.9-.2-6.6-10.2-6.8-12.9-6.7-39.8 1.3-48.6 57-58.9 113.9 21.4 3.2 36.7-.7 45.1-6.2 12-7.8-3.3-15.7-1.4-24.6 4-18.2 32.6-19 32 5.3-.4 17.9-25.9 41.8-77.6 35.7-10.8 59.5-18.4 115-58.2 161.7-29 34.5-58.4 39.8-71.6 40.3-24.7 .9-41-12.3-41.6-29.8-.6-17 14.5-26.3 24.3-26.6 21.9-.8 30.1 25.7 14.9 34-12.1 9.7 .1 12.6 2.1 12.6 10.4-.4 17.3-5.5 22.2-9 24-20 33.2-54.9 45.4-118.4 8.2-49.7 17-78 18.2-82-16.9-12.8-27.1-28.6-49.9-34.7-15.6-4.2-25.1-.6-31.8 7.8-7.9 10-5.3 23 2.4 30.7l12.6 14c15.5 17.9 24 31.9 20.8 50.6-5.1 29.9-40.7 52.9-82.9 39.9-36-11.1-42.7-36.6-38.4-50.6 7.5-24.2 42.4-11.7 34.6 13.6-2.8 8.6-4.9 8.7-6.3 13.1-4.6 14.8 41.9 28.4 51-1.4 4.5-14.5-5.3-21.7-22.3-39.9-28.5-31.8-16-65.5 3-79.7C204.2 140.1 251.9 197 262 205.3c37.2-109 100.5-105.5 102.4-105.5 25.2-.8 44.2 10.6 44.8 28.7 .3 7.7-4.2 22.6-19.5 23.1z" />
                                        </svg>
                                        Symfony
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "10%"}}></div>
                                        </div>
                                    </div>

                                    <div className="fs-5 fw-bold"> AUTRES </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14"
                                            viewBox="0 0 448 512">

                                            <path
                                                d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                                        </svg>

                                        Python
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "40%"}}></div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20"
                                            viewBox="0 0 640 512">
                                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
                                            <path
                                                d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" />
                                        </svg>

                                        Arduino
                                    </div>
                                    <div className="col-6">
                                        <div className="progress" role="progressbar" aria-label="Basic example"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar text-end p-1" style={{width: "20%"}}></div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>



                </div>



            </div>









        </main>

    );
};

export default Cv;