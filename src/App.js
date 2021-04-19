import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import './App.css';
import NASAPhoto from './components/NASAPhoto';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function App() {
  const [photoData, setPhotoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [calendarDate, setDate] = useState(photoData ? photoData.date : null);

  const formatDate = (date) => {
    let d = date == null ? new Date() : new Date(date);
    let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(API_URL + '&date=' + formatDate(calendarDate))
        .then((res) => {
          setPhotoData(res.data);
        })
        .catch((err) => {
          console.log(err);
          return err;
        })
        .finally(() => setIsLoading(false));
    };

    fetchPhoto();
  }, [calendarDate, isLoading]);

  return (
    <div className="App">
      <NASAPhoto photoData={photoData} />
      <div>
        <span>Choose a date: </span>{' '}
        <DatePicker onChange={setDate} value={calendarDate} />
      </div>
    </div>
  );
}

export default App;
