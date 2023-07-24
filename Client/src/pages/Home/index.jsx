import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main
      className="h-screen grid place-content-center text-center"
      style={{
        backgroundImage: "url(/background.svg)",
        backgroundSize: "cover",
      }}>
      <div className="backdrop-blur flex flex-col items-center p-5 rounded-xl bg-gradient-to-tr from-teal-600/20 shadow-lg border border-white/20 text-white max-w-sm">
        <img
          src="/logo.png"
          alt="this is logo"
          className="w-72 drop-shadow-lg"
          data-aos="zoom-in-up"
        />
        <h1 className="text-4xl mt-2">Deno Web Builder</h1>
        <h2 className="text-gray-200">Introducing the best way to create mesmerizing websites. DWB, where your imagination knows no bounds and your ideas take flight. With us, you'll journey into the future, as we provide the tools you need to achieve success.</h2>
        <Link
          to={"/Editor"}
          className="text-xl bg-teal-500 rounded-lg py-2 mt-5 relative border-b-4 border-teal-700 hover:bg-teal-400 active:bg-teal-600 active:border-b-0 active:border-t-4 transition-colors w-full">
          Get Start{" "}
          <span className="text-sm text-teal-900 font-bold absolute -top-3 -right-3 bg-red-400 rounded-lg p-1 animate-bounce">
            BETA
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
