import { useState } from "react";
import images from "../../assets/images";

function ImageAvartar({ src, alt, ...props }) {
  const [fallback, setFallback] = useState("");
  return (
    <img
      src={fallback || src}
      alt={alt} {...props}
      onError={() => {
        setFallback(images.avatarDefault)
      }}
    />
  );
}

export { ImageAvartar };