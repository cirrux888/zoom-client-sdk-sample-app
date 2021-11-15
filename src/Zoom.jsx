/**
////////////////////////////////////////////////////////////////////////////////
//
// HUSEBY INC
// Copyright 2021 Huseby, Inc.
// All Rights Reserved.
//
// NOTICE: Huseby, Inc permits you to use this file in in accordance with the terms 
// of the license agreement accompanying it.  Do not modify, sell or distribute
// without the expressed, written consent of Huseby, Inc.
//
////////////////////////////////////////////////////////////////////////////////
*/

import React, { useContext, useEffect, useState } from "react";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import hmacSHA256 from "crypto-js/hmac-sha256";
import encBase64 from "crypto-js/enc-base64";
import { Base64 } from "js-base64";

const Zoom = () => {
  const zoomEmbeddedApp = React.useRef();

<<<<<<< HEAD
  // Replace with your username, email, meetingNumber and password
=======
  // const API_KEY = "9xpiSa7yTrO3-d7DQFo5CA";
  // const API_SECRET = "lSJVzpCpJ1Pek2GauKGpoStTgvCBBy0Jh67h";
>>>>>>> 2f8852e (Removed API_KEY and API_SECRET)
  const username = "quinn.wong@cirruxsolutions.com";
  const email = "quinn.wong@cirruxsolutions.com";
  const meetingNumber = 93624992170;
  const meetingPassword = "C0nn3ct";
  const role = 1;
  const lang = "en-US";

  React.useEffect(() => {
    const initMeetingApp = async () => {
      let signature = generateSignature();
      console.log("XXX signature", signature);
      const zmClient = ZoomMtgEmbedded.createClient();
      const tmpPort =
        window.location.port === "" ? "" : ":" + window.location.port;
      const avLibUrl =
        window.location.protocol +
        "//" +
        window.location.hostname +
        tmpPort +
        "/lib";

      const rootElement = zoomEmbeddedApp.current;
      console.log("XXX rootElement", rootElement);
      zmClient
        .init({
          debug: true,
          zoomAppRoot: rootElement,
          assetPath: avLibUrl,
          language: lang,
        })
        .then((e) => {
          console.log("init success", e);
        })
        .catch((e) => {
          console.log("init error", e);
        });

      console.log(
        "WebSDK Embedded Join...",
        process.env.REACT_APP_ZOOM_API_KEY,
        signature,
        meetingNumber,
        username,
        meetingPassword,
        email
      );
      zmClient
        .join({
          apiKey: process.env.REACT_APP_ZOOM_API_KEY,
          signature: signature,
          meetingNumber: meetingNumber,
          userName: username,
          password: meetingPassword,
          userEmail: email,
        })
        .then((e) => {
          console.log("join success", e);
        })
        .catch((e) => {
          console.log("join error", e);
        });
    };
    initMeetingApp();
  }, []);

  const generateSignature = () => {
    const timestamp = new Date().getTime() - 30000;
    const apiKey = process.env.REACT_APP_ZOOM_API_KEY;
    const apiSecret = process.env.REACT_APP_ZOOM_API_SECRET;
    const msg = Base64.encode(apiKey + meetingNumber + timestamp + role);
    const hash = hmacSHA256(msg, apiSecret);
    const signature = Base64.encodeURI(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${encBase64.stringify(
        hash
      )}`
    );

    return signature;
  };

  return (
    <>
      <div ref={zoomEmbeddedApp}></div>
    </>
  );
};

export { Zoom };
