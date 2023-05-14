/* eslint-disable */
import { useRouter } from "next/router";
import Image from "next/image";
import brFlag from "../public/images/Flag_Brazil.svg";
import usFlag from "../public/images/Flag_USA.svg";
import RootLayout from "./layout";
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

const SelectLanguage = () => {
  const router = useRouter();

  const setLanguage = (lang: string) => {
    localStorage.setItem("language", lang);

    router
      .push("/home", "/home", { locale: lang })
      .then(() => console.log("Navigation successful!"))
      .catch((error) => console.error("An error occurred:", error));
  };

  const options = {
    preset: "seaAnemone",
  };

  const initialize = async (instance: any) => {
    loadSeaAnemonePreset(instance);
  };

  return (
    <RootLayout>
      <div className="opacity-40">
        <Particles options={options} init={initialize} />
      </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="mb-8 rounded-lg bg-gray-800 bg-opacity-75 p-12">
          <h1 className="mb-8 text-center text-2xl font-bold">
            Choose your language
          </h1>
          <div className="flex cursor-pointer justify-center space-x-8">
            <div
              onClick={() => setLanguage("en")}
              className="transform rounded-lg border-4 border-transparent  p-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-gray-800 hover:bg-gray-700"
            >
              <Image src={usFlag} alt="English" width={160} height={100} />
              <p className="text-center text-xl">English</p>
            </div>
            <div
              onClick={() => setLanguage("pt")}
              className="transform rounded-lg border-4 border-transparent p-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-gray-800 hover:bg-gray-700"
            >
              <Image src={brFlag} alt="English" width={155} height={100} />
              <p className="text-center text-xl">Português</p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default SelectLanguage;
