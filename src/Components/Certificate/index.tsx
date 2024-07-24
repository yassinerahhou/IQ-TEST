import { forwardRef } from "react";
import styles from "./certificate.module.scss";
import logoCertificate from "../../assets/logi1.png";
import signatureImg from "../../assets/signature_Imgs/image.png";
import signatureImg2 from "../../assets/signature_Imgs/img_2.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

// Define the props interface
interface CertificateProps {
  username: string;
}

// Update the component to use TypeScript
const Certificate = forwardRef<HTMLDivElement, CertificateProps>(
  ({ username }, ref) => {
    return (
      <div ref={ref} className={styles.certficateContainer}>
        <div className={styles.contentCertficate}>
          <div className={styles.box_logo}>
            <img src={logoCertificate} alt="Logo" />
          </div>
          <div className={styles.headlineCertificate}>
            <h1>CERTIFICATE OF COMPLETION</h1>
            <i className={`${styles.iconAward} bi bi-award`}></i>
          </div>
          <div className={styles.subheadlineName}>
            <p>This is awarded to :</p>
          </div>
          <div className={styles.userName}>
            <h1>{username}</h1>
          </div>
          <div className={styles.aboutCertificate}>
            <p>
              For successfully completing a Brain IQ, containing 20 questions.
            </p>
          </div>
          <div className={styles.SignatureBox}>
            <div className={styles.zakariaSignature}>
              <div className={styles.signatureImg}>
                <img
                  className={styles.sighnClass}
                  src={signatureImg}
                  alt="Zakaria Signature"
                />
              </div>
              <div className={styles.ownersname}>
                <p>Zakaria Elaroussi</p>
              </div>
              <div className={styles.role}>
                <p>Owner Brain IQ, Software Engineer</p>
              </div>
            </div>
            <div className={styles.yassinSignature}>
              <div className={styles.signatureImg}>
                <img
                  className={styles.sighnClass}
                  src={signatureImg2}
                  alt="Yassin Signature"
                />
              </div>
              <div className={styles.ownersname}>
                <p>Yassine Rahhou</p>
              </div>
              <div className={styles.role}>
                <p>Owner Brain IQ, Software Engineer</p>
              </div>
            </div>
          </div>
          <div className={styles.dateCertificate}>
            <div className={styles.dateBox1}>
              <p>
                <span className={styles.datagetCef}>Date Release</span>:{" "}
                {new Date().toLocaleDateString("en-GB")}
              </p>
            </div>
            <div className={styles.dateBox2}>
              <p>
                POWERED BY: <span className={styles.appName}>BRAIN IQ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Certificate;
