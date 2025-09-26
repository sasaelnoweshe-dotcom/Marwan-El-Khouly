import React, { useState } from "react";
import "./contact.css";
export default function CreativeContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("https://server-kohl-chi-95.vercel.app/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 2000);
      } else {
        setError(data.msg || "حصل خطأ أثناء الإرسال");
      }
    } catch (err) {
      console.error(err);
      setError("فشل الاتصال بالسيرفر");
    }
  };

  return (
    <section id="contact" className="my-5">
      <form className="contact-form my-5" onSubmit={handleSubmit}>
        <h2> ادعمني برسالة على - Gmail</h2>

        <div>
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="ادخل اسمك"
          />
        </div>

        <div>
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ادخل بريدك الإلكتروني"
          />
        </div>

        <div>
          <label htmlFor="message">رسالتك</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="اكتب رسالتك هنا"
          />
        </div>

        <button type="submit">إرسال</button>

        {sent && <div className="sent-message">تم الإرسال بنجاح!</div>}
        {error && <div className="error-message">{error}</div>}
      </form>
    </section>
  );
}