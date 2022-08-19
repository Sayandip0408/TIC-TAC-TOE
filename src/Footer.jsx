import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsInfoCircle } from 'react-icons/bs';
import { FcCopyright } from 'react-icons/fc';

const facebook = () => {
    window.location.href = 'https://www.facebook.com/sayandip.adhikary.96';
}
const linkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/sayandip-adhikary-7359a8199/';
}
const portfolio = () => {
    window.location.href = 'https://sayandip2.netlify.app/';
}
const github = () => {
    window.location.href = 'https://github.com/Sayandip0408';
}
const twitter = () => {
    window.location.href = 'https://twitter.com/SayandipAdhika1';
}
const instagram = () => {
    window.location.href = 'https://www.instagram.com/sayan.dip7/';
}
const Footer = () => {
    return (
        <footer id='footer'>
            <div id='social'>
                <BsFacebook id='fb' onClick={facebook} />
                <BsInstagram id='insta' onClick={instagram} />
                <BsTwitter id='twitter' onClick={twitter} />
                <BsGithub id='github' onClick={github} />
                <BsLinkedin id='linkedin' onClick={linkedin} />
                <BsInfoCircle id='info' onClick={portfolio} />
            </div>
            <div id='copyright'>
                <h1>
                    <FcCopyright /> SayanDip Adhikary, 2022
                </h1>
            </div>
        </footer>
    );
}

export default Footer;