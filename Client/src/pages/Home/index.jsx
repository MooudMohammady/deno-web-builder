import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <main className="h-screen grid place-content-center text-center">
      <img src="/logo.png" alt="this is logo" className="w-72"/>
      <h1 className="text-2xl mt-2">Deno Web Builder</h1>
      <h2>The best page builder you can find</h2>
      <Link to={"/Editor"} className="text-xl bg-teal-500 text-white rounded-lg py-2 mt-5 relative border-b-4 border-teal-700 hover:bg-teal-400 active:bg-teal-600 active:border-b-0 active:border-t-4 transition-colors">Get Start <span className="text-sm text-teal-900 font-bold absolute -top-3 -right-3 bg-red-400 rounded-lg p-1 animate-bounce">BETA</span></Link>
    </main>
   );
}
 
export default Home;