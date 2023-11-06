import service1 from '../assests/service1.jpg';
import farmer1 from '../assests/farmer1.jpg'
const HomeCard = () => {
    return(
        <div class="col-lg-4">
        <div class="card shadow-sm bg-white rounded h-30">
            <img class="card-img-top" src={farmer1} alt="Card image" style={{ width: "100%", height:"10rem" }} />
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Descriptionqwertyuiouytrewqertyu</p>
                <div class="text-center">
                    <a href='/' class="btn btn-success">Link</a>
                </div>
            </div>
        </div>
    </div>
    );
}
export default HomeCard;