const Vanjivideo = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://drive.google.com/file/d/1dt1NYwilEI7ApqWs5TdM0uykoMzA8lwh/preview"
        width="100%"
        height="400"
        allow="autoplay"
        className="max-w-5xl w-full rounded-xl shadow-lg aspect-video"
        style={{ minHeight: 220 }}
        title="Vanji Video"
      ></iframe>
    </div>
  );
};

export default Vanjivideo;
