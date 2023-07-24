import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [tab, setTab] = useState("main");
  return (
    <main
      className="h-screen grid place-content-center text-center background-animation"
      style={{
        backgroundImage: "url(/background.svg)",
        backgroundSize: "cover",
      }}>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 text-white">
        ---
        <button
          className={`px-2 py-1 hover:text-teal-500 transition ${tab === "main" ? "border-b-4" : "border-b-0"} border-teal-500`}
          onClick={() => setTab("main")}>
          Main
        </button>
        <button
          className={`px-2 py-1 hover:text-teal-500 transition ${tab === "contact-us" ? "border-b-4" : "border-b-0"} border-teal-500`}
          onClick={() => setTab("contact-us")}>
          ContactUs
        </button>
        ---
      </header>
      {tab === "main" ? (
        <div
          className="backdrop-blur p-5 rounded-xl bg-gradient-to-tr from-teal-600/20 shadow-lg border border-white/20 text-white max-w-sm flex flex-col items-center">
          <img
            src="/logo.png"
            alt="this is logo"
            className="w-72 drop-shadow-lg"
            data-aos="fade-up"
          />
          <h1 className="text-4xl mt-2" data-aos="fade-up" data-aos-delay="200">Deno Web Builder</h1>
          <h2 className="text-gray-200" data-aos="fade-up" data-aos-delay="300">
            Introducing the best way to create mesmerizing websites. DWB, where
            your imagination knows no bounds and your ideas take flight. With
            us, you'll journey into the future, as we provide the tools you need
            to achieve success.
          </h2>
          <Link
          data-aos="fade-up"
          data-aos-delay="500"
            to={"/Editor"}
            className="text-xl bg-teal-500 rounded-lg py-2 mt-5 relative border-b-4 border-teal-700 hover:bg-teal-400 active:bg-teal-600 active:border-b-0 active:border-t-4 transition-colors w-full">
            Get Start{" "}
            <span className="text-sm text-teal-900 font-bold absolute -top-3 -right-3 bg-red-400 rounded-lg p-1 animate-bounce">
              BETA
            </span>
          </Link>
        </div>
      ) : (
        <div
          className="backdrop-blur p-5 rounded-xl bg-gradient-to-tr from-teal-600/20 shadow-lg border border-white/20 text-white max-w-sm flex flex-col items-center">
          <h1>contact us</h1>
        </div>
      )}
    </main>
  );
};

export default Home;
