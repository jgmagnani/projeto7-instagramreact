import { useState } from "react"

export default function Usuario() {
    const [nomeUsuario, setNomeUsuario] = useState("Catana");
    const [imagemUsuario, setImagemUsuario] = useState(require("../assets/img/catanacomics.svg").default);

    function mudarNome() {
        const nome = prompt("Qual o seu nome?");
        setNomeUsuario(nome ? nome : nomeUsuario);
    }

    function mudarImagem() {
        let imagem = new Image();
        imagem = prompt("Insira uma imagem para o perfil");
        if (imagem){
            setImagemUsuario(imagem);
        }else{
            alert("Imagem inválida!");
        }
    }

    return (
        <div className="usuario">
            <img src={imagemUsuario} onClick={mudarImagem} alt="" data-test="profile-image" />
            <div className="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {nomeUsuario}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    )

}