// import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

// const getAccessToken = () => { return process.env.REACT_APP_STORAGE_API_KEY }
// const makeStorageClient = () => { return new Web3Storage({ token: getAccessToken() }) }
// const client = makeStorageClient();
const url = "https://jsonplaceholder.typicode.com/users"

export const verifyNin = async(docType, docId) =>{
  console.log("Loading...")
  let searchType;
  if(docType == "NIN") { searchType = "NIN-SEARCH" }
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      userid: '1668011372112',
      apiKey: 'DTHswgJl1K3roPN5FeVp',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      searchParameter: '02730846093',
      verificationType: searchType,
      transactionReference: ""
    })
  };

  try {
    console.log("Fetching...")
    const data = await fetch('https://api.verified.africa/sfx-verify/v3/id-service/', options)
    const result =  await data.json()
    // console.log(result.response[0])
    const { email, firstname, surname, gender} = result.response[0]
    const userData = {
      NINEmail: email,
      firstname,
      surname,
      gender
    }
    console.log(userData)
    return userData
  } catch(err) {
    console.log(err)
  } 
}

export const dataFromIPFS = async() => {
  try {
    const data = await fetch(url)
    const res = await data.json();
    return res;
  }
  catch(error) {
    console.log(error)
  }
}