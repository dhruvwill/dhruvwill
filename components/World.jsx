"use client";
import React, { useEffect, useRef, createRef } from "react";
// import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import dynamic from "next/dynamic";
const World = () => {
  const ReactPhotoSphereViewer = dynamic(
    () =>
      import("react-photo-sphere-viewer").then(
        (mod) => mod.ReactPhotoSphereViewer
      ),
    {
      ssr: false,
    }
  );

  const photoSphereRef = useRef(null);

  useEffect(() => {
    if (photoSphereRef.current) {
      photoSphereRef.current.setCursor("url(/icons/360.svg) ");
    }
  }, [photoSphereRef]);

  return (
    <div className="h-auto w-full p-5 overflow-hidden !z-0">
      <div className="rounded-xl sm:w-3/4 h-full mx-auto border-4 overflow-hidden !z-0 relative">
        <ReactPhotoSphereViewer
          ref={photoSphereRef}
          className="cursor-360"
          src="/world_360.png"
          height={"80vh"}
          width={"100%"}
          defaultYaw={300}
          defaultZoomLvl={0}
          mousewheel={false}
        ></ReactPhotoSphereViewer>
      </div>
    </div>
  );
};

export default World;
