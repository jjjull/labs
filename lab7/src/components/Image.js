import React, { useState } from 'react';



function Image() {
    const [imageExists, setImageExists] = useState(true);
    const [imageSize, setImageSize] = useState({ width: 600, height: 400 });

    // Збільшити зображення
    const increaseImage = () => {
        setImageSize({
            width: imageSize.width * 1.2,
            height: imageSize.height * 1.2,
        });
    };

    // Зменшити зображення
    const decreaseImage = () => {
        setImageSize({
            width: imageSize.width * 0.8,
            height: imageSize.height * 0.8,
        });
    };

    // Видалити зображення
    const removeImage = () => {
        setImageExists(false);
    };

    // Додати зображення
    const addImage = () => {
        if (!imageExists) {
            setImageExists(true);
            setImageSize({ width: 600, height: 400 }); // Початковий розмір
            alert("Зображення додано до контейнера");
        } else {
            alert("Зображення вже існує");
        }
    };

    return (
        <div>
            <div id="image-container">
                {imageExists && (
                    <img
                        id="vienna-image"
                        src="/img/Vienna-собор-Святого-Стефана-1024x667.jpg"
                        alt="Wien"
                        style={{
                            width: `${imageSize.width}px`,
                            height: `${imageSize.height}px`,
                        }}
                    />



                )}
            </div>
            <div>
                <button onClick={increaseImage}>Збільшити зображення</button>
                <button onClick={decreaseImage}>Зменшити зображення</button>
                <button onClick={removeImage}>Видалити зображення</button>
                <button onClick={addImage}>Додати зображення</button>
            </div>

        <h2>2 Завдання</h2>
        </div>
    );
}

export default Image;
