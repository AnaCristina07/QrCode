import {useState} from 'react';
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(Link_url){
    QRCodeLink.toDataURL(Link_url,{
     width:600,
     margin: 3,
    }, function(err,url){
      setQrcodeLink(url);
    })
  }

function hanleQrcode(e){
  setLink(e.target.value);
}

  return (
  <div className='cor'>
  <div className="container">
    <QRCode
    value={link}
    />

    <input 
    className="input"
    placeholder="Digite seu link..."
    value={link}
    onChange={ (e) => hanleQrcode(e)}
    />

  <a href={qrcodeLink} download={'qrcode.png'}>Baixar QrCode</a>
  </div>
    </div>
  );
}

export default App;