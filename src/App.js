import React, { useState } from "react";

// تذكر يا محمد: استبدل البيانات اللي تحت دي ببيانات الـ Firebase Config بتاعتك اللي نسختها!
const firebaseConfig = {
  apiKey: "ضع_هنا_الـ_apiKey_بتاعك",
  authDomain: "rattel-839ff.firebaseapp.com",
  projectId: "rattel-839ff",
  storageBucket: "rattel-839ff.appspot.com",
  messagingSenderId: "687730534452",
  appId: "1:687730534452:web:918a704a4987a1a6468261",
};

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const packages = [
    { title: "باقة شهرية (٤ حصص)", price: "399 جنيه", popular: false },
    { title: "باقة شهرية (٨ حصص)", price: "799 جنيه", popular: false },
    { title: "باقة ٣ شهور (٢٨ حصة)", price: "2799 جنيه", popular: false },
    { title: "باقة ٦ شهور (٤٨ حصة)", price: "4799 جنيه", popular: true },
    { title: "باقة سنوية (٩٦ حصة)", price: "9599 جنيه", popular: false },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: "#064e3b",
        color: "#fff",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        direction: "rtl",
        padding: "20px",
      }}
    >
      {/* الهيدر واللوجو */}
      <center style={{ marginTop: "40px" }}>
        <div
          style={{
            border: "2px solid #d4af37",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#d4af37",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          رتل
        </div>
        <h1 style={{ color: "#d4af37", fontSize: "32px", marginTop: "20px" }}>
          ابدأ رحلتك في حفظ القرآن بإتقان
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.8" }}>
          تعلم • احفظ • راجع • بإشراف معلمين متخصصين
        </p>
      </center>

      {/* كروت الأسعار */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "50px",
          padding: "10px",
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              border: pkg.popular
                ? "3px solid #d4af37"
                : "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              padding: "25px",
              width: "250px",
              textAlign: "center",
              backgroundColor: pkg.popular
                ? "rgba(214,175,55,0.1)"
                : "rgba(255,255,255,0.05)",
            }}
          >
            {pkg.popular && (
              <div
                style={{
                  backgroundColor: "#d4af37",
                  color: "#064e3b",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  display: "inline-block",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                الأكثر طلباً
              </div>
            )}
            <h3>{pkg.title}</h3>
            <h2 style={{ color: "#d4af37", fontSize: "28px" }}>{pkg.price}</h2>
            <button
              onClick={() => {
                setSelectedPkg(pkg);
                setShowModal(true);
              }}
              style={{
                backgroundColor: "#d4af37",
                color: "#064e3b",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "15px",
                width: "100%",
              }}
            >
              اشتراك الآن
            </button>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة للدفع والتسجيل */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              color: "#333",
              padding: "30px",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "450px",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {!formSubmitted ? (
              <>
                <h3
                  style={{
                    color: "#064e3b",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  خطوات الاشتراك في: {selectedPkg?.title}
                </h3>
                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <p>
                    <b>1. الدفع عبر فودافون كاش أو إيستا باي:</b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <span>
                      رقم الكاش: <b style={{ color: "#064e3b" }}>01010848410</b>
                    </span>
                    <button
                      onClick={() => handleCopy("01010848410")}
                      style={{
                        marginRight: "auto",
                        padding: "3px 8px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      نسخ
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      إيستا باي: <b style={{ color: "#064e3b" }}>shehab_67</b>
                    </span>
                    <button
                      onClick={() => handleCopy("shehab_67")}
                      style={{
                        marginRight: "auto",
                        padding: "3px 8px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      نسخ
                    </button>
                  </div>
                  {copied && (
                    <p
                      style={{
                        color: "green",
                        fontSize: "12px",
                        textAlign: "center",
                        marginTop: "5px",
                      }}
                    >
                      تم النسخ بنجاح!
                    </p>
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p>
                    <b>2. بيانات التأكيد بعد الدفع:</b>
                  </p>
                  <input
                    type="text"
                    placeholder="الاسم الكامل للطالب"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="رقم الواتساب"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <input
                    type="number"
                    placeholder="العمر"
                    required
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <label style={{ fontSize: "12px", color: "#666" }}>
                    ارفع صورة إيصال التحويل:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    style={{ fontSize: "14px" }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#064e3b",
                      color: "#fff",
                      border: "none",
                      padding: "12px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    تأكيد وإرسال الطلب
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h2 style={{ color: "green" }}>تم إرسال طلبك بنجاح! 🎉</h2>
                <p>
                  سنتواصل معك عبر الواتساب خلال دقائق لتفعيل الحساب وبدء الحصص.
                </p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setFormSubmitted(false);
                  }}
                  style={{
                    backgroundColor: "#064e3b",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  إغلاق
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* زر الواتساب العائم */}
      <a
        href="https://wa.me/201010848410"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25d366",
          color: "#fff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        Talk
      </a>
    </div>
  );
}
