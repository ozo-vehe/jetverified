import { Link } from 'react-router-dom'
import document from '../assets/document.png'
import { useState, useEffect } from 'react'

function Dashboard({ userDetails, confimState, setConfirmState }) {
  
  const [username, setUsername] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userDetails");
    const initialValue = JSON.parse(saved);
    return initialValue.fullname || "user001";
  });
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
            <div className="doc-img">
              <img src={document} alt="Document Image" />
            </div>
            <p></p>
            <Link to={'add-document'}>Add New Document +</Link>
          </div>
        </div>
        <div className="empty-div">

        </div>
      </div>
    </div>
  );
}

export default Dashboard