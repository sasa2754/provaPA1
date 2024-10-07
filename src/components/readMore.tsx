import { StaticImageData } from "next/image";
import Image from "next/image";

interface IReadMore {
    titulo: string,
    image: StaticImageData,
    text: string,
}

export const ReadMore = ({titulo, image, text} : IReadMore) => {
    return (
        <div className="flex flex-col items-center md:flex-row p-3 gap-2 md:max-w-[1500px] md:gap-10">
            <Image className="rounded-lg md:h-[210px]" src={image} alt="imagem" width={300} height={300} priority/>
            <div className="bg-white flex flex-col items-center text-center gap-2 border rounded-lg p-4 shadow-md">
                <h1 className="text-xl font-semibold">{titulo}</h1>
                <p className="">{text}</p>
            </div>
        </div>
    )
}