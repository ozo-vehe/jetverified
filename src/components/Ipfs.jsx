import React, { useState, useReducer } from 'react'
import { Web3Storage } from 'web3.storage'

export default function Home () {
  const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI4NjQxYWIxZjQ4Q2NEM2JiMDYzZjRBMmVkOGE4MGRjQzAzZGMzQzUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjgwMzI4ODkwNDMsIm5hbWUiOiJqZXR2ZXJpZmllZCJ9.9y6k8gJ9z_63quon_LngByW1G9pEEWZpL_wzPzZnVno')
  const [files, setFiles] = useState([{
    path: 'hello.txt',
    content: new TextEncoder().encode('Hello Web3.Storage!')
  }])

  async function handleSubmit (event) {
    // don't reload the page!
    event.preventDefault()

    showMessage('> 📦 creating web3.storage client')
    const client = new Web3Storage({ token })

    showMessage('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
    const cid = await client.put(files, {
      onRootCidReady: localCid => {
        showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
        showMessage('> 📡 sending files to web3.storage ')
      },
      onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
    })
    showMessage(`> ✅ web3.storage now hosting ${cid}`)
    showLink(`https://dweb.link/ipfs/${cid}`)

    showMessage('> 📡 fetching the list of all unique uploads on this account')
    let totalBytes = 0
    for await (const upload of client.list()) {
      showMessage(`> 📄 ${upload.cid}  ${upload.name}`)
      totalBytes += upload.dagSize || 0
    }
    showMessage(`> ⁂ ${totalBytes.toLocaleString()} bytes stored!`)
  }

  function showLink (url) {
    showMessage(<span>&gt; 🔗 <a href={url}>{url}</a></span>)
  }

  return (
    <>
      <header>
        <h1>⁂
          <span>web3.storage</span>
        </h1>
      </header>
      <form id='upload-form' onSubmit={handleSubmit}>
        <label htmlFor='token'>Paste your web3.storage API token here</label>
        {/* <input type='password' id='token' onChange={e => setToken(e.target.value)} required /> */}
        <label htmlFor='filepicker'>Pick files to store</label>
        {/* <input type='file' id='filepicker' name='fileList' onChange={e => setFiles(e.target.files)} multiple required /> */}
        {/* <input type='submit' value='Submit' id='submit' /> */}
        <button type="submit">submit</button>
      </form>
      <div id='output'>
        &gt; ⁂ waiting for form submission...
        {messages.map((m, i) => <div key={m + i}>{m}</div>)}
      </div>
    </>
  )
}