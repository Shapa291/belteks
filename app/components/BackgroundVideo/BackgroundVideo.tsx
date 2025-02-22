"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";
import { motionConfig } from "@/lib/utils";

function BackgroundVideo() {
  return (
    <motion.div   {...motionConfig.fadeInSoft}  className="video-background">
      <video
     
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../../video/videoo.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </video>
      <div className="video-text">
        <motion.h1 {...motionConfig.scaleFadeIn("up")} className="fw-400 logo">
          <span className="fw-800">БЕЛ</span>ТЕКС
        </motion.h1>
        <motion.div
          {...motionConfig.scaleFadeIn("down")}
          className="content fw-600"
        >
          Белорусский текстиль
        </motion.div>
        <motion.div
          {...motionConfig.scaleFadeIn("down")}
          className="content fw-600"
        >
          Традиции и стиль
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BackgroundVideo;
