import { useState } from "react";
import styles from "./namemodal.module.scss";

export default function NameModal({ setIsNameModal, isNameModal, nameValue }) {
  // STATE TO GET NAME
  const [name, setName] = useState("");

  const handleSendName = (e) => {
    e.preventDefault();
    nameValue(name);
    setIsNameModal(false); // Close the modal after setting the name
  };

  return (
    <>
      <div className={styles.darkenMain}>
        <div className={styles.mainModal}>
          <div className={styles.nameModal}>
            <div className={styles.paraExplain}>
              <div className={styles.paraDiv}>
                <p>Fill in your name to receive your IQ test certificate!</p>
              </div>
              <div
                onClick={() => setIsNameModal(false)}
                className={styles.closeWindowDiv}
              >
                <p>X</p>
              </div>
            </div>
            <form onSubmit={handleSendName} className={styles.inputBtn}>
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
                className={styles.inputName}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input className={styles.btnDone} type="submit" value="Done" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
