import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../utils/ContextApi";
const Home = () => {
  const { searchQuery } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = () => {
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button
              onClick={searchQueryHandler}
              className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
            >
              Google Search
            </button>
            <button
              onClick={() => window.open("https://doodles.google/")}
              className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
