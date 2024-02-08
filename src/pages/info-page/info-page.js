// InfoPage.js
import React from 'react';
import StandardBtn from "../../components/common/buttons/standard-btn";
import styles from "./info-page.css"; // Passe den Pfad entsprechend deiner Dateistruktur an

const InfoPage = () => {
  const handleBtnClick = () => {
    alert('Hallo von der Info Seite');
  };

  return (
    <div className={styles.infoPage}>
      <h2>Info Seite</h2>
      <StandardBtn
        onClick={handleBtnClick}
        text="Klick mich auf der Info Seite"
        style={{ background: 'blue', color: 'white' }} // Beispiel für benutzerdefinierten Style
      />
    </div>
  );
};

export default InfoPage;
