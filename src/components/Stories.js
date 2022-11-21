import Story from "./Story";

const arrayStories = [
    {
        Nome: "9gag",
        imagem: require("../assets/img/9gag.svg").default,
    },
    {
        Nome: "meowed",
        imagem: require("../assets/img/meowed.svg").default,
    },
    {
        Nome: "barked",
        imagem: require("../assets/img/barked.svg").default,
    },
    {
        Nome: "nathanwpylestrangeplanet",
        imagem: require("../assets/img/nathanwpylestrangeplanet.svg").default,
    },
    {
        Nome: "wawawicomics",
        imagem: require("../assets/img/wawawicomics.svg").default,
    },
    {
        Nome: "respondeai",
        imagem: require("../assets/img/respondeai.svg").default,
    },
    {
        Nome: "filomoderna",
        imagem: require("../assets/img/filomoderna.svg").default,
    },
    {
        Nome: "memeriagourmet",
        imagem: require("../assets/img/memeriagourmet.svg").default,
    }
];

export default function Stories() {
    return (
        <div className="stories">
            {arrayStories.map(itens =>
                <Story key={itens.Nome} imagem={itens.imagem} nome={itens.Nome} />
            )}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
};