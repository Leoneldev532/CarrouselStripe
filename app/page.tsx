"use client";

import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Page = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);

  useEffect(() => {
    const btntrash = document.querySelector(".btntrash") as HTMLButtonElement;
    const bloc1 = document.querySelector(".bloc1") as HTMLDivElement;
    const bloc2 = document.querySelector(".bloc2") as HTMLDivElement;
    const undobtn = document.querySelector(".undobtn") as HTMLButtonElement;
    const number1 = document.querySelector(".number1") as HTMLSpanElement;
    const number2 = document.querySelector(".number2") as HTMLSpanElement;

    const handlesurvol = () => {
      if (deleteStatus === false) {
        bloc1.style.scale = "0.9";
        bloc1.style.transform = "translateY(20px)";
        bloc1.style.rotate = "3deg";
        bloc1.style.backgroundColor = "rgb(17 24 39)";
      }
    };

    const handleOutSurvol = () => {
      if (deleteStatus === false) {
        bloc1.style.scale = "1";
      } else {
        bloc1.style.scale = "0";
      }

      bloc1.style.transform = "translateY(0px)";
      bloc1.style.rotate = "0deg";

      bloc1.style.backgroundColor = "transparent";
    };

    let rotateInterval: NodeJS.Timer | null = null;
    let upInterval: NodeJS.Timer | null = null;

    const handleclick = () => {
      setDeleteStatus(true);

      bloc1.style.scale = "0";
      bloc2.classList.remove("translate-x-[-220%]", "-rotate-[12deg]");
      bloc2.classList.add("translate-x-[-100%]");

      undobtn.style.left = "70%";

      bloc2.style.backgroundColor = "transparent";
      rotateInterval = setTimeout(() => {
        bloc1.style.rotate = "40deg";
      }, 1000);

      upInterval = setTimeout(() => {
        bloc1.style.backgroundColor = "rgb(3, 12, 6)";
        number1.classList.add("translate-y-[-101%]");
        number2.classList.add("translate-y-[-101%]");
      }, 1000);
    };

    const handlerestore = () => {
      setDeleteStatus(false);
      bloc2.classList.remove("translate-x-[-100%]");
      bloc2.classList.add("translate-x-[-220%]", "-rotate-[12deg]");

      bloc2.style.backgroundColor = "rgb(17,24,39)";
      bloc1.style.backgroundColor = "transparent";

      setTimeout(() => {
      undobtn.style.left = "53%";
       }, 1500);

      bloc1.style.rotate = "0deg";
      bloc1.style.scale = "1";

      upInterval = setTimeout(() => {
        number1.classList.remove("translate-y-[-101%]");
        number2.classList.remove("translate-y-[-101%]");
      }, 1000);
    };

    undobtn.addEventListener("click", handlerestore);
    btntrash.addEventListener("click", handleclick);
    btntrash.addEventListener("mouseover", handlesurvol);
    btntrash.addEventListener("mouseout", handleOutSurvol);

    return () => {
      undobtn.removeEventListener("click", handlerestore);
      btntrash.removeEventListener("click", handleclick);

      btntrash.removeEventListener("mouseover", handlesurvol);
      btntrash.removeEventListener("mouseout", handleOutSurvol);
    };
  });

  return (
    <div className="flex justify-center relative  flex-col gap-y-5 min-h-screen w-full items-center">

<div className="flex md:hidden  min-h-screen flex-col gap-y-5 text-black justify-center items-center">
          
          <h2 className="w-full text-center  max-w-lg font-bold "> 
             Animation uniquement disponible sur tablet , laptop et plus 
          </h2>
          <Link href="https://bento.me/leoy" className="underline font-semibold" > code By leonel YIMGA </Link>
          <span>

          </span>

        </div>

      <div className="w-[705px] h-[640px] overflow-hidden md:flex hidden flex-col gap-y-4 p-4 rounded-2xl bg-gray-800 backdrop-blur-lg ">
        <div className="w-full h-[540px] flex  overfloz-x-hidden">
          <div className="h-[540px] bloc1 transition-all  bg-transparent relative z-10 ease duration-500 flex-shrink-0  flex w-full rounded-2xl  ">
            <div className="flex flex-col justify-start items-center h-full w-full   rounded-2xl gap-y-4">
              <div className="flex gap-x-4 w-full p-4 justify-between items-center ">
                <div className="w-auto flex justify-start items-center gap-x-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden ">
                    <Image
                      src={image1}
                      alt="image 1"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-y-1">
                    <h3 className="text-sm font-bold">Frank</h3>
                    <span className="text-xs text-gray-300 ">Design Rule</span>
                  </div>
                </div>

                <div className="flex gap-x-2 justify-start items-center">
                  <span>21:32</span>
                  <span className="flex gap-x-2 w-full px-4 py-2 rounded-full bg-gray-600/40">
                    <span> to: </span>
                    <span> leoneltio@gmail.com </span>
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="px-4 flex text-sm  gap-y-4 flex-col leading-loose w-full">
                  <span>
                    Objet : Demande de renseignements sur les produits Cher
                    Adrien
                  </span>

                  <p>
                    J espère que ce message vous trouvera en bonne santé et de
                    bonne humeur. Je vous écris aujourd hui pour obtenir des
                    informations sur les produits que votre entreprise propose.
                    Je suis particulièrement intéressé(e) par [Nom du produit ou
                    catégorie de produits], et j aimerais en savoir plus sur les
                    caractéristiques, les avantages et les prix de ces produits.
                    Si possible, pourriez-vous également me fournir des
                    informations sur les délais de livraison, les frais de
                    livraison et les politiques de retour de votre entreprise ?
                    Je vous remercie par avance pour votre aide et je suis
                    impatient(e) de recevoir vos réponses. Nhésitez pas à me
                    contacter si vous avez besoin de plus amples informations de
                    ma part. Cordialement,
                  </p>
                  <div className="flex flex-col ">
                    <span>Adrien</span>
                    <span>adrien@gmail.com</span>

                    <span>+237 147 457 56</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[540px] flex-shrink-0 relative   z-0 -rotate-[12deg] transform transition-all ease-out duration-700 translate-x-[-220%]  bloc2 bg-[rgb(17,24,39)] flex w-full rounded-2xl  ">
            <div className="flex flex-col justify-start items-center h-full w-full   rounded-2xl gap-y-4">
              <div className="flex gap-x-4 w-full p-4 justify-between items-center ">
                <div className="w-auto flex justify-start items-center gap-x-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden ">
                    <Image
                      src={image2}
                      alt="image 1"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-start  items-start gap-y-2">
                    <h3 className="text-sm font-bold">Frank</h3>
                    <span className="text-xs text-gray-300 ">Design Rule</span>
                  </div>
                </div>

                <div className="flex gap-x-2 justify-start items-center">
                  <span>21:32</span>
                  <span className="flex gap-x-2 w-full px-4 py-2 rounded-full bg-gray-600/40">
                    <span> to: </span>
                    <span> leoneltio@gmail.com </span>
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="px-4 flex text-sm  gap-y-4 flex-col leading-loose w-full">
                  <span>
                    Objet : Demande de renseignements sur les produits Cher
                    Adrien
                  </span>

                  <p>
                    J espère que ce message vous trouvera en bonne santé et de
                    bonne humeur. Je vous écris aujourd hui pour obtenir des
                    informations sur les produits que votre entreprise propose.
                    Je suis particulièrement intéressé(e) par [Nom du produit ou
                    catégorie de produits], et j aimerais en savoir plus sur les
                    caractéristiques, les avantages et les prix de ces produits.
                    Si possible, pourriez-vous également me fournir des
                    informations sur les délais de livraison, les frais de
                    livraison et les politiques de retour de votre entreprise ?
                    Je vous remercie par avance pour votre aide et je suis
                    impatient(e) de recevoir vos réponses. Nhésitez pas à me
                    contacter si vous avez besoin de plus amples informations de
                    ma part. Cordialement,
                  </p>
                  <div className="flex flex-col ">
                    <span>Adrien</span>
                    <span>adrien@gmail.com</span>

                    <span>+237 147 457 56</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex relative justify-center items-center">
          <button className="px-4 undobtn py-1 rounded-full transition-all ease direction-500 absolute  z-10 left-[52%] bg-black  flex gap-x-2">
            <div className="overflow-hidden h-5 text-gray-400 flex flex-col">
              <span className="h-full flex-shrink-0 number1 transition-all ease-out duration-500 ">
                1{" "}
              </span>
              <span className="h-full flex-shrink-0 number2 transition-all ease-out duration-500">
                {" "}
                2{" "}
              </span>
            </div>
            <span> undo </span>
          </button>

          <div className="relative flex gap-x-4 z-20 bg-black rounded-full px-4 w-4/12  h-10  justify-center items-center ">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>{" "}
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M11 6H15.5C17.9853 6 20 8.01472 20 10.5C20 12.9853 17.9853 15 15.5 15H4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.99998 12C6.99998 12 4.00001 14.2095 4 15C3.99999 15.7906 7 18 7 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M13 6H8.5C6.01472 6 4 8.01472 4 10.5C4 12.9853 6.01472 15 8.5 15H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 12C17 12 20 14.2095 20 15C20 15.7906 17 18 17 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.49986 12H21.4999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 12C6 8.68629 8.68629 6 12 6C12 7.65685 13.3431 9 15 9C15.6755 9 16.2989 8.77672 16.8004 8.39993C17.5536 9.40273 18 10.6492 18 12M17.1973 15C16.1599 16.7934 14.2208 18 12 18C9.77915 18 7.84012 16.7934 6.80269 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="btntrash">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5M21.75 5H8.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20.25 5L19.6303 14.906C19.6088 15.2333 19.5887 15.5385 19.5685 15.8235M5.25 5L5.85461 14.8966C6.00945 17.3107 6.08688 18.5177 6.72868 19.3857C7.046 19.8149 7.4548 20.1771 7.92905 20.4493C8.8883 21 10.1731 21 12.7427 21H15.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20.75 19C20.75 17.3431 19.4069 16 17.75 16C16.0931 16 14.75 17.3431 14.75 19C14.75 20.6569 16.0931 22 17.75 22C19.4069 22 20.75 20.6569 20.75 19Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M2 16C2 13.6611 2 12.4917 2.53647 11.6379C2.81621 11.1927 3.19267 10.8162 3.63789 10.5365C4.49167 10 5.66111 10 8 10H16C18.3389 10 19.5083 10 20.3621 10.5365C20.8073 10.8162 21.1838 11.1927 21.4635 11.6379C22 12.4917 22 13.6611 22 16C22 18.3389 22 19.5083 21.4635 20.3621C21.1838 20.8073 20.8073 21.1838 20.3621 21.4635C19.5083 22 18.3389 22 16 22H8C5.66111 22 4.49167 22 3.63789 21.4635C3.19267 21.1838 2.81621 20.8073 2.53647 20.3621C2 19.5083 2 18.3389 2 16Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10C20 8.59987 20 7.8998 19.7275 7.36502C19.4878 6.89462 19.1054 6.51217 18.635 6.27248C18.1002 6 17.4001 6 16 6H8C6.59987 6 5.8998 6 5.36502 6.27248C4.89462 6.51217 4.51217 6.89462 4.27248 7.36502C4 7.8998 4 8.59987 4 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 6C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 14C15 15.1046 14.1046 16 13 16H11C9.89543 16 9 15.1046 9 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full hidden  md:flex justify-center text-black items-center">

      <Link href="https://bento.me/leoy" className="" >
        <span className="border-2 px-4 py-1 rounded-full border-blue-400"> 
              code By Leonel YIMGA 
        </span>
        </Link>

      </div>
    </div>
  );
};

export default Page;
