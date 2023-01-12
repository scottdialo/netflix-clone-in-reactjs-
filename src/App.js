import "./components/styles.css";
import Header from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import WatchOnTv from "./components/WatchOnTv";
import WatchEverywhere from "./components/WatchEverywhere";
import ProfileForKids from "./components/ProfileForKids";
import DownloadYourShows from "./components/DownloadYourShows";
import { Faqs } from "./components/Faqs";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <WatchOnTv />
      <WatchEverywhere />
      <ProfileForKids />
      <DownloadYourShows />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
