import "./styles.css";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import PropTypes from "prop-types";

export default function Card({
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="Imagem da postagem" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="Códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="Compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="Ccmentários" />
              {comentarios}
            </li>
          </ul>

          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="Foto do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imagemUrl: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  resumo: PropTypes.string.isRequired,
  linhasDeCodigo: PropTypes.number.isRequired,
  compartilhamentos: PropTypes.number.isRequired,
  comentarios: PropTypes.number.isRequired,
  usuario: PropTypes.shape({
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
  }).isRequired,
};
