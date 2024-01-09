import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Desafio Github API</h1>
            <p>DevSuperior - Escola de programação</p>
          </div>
          <button className="btn btn-primary btn-icon">
            <h6>Começar</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;