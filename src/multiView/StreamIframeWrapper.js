function StreamIframeWrapper({ stream }) {
  const videoIframeSrc = `https://www.youtube.com/embed/${stream.room}`;
  const chatRoomIframeSrc = `https://gaming.youtube.com/live_chat?v=${stream.room}&embed_domain=${window.location.hostname}`;

  return (
    <div className="wrapper flex h-full">
      <div className="w-10/12 flex-1">
        <iframe
          title="This is a unique title"
          src={videoIframeSrc}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="fullscreen;"
        />
      </div>
      <div className="w-2/12 flex-none">
        <iframe
          title="chatRoom"
          src={chatRoomIframeSrc}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default StreamIframeWrapper;
