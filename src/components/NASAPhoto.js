import React from 'react';
import ReactPlayer from 'react-player';

const NASAPhoto = (props) => {
  const { photoData } = props;

  return (
    <>
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Discover the cosmos! Each day a different image or photograph of our
        fascinating universe is featured, along with a brief explanation written
        by a professional astronomer.
      </p>

      {photoData && (
        <>
          <div className="media">
            {photoData.media_type === 'image' ? (
              <img src={photoData.url} alt={`APOD for ${photoData.date}`} />
            ) : (
              <ReactPlayer
                controls
                url={photoData.url}
                volume={0.5}
                alt={`APOD for ${photoData.date}`}
              />
            )}
          </div>
          <h2>{photoData.title}</h2>
          <p className="explanation">
            {photoData.explanation.replace(
              ' Explore Your Universe: Random APOD Generator',
              '',
            )}
          </p>
        </>
      )}
    </>
  );
};

export default NASAPhoto;
