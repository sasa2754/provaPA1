"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

export default function imcPage() {
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [result, setResult] = useState <number | undefined>(0);
    const msgError = "Insira um número válido";

    const calc = () => {
        const nPeso = parseFloat(peso);
        const nAltura = parseFloat(altura);

        if(!isNaN(nPeso) && !isNaN(nAltura)) {
            setResult(nPeso/(nAltura*nAltura));
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
        <>
            <div className="flex p-2 self-end z-10 rounded-xl">
                <ToastContainer/>
            </div>
            <div className="flex flex-col p-4 items-center justify-center max-w-[700px] max-h-[550px] h-5/6 w-5/6 bg-yellowLight rounded-lg fixed top-2/4 left-2/4 translate-y-[-45%] translate-x-[-50%] shadow-xl">
                <h1 className="text-black text-2xl font-semibold">Calcular IMC</h1>
                <div className="my-10 flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="peso" className="text-lg">Insira seu peso</label>
                        <input className="w-60 p-2 rounded-md shadow md:w-80" id="peso" type="text" value={peso} placeholder="ex: 60" onChange={(e) => setPeso(e.target.value)}/>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="altura" className="text-lg">Insira sua altura</label>
                        <input className="w-60 p-2 rounded-md shadow md:w-80" id="altura" type="text" value={altura} placeholder="ex: 1.68" onChange={(e) => setAltura(e.target.value)}/>
                    </div>

                    <button className="border p-1 px-4 rounded-lg bg-yellowMid transition ease-in-out hover:bg-yellowDark cursor-pointer" onClick={calc}>Calcular</button>
                </div>
                <h1 className="text-lg">Resultado: {!isNaN(result ?? NaN) ? result : msgError}</h1>
            </div>
        </>
    )
}