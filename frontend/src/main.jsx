import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>aaa</p>
    </>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)