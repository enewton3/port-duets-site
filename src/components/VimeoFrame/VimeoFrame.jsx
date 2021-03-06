import React from "react";

export default function VimeoFrame() {
  return (
    <div
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
      }}
    >
      <iframe
        src="https://vimeo.com/event/894011/embed/3f2bb36501"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture;"
        title="vimeo event"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
}
