// Bibliotecas
import Image from "next/image";

// Imagens
import react from "../../../public/react.png";
import tailwind from "../../../public/tailwind.jpg";
import next from "../../../public/next.png";
import jquery from "../../../public/jquery.webp";

// Componentes
import { Card } from "@/components/card";
import { ReadMore } from "@/components/readMore";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Breve descrição sobre as tecnologias usadas",
};

export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center p-5">
                <Card link="#react" titulo="React" image={react} text="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."/>
                <Card link="#tailwind" titulo="Tailwind" image={tailwind} text="Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas."/>
                <Card link="#next" titulo="Next" image={next} text="Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React."/>
                <Card link="#jquery" titulo="JQuery" image={jquery} text="jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário."/>
            </div>

            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-2xl font-semibold">Leia mais sobre as tecnologias</h1>
                <div id="react">
                    <ReadMore titulo="React" image={react} text="O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros." />
                </div>

                <div id="tailwind">
                    <ReadMore titulo="Tailwind" image={tailwind} text="Tailwind CSS é um framework CSS de código aberto . A principal característica desta biblioteca é que, diferentemente de outros frameworks CSS como Bootstrap , ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas. Em vez disso, ela cria uma lista de classes CSS 'utilitárias' que podem ser usadas para estilizar cada elemento misturando e combinando. Por exemplo, em outros sistemas tradicionais, haveria uma classe message-warningque aplicaria uma cor de fundo amarela e texto em negrito. Para atingir esse resultado no Tailwind, seria preciso aplicar um conjunto de classes criadas pela biblioteca: bg-yellow-300e font-bold."/>
                </div>

                <div id="next">
                    <ReadMore titulo="Next" image={next} text="Next.js é uma estrutura React que permite vários recursos extras, incluindo renderização do lado do servidor e geração de sites estáticos. React é uma biblioteca JavaScript tradicionalmente usada para construir aplicações web renderizadas no navegador do cliente com JavaScript. Os desenvolvedores reconhecem vários problemas com esta estratégia, no entanto, como não atender aos usuários que não têm acesso ao JavaScript ou o desativaram, problemas de segurança em potencial, tempos de carregamento de página significativamente estendidos e pode prejudicar a otimização geral do mecanismo de pesquisa do site. Frameworks como Next.js contornam esses problemas, permitindo que parte ou todo o site seja renderizado no lado do servidor antes de ser enviado ao cliente. Next.js é um dos componentes mais populares disponíveis no React."/>
                </div>

                <div id="jquery">
                    <ReadMore titulo="JQuery" image={jquery} text="jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário (client-side). A biblioteca é um projeto da Fundação JS (em inglês: JS Foundation), que faz parte da Fundação Linux (em inglês: Linux Foundation) e seu desenvolvimento é realizado pelo time jQuery (em inglês: The jQuery Team). jQuery é uma biblioteca de código aberto baseada na licença MIT. Possui sintaxe que simplifica: a navegação do documento HTML, a seleção de elementos DOM, criar animações, manipular eventos, desenvolver aplicações AJAX e, criar plugins sobre ela. Tais facilidades permitem a criação de camadas de abstração, para interações de baixo nível de modo simplificado em aplicações web dinâmicas de grande complexidade. É usada por cerca de 74.4% dos 10 mil sites mais visitados do mundo, jQuery é considerada uma das mais populares bibliotecas do JavaScript."/>
                </div>
            </div>
        </div>
    )
}