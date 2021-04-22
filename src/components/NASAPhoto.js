import React from 'react';
import ReactPlayer from 'react-player';
import { InfoContainer, MediaSummary } from '../Styles';

const NASAPhoto = (props) => {
  const { photoData } = props;

  return (
    <InfoContainer>
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
          <MediaSummary>
            {photoData.explanation.replace(
              ' Explore Your Universe: Random APOD Generator',
              '',
            )}
          </MediaSummary>
        </>
      )}
    </InfoContainer>
  );
};

export default NASAPhoto;
