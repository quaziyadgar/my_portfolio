// import React from 'react'

import { useEffect, useState } from "react";

export const useCertificates = () => {
  const [certdata, setCertidata] = useState([]);

  const CERTIFICATE_FOLDER_ID = "1D7uR2npSgWTJqQP2s7fpa79X8bvLGINK";
  const API_KEY = "AIzaSyD3dM6G4MXyKN89m12TWds8pEkk8QeEGSo";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/drive/v3/files?q='${CERTIFICATE_FOLDER_ID}' in parents&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
          setCertidata(data.files);
      })
      .catch((error) => console.error("Error fetching files:", error));
  },[]);

  return { certdata };
};
