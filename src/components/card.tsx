"use client"
import { ROUTES } from "@/constants/routes";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Tilt } from 'react-tilt'
const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 30,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

interface ICard {
    titulo: string,
    image: StaticImageData,
    text: string,
    link: string
}

export const Card = ({titulo, image, text, link} : ICard) => {
    return (
        <Tilt options={defaultOptions}>
            <a href={link} className="cursor-default">
                <div className="bg-white flex flex-col items-center w-72 min-h-96 border rounded-xl p-4 shadow-md justify-between md:h-[480px]">
                    <Image className="rounded-lg" src={image} alt="" width={250} height={250} priority></Image>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-xl font-semibold">{titulo}</h1>
                        <p className="text-center">{text}</p>
                    </div>
                    <div className="cursor-pointer border p-2 px-5 rounded-xl hover:bg-neutral-200 mt-2">Ler Mais</div>
                </div>
            </a>
        </Tilt>
    )
}