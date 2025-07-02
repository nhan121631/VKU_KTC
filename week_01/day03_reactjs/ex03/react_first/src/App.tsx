import {
  MessageCircle,
  Phone,
  SearchCheckIcon,
  SettingsIcon,
} from "lucide-react";
import "./App.css";
import GetStaticButton from "./components/Bai1/GetStartedBtn";
import AppleButton from "./components/Bai1/AppleBtn";
import GoogleButton from "./components/Bai1/GoogleBtn";
import FacebookButton from "./components/Bai1/FaceBtn";
import SearchInput from "./components/Search";
import { CardScore } from "./components/Bai3/CardScore";
import { CardMU } from "./components/Bai3/CardMU";
import { CardInfo } from "./components/Bai3/CardInfo";
import CardDev from "./components/Bai4/CardDev";
import CardMaria from "./components/Bai4/CardMaria";
import { IoIosMore } from "react-icons/io";
import { CiCloudSun } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";
import CardLand from "./components/Bai7/CardLand";
import CardDate from "./components/Bai7/CardDate";
function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <GetStaticButton />
        <AppleButton />
        <GoogleButton />
        <FacebookButton />
      </div>

      <div className="container">
        <SearchInput left_icon={<SearchCheckIcon />} />
        <SearchInput
          label="Search"
          f_b={false}
          left_icon={<SearchCheckIcon />}
        />
        <SearchInput
          label="Text Field"
          f_b={true}
          left_icon={<SearchCheckIcon />}
        />
        <SearchInput
          label="Search in the web"
          f_b={false}
          left_icon={<SearchCheckIcon />}
          right_icon={<MessageCircle />}
        />
        <SearchInput
          label="Search Crypto"
          f_b={false}
          left_icon={<SearchCheckIcon />}
          right_icon={<SettingsIcon />}
        />
        <SearchInput
          label="Phone Number"
          f_b={false}
          right_icon={<Phone />}
          bg="green"
          border_icon="rec"
        />
        <SearchInput
          label="Search in the web"
          f_b={false}
          left_icon={<SearchCheckIcon />}
          right_icon={<MessageCircle />}
          bg="yellow"
        />
      </div>
      <div className="container">
        <CardScore />
        <CardMU />
        <CardInfo />
      </div>

      <div className="container">
        <CardDev />
        <CardMaria />
      </div>
      <div className="container">
        <CardLand
          image="/images/l1.png"
          name="Landescape"
          subname="423Km"
          nameBold="Bold"
          subnameBold="Bold"
          bg="bgYellow"
          icon={<IoIosMore />}
        />
        <CardLand
          image="/images/l2.png"
          name="Falset Mountains"
          subname="423Km, 3 Week"
          subnameBold="Bold"
          icon={<CiCloudSun />}
        />
        <CardLand
          image="/images/l3.png"
          name="Great day to schedule"
          subname="Lorem ipsum dolor sitamet."
          nameBold="Bold"
          bg="bgBlue"
          icon={<FaCirclePlay />}
        />
        <CardDate />
      </div>
    </div>
  );
}

export default App;
