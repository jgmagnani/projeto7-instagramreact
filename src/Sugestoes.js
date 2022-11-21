import Sugestao from "./Sugestao"

const sugestoes = [
    {
        imagem: require("../assets/img/bad.vibes.memes.svg").default,
        nome: "bad.vibes.memes",
        status: "Segue você"
    },
    {
        imagem: "https://scontent.fmoc4-1.fna.fbcdn.net/v/t39.30808-6/315695380_3460557077510500_5611183515654677219_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEm3Bjpoopb3juV9yW0ELceb0yyS937IjhvTLJL3fsiODh-uy_zaOjtTHhJxH6CR6CEy8qH4axh6lMYwmWPkNz6&_nc_ohc=r_C2A0SMx0QAX_DJfIA&_nc_ht=scontent.fmoc4-1.fna&oh=00_AfCSxP0YJxAMLl4bWuPVggCn7knDTtDte1qoDpMIPYn40A&oe=637F5344",
        nome: "pqpmath3ws",
        status: "Novo no Instagram"
    },
    {
        imagem: require("../assets/img/razoesparaacreditar.svg").default,
        nome: "razoesparaacreditar",
        status: "Novo no Instagram"
    },
    {
        imagem: "https://scontent.fmoc4-1.fna.fbcdn.net/v/t39.30808-6/227475572_126738002977669_128015777806440481_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFxPVDFLq4_s-2lHvbVnKE5joVt9-QlfVSOhW335CV9VG6Voe61FJv4-8SN9rCBes6xM-rvubYoJrLAW78kKDGz&_nc_ohc=6vvroJ7XxgUAX_Cu7QI&_nc_ht=scontent.fmoc4-1.fna&oh=00_AfDrRyBjJc5Bitt24G2xOCvlnmsoLBE2b7KZeKTSJM7G5A&oe=637F4CD7",
        nome: "driven.education",
        status: "Segue você"
    },
    {
        imagem: require("../assets/img/adorable_animals.svg").default,
        nome: "adorable_animals",
        status: "Segue você"
    },
    {
        imagem: require("../assets/img/smallcutecats.svg").default,
        nome: "smallcutecats",
        status: "Segue você"
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
        {sugestoes.map( sugests => <Sugestao key={sugests.nome} imagem={sugests.imagem} nome={sugests.nome} status={sugests.status} />)}
        </div>
    )
}