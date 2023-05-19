import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerateClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/generate-image/');
      const url = await response.text();
      setImageUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Генератор изображений Казахстана</h1>
        <button onClick={handleGenerateClick}>Сгенерировать изображение</button>
        {/* условный рендеринг изображения */}
        {imageUrl && <img src={imageUrl} alt="Сгенерированное изображение" />}
      </header>
    </div>
  );
}

export default App;
