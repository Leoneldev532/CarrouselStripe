"use client";

import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    const progressbarre = document.querySelectorAll(
      ".progressbarre"
    ) as NodeListOf<HTMLDivElement>;
    const progressligne = document.querySelectorAll(
      ".progressligne"
    ) as NodeListOf<HTMLDivElement>;
    const textcarou = document.querySelectorAll(
      ".textcarou"
    ) as NodeListOf<HTMLDivElement>;
    const imageSlides = document.querySelectorAll(
      ".imageslide"
    ) as NodeListOf<HTMLDivElement>;
    const svgElement = document.querySelectorAll(
      ".svgElement"
    ) as NodeListOf<HTMLDivElement>;

    const moveProgression = async (idelement: number) => {
      return new Promise<void>((resolve) => {
        let currentWidth = 0;
        textcarou[idelement].classList.add("active");

        const intervalId = setInterval(() => {
          currentWidth += 1;
          progressbarre[idelement].style.width = currentWidth + "%";

          if (currentWidth >= 100) {
            clearInterval(intervalId);
            resolve();

            progressbarre[idelement].style.width = 0 + "%";

            textcarou[idelement].classList.remove("active");
          }
        }, 40);

        SlideEvent(idelement);
      });
    };

    const SlideEvent = (idelement: number) => {
      if (
        idelement === 0 &&
        textcarou[idelement].classList.contains("active")
      ) {
        textcarou[0].style.transform = "translateX(0%)";
        textcarou[1].style.transform = "translateX(0%)";
        textcarou[2].style.transform = "translateX(0%)";
        textcarou[3].style.transform = "translateX(0%)";

        svgElement[0].style.filter = "grayscale(0%)";
        svgElement[1].style.filter = "grayscale(100%)";
        svgElement[2].style.filter = "grayscale(100%)";
        svgElement[3].style.filter = "grayscale(100%)";

        imageSlides[0].style.transform = "translateX(0%)";
        imageSlides[1].style.transform = "translateX(0%)";
        imageSlides[2].style.transform = "translateX(0%)";
        imageSlides[3].style.transform = "translateX(0%)";
      }
      if (
        idelement === 1 &&
        textcarou[idelement].classList.contains("active")
      ) {
        textcarou[0].style.transform = "translateX(-100%)";
        textcarou[1].style.transform = "translateX(-100%)";
        textcarou[2].style.transform = "translateX(-100%)";
        textcarou[3].style.transform = "translateX(-100%)";

        svgElement[1].style.filter = "grayscale(0%)";
        svgElement[0].style.filter = "grayscale(100%)";
        svgElement[2].style.filter = "grayscale(100%)";
        svgElement[3].style.filter = "grayscale(100%)";

        imageSlides[0].style.transform = "translateX(-100%)";
        imageSlides[1].style.transform = "translateX(-100%)";
        imageSlides[2].style.transform = "translateX(-100%)";
        imageSlides[3].style.transform = "translateX(-100%)";
      }

      if (
        idelement === 2 &&
        textcarou[idelement].classList.contains("active")
      ) {
        textcarou[0].style.transform = "translateX(-200%)";
        textcarou[1].style.transform = "translateX(-200%)";
        textcarou[2].style.transform = "translateX(-200%)";
        textcarou[3].style.transform = "translateX(-200%)";

        svgElement[2].style.filter = "grayscale(0%)";
        svgElement[0].style.filter = "grayscale(100%)";
        svgElement[1].style.filter = "grayscale(100%)";
        svgElement[3].style.filter = "grayscale(100%)";

        imageSlides[0].style.transform = "translateX(-200%)";
        imageSlides[1].style.transform = "translateX(-200%)";
        imageSlides[2].style.transform = "translateX(-200%)";
        imageSlides[3].style.transform = "translateX(-200%)";
      }
      if (
        idelement === 3 &&
        textcarou[idelement].classList.contains("active")
      ) {
        textcarou[0].style.transform = "translateX(-300%)";
        textcarou[1].style.transform = "translateX(-300%)";
        textcarou[2].style.transform = "translateX(-300%)";
        textcarou[3].style.transform = "translateX(-300%)";

        svgElement[3].style.filter = "grayscale(0%)";
        svgElement[2].style.filter = "grayscale(100%)";
        svgElement[0].style.filter = "grayscale(100%)";
        svgElement[1].style.filter = "grayscale(100%)";

        imageSlides[0].style.transform = "translateX(-300%)";
        imageSlides[1].style.transform = "translateX(-300%)";
        imageSlides[2].style.transform = "translateX(-300%)";
        imageSlides[3].style.transform = "translateX(-300%)";
      }
    };

    let shouldRun = true;

    const UpdateProgression = async () => {
      while (shouldRun) {
        for (let i = 0; i < progressligne.length; i++) {
          await moveProgression(i);
        }
      }
    };

    UpdateProgression();
  }, []);

  return (
    <div className="flex justify-center relative px-16 md:px-0 text-black flex-col gap-y-5 min-h-screen w-full items-center">
      <div className=" hidden  2xl:w-6/12  justify-center   h-full  items-center border-l-[0.0000000000008rem]  md:flex flex-col  gap-y-4 ">
        <div className="w-full  justify-center items-center flex gap-x-16">
          <div className="w-44 flex  textcarouContainer overflow-hidden  h-[24rem]  gap-y-8 ">
            <div className="textcarou flex flex-col gap-y-8 w-44 transition-all   ease duration-500  justify-between items-start flex-shrink-0 h-[18rem] ">
              <div className="flex justify-start  gap-x-4">
                <span className="w-[0.1rem] h-6  bg-blue-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start  gap-x-4">
                <span className="w-[0.1rem] h-6  bg-blue-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex  justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-blue-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>
            </div>
            <div className="textcarou   flex flex-col gap-y-8 w-44 transition-all ease duration-200  justify-between items-start flex-shrink-0 h-[18rem] ">
              <div className="flex gap-x-4 justify-start">
                <span className="w-[0.1rem] h-6  bg-orange-500"> </span>
                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 140 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start  gap-x-4">
                <span className="w-[0.1rem] h-6  bg-orange-500"> </span>
                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 410 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-orange-500"> </span>
                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 330 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>
            </div>

            <div className="textcarou   flex flex-col gap-y-8 w-44 transition-all ease duration-200  justify-between items-start flex-shrink-0 h-[18rem] ">
              <div className="flex justify-start  gap-x-4">
                <span className="w-[0.1rem] h-6  bg-lime-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 30 </h3>
                  <span className="text-sm max-w-36 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-lime-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-lime-500"> </span>
                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>
            </div>

            <div className="textcarou   flex flex-col gap-y-8 w-44 transition-all ease duration-200  justify-between items-start flex-shrink-0 h-[18rem] ">
              <div className="flex justify-start  gap-x-4">
                <span className="w-[0.1rem] h-6  bg-red-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 70 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70  text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-red-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 0 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>

              <div className="flex justify-start gap-x-4">
                <span className="w-[0.1rem] h-6  bg-red-500"> </span>

                <div className="flex flex-col w-full  gap-x-6">
                  <h3 className="text-2xl font-bold"> 130 </h3>
                  <span className="text-sm max-w-36 font-semibold text-black/70 text-balance">
                    Countries in logistics network
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  w-[45rem]  overflow-hidden h-[25rem] rounded-lg relative   bg-gray-200 min-h-56 ">
            <div className=" h-[25rem]   relative   w-[45rem] transition-all ease duration-300 imageslide    flex-shrink-0">
              <Image
                src={image3}
                alt="image1"
                className="object-cover absolute z-0 w-full h-full rounded-lg"
              />
              <div className="w-full h-full absolute z-10 bg-gradient-to-t from-blue-500/60 from-5% to-blue-500/20 to-50%"></div>
            </div>

            <div className="  h-[25rem]    w-[45rem] transition-all ease duration-300   imageslide  relative flex-shrink-0">
              <Image
                src={image2}
                alt="image1"
                className="object-cover absolute  w-full h-full rounded-lg"
              />
              <div className="w-full h-full absolute z-10 bg-gradient-to-t from-orange-500/60 from-5% to-orange-500/20 to-50%"></div>
            </div>

            <div className=" w-[45rem]   h-[25rem] transition-all ease duration-300 imageslide  relative flex-shrink-0">
              <Image
                src={image1}
                alt="image1"
                className="object-cover absolute  w-full h-full rounded-lg"
              />
              <div className="w-full h-full absolute z-10 bg-gradient-to-t from-lime-800/60 from-5% to-lime-800/20 to-50%"></div>
            </div>

            <div className=" w-[45rem]   h-[25rem] transition-all ease duration-300 imageslide  relative flex-shrink-0">
              <Image
                src={image1}
                alt="image1"
                className="object-cover w-full h-full absolute  rounded-lg"
              />
              <div className="w-full h-full absolute z-10 bg-gradient-to-t from-red-500/60 from-5% to-red-500/20 to-50%"></div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center items-center divide-dashed divide-x-[0.02rem] divide-gray-200">
          <div className="flex flex-col justify-start   items-center max-w-60  w-3/12 h-40 ">
            <div className="progressligne h-[0.02rem]   w-full rounded-sm bg-gray-200 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-blue-500">
                {" "}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={40}
              className="mt-16 svgElement transition-all ease duration-400"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <path
                fill="var(--userLogoColor, #0166B1)"
                d="M111.852 20c0 6.55-5.302 11.852-11.852 11.852V20h11.852zM100 8.148V20H88.148c0-6.55 5.302-11.852 11.852-11.852z"
              />
              <path
                fill="var(--userLogoColorAlt, #fff)"
                d="M100 8.149c6.55 0 11.852 5.302 11.852 11.85H100V8.15zm-11.852 11.85H100v11.853c-6.55 0-11.852-5.302-11.852-11.852z"
              />
              <path
                fill="var(--userLogoColor, #6F6F6F)"
                d="M100 8.148v.65c6.176 0 11.202 5.025 11.202 11.202h.649c0-6.545-5.305-11.852-11.851-11.852zm0 23.054c-6.176 0-11.202-5.025-11.202-11.202h-.65c0 6.545 5.306 11.852 11.852 11.852M100 0C88.955 0 80 8.955 80 20s8.955 20 20 20 20-8.955 20-20-8.955-20-20-20zm18.7 20c0 10.327-8.372 18.7-18.7 18.7S81.3 30.327 81.3 20 89.673 1.3 100 1.3s18.7 8.373 18.7 18.7z"
              />
              <path
                fill="var(--userLogoColor, #6F6F6F)"
                d="M91.453 10.351c.64-.668 1.001-1.44.363-2.178-.348-.4-.933-.487-1.416-.29l-.049.018.016-.042c.071-.19.117-.797-.404-1.215a1.206 1.206 0 00-.894-.248c-.6.06-1.062.468-2.318 1.86-.438.49-.86.994-1.264 1.511l3.453 3.253c1.144-1.258 1.61-1.725 2.513-2.67v.001zm-4.505-.795c.696-.846 1.434-1.612 1.769-1.915.105-.096.22-.19.36-.229.227-.062.46.098.514.33.053.232-.094.452-.257.634-.368.412-1.717 1.813-1.717 1.813l-.67-.634zM88.3 10.83s1.313-1.38 1.742-1.82c.17-.175.28-.281.397-.339.152-.073.317-.088.466.01a.406.406 0 01.175.43c-.043.196-.205.384-.34.528L89 11.489l-.7-.66zm12.095-4.358l1.105-2.46.071-.218-.02.228.116 3.286c.396.038.791.09 1.183.156l-.18-4.868a26.011 26.011 0 00-1.651-.127L99.93 5.153l-.038.2-.04-.2-1.088-2.684c-.55.023-1.1.066-1.652.127l-.18 4.868c.393-.065.788-.117 1.184-.156l.116-3.286-.02-.228.07.22 1.106 2.458h1.007zm9.181 5.088c.272.29.663.756.883 1.04l4.045-2.551a27 27 0 00-.765-.942l-2.562 1.682-.174.15.13-.19 1.132-2.242-.8-.795-2.26 1.124-.19.129.151-.174 1.696-2.543a24.621 24.621 0 00-.951-.762L107.343 9.5c.325.248.754.614 1.028.862l2.417-1.246.156-.113-.114.153-1.254 2.404z"
              />
              <title>BMW logo</title>
            </svg>
          </div>

          <div className="flex   flex-col justify-start   items-center max-w-60  w-3/12 h-40 ">
            <div className="progressligne h-[0.02rem]   w-full rounded-sm bg-gray-200 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-yellow-500">
                {" "}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={40}
              className="mt-16 svgElement transition-all ease duration-400"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <title>Amazon logo</title>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="var(--userLogoColor, #EFA82E)"
                  d="M111.58 33.91C106.18 37.9 98.37 40 91.64 40a36.13 36.13 0 01-24.37-9.28c-.5-.45-.05-1.08.56-.72a49.08 49.08 0 0024.37 6.46c5.98 0 12.55-1.24 18.6-3.8.9-.39 1.67.6.78 1.25"
                />
                <path
                  fill="var(--userLogoColor, #EFA82E)"
                  d="M113.82 31.36c-.69-.88-4.56-.42-6.3-.21-.52.06-.6-.4-.13-.73 3.09-2.17 8.15-1.54 8.73-.82.6.74-.15 5.8-3.04 8.21-.45.38-.87.18-.67-.31.65-1.63 2.1-5.26 1.41-6.14"
                />
                <path
                  fill="var(--userLogoColor, #1B1A19)"
                  d="M107.65 15.13v-2.1c0-.33.24-.54.53-.54h9.45c.3 0 .54.22.54.53v1.8c0 .3-.26.7-.71 1.33l-4.9 6.97c1.82-.04 3.74.23 5.4 1.16.36.2.47.51.5.82v2.24c0 .31-.34.67-.7.48a10.89 10.89 0 00-9.98.02c-.33.17-.67-.18-.67-.49v-2.13c0-.34 0-.93.35-1.45l5.67-8.11h-4.94a.53.53 0 01-.54-.53M73.2 28.26h-2.88a.54.54 0 01-.5-.48V13.06c0-.3.24-.53.55-.53h2.67c.28.01.5.23.52.5v1.92h.06c.7-1.86 2-2.73 3.78-2.73 1.8 0 2.92.87 3.73 2.73a4.08 4.08 0 013.96-2.73c1.2 0 2.52.5 3.33 1.61.9 1.24.72 3.04.72 4.62v9.28c0 .3-.25.53-.55.53h-2.87a.54.54 0 01-.52-.52v-7.8c0-.63.06-2.18-.08-2.76-.22-1-.86-1.27-1.69-1.27-.7 0-1.42.46-1.72 1.2-.29.75-.26 1.99-.26 2.82v7.8c0 .3-.25.53-.56.53h-2.87a.54.54 0 01-.51-.52v-7.8c0-1.65.26-4.06-1.77-4.06-2.07 0-1.99 2.35-1.99 4.05v7.8c0 .3-.25.53-.55.53m53.11-13.03c-2.11 0-2.25 2.88-2.25 4.67 0 1.8-.02 5.64 2.23 5.64 2.22 0 2.33-3.1 2.33-4.99 0-1.24-.05-2.72-.43-3.9-.32-1.02-.96-1.42-1.88-1.42m-.02-3.01c4.26 0 6.57 3.66 6.57 8.3 0 4.5-2.55 8.05-6.57 8.05-4.19 0-6.46-3.65-6.46-8.2 0-4.59 2.3-8.15 6.46-8.15m12.1 16.04h-2.87a.54.54 0 01-.51-.52V13a.55.55 0 01.55-.48h2.66c.25.01.46.18.51.41v2.25h.05c.81-2.01 1.94-2.97 3.92-2.97 1.29 0 2.55.47 3.35 1.74.75 1.17.75 3.16.75 4.58v9.26a.55.55 0 01-.55.46h-2.88a.54.54 0 01-.5-.46v-8c0-1.6.18-3.95-1.8-3.95-.7 0-1.35.46-1.67 1.17-.4.9-.46 1.8-.46 2.79v7.92c0 .3-.25.53-.55.53m-35.38-.03a.6.6 0 01-.68.06c-.96-.79-1.13-1.15-1.65-1.9-1.57 1.6-2.7 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.35-.53-1.02-.75-1.61-.75-1.1 0-2.07.56-2.31 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.24-.05-.5-.24-.43-.6.64-3.37 3.69-4.4 6.42-4.4 1.4 0 3.23.38 4.33 1.44 1.4 1.3 1.26 3.04 1.26 4.93v4.47c0 1.34.56 1.93 1.09 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9h-.01zm-2.9-7c0 1.12.03 2.05-.54 3.05-.45.8-1.18 1.3-1.98 1.3-1.1 0-1.75-.84-1.75-2.08 0-2.44 2.2-2.88 4.27-2.88v.61zm-34.76 7a.6.6 0 01-.68.06c-.95-.79-1.12-1.15-1.65-1.9-1.57 1.6-2.69 2.08-4.73 2.08-2.42 0-4.3-1.5-4.3-4.47a4.87 4.87 0 013.06-4.69c1.56-.68 3.74-.8 5.4-1v-.36c0-.69.06-1.5-.35-2.08-.34-.53-1.02-.75-1.6-.75-1.1 0-2.08.56-2.32 1.72-.05.26-.24.52-.5.53l-2.78-.3c-.23-.05-.5-.24-.43-.6.64-3.37 3.7-4.4 6.43-4.4 1.4 0 3.22.38 4.32 1.44 1.4 1.3 1.27 3.04 1.27 4.93v4.47c0 1.34.55 1.93 1.08 2.66.18.26.22.57-.01.76-.59.49-1.63 1.4-2.2 1.9zm-2.9-7c0 1.12.03 2.05-.53 3.05-.46.8-1.18 1.3-2 1.3-1.1 0-1.74-.84-1.74-2.08 0-2.44 2.2-2.88 4.28-2.88v.61z"
                />
              </g>
            </svg>
          </div>

          <div className="flex flex-col    justify-start items-center max-w-60  w-3/12 h-40 ">
            <div className="progressligne h-[0.02rem]   w-full rounded-sm bg-gray-200 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-lime-500">
                {" "}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={40}
              className="mt-16 svgElement transition-all ease duration-400"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <path
                fill="var(--userLogoColor, #000)"
                fillRule="evenodd"
                d="M71.56 26.746V12.891h3.716l4.707 10.354L84.62 12.89h3.559v13.855h-3.064v-8.06l-3.534 8.06h-3.265l-3.58-8.016v8.016H71.56zm28.947-5.364l-2.563-5.874-2.505 5.873h5.068zm-7.359 5.364h-3.603l6.193-13.855h4.435l6.237 13.855h-3.556l-1.227-2.76h-7.29l-1.189 2.76zm14.699 0V12.891h13.329v2.77h-10.11v2.752h8.669v2.704h-8.669v2.858h10.135v2.771h-13.354zm19.211-7.493h7.004V15.66h-7.004v3.592zm-3.265 7.493V12.891h11.155c1.49 0 2.355.855 2.355 2.323v4.655c0 1.071-.955 2.039-2.808 2.039-.105.005-.212 0-.322 0l3.247 4.838h-3.583l-3.079-4.737h-3.7v4.737h-3.265zm19.384.008h-1.105c-1.443 0-2.138-.827-2.138-2.032v-1.81h3.243v1.072h6.89v-2.836h-7.903c-1.262 0-2.171-.842-2.171-2.01v-4.114c0-1.245.989-2.125 2.193-2.125h9.035c1.221 0 2.065.905 2.065 2.213v1.653h-3.219V15.67h-6.89v2.729h7.88c1.164 0 2.229.764 2.229 2.234v3.955c0 1.347-.752 2.166-2.16 2.166h-7.949zm13.221 0V12.897h3.31v5.542l6.304-5.542h4.481l-7.52 6.437 7.791 7.42h-4.64l-6.416-6.302v6.302h-3.31z"
                clipRule="evenodd"
              />
              <path
                fill="var(--userLogoColor, #42B0D5)"
                fillRule="evenodd"
                d="M54.397 4H31.608c-.959 0-1.878.38-2.555 1.055A3.578 3.578 0 0028 7.6v24.307c0 1.981 1.615 3.588 3.608 3.588h22.79c1.995 0 3.613-1.61 3.613-3.594V7.594C58.011 5.609 56.393 4 54.397 4zm-.686 7.507l-5.924 7.357 8.56 4.079-.006.029h-9.503l2.118 9.166-.029.017-5.924-7.357-5.924 7.357-.024-.012 2.113-9.172H29.67l-.011-.028 8.56-4.08-5.924-7.356.017-.023 8.56 4.079 2.113-9.167h.035l2.113 9.167 8.56-4.08.018.024z"
                clipRule="evenodd"
              />
              <title>Maersk logo</title>
            </svg>
          </div>

          <div className="flex flex-col    justify-start items-center max-w-60  w-3/12 h-40 ">
            <div className="progressligne h-[0.02rem]   w-full rounded-sm bg-gray-200 ">
              <div className="progressbarre transition-all ease-out duration-300 h-full w-0 bg-red-500">
                {" "}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={200}
              height={40}
              fill="none"
              className="mt-16 svgElement transition-all ease duration-400"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 40"
            >
              <path
                fill="var(--userLogoColor, #F22F46)"
                d="M64.4 16.3c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zm-3.1 4.3c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zM80 20c0 8.3-6.7 15-15 15s-15-6.7-15-15S56.7 5 65 5s15 6.7 15 15zm-4 0c0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11 11-4.9 11-11zm-7.3.6c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm0-7.4c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm51.6-2.3c.1 0 .2.1.3.2v3.2c0 .2-.2.3-.3.3H115c-.2 0-.3-.2-.3-.3v-3.1c0-.2.2-.3.3-.3h5.3zm-.1 4.5H110c-.1 0-.3.1-.3.3l-1.3 5-.1.3-1.6-5.3c0-.1-.2-.3-.3-.3h-4c-.1 0-.3.1-.3.3l-1.5 5-.1.3-.1-.3-.6-2.5-.6-2.5c0-.1-.2-.3-.3-.3h-8v-4.3c0-.1-.2-.3-.4-.2l-5 1.6c-.2 0-.3.1-.3.3v2.7h-1.3c-.1 0-.3.1-.3.3v3.8c0 .1.1.3.3.3h1.3v4.7c0 3.3 1.8 4.8 5.1 4.8 1.4 0 2.7-.3 3.6-.8v-4c0-.2-.2-.3-.3-.2-.5.2-1 .3-1.4.3-.9 0-1.4-.4-1.4-1.4v-3.4h2.9c.1 0 .3-.1.3-.3v-3.2L97.8 29c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l1.8-5.6.9 2.9.8 2.7c0 .1.2.3.3.3h4.2c.1 0 .3-.1.3-.3l3.8-12.6V29c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.2-.3zm6.7-4.5h-5.1c-.1 0-.3.1-.3.3v17.7c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V11.1c0-.1-.1-.2-.3-.2zm6.8 0h-5.3c-.1 0-.3.1-.3.3v3.1c0 .1.1.3.3.3h5.3c.1 0 .3-.1.3-.3v-3.2c0-.1-.1-.2-.3-.2zm-.1 4.5h-5.1c-.1 0-.3.1-.3.3v13.1c0 .1.1.3.3.3h5.1c.1 0 .3-.1.3-.3V15.7c0-.1-.1-.3-.3-.3zm16.1 6.8c0 3.8-3.2 7.1-7.7 7.1-4.4 0-7.6-3.3-7.6-7.1s3.2-7.1 7.7-7.1c4.4 0 7.6 3.3 7.6 7.1zm-5.4.1c0-1.4-1-2.5-2.2-2.4-1.3 0-2.2 1.1-2.2 2.4 0 1.3 1 2.4 2.2 2.4 1.3 0 2.2-1.1 2.2-2.4z"
              />
              <title>Twilio logo</title>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full pt-8 flex flex-col text-center gap-y-4 justify-center items-center">
        <h2 className="md:hidden flex text-balance font-bold max-w-sm">
          {" "}
          Animation disponible uniquement sur tablet , laptop et desktop{" "}
        </h2>
        <Link
          href={"https://bento.me/leoy"}
          className="px-4 py-1 underline  md:rounded-full text-center text-sm md:border md:border-blue-500"
        >
          {" "}
          Code By leonel YIMGA{" "}
        </Link>
      </div>
    </div>
  );
};

export default Page;
