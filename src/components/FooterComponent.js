import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Mail, Phone} from '@styled-icons/entypo'
import {Instagram, Facebook, Twitter, Youtube} from '@styled-icons/entypo-social'





function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 ">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>home</Link></li>
                            <li><Link to='/directory'>about us</Link></li>
                            <li><Link to='aboutus'>tours</Link></li>
                            <li><Link to='contactus'>rentals</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center offset-2">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><Instagram size="20"/></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><Facebook size="20" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><Twitter size="20" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><Youtube size="20" /></a> 
                    </div>
                    <div className="col-sm-4 text-right offset-1">
                        <a role="button" className="btn btn-link" href="tel:+4775555555"><Phone size="25" /> +47 75 55 55 55</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.no"><Mail size="25" /> kontakt@reisenorge.no</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;