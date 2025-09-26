import React from "react";
import "./Hero.css"; // هنضيف ستايل خارجي بسيط
import videoSrc from '../assets/wha.mp4' // تأكد من مسار الفيديو

const Hero = () => {
  return (
    <section className="hero">
      {/* الفيديو الخلفية */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoSrc} type="video/mp4" />
        متصفحك لا يدعم الفيديو
      </video>

      {/* النص الترحيبي */}
      <div className="hero-overlay">
        <h1>أهلاً بك في موقع الخاص بكتابات <br /><span className="name">مروان الخولي...</span></h1>
  <p className="bounce-in">سعيدين بزيارتك <span className="star-animate">🌟</span></p>
      </div>
    </section>
  );
};

export default Hero;
