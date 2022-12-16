import React, { useRef } from "react";
import { AddIcon } from "../components/Icons";

export const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file.size > 1024)
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <label>
        NFT Asset
        <label for="file-input">
          <AddIcon color="#2f4c30" />
          Upload images
          <input
            id="file-input"
            /* className="file-input" */
            type="file"
            onChange={handleFileInput}
          />
          <button
            onClick={(e) => fileInput.current && fileInput.current.click()}
            className="file-btn"
          />
        </label>
      </label>
    </div>
  );
};
