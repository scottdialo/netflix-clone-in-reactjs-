const WatchEverywhere = () => {
  return (
    <>
      <div className="animation-card watch-everywhere">
        <div className="watch-everywhere-video">
          <video
            src="images/watch-everywhere-video.m4v"
            autoPlay
            playsInline
            muted
            loop
            type="video/mp4"
          ></video>
        </div>
        <div className="watch-everywhere-content">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
      </div>
    </>
  );
};

export default WatchEverywhere;
