import InfoPage from "./info-page";
import React from 'react';
import StandardBtn from "../../components/common/buttons/standard-btn";
import LoadingDiv from "../../components/common/templates/loading-div";

const InfoPage = () => {
    return (
      <div>
        <h2>Info Seite</h2>
        <LoadingDiv />
        <StandardBtn />
      </div>
    );
  };

export default InfoPage;
