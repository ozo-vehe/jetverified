import process from '../assets/progress.png'

function DocumentVerification({show}) {
  return (
    <div className="doc-verification">
      <img src={process} alt="Verification Processing" />
      <p>Your document has been submitted<br></br> and is awaiting verification</p>
      <button
        onClick={()=> {
          show({setShow:false})
        }}
      >Return to Dashboard</button>
    </div>
  )
}

export default DocumentVerification