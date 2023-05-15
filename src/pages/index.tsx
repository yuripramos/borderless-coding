/* eslint-disable */
import { useRouter } from "next/router";
import Image from "next/image";
import brFlag from "../public/images/Flag_Brazil.svg";
import usFlag from "../public/images/Flag_USA.svg";
import RootLayout from "./layout";
import Particles from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import { useWindowSize } from "../hooks/useWindowsSize";

const SelectLanguage = () => {
  const size = useWindowSize();
  const router = useRouter();
  const width = size.width;

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
              {width && width < 420 ? (
                <span style={{ fontSize: "5em" }}>🇺🇸</span>
              ) : (
                <Image
                  src={usFlag}
                  alt="English"
                  width={160}
                  style={{ minHeight: "150px" }}
                />
              )}
              <p className="text-center text-xl">English</p>
            </div>
            <div
              onClick={() => setLanguage("pt")}
              className="transform rounded-lg border-4 border-transparent p-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-gray-800 hover:bg-gray-700"
            >
              {width && width < 420 ? (
                <span style={{ fontSize: "5em" }}>🇧🇷</span>
              ) : (
                <Image
                  src={brFlag}
                  alt="Portuguese"
                  width={160}
                  style={{ minHeight: "150px" }}
                />
              )}
              <p className="text-center text-xl">Português</p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default SelectLanguage;
