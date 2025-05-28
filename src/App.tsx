import { Fragment, useEffect, useState } from "react";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import { BackgroundBeams } from "./components/Header/BackgroundBeams";
import { Loader } from "./components/Loader/Loader";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [atTop, setAtTop] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setAtTop(window.scrollY <= 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <AnimatePresence>{showLoader && <Loader />}</AnimatePresence>
      <AnimatePresence>
        {!showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <BackgroundBeams />
            <div
              className={`top-[0px] z-10 h-8 w-full sticky bg-base-200 ${
                atTop ? "hidden" : ""
              }`}
              aria-hidden={true}
            ></div>
            <main className="bg-base-200">
              <div className="sticky top-[2rem] z-10">
                <div className="mx-4">
                  <Navbar />
                </div>
              </div>
              <Header />
              <Projects />
              <Experience />
              <Skills />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
