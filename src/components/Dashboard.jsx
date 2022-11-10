import { useState } from 'react'
import { Link } from 'react-router-dom'
import document from '../assets/document.png'

function Dashboard() {
  const [show, setShow] = useState(false)
  const showVerification=(data) => {
    const {show} = data
    setShow(show)
  }

  return (
    <div className="dashboard">
      <div className="verification">
        <h2>Welcome {username}, Your account is currently inactive</h2>
        <p>To activate your account, please complete the following steps:</p>
        <div className="verification-links">
          <Link to={'verify'}>Verify Email Address</Link>
          <Link to={'verify'}>Add Multi Factor Authentication</Link>
          <Link to={'verify'}>Verify Identity with Valid Documents</Link>
        </div>
      </div>

      <div className="other-actions">
        <div className="document-section">
          <h2>My Documents</h2>
          <div className="document-upload">
            <img src={document} alt="Document Image" />
            <p>You havent verified any documents</p>
            <button onClick={()=>{setShow(true)}}>Add New Document +</button>
          </div>
        </div>

        <div className="history-section">
          <h2>History</h2>
          <div className="history-img">
            <img src={history} alt="History Image" />
            <p>Entries will appear here when you use your JETVerify account to verify your identity</p>
          </div>
        </div>
      </div>
      {show ? (
        <AddDocument show={showVerification}/>
      ):(
        ""
      )}
    </div>
  );
}

export default Dashboard