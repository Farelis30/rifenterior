"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const MediaSlider = ({
  media,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedMedia, setLoadedMedia] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === media.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? media.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = () => {
    setLoading(true);
    const loadPromises = media.map((item) => {
      return new Promise((resolve, reject) => {
        if (item.type === "image") {
          const img = new Image();
          img.src = item.src;
          img.onload = () => resolve(item);
          img.onerror = reject;
        } else if (item.type === "video") {
          const video = document.createElement("video");
          video.src = item.src;
          video.onloadeddata = () => resolve(item);
          video.onerror = reject;
        }
      });
    });

    Promise.all(loadPromises)
      .then((loadedMedia) => {
        setLoadedMedia(loadedMedia);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load media", error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areMediaLoaded = loadedMedia.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areMediaLoaded && children}
      {areMediaLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areMediaLoaded && (
        <AnimatePresence>
          {loadedMedia[currentIndex].type === "image" ? (
            <motion.img
              key={currentIndex}
              src={loadedMedia[currentIndex].src}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="media h-full w-full absolute inset-0 object-cover object-center"
            />
          ) : (
            <motion.video
              key={currentIndex}
              src={loadedMedia[currentIndex].src}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="media h-full w-full absolute inset-0 object-cover object-center"
              autoPlay
              muted
              loop
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
