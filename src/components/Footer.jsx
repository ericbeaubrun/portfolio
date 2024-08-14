import "./Footer.scss"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ marginTop:'65px', height: '90px', backgroundColor: '#e6e1d5', textAlign: 'center', lineHeight: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <div style={{ marginRight: '10px' }}>
                    <FaFacebook />
                </div>
                <div style={{ marginRight: '10px' }}>
                    <FaTwitter />
                </div>
                <div>
                    <FaInstagram />
                </div>
                <div style={{ marginLeft: '20px' }}>© 2024 My Website</div>
            </div>
        </footer>
    );
};
export default Footer;
