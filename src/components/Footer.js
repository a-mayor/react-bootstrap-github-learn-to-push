import LogoFooter from '../images/logo_size.jpg'
import styles from './style.module.css'
const Footer = () =>{
    return(
        <div className={styles.footerArea}>
        <div className="">
          <div className="site-logo text-center py-4">
            <a href="/"><img src={LogoFooter} alt="logo"></img></a>
          </div>
          <div className={styles.social}>
            <h5 className="text-uppercase">Follow me</h5>
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCIid513YDB_aw_Z80siJpNA"><i className="fab fa-youtube"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="copyrights text-center">
            <p className="para">
              Copyright@2021 All rights reserved | This template is made with by{" "}
              <a href="/"><span className={styles.CopyRightLink}>Code|Fancy</span></a>
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer;