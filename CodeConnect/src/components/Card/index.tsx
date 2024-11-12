import "./styles.css";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import ICard from "../../interfaces/ICard";

const Card = ({ card }: { card: ICard }) => {
  return (
    <article className="card">
      <div className="card__image">
        <img src={card.imagem_capa} alt="imagem do post" />
      </div>
      <div className="card__content">
        <div className="card__content__text">
          <h3>{card.titulo}</h3>
          <p>{card.resumo}</p>
        </div>

        <div className="content__plinth">
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {card.linhas_de_codigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {card.compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {card.comentarios}
            </li>
          </ul>

          <div className="plinth_user">
            <img src={card.usuario.imagem} alt="imagem do usuário" />
            {card.usuario.nome}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card;