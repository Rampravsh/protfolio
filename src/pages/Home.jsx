import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";
import profileImg from "/profile.png";

export default function Home() {
  const [text, setText] = useState("");
  const toRotate = ["Rampravesh"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">
              Hi, I’m <span className="text-[var(--primary)]">{text}</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              MERN Stack Developer building modern, fast web applications.
            </p>

            <div className="flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 bg-[var(--primary)] text-black rounded"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 border border-white/20 rounded"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={profileImg}
              alt="profile"
              className="w-80 h-80 object-cover rounded-full  animate-float"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
