import React, { useState } from "react";
import Authorizations from "./Authorizations";
import Headers from "./Headers";
import Params from "./Params";
import PreRequestScripts from "./PreRequestScripts";
import Settings from "./Settings";
import Tests from "./Tests";
import "./Table.css";

export default function Table() {
  const [showParams, setShowParams] = useState(false);
  const [showAuthorizations, setShowAuthorizations] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);
  const [showPre, setShowPre] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const handleClick = () => {
    setShowParams(true);
  };

  const handleClickAuth = () => {
    setShowAuthorizations(true);
  };

  const handleClickPre = () => {
    setShowPre(true);
  };

  const handleClickSetting = () => {
    setShowSetting(true);
  };

  const handleClickTest = () => {
    setShowTest(true);
  };

  const handleClickHead = () => {
    setShowHeaders(true);
  };
  return (
    <table>
      <thead>
        <tr>
          <th onClick={handleClick}>Params</th>

          <th onClick={handleClickAuth}>Authorizations</th>
          <th onClick={handleClickHead}>Headers</th>
          <th>Body</th>
          <th onClick={handleClickPre}>Pre-request Scripts</th>
          <th onClick={handleClickTest}>Tests</th>
          <th onClick={handleClickSetting}>Settings</th>
        </tr>
      </thead>
      {showParams && <Params />}
      {showAuthorizations && <Authorizations />}
      {showHeaders && <Headers />}
      {showPre && <PreRequestScripts />}
      {showSetting && <Settings />}
      {showTest && <Tests />}
    </table>
  );
}
