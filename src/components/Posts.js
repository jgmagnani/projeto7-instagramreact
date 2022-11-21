import { useState } from "react"
import Post from "./Post";



export default function Posts() {
    let numCurtidas = [ 234, 43653, 1533];
    const [numCurtidasNew, setNumCurtidasNew] = useState(numCurtidas);
    
    let posts = [
        {
            id: 1,
            iconeImagem: require("../assets/img/meowed.svg").default,
            nome: "meowed",
            imagem: require("../assets/img/gato-telefone.svg").default,
            imagemCurtida: require("../assets/img/respondeai.svg").default,
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(1); }} data-test="like-post"></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(1); }} data-test="save-post"></ion-icon>,
            classe: "saved-posts",
            liked: "respondeai",
            textoLike: <div className="texto">Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {(numCurtidasNew[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>

        },
        {
            id: 2,
            iconeImagem: require("../assets/img/barked.svg").default,
            nome: "barked",
            imagem: require("../assets/img/dog.svg").default,
            imagemCurtida: require("../assets/img/adorable_animals.svg").default,  
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(2); }} data-test="like-post"></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(2); }} data-test="save-post"></ion-icon>,
            classe: "saved-posts",
            liked: "adorable_animals",
            textoLike: <div className="texto">Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras {(numCurtidasNew[1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
        {
            id: 3,
            iconeImagem: require("../assets/img/barked.svg").default,
            nome: "driven.education",
            imagem: require("../assets/img/dog.svg").default,
            imagemCurtida: require("../assets/img/adorable_animals.svg").default,
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(3); }} data-test="like-post"></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(3); }} data-test="save-post"></ion-icon>,
            classe: "saved-posts",
            liked: "driven.education",
            textoLike: <div className="texto">Curtido por <strong>driven.education</strong> e <strong data-test="likes-number">outras {(numCurtidasNew[2]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        }
    ];

    const [postState, setPostState] = useState(posts);

    function botaoCurtir(id) {
       // mudarCurtir("", id, false);
    }

    function salvarPost(id) {
        
    }


    return (
        <div className="posts">
            {posts.map(posts => <Post iconeImagem={posts.iconeImagem} nome={posts.nome} imagem={posts.imagem} imagemCurtida={posts.imagemCurtida} curtida={posts.curtida} salvar={posts.salvar} classe={posts.classe} textoLike={posts.textoLike} />)}

        </div>
    )
}
