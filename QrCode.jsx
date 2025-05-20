import React, { useState } from 'react'

export const QrCode = () => {
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [qrData, setQrData] = useState('http://www.dinesh.com')
    const [qrSize, setQrSize] = useState(150)
    
    async function generator() {
        setLoading(true)
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code:", error);
        } finally {
            setLoading(false)
        }
    }
    
    function downloadQrCode(filename) {
        const link = document.createElement('a');
        link.href = img;
        link.download = `${filename}-qrcode.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    return (
        <div className="app-container">
            <h1>QR CODE GENERATOR</h1>
            
            {loading ? (
                <p>Loading...</p>
            ) : (
                img && <img src={img} alt="QR Code" className="qr-code-image"/>
            )}
            
            <div>
                <label htmlFor="dataInput" className="input-label">
                    Data for QR CODE
                    <input 
                        type="text" 
                        value={qrData} 
                        id="dataInput" 
                        className="text-input" 
                        placeholder="Enter data here" 
                        onChange={(e) => setQrData(e.target.value)} 
                    />
                </label>
                
                <label htmlFor="sizeInput" className="input-label">
                    QR Code Size
                    <input 
                        type="number" 
                        value={qrSize} 
                        id="sizeInput" 
                        className="text-input" 
                        placeholder="Enter size here" 
                        onChange={(e) => setQrSize(e.target.value)} 
                    />
                </label>
                
                <div className="button-container">
                    <button 
                        className="generate-button" 
                        onClick={generator}
                        disabled={!qrData}
                    >
                        Generate QR CODE
                    </button>
                    
                    {img && (
                        <button 
                            className="download-button"
                            onClick={() => downloadQrCode("Dinesh")}
                        >
                            Download QR CODE
                        </button>
                    )}
                </div>
                
                <p className="footer">
                    Designed by Dinesh
                    <a href="http://www.dinesh.com" target="_blank" rel="noopener noreferrer">
                        Dinesh react
                    </a>
                </p>
            </div>
        </div>
    )
}