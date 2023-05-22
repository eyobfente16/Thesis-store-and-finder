import React from "react";
import { useNavigate } from "react-router-dom";
import './UploadButton.css';
function UploadButton() {

  const navigate = useNavigate()

    return (
      <div className="upload-browse">
        <button onClick={()=>navigate('upload')} className="upload-button">Upload</button>
        <button onClick={()=>navigate('browse')} className="browse-button">Browse</button>
      </div>
    );
  }
  
  export default UploadButton;