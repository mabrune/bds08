import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

import './styles.css';

type FormData = {
   user: string;
};

type UserData = {
   avatar_url: string;
   url: string;
   followers: string;
   location: string;
   name: string;
};

const ProfileSearch = () => {
   const [formData, setFormData] = useState<FormData>({
      user: '',
   });

   const [userData, setUserData] = useState<UserData>();

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      axios
         .get(`https://api.github.com/users/${formData.user}`)
         .then((response) => {
            setUserData(response.data);
         })
         .catch((error) => {
            setUserData(undefined);
            console.log(error);
         });
   };

   return (
      <div className="search-container">
         <div className="search-card">
            <h2>Encontre um perfil Github</h2>
            <form onSubmit={handleSubmit}>
               <div className="form-container">
                  <input
                     type="text"
                     placeholder="Usuário Github"
                     onChange={handleChange}
                     name="user"
                     value={formData.user}
                  />
                  <button type="submit" className="btn btn-primary btn-icon">
                     Encontrar
                  </button>
               </div>
            </form>
         </div>

         {userData && (
            <>
               <ResultCard
                  avatar_url={userData.avatar_url}
                  url={userData.url}
                  followers={userData.followers}
                  location={userData.location}
                  name={userData.name}
               />
            </>
         )}
      </div>
   );
};

export default ProfileSearch;
