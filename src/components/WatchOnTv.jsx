const WatchOnTv = () => {
  return (
    <>
      <div className="animation-card watch-on-tv">
        <div className="watch-on-tv-content">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="watch-on-tv-video">
          <video
            src="images/watch-on-tv-video.m4v"
            autoPlay
            playsInline
            muted
            loop
            type="video/mp4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default WatchOnTv;
