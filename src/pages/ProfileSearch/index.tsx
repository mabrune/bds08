import ResultCard from 'components/ResultCard';

import './styles.css';

const ProfileSearch = () => {
   return (
      <div className="search-container">
         <div className="search-card">
            <h2>Encontre um perfil Github</h2>
            <form>
               <div className="form-container">
                  <input type="text" placeholder="Usuário Github" />
                  <button type="submit" className="btn btn-primary btn-icon">
                     Encontrar
                  </button>
               </div>
            </form>
         </div>
         <div className="search-card-info">
            <ResultCard />
         </div>
      </div>
   );
};

export default ProfileSearch;