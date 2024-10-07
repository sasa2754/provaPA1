import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string,
    op2: string,
    op3: string
}

export const Menu = ({op1, op2, op3} : IMenu) => {
    return (
        <nav className="bg-blue flex justify-between p-2 text-white shadow-xl">
            <h1 className="font-bold">Prova PA</h1>
            <div className="flex flex-row gap-2">
                <Link className="hover:font-bold" href={ROUTES.home}>{op1}</Link>
                <Link className="hover:font-bold" href={ROUTES.imc}>{op2}</Link>
                <Link className="hover:font-bold" href={ROUTES.passou}>{op3}</Link>
            </div>
        </nav>
    )
}