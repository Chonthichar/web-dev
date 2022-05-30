import react from 'react';
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyle";
import {FaAddressBook, FaBeer, FaChild, FaGithub, FaGoogle, FaHome, FaKiwiBird, FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaMap} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaLine} from "react-icons/fa";
import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';


function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <>
            <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>

                <section className=''>
                    <div className='container text-center text-md-start mt-2'>
                        <div className='row mt-2'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-black text-center '>
                                    <i className='fas fa-gem w-100  text-center'></i>Make-Web.com
                                </h6>
                                <p className='fw-light'>
                                    Help your website stand out with beautiful web design, focus on small
                                    components, layout, graphics, colors, fonts, structure, content, fit for your
                                    business, ecommerce, online portfolios, and more..
                                </p>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-4 mx-auto mb-4 fw-light'>
                                <h6 className='text-uppercase fw-bold mb-4 text-center text-black'>Products</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Web Designing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Restyling website
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Support and Maintenance Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Wordpress Styling
                                    </a>
                                </p>
                            </div>


                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 fw-light'>
                                <h6 className='text-uppercase fw-bold mb-4 text-center text-black'>Contact</h6>
                                <p>
                                    <i className='fas fa-home me-3'></i> Hua Hin, Thailand 77110
                                </p>
                                <p>
                                    <i className='fas fa-envelope me-3'></i>
                                    chonthichar</p>
                                <p>
                                    Telephone: +66 87 165 1655
                                </p>
                                <p>
                                    Line: 0 87165 1655
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='text-center p-3 fs-6 w-100 border-1' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
               Copyright &copy;{footerYear}, All Right Reserved
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer