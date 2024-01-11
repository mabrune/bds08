import ProfileImg from 'assets/images/photo.png';
import ResultItem from 'components/ResultItem';

import './styles.css';

const ResultCard = () => {
   return (
      <div className="card-container">
         <div className="card-image">
            <img src={ProfileImg} alt="Foto do perfil" />
         </div>
         <div className="card-content">
            <h6>Informações</h6>
            <ResultItem title="Perfil:" description="https://api.github.com/users/acenelio"
               classText="color-url" />
            <ResultItem title="Seguidores:" description="4379" />
            <ResultItem title="Localidade:" description="Uberlândia" />
            <ResultItem title="Nome:" description="Nelio Alves" />
         </div>
      </div>
   );
};

export default ResultCard;
