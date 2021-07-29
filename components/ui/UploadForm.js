import React, { useState } from 'react';


import ImageProgressBar from './ImageProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    console.log(selected)
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };


  return (
    <form>
        <div className="flex justify-center my-5">
            <label htmlFor="file-input">
                <span className="dark:bg-blue-500 bg-blue-300 p-2 rounded">Upload Image</span>
                <input id="file-input" type="file" onChange={handleChange} className="hidden"/>
            </label>
        </div>

        <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ImageProgressBar file={file} setFile={setFile}/> }
        </div>
    </form>
    
  );
}

export default UploadForm;