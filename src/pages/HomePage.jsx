import React, { useState, useEffect } from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import LocationService from "../services/locationService";
import suggestionimg from "../assets/imgs/suggestionimg.png";
import UserInfo from "../components/home-page/UserInfo";
import { useNavigate } from "react-router";
import ForgottenFlavors from "../components/home-page/ForgottenFlavors.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const popular = [];
  useEffect(() => {
    const locationService = new LocationService();
    locationService.getLocations().then((res) => {
      setLocations(res.data.data);
    });
  });

  const divideLocations = () => {
    for (let i = 0; i <= locations.length; i++) {
        popular.push(locations[i]);
      
    }
  };
  divideLocations();

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div>
        {
          // Öneri için
        }
        <div className="suggestion-container d-flex flex-row align-items-center mt-5">
          <div>
            <h1 className="suggestion-h1-part">
              <span>Ankara Eymir Gölü</span>
            </h1>
            <div className="suggestion-desc-part">
              Eymir Gölü, Ankara il sınırları içinde yer alan muhteşem bir
              göldür. Arazisi Orta Doğu Teknik Üniversitesi'ne aittir. ODTÜ Spor
              Kulübü Kürek ve Yelken Takımları çalışma alanıdır. Göl kendine has
              bir fauna ve floraya sahiptir. "Eymir” adı adeta ODTÜ ile
              özdeşleşmiştir.
            </div>
            <UserInfo userProfilePhoto="" />
          </div>

          <div className="suggestion-img-part">
            <img
              onClick={() => {
                navigate("/location");
              }}
              className="suggestionIMG cursor-pointer"
              src={suggestionimg}
              alt="suggestion"
            />
          </div>
        </div>
      </div>

      <div>
        {
          // Kategori için
        }

        <CategoryItem type="Popüler" locations={popular} />
      </div>

      <div className="d-flex flex-column align-items-center">
        {
          // Unutulmuş Tatlar için
        }
        <h1>Unutulmuş Tatlar</h1>
        <div className="forgotten-flavors-home-page">
          Türk mutfağı birbirinden zengin ve farklı lezzetlere ev sahipliği
          yaparken az bilinen meşhur lezzetleri de unutmamak lazım. Sizin için
          Türk mutfağında az bilinen 20 yöresel lezzeti paylaştık. Eğer bu
          lezzetleri denemediyseniz mutlaka bir yolunu bulun!
        </div>
        <ForgottenFlavors/>
      </div>

      <div>
        {
          // Top 20 Müze için
        }
      </div>
    </div>
  );
};

export default HomePage;
