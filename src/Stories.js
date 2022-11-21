import Story from "./Story";

const arrayStories = [
    {
        Nome: "9gag",
        imagem: require("../assets/img/9gag.svg"),
    },
    {
        Nome: "meowed",
        imagem: require("../assets/img/meowed.svg"),
    },
    {
        Nome: "barked",
        imagem: require("../assets/img/barked.svg"),
    },
    {
        Nome: "nathanwpylestrangeplanet",
        imagem: require("../assets/img/nathanwpylestrangeplanet.svg"),
    },
    {
        Nome: "wawawicomics",
        imagem: require("../assets/img/wawawicomics.svg"),
    },
    {
        Nome: "respondeai",
        imagem: require("../assets/img/respondeai.svg"),
    },
    {
        Nome: "filomoderna",
        imagem: require("../assets/img/filomoderna.svg"),
    },
    {
        Nome: "memeriagourmet",
        imagem: require("../assets/img/memeriagourmet.svg"),
    }
];

export default function Stories() {
    Return(
        <div class="stories">
            {arrayStories.map(itens =>
                <Story key={itens.Nome} imagem={itens.imagem} nome={itens.Nome} />
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
};