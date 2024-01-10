import ProfileImg from 'assets/images/photo.png';
import './styles.css';

const ResultCard = () => {
   return (
      <div className="card-container">
         <div className="card-image">
            <img src={ProfileImg} alt="Foto do perfil" />
         </div>

         <div className="card-content">
            <h6>Informações</h6>
            <div className="card-info">
               <h3>Perfil:</h3>
               <p className="line-break color-url">
                  <b>https://api.github.com/users/acenelio</b>
               </p>
            </div>
            <div>
               <div className="card-info">
                  <h3>Seguidores:</h3>
                  <p className="line-break">4379</p>
               </div>
               <div className="card-info">
                  <h3>Localidade:</h3>
                  <p className="line-break">Uberlândia</p>
               </div>
               <div className="card-info">
                  <h3>Nome:</h3>
                  <p className="line-break">Nelio Alves</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResultCard;
