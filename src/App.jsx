import { useState } from "react";
import instagram from "/instagram.png";
import instagram_white from "/instagram_white.png";
import googleplay from "/googleplay.png";
import appstore from "/appstore.png";
import phone from "/phone.png";
import samocat from "/somocats.png";
import helmet from "/helmet.png";
import speedometer from "/speedometer.png";
import visa from "/visa.png";
import { Menu, X } from "lucide-react"; // Burger va X ikonkalarini import qilamiz

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu ochish uchun yangi state

  const openModal = (text) => {
    setModalText(text);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="fixed z-50 w-full">
        <section className="px-[20px] py-[20px] flex flex-row items-center justify-between lg:px-[80px] bg-white shadow-xl">
          <div className="flex items-center gap-[50px]">
            <h1 className="text-blue-600 text-[35px] font-extrabold">JET</h1>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer xl:hidden"
          >
            <Menu size={32} className="text-blue-600" />
          </button>

          <ul className="font-sans flex gap-[30px] hidden xl:flex">
            <li
              onClick={() => openModal("Qanday ijaraga olish")}
              className="border-[1px] border-transparent hover:border-b-blue-600 cursor-pointer duration-300"
            >
              Qanday ijaraga olish kerak
            </li>
            <li
              onClick={() => openModal("Qoidalar")}
              className="border-[1px] border-transparent hover:border-b-blue-600 cursor-pointer duration-300"
            >
              Qoidalar
            </li>
            <li
              onClick={() => openModal("Investorlar")}
              className="border-[1px] border-transparent hover:border-b-blue-600 cursor-pointer duration-300"
            >
              Investorlar
            </li>
            <li
              onClick={() => openModal("Qo‘llab-quvvatlash")}
              className="border-[1px] border-transparent hover:border-b-blue-600 cursor-pointer duration-300"
            >
              Qo'llab-quvvadlash
            </li>
            <li
              onClick={() => openModal("Franchayzing")}
              className="border-[1px] border-transparent hover:border-b-blue-600 cursor-pointer duration-300"
            >
              Franchayzing
            </li>
          </ul>

          <div className="flex items-center gap-[20px] hidden xl:flex">
            <img onClick={() => openModal("Instagram tarmog'imiz")} className="w-[25px] cursor-pointer cursor-pointer" src={instagram} alt="instagram" />
            <select className="border-[1px] border-blue-600 text-blue-600 rounded-sm">
              <option>UZ</option>
              <option>ENG</option>
              <option>RUS</option>
            </select>
            <button  onClick={() => openModal("Ilova")} className="px-[20px] py-[10px] bg-blue-600 hover:bg-blue-700 duration-300 text-white font-bold rounded-sm cursor-pointer">
              JET-ni yuklab oling
            </button>
          </div>
        </section>
      </header>
      <main>
        <section className="bg-blue-700 pt-[200px] pb-[100px] flex flex-col">
          <div className="px-[40px] flex flex-col justify-center items-center gap-[10px] lg:px-[80px]">
            <h1 className="text-[20px] text-white font-mono font-bold lg:text-[30px]">
              Yuklab oling, Ilovani oching va ijaraga oling
            </h1>
            <span className="text-[11px] text-white font-bold font-mono lg:text-[15px] mb-[25px]">
              Ilovani yuklab oling va JET ilovasida elektr samakatni ijaraga
              oling.
            </span>
            <div className="flex flex-col gap-[20px] mt-[30px] lg:flex-row">
              <img
                onClick={() => openModal("Google Play da")}
                className="w-[170px] cursor-pointer"
                src={googleplay}
                alt="googleplay"
              />
              <img
                onClick={() => openModal("App Store da")}
                className="w-[170px] cursor-pointer"
                src={appstore}
                alt="appstore"
              />
            </div>
          </div>
        </section>
        <section className="px-[20px] py-[50px] flex-col lg:px-[80px] lg:py-[100px] flex xl:flex-row items-center justify-between">
          <div>
            <h1 className="text-[30px] w-[200px] lg:text-[50px] lg:w-[400px] font-bold mb-[50px]">
              Qanday qilib ijaraga olish kerak:
            </h1>
            <div className="flex flex-col items-start gap-[30px]">
              <div className="flex flex-row gap-[20px]">
                <span className="bg-blue-600 p-[10px] h-[30px] lg:w-[40px] lg:h-[40px] text-white rounded-[50%] flex items-center justify-center">
                  1
                </span>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[15px] lg:text-[25px] lg:w-[450px]">
                    Ilovani yuklab oling va JET ilovasida elektr samakatni
                    ijaraga oling.
                  </h1>
                  <p className="text-[18px] lg:w-[400px]">
                    JET ilovasi bepul App Store® va Google PlayTM-da mavjud.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[20px]">
                <span className="bg-blue-600 p-[10px] h-[30px] lg:w-[40px] lg:h-[40px] text-white rounded-[50%] flex items-center justify-center">
                  2
                </span>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[15px] lg:text-[25px] lg:w-[450px]">
                    Kartangizni bog'lang
                  </h1>
                  <p className="text-[18px] lg:w-[400px]">
                    sizga telefon raqam va uzkard kerak bo'ladi
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[20px]">
                <span className="bg-blue-600 p-[10px] h-[30px] lg:w-[40px] lg:h-[40px] text-white rounded-[50%] flex items-center justify-center">
                  3
                </span>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[15px] lg:text-[25px] lg:w-[450px]">
                    QR-ni skanerlang va haydash mumkin
                  </h1>
                  <p className="text-[13px] lg:w-[400px] lg:text-[18px]">
                    QR kodi samakat rulida joylashgan. Ijarani boshlash uchun
                    smartfon ekranidagi ko'rsatmalarga amal qiling.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[20px]">
                <span className="bg-blue-600 p-[10px] h-[30px] lg:w-[40px] lg:h-[40px] text-white rounded-[50%] flex items-center justify-center">
                  4
                </span>
                <div className="flex flex-col">
                  <h1 className="font-bold text-[15px] lg:text-[25px] lg:w-[450px]">
                    Samakat turargohida ijarani to'xtating
                  </h1>
                  <p className="text-[18px] lg:w-[400px]">
                    Shahar bo'ylab yuzlab "samakat turargohi" to'xtash joylari
                    mavjud. Samakatni ulardan biriga qo'ying.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[400px] h-[400px] mt-[50px] lg:w-[600px] lg:h-[600px]"
            src={phone}
            alt="phone"
          />
        </section>
        <marquee class="w-full" direction="left">
          <h1 className="text-[30px] lg:text-[50px] text-blue-600 font-bold my-[40px]">JET ilovasini yuklang va samokatlarni ijaraga oling!</h1>
        </marquee>
        <section className="px-[20px] pb-[40px] lg:px-[80px] flex flex-col xl:flex-row items-center gap-[40px]">
          <img src={samocat} alt="electro somocats" />
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="font-bold text-[35px]">Yangi va bardoshli</h1>
              <p className="text-[20px]">
                Bizning parkimizda katta diapazonga ega yangi elektr samakalar
                modellari mavjud. Telefoningizni simsiz zaryadlash bilan
                zaryadlang.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[40px]">
              <div className="w-[300px]">
                <img src={helmet} alt="helmet" />
                <h1 className="font-bold text-[25px] mt-[10px] lg:mt-[15px]">Kaska (Dubulg'a) bilan foydalaning</h1>
                <p className="text-[20px] mt-[10px] lg:mt-[15px]">Kaska (Dubulg'a) yiqilib tushganda sizni shikastlanishdan himoya qilishi mumkin.</p>
              </div>
              <div className="w-[300px]">
                <img src={speedometer} alt="speedometer" />
                <h1 className="font-bold text-[25px] mt-[10px] lg:mt-[15px]">Ehtiyot bo'ling</h1>
                <p className="text-[20px] mt-[10px] lg:mt-[15px]">Tezlik chegarasiga rioya qiling, chorrahada otvotganizda tushing va samakatizni sudrab o'ting.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[20px] py-[20px] flex-col lg:px-[80px] lg:py-[50px] bg-blue-600 flex justify-between lg:flex-row">
          <div className="flex flex-col">
            <h1 className="text-white text-[30px] lg:text-[40px] font-bold">Sinab ko'rishga tayyormisiz?</h1>
            <p className="text-white text-[15px] mt-[10px] lg:text-[18px]">JET ilovasini yuklab oling va samakatni hozir ijaraga oling.</p>
          </div>
          <div className="flex flex-col gap-[20px] mt-[30px] lg:flex-row">
            <img
              onClick={() => openModal("Google Play da")}
              className="w-[170px] h-[50px] cursor-pointer"
              src={googleplay}
              alt="googleplay"
            />
            <img
              onClick={() => openModal("App Store da")}
              className="w-[170px] h-[50px] cursor-pointer"
              src={appstore}
              alt="appstore"
            />
          </div>
        </section>
      </main>
      <footer className="px-[20px] py-[20px] flex-col lg:px-[80px] lg:py-[30px] bg-black flex lg:flex-row justify-between">
        <div className="text-white flex flex-col">
          <h1 className="text-[40px] font-black">JET</h1>
          <span className="text-[15px] mb-[20px] lg:mb-[0px]">2023 © JET Sharing</span>
        </div>
        <ul className="font-sans gap-[30px] text-white lg:flex justify-center">
          <ul>
            <li onClick={() => openModal("Qanday ijaraga olish")} className="cursor-pointer">
              Qanday ijaraga olish kerak
            </li>
            <li onClick={() => openModal("Qoidalar")} className="cursor-pointer mt-[10px] lg:mt-[20px]">
              Qoidalar
            </li>
            <li onClick={() => openModal("Investorlar")} className="cursor-pointer mt-[10px] lg:mt-[20px]">
              Bo'sh ish o'rinlari
            </li>
            <li onClick={() => openModal("Qo‘llab-quvvatlash")} className="cursor-pointer mt-[10px] lg:mt-[20px]">
              Qo'llab-quvvadlash
            </li>
          </ul>
          <ul>
            <li onClick={() => openModal("Hujjatlar")} className="cursor-pointer mt-[20px] lg:mt-[0px]">
              Hujjatlar
            </li>
            <li onClick={() => openModal("Qaytish shartlari")} className="cursor-pointer mt-[10px] lg:mt-[20px]">
              Qaytish shartlari
            </li>
          </ul>
        </ul>
        <div className="text-white">
          <img onClick={() => openModal("Instagram tarmog'imiz")} className="mt-[15px] lg:mt-[0px] cursor-pointer" src={instagram_white} alt="instagram" />
          <h1 onClick={() => openModal("support@jetshr.com")} className="cursor-pointer mt-[10px]">support@jetshr.com</h1>
          <h1 onClick={() => openModal("pr@jetshr.com")} className="cursor-pointer mt-[10px]">pr@jetshr.com</h1>
          <img  onClick={() => openModal("Kartalar")} className="w-[60px] mt-[10px] cursor-pointer" src={visa} alt="cards" />
        </div>
      </footer>


      {isMenuOpen && (
        <div className="fixed text-right top-0 right-0 w-[250px] h-full  z-50">
          <div className="bg-white p-6 shadow-lg w-full rounded-bl-2xl">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-blue-600 cursor-pointer"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-4">
              <li
                onClick={() => openModal("Qanday ijaraga olish")}
                className="border-[1px] border-transparent cursor-pointer duration-300"
              >
                Qanday ijaraga olish kerak
              </li>
              <li
                onClick={() => openModal("Qoidalar")}
                className="border-[1px] border-transparent cursor-pointer duration-300"
              >
                Qoidalar
              </li>
              <li
                onClick={() => openModal("Investorlar")}
                className="border-[1px] border-transparent cursor-pointer duration-300"
              >
                Investorlar
              </li>
              <li
                onClick={() => openModal("Qo‘llab-quvvatlash")}
                className="border-[1px] border-transparent cursor-pointer duration-300"
              >
                Qo'llab-quvvadlash
              </li>
              <li
                onClick={() => openModal("Franchayzing")}
                className="border-[1px] border-transparent cursor-pointer duration-300"
              >
                Franchayzing
              </li>
              <li className="flex flex-row items-center ml-[115px] gap-[10px]">
                <img className="w-[25px]" src={instagram} alt="instagram" />
                <select className="border-[1px] border-blue-600 text-blue-600 rounded-sm">
                  <option>UZ</option>
                  <option>ENG</option>
                  <option>RUS</option>
                </select>
              </li>
              <li>
                <button className="px-[20px] py-[10px] bg-blue-600 hover:bg-blue-700 duration-300 text-white font-bold rounded-sm cursor-pointer">
                  JET-ni yuklab oling
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm flex justify-center items-center border-[5px] border-b-black z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <h2 className="text-lg font-semibold mb-4">
              <span className="text-red-600">{modalText}</span> hozircha mavjud
              emas <span className="animate-pulse">!</span>
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 duration-300 cursor-pointer"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
