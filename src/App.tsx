import { useState } from "react";
import StartPage from "./components/StartPage";
import MainPage from "./components/MainPage";

export default function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleStartPageClick = () => {
    setShowMainPage(true);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[393px] h-[852px] relative overflow-hidden bg-white shadow-xl">
        {!showMainPage ? (
          <StartPage onClick={handleStartPageClick} />
        ) : (
          <MainPage />
        )}
      </div>
    </div>
  );
}