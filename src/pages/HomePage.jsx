import React, { useState, useEffect } from "react";
import CategoryItem from "../components/searchPage/CategoryItem";
import LocationService from "../services/locationService";
import suggestionimg from '../assets/imgs/suggestionimg.png'

const HomePage = () => {
    const [locations, setLocations] = useState([])
    const dogalGuzellikler = []
    const eglence = []
    const unutulmuşLezzetler = []
    const muzeler = []
    useEffect(() => {
        const locationService = new LocationService()
        locationService.getLocations().then(res => {
            setLocations(res.data.data)
        })
    })

    const divideLocations = () => {
        for (let i = 0; i <= locations.length; i++) {
            if (locations[i]?.type[0]?.name === "Müze") {
                muzeler.push(locations[i])
            }
            // else if (locations[i]?.type[0]?.name === "Doğal Güzellik") {
            //     dogalGuzellikler.push(locations[i])
            // }
            // else if (locations[i]?.type[0]?.name === "Eğlence") {
            //     eglence.push(locations[i])
            // }
        }


    }
    divideLocations()

  return (
    <div className="d-flex flex-column align-items-center mt-5">
        <div> 
          {
            // Öneri için
          }
          <div className="suggestion-container d-flex flex-row align-items-center mt-5">
            <div>
              <h1 className="suggestion-h1-part"><span>Ankara Eymir Gölü</span></h1>
              <div className='suggestion-desc-part'>
                Eymir Gölü, Ankara il sınırları içinde yer alan muhteşem bir göldür. Arazisi Orta Doğu Teknik Üniversitesi'ne aittir. ODTÜ Spor Kulübü Kürek ve Yelken Takımları çalışma alanıdır. Göl kendine has bir fauna ve floraya sahiptir. "Eymir” adı adeta ODTÜ ile özdeşleşmiştir.
              </div>
            </div>

            <div className='suggestion-img-part'>
              <img className='suggestionIMG' src={suggestionimg} alt="suggestion" />
            </div>

          </div>

        </div>

        <div> 
          {
            // Kategori için
          }

            <CategoryItem
                type="Popüler"
                locations={muzeler}
            />
        </div>

        <div>
          {
            // Unutulmuş Tatlar için
          }
          
        </div>

        <div>
          {
            // Top 20 Müze için
          }
        </div>
    </div>
  )
}

export default HomePage