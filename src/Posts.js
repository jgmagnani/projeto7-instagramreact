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
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(1); }}></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(1); }}></ion-icon>,
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
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(2); }}></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(2); }}></ion-icon>,
            classe: "saved-posts",
            liked: "adorable_animals",
            textoLike: <div className="texto">Curtido por <strong>adorable_animals</strong> e <strong data-test="likes-number">outras {(numCurtidasNew[1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        },
        {
            id: 3,
            iconeImagem: "https://scontent.fmoc4-1.fna.fbcdn.net/v/t39.30808-6/227475572_126738002977669_128015777806440481_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFxPVDFLq4_s-2lHvbVnKE5joVt9-QlfVSOhW335CV9VG6Voe61FJv4-8SN9rCBes6xM-rvubYoJrLAW78kKDGz&_nc_ohc=6vvroJ7XxgUAX_Cu7QI&_nc_ht=scontent.fmoc4-1.fna&oh=00_AfDrRyBjJc5Bitt24G2xOCvlnmsoLBE2b7KZeKTSJM7G5A&oe=637F4CD7",
            nome: "driven.education",
            imagem: "https://scontent.fmoc4-1.fna.fbcdn.net/v/t39.30808-6/309450913_413226097662190_7440088751221015583_n.png?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFyrtbFRniahmWpqjx5HDcq8dYD4Ne44Kbx1gPg17jgplpomy3CEk4pc7h-SaBu4NDS0UCgNecZd3NUKjMXiFXj&_nc_ohc=5QXkliA9O9cAX_KFIQ7&_nc_ht=scontent.fmoc4-1.fna&oh=00_AfA_FOerTrta6m0rmfV6QsaoWc0_LkP7euLLEMYCVVXs2Q&oe=637EC607",
            imagemCurtida: "https://scontent.fmoc4-1.fna.fbcdn.net/v/t39.30808-6/227475572_126738002977669_128015777806440481_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFxPVDFLq4_s-2lHvbVnKE5joVt9-QlfVSOhW335CV9VG6Voe61FJv4-8SN9rCBes6xM-rvubYoJrLAW78kKDGz&_nc_ohc=6vvroJ7XxgUAX_Cu7QI&_nc_ht=scontent.fmoc4-1.fna&oh=00_AfDrRyBjJc5Bitt24G2xOCvlnmsoLBE2b7KZeKTSJM7G5A&oe=637F4CD7",           
            curtida:  <ion-icon name="heart-outline" onClick={function () { botaoCurtir(3); }}></ion-icon>,
            salvar: <ion-icon name="bookmark-outline" onClick={function () { salvarPost(3); }}></ion-icon>,
            classe: "saved-posts",
            liked: "driven.education",
            textoLike: <div className="texto">Curtido por <strong>driven.education</strong> e <strong data-test="likes-number">outras {(numCurtidasNew[2]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} pessoas</strong></div>
        }
    ];

    const [postState, setPostState] = useState(posts);

    function botaoCurtir(id) {
        mudarCurtir("", id, false);
    }


    return (
        <div className="posts">
            {posts.map(posts => <Post iconeImagem={posts.iconeImagem} nome={posts.nome} imagem={posts.imagem} imagemCurtida={posts.imagemCurtida} curtida={posts.curtida} salvar={posts.salvar} classe={posts.classe} textoLike={posts.textoLike} />)}

        </div>
    )
}
