import imageIcon from '../assets/img_icon.png'
import camIcon from '../assets/cam_icon.png'
import DocumentVerification from './DocumentVerification'
import { useState } from 'react';
import { verifyNin } from '../utils/storedData'

function AddDocument({show}) {
  const [verification, setVerification] = useState(false)
  const [docType, setDocType] = useState("")
  const [idNum, setIdNum] = useState("")
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({})

  const showPopup = (data)=> {
    const {setShow} = data
    setVerification(setShow)
    show({
      show:setShow
    })
  }

  // Verify User Details
  const verify = async(type, num) => {
    if(!type || !num) return false
    try {
      return await verifyNin(type, num);
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="add-document">
      <div className="add-details">
        <h2>Add new document <span onClick={()=>{show({show:false})}}>X</span></h2>
        {verification ? (
          <DocumentVerification userData={{...data}} show={showPopup}/>
          ):(
          <form>
            <div className="doucment-type">
              <label htmlFor="doc-type">Document Type</label>
              <select id="doc-type" required
                onChange={(e) => {
                  setDocType(e.target.value)
                }}
              >
                <option value="">Select document type</option>
                <option value="NIN">National Identification Number</option>
                <option disabled value="BVN">Bank Verification Number</option>
              </select>
            </div>

            <div className="id-number">
              <label htmlFor="doc-id-num">Identification Number</label>
              <input
                maxLength={11}
                minLength={11}
                onChange={(e)=> {
                  setIdNum(e.target.value)
                }}
                type="text"
                placeholder="Enter id number"
                required
              />
            </div>

            <div className="doc-image">
              <div
                className="front"
                onClick={()=>{
                  alert("Feature coming soon")
                }}
              >
                <img src={imageIcon} alt="Image icon" />
                <p>Upload an image of the<br></br> front of your document</p>
              </div>
              <div
                className="back"
                onClick={()=>{
                  alert("Feature coming soon")
                }}
              >
                <img src={imageIcon} alt="Image icon" />
                <p>Upload an image of the<br></br> back of your document</p>
              </div>
            </div>

            <div
              className="facial-recog"
              onClick={()=>{
                alert("Feature coming soon!!!")
              }}
            >
              <img src={camIcon} alt="Camera icon" />
              <p>Facial Recognition</p>
            </div>

            <button
              onClick={async (e)=>{
                e.preventDefault()
                setLoading(true)
                console.log(docType, idNum)
                const userData = await verify(docType, idNum);
                console.log(userData)
                setData(userData)
                setLoading(false)
                setVerification(true)
              }}
            >
              {loading ? (
                <span className='loader'></span>
              ):(
                <span>Proceed</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddDocument