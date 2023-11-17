import { Link } from 'react-router-dom';
import { FooterData } from './FooterData';
import './Footer.css'
export function Footer() {
    const footerMenuItems = FooterData.map((item) => (
        <FooterSubSection title={item.title} key={item.id} listItem={item.listItem} />
      ));
    return(
        <footer className="footer--section">
            <div className="footer-container">
                <div className="footer--body">
                    <img src='/assets/Logo.svg' alt="" />
                    <p className='logo-text' >Discover the world's wonders and let us be your trusted guide to extraordinary destinations.</p>
                    <p className='copyright' >© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
                </div>
                {footerMenuItems}
            </div>
        </footer>
    )
}

function FooterSubSection({ title, listItem }) {
    return (
        <div className='footer-subsection'>
            <h2>{title}</h2>
            <ul>
                {listItem.map((item, index) => (
                <li key={index}>
                    <Link to={item.link} className='list-item'>{item.label}</Link>
                </li>
        ))}
            </ul>
        </div>
    );
}