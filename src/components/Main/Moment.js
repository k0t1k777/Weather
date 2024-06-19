import React, { useState, useEffect } from 'react';
import moment from 'moment'; // импортируем Moment.js

const WeatherApp = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Функция для обновления текущего времени с интервалом 1 минута
        const updateTime = () => {
            const formattedTime = moment().format('h:mm A'); // Форматируем текущее время с AM/PM
            setCurrentTime(formattedTime); // Обновляем состояние с текущим временем
        };

        // Вызываем функцию сразу и затем каждую минуту
        updateTime();
        const interval = setInterval(updateTime, 60000); // Обновляем каждую минуту

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="weather-app">
            <h1>Погода в вашем городе</h1>
            <div className="time-display">
                <p>Текущее время: {currentTime}</p>
            </div>
            {/* Добавьте другие компоненты для отображения погоды */}
        </div>
    );
};

export default WeatherApp;
