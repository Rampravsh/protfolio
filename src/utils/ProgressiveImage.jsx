import { useState } from "react";

const ProgressiveImage = ({ lowResSrc, highResSrc }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "600px" }}>
      {/* Low resolution image (Chhoti size wali) */}
      <img
        src={lowResSrc}
        alt="thumbnail"
        className="w-80 h-80 object-cover rounded-full  animate-float"
        style={{
          filter: isLoaded ? "none" : "blur(10px)",
          transition: "filter 0.5s ease-out",
        }}
      />

      {/* High resolution image (Badi size wali) */}
      <img
        src={highResSrc}
        alt="full-res"
        onLoad={() => setIsLoaded(true)}
        className="w-80 h-80 object-cover rounded-full  animate-float"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressiveImage;
