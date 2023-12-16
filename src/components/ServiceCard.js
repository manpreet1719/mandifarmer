import service1 from '../assests/service1.jpg';
import farmer1 from '../assests/farmer1.jpg'
import { Link } from 'react-router-dom'
const ServiceCard = ({items}) => {
    console.log(items);
    return(

        <div class="col-lg-4">
            <Link style={{ textDecoration: 'none', color: 'black'}} to={"/seedsservice/"+'12'}>
            <div class="card shadow-sm bg-white rounded h-30 my-3">
            <img class="card-img-top" src={farmer1} alt="Card image" style={{ width: "100%", height:"10rem" }} />
            <div class="card-body">
                <h4 class="card-title">{items.name}</h4>
                <p class="card-text">{items.description}</p>
                <p class="card-text">Catergory : <span>{items.category}</span></p>
                <p class="card-text">Price : <span>{items.price}/kg</span></p>
                <div class="text-center">
                <Link style={{ textDecoration: 'none', color: 'black',backgroundColor:'green' }} to="/seedsservice/addtocart">Add To Cart</Link>
                </div>
            </div>
        </div>
            </Link>
    </div>
    );
}
export default ServiceCard;