import { useState } from 'react'
import process from '../assets/progress.png'
import {dataFromIPFS} from '../utils/storedData'

function DocumentVerification({userData, show, verified}) {
  const [disable, setDisable] = useState(true);
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  const nameCheck = (fullname, fname, lname) => {
    if(fullname.includes(fname) && fullname.includes(lname)) return true
    else return false
  }
  const verificationCheck = async() => {
    const IPFSData = await dataFromIPFS();
    const {verificationStatus} = userData
    setUsers(IPFSData)
    console.log(users)

    if(verificationStatus == "FAILED") {
      const {description} = userData
      setStatus(`${verificationStatus}, ${description}...please try again another time`)
      return false;
    }

    else if(verificationStatus !== "FAILED") {
      const {firstname, surname, NINEmail} = userData
      const user = users.find((u)=>{u.email == NINEmail})
      console.log(user)

      if(NINEmail === user.email && nameCheck(user.fullname, firstname, surname)) {
        setDisable(false)
        verified({
          verified: true
        })
        console.log("true")
        return true
      }

      else {
        console.log("false")
        alert("Details submitted not correct not correct")
        return false
      }
    }
    // const NIN = 64556334920
  }

  return (
    <>
    <div className="doc-verification">
      <img src={process} alt="Verification Processing" />
      {!verificationCheck() ? (
        <p>Your document has been successfully verified</p>
      ):(
        <p>Your document has been submitted<br></br> and is awaiting verification<br></br>STATUS: {status}</p>
      )}
      <button
        disabled={disable}
        onClick={()=> {
          show({setShow:false})
        }}
      >Return to Dashboard</button>
    </div>
    </>
  )
}

export default DocumentVerification