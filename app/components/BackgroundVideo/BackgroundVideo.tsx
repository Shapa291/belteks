"use client";

import React from "react";
import "./styles.css";
import { motion } from "motion/react";

function BackgroundVideo() {
  return (
    <div className="video-background">
      <motion.video
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../../video/video.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео тег.
      </motion.video>
      <div className="video-text">
        <motion.h1
          initial={{ y: -100, opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="fw-400 logo"
        >
          <span className="fw-800">БЕЛ</span>ТЕКС
        </motion.h1>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="content fw-600"
        >
          Белорусский текстиль
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="content fw-600"
        >
          Традиции и стиль
        </motion.div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
