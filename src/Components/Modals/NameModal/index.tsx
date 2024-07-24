import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./namemodal.module.scss";

interface NameModalProps {
  setIsNameModal: (value: boolean) => void;
  nameValue: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ setIsNameModal, nameValue }) => {
  // STATE TO GET NAME
  const [name, setName] = useState<string>("");

  const handleSendName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nameValue(name);
    setIsNameModal(false); // Close the modal after setting the name
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
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
              placeholder="Your Full Name"
              type="text"
              name="name"
              id="name"
              className={styles.inputName}
              onChange={handleChange}
              value={name}
            />
            <input className={styles.btnDone} type="submit" value="Done" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
