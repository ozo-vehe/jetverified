import imageIcon from '../assets/img_icon.png'
import camIcon from '../assets/cam_icon.png'
import DocumentVerification from './DocumentVerification'
import { useState } from 'react';

function AddDocument() {
  const [verification, setVerification] = useState(false)

  return (
    <div className="add-document">
      <div className="add-details">
        <h2>Add new document</h2>
        {verification ? (
          <DocumentVerification show={(show)=> { const {setShow} = show; setVerification(setShow)}}/>
          ):(
          <form>
            <div className="doucment-type">
              <label htmlFor="doc-type">Document Type</label>
              <select id="doc-type" required>
                <option value="NIN">NIN</option>
                <option value="NIN">BVN</option>
              </select>
            </div>

            <div className="id-number">
              <label htmlFor="doc-id-num">Identification Number</label>
              <input type="text" placeholder="Enter id number" required/>
            </div>

            <div className="doc-image">
              <div className="front">
                <img src={imageIcon} alt="Image icon" />
                <p>Upload an image of the<br></br> front of your document</p>
              </div>
              <div className="back">
                <img src={imageIcon} alt="Image icon" />
                <p>Upload an image of the<br></br> back of your document</p>
              </div>
            </div>

            <div className="facial-recog">
              <img src={camIcon} alt="Camera icon" />
              <p>Facial Recognition</p>
            </div>

            <button
              onClick={(e)=>{
                e.preventDefault()
                setVerification(true)          
              }}
            >Proceed</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddDocument