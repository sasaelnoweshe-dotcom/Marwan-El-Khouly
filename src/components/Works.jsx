import React, { useState } from "react";
import "./Works.css"; 
import wadaa from "../assets/photos/wadaa.jpg";
import quote from "../assets/photos/quote.jpg"; 
import story from "../assets/photos/القصه.jpg";
import x from "../assets/photos/elhob.jpg";
import k from "../assets/photos/khawater.jpg";
import t1 from "../assets/photos/time 1.jpg";
import t2 from "../assets/photos/time 2.jpg";
import wr from "../assets/photos/wr.jpg";
import wr2 from "../assets/photos/wr2.jpg";
import age from "../assets/photos/age.jpg";
import age2 from "../assets/photos/age2.jpg";
// صور الأعمال (ضع الصور في public/assets)
const worksImages = [
  { src: wadaa, alt: "الوداع المؤلم", info: "كتابة عن الوداع وأثره في حياتنا." },
  { src: quote, alt: "اقتباسات ملهمة", info: "اقتباسة عن عزة النفس." },
  { src: story, alt: "القصه الحزينة", info: "المشهد المؤلم من مسلسل مملكة الحرير ." },
  { src: x, alt: "أنا لم اعرف الحب الا بك", info: "كتابة عن الحب ." },
  { src: k, alt: "قلبي يهواها", info: "كتابة عن الحب و الهوى ." },
  { src: t1, alt: "الرحيل", info: "كتابة عن الرحيل." },
  { src: t2, alt: "الرحيل 2", info: "كتابة عن الرحيل." },
  { src: wr, alt: "أمير الفرسان", info: "كتابة عن أمير الفرسان" },
  { src: wr2, alt: "أمير الفرسان 2", info: "كتابة عن أمير الفرسان" },
  { src: age, alt: "العمر كالقطار", info: "قصة عن العمر." },
  { src: age2, alt: "العمر كالقطار 2", info: "قصة عن العمر." }
];

const INITIAL_COUNT = 6;

const Works = () => {
  const [modalImg, setModalImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, worksImages.length));
  };

  return (
    <> 
      <div id="works" className="container my-5 bg-white p2-2 py-5 rounded-4 shadow-lg">
        <h1 className="mb-4 text-center text-dark fw-bold ">أعمالي</h1>
        <div className="row g-4 justify-content-center">
          {worksImages.slice(0, visibleCount).map((img, idx) => (
            <div className="col-sm-6 col-md-5 col-lg-4" key={idx}>
              <div className="card shadow-lg border-0 h-100 position-relative work-card">
                <img
                  src={img.src}
                  className="card-img-top"
                  alt={img.alt}
                  style={{ height: "260px", objectFit: "cover", borderRadius: "18px", cursor: "pointer" }}
                  onClick={() => setModalImg(img)}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{img.alt}</h5>
                </div>
                {/* معلومات عند الهوفر */}
                <div className="work-info-overlay">
                  <p className="m-0">{img.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < worksImages.length && (
          <div className="text-center mt-4">
            <br />
            <button className="btn btn-warning px-4 py-2" onClick={handleShowMore}>
              عرض المزيد
            </button>
          </div>
        )}

        {/* مودال الصورة الكبيرة */}
        {modalImg && (
          <div className="work-modal" onClick={() => setModalImg(null)}>
            <div className="work-modal-content">
              <img src={modalImg.src} alt={modalImg.alt} style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "16px" }} />
              <h5 className="mt-3 text-center text-light">{modalImg.alt}</h5>
              <p className="text-center text-light">{modalImg.info}</p>
              <button className="btn btn-warning mt-2" onClick={() => setModalImg(null)}>إغلاق</button>
            </div>
            
          </div>
        )}
        <br />
        <p className="text-dark">لمزيد من الاعمال زوروا <a href="https://web.facebook.com/profile.php?id=61571662892951&_rdc=1&_rdr" id='more'>كتابات مروان الخولي </a></p>
      </div>
    </>
  );
};

export default Works;
