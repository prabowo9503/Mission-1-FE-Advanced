import Logo from "../Assets/img/Logo.svg"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">

        <img src={Logo} alt="CHILL" className="footer-logo" />

        <p>©2023 Chill All Rights Reserved.</p>

      </div>

      <div className="footer-right">

        <div className="footer-column">
          <h4>Genre</h4>

          <a href="/">Aksi</a>
          <a href="/">Anak-anak</a>
          <a href="/">Anime</a>
          <a href="/">Britania</a>
        </div>

        <div className="footer-column">
          <h4>&nbsp;</h4>

          <a href="/">Drama</a>
          <a href="/">Fantasi Ilmiah & Fantasi</a>
          <a href="/">Kejahatan</a>
          <a href="/">KDrama</a>
        </div>

        <div className="footer-column">
          <h4>&nbsp;</h4>

          <a href="/">Komedi</a>
          <a href="/">Petualangan</a>
          <a href="/">Perang</a>
          <a href="/">Romantis</a>
        </div>

        <div className="footer-column">
          <h4>&nbsp;</h4>

          <a href="/">Sains & Alam</a>
          <a href="/">Thriller</a>
        </div>

        <div className="footer-column">
          <h4>Bantuan</h4>

          <a href="/">FAQ</a>
          <a href="/">Kontak Kami</a>
          <a href="/">Privasi</a>
          <a href="/">Syarat & Ketentuan</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;