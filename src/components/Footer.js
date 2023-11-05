import Logo from '../assets/aniflix_logo.png';

export const Footer = () => {
  return (
    <footer className="footer_logo bg-dark p-3">
      <img
        src={Logo}
        alt="logo"
        width="150"
      />
      <div className="footer_text blue-color">
        Copyright © 2023 | Aniflix.com
      </div>
    </footer>
  );
};
