import logo from "../assets/images/logo.png"

function Footer() {
    return (
        <div className="footer">
            <img src={logo} className="logo-img" alt="logo" />
            <span className="footer__promo">Изучай новые слова каждый день!</span>
            <div className="footer__info">Info</div>
        </div>
    );
}

export default Footer;
