

export default function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.iconeImagem} />
                    {props.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imagem} />
                <div className={props.classe}>
                    <p>Seu post foi salvo!</p>
                </div>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {props.curtida}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {props.salvar}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imagemCurtida} />
                    {props.textoLike}
                </div>
            </div>
        </div>
    )

}