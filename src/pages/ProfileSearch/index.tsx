import Navbar from 'components/Navbar';

import './styles.css';

const ProfileSearch = () => {
  return (
    <>
      <Navbar />
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
      </div>
    </>
  );
};

export default ProfileSearch;
