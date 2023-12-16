import service1 from '../assests/service1.jpg';
import farmer1 from '../assests/farmer1.jpg'
import { Link } from 'react-router-dom'
import translation from '../langugae/translation';
import { useLanguage } from '../utils/LanguageContext';
const HomeCard = ({data}) => {
    const { language, changeLanguage } = useLanguage();

    return(
        <div class="col-lg-4">
        <div class="card shadow-sm bg-white rounded h-30">
            <img class="card-img-top" src={farmer1} alt="Card image" style={{ width: "100%", height:"10rem" }} />
            <div class="card-body">
                <h4 class="card-title">{data.title}</h4>
                <p class="card-text">{data.description}</p>
                <div class="text-center">
                    <Link style={{ textDecoration: 'none', color: 'black',backgroundColor:'green' }} to={data.Link}>Link</Link>
                </div>
            </div>
        </div>
    </div>
    );
}
export default HomeCard;