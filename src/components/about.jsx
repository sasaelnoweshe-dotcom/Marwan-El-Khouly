import person from "../assets/person2.jpeg";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <div className="about-section  " id="me">
      <div className="about-card py-5 py-lg-5 px-3 px-lg-5">
        <div id="ffd" className="col-lg-7 col-md-6 col-12 p-5">
          <h2 className="fw-bold mb-5" style={{ fontSize: "2.1rem", color: "#23243a" }}>
            نبذة عني   - مروان الخولي        </h2>
          <p
            className="fst-italic text-muted mb-4"
            style={{ fontSize: "1rem" }}
          >
            أنا مروان الخولي، كاتب وباحث مهتم بالأدب والفكر. أؤمن أن الكلمة قوة
            قادرة على التغيير، وأسعى دائمًا أن تصل كتاباتي لكل من يبحث عن معنى
            جديد للحياة.
          </p>
          <div className="row g-4 mb-3">
            <div className="col-md-6 d-flex flex-column text-end">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <span className="fw-bold text-primary">
                    &gt; تاريخ الميلاد:
                  </span>{" 10 / 07 / 2008 "}
                  
                </li>
                <li className="mb-2">
                  <span className="fw-bold text-primary">&gt; المدينة:</span>
                  {" بني سويف، مصر" }
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex flex-column text-end">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <span className="fw-bold text-primary">&gt; العمر:</span> 17
                </li>
              </ul>
            </div>
          </div>
          <p
            className="mt-3 paragraph2"
            style={{
              fontSize: "1.12rem",
              color: "#222",
              lineHeight: "1.6",
              textAlign: "start",
            }}
          >
            بدأت رحلتي مع الكتابة منذ فترة طويلة، حين وجدت أن الورق هو المساحة
            الوحيدة اللي بتسمعني بصدق. أكتب لأعبّر عن نفسي، وأكتب أكثر لأتواصل
            مع القارئ وأترك أثرًا ولو بسيطًا تنوّعت كتاباتي بين المقالات
            الأدبية، الخواطر، والقصص القصيرة. أسعى أن تكون كل كلمة نابعة من
            تجربة صادقة، أو فكرة أؤمن بها وأتمنى أن تصل للقارئ بوضوح.
          </p>
        </div>
                {/* Profile image */}
        <div className="col-lg-5 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center mb-4 mb-md-0">
          <div className="about-img-box">
            <img className="about-img" src={person} alt="profile" />
          </div>
          {/* Social media section */}
          <div className="w-100 d-flex justify-content-center">
            <div className="about-social">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
