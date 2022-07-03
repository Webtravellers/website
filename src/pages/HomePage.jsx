import React, { useState, useEffect } from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import LocationService from "../services/locationService";
import suggestionimg from "../assets/imgs/suggestionimg.png";
import UserInfo from "../components/home-page/UserInfo";
import { useNavigate } from "react-router";
import ForgottenFlavors from "../components/home-page/ForgottenFlavors.jsx";
import { Button } from "reactstrap";
import TopMuseums from "../components/home-page/TopMuseums";

const HomePage = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const popular = [];
  const muzeler = [];
  useEffect(() => {
    const locationService = new LocationService();
    locationService.getLocations().then((res) => {
      setLocations(res.data.data);
    });
  });

  const divideLocations = () => {
    for (let i = 0; i <= locations.length; i++) {
      popular.push(locations[i]);
      if (locations[i]?.type[0]?.name === "Müze") {
        muzeler.push(locations[i]);
      }
    }
  };
  divideLocations();

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="d-flex justify-content-center">
        {
          // Öneri için
        }
        <div className="suggestion-container d-flex flex-row align-items-center">
          <div className="suggestion-part">
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

      <div className="pt-5 mt-5">
        {
          // Kategori için
        }

        <CategoryItem type="Popüler" locations={popular} />
      </div>

      <div className="d-flex flex-column align-items-center pt-5 mt-5">
        {
          // Unutulmuş Tatlar için
        }
        <h1 className="home-page-h1">Unutulmuş Tatlar</h1>
        <div className="forgotten-flavors-home-page">
          Türk mutfağı birbirinden zengin ve farklı lezzetlere ev sahipliği
          yaparken az bilinen meşhur lezzetleri de unutmamak lazım. Sizin için
          Türk mutfağında az bilinen 20 yöresel lezzeti paylaştık. Eğer bu
          lezzetleri denemediyseniz mutlaka bir yolunu bulun!
        </div>
        <ForgottenFlavors />
      </div>

      <div className="d-flex flex-row pt-5 mt-5">
        {
          // Top 10 Müze için
        }
        <div className="top-part">
          <h1 className="home-page-h1">
            Her Öğrencinin Kesinlikle Gezmesi Gereken 12 Müze
          </h1>
          <div className="top-part-home-page">
            Milli Eğitim Bakanlığının ders müfredatı kapsamında bir ilkokul,
            ortaokul ve lise öğrencisinin mutlaka gitmesi gerek yerleri sizin
            için planladık.
          </div>
          <Button className="category-item-button bg-dark text-light justify-self-end m-3">
            Daha Fazlası için
          </Button>
        </div>
        <div>
          <TopMuseums />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
