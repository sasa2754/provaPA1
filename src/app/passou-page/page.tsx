"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function passouPage() {
    const [nota1, setNota1] = useState<string>("");
    const [nota2, setNota2] = useState<string>("");
    const [nota3, setNota3] = useState<string>("");
    const [nota4, setNota4] = useState<string>("");
    const [nota5, setNota5] = useState<string>("");
    const [result, setResult] = useState <number | undefined>(0);
    const [mensagem, setMensagem] = useState("");
    const msgError = "Insira um número válido";

    const calc = () => {
        const nNota1 = parseFloat(nota1);
        const nNota2 = parseFloat(nota2);
        const nNota3 = parseFloat(nota3);
        const nNota4 = parseFloat(nota4);
        const nNota5 = parseFloat(nota5);


        if (!isNaN(nNota1) && !isNaN(nNota2) && !isNaN(nNota3) && !isNaN(nNota4) && !isNaN(nNota5)) {
            setResult((nNota1 + nNota2 + nNota3 + nNota4 + nNota5)/5);
            if (result != undefined) {
                if (result >= 70) {
                    setMensagem("Passou!");
                }
                else {
                    setMensagem("Não passou");
                }
            }
        }
        else {
            toast("Insira um número válido", {
                position: "top-right",
                pauseOnHover: false,
                draggable: true,
                style: {
                  background: "linear-gradient(193deg, rgba(69,125,151,1) 0%, rgba(0,212,255,1) 41%, rgba(247,214,131,1) 80%)",
                  color: "black",
                  padding: "8px",
                  margin: "3px",
                  display: "flex",
                  borderRadius: "5px",
                  userSelect: "none"
                }
              });
        }
    }

    return (
        <div className="flex">
            <div className="flex p-2 self-end z-10 rounded-xl">
                <ToastContainer/>
            </div>
            <div className="flex flex-col p-4 items-center justify-center max-w-[700px] max-h-[750px] h-5/6 w-5/6 bg-white rounded-lg fixed top-2/4 left-2/4 translate-y-[-45%] translate-x-[-50%] shadow-xl">
                <h1 className="text-black text-2xl font-semibold">Passou ou não passou?</h1>
                <div className="my-10 flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="nota1" className="text-lg">Primeira nota</label>
                        <input className="bg-yellowLight w-60 p-2 rounded-md md:w-80" id="nota1" type="text" value={nota1} placeholder="ex: 60" onChange={(e) => setNota1(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="nota2" className="text-lg">Segunda nota</label>
                        <input className="bg-yellowLight w-60 p-2 rounded-md md:w-80" id="nota2" type="text" value={nota2} placeholder="ex: 60" onChange={(e) => setNota2(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="nota3" className="text-lg">Terceira nota</label>
                        <input className="bg-yellowLight w-60 p-2 rounded-md md:w-80" id="nota3" type="text" value={nota3} placeholder="ex: 60" onChange={(e) => setNota3(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="nota4" className="text-lg">Quarta nota</label>
                        <input className="bg-yellowLight w-60 p-2 rounded-md md:w-80" id="nota4" type="text" value={nota4} placeholder="ex: 60" onChange={(e) => setNota4(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="nota5" className="text-lg">Quinta nota</label>
                        <input className="bg-yellowLight w-60 p-2 rounded-md md:w-80" id="nota5" type="text" value={nota5} placeholder="ex: 60" onChange={(e) => setNota5(e.target.value)}/>
                    </div>

                    <button className="border p-1 px-4 rounded-lg bg-yellowMid transition ease-in-out hover:bg-yellowDark cursor-pointer" onClick={calc}>Calcular</button>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-lg">Média: {!isNaN(result ?? NaN) ? result : msgError}</h2>
                    <h2 className="text-lg">Resultado: {mensagem}</h2>
                </div>
            </div>
        </div>
    )
}