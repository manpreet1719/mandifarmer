import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Home.css'
import service4 from '../assests/service4.jpg';
import farmer1 from '../assests/farmer1.jpg'
import seeds from '../assests/seeds.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div className='container' style={{ marginTop: '45px' }}>
            <div className="row">
                <div className="col-sm-6 col-lg-7 div1">
                    <div className='home_main'>
                        <div className='home_title'>
                            <h1>Mandi prices</h1>
                        </div>
                        <div className='home_description'>
                            <p>Join us to access the latest mandi prices and a range of other valuable services.</p>
                        </div>
                        <div className='home_subscribe'>
                            <div className="row">
                                <div className="col">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                                </div>
                                <div className="col">
                                    <Button  variant="outline-success" type="submit">Submit</Button>
                                </div>
                            </div>
                        </div>
                        <div className='home_service'>
                            <div className="row">
                                <div className="col">
                                    <img className='service_image' src={seeds} alt="coding Image"></img>
                                </div>
                                <div className="col">
                                    <img className='service_image' src={seeds} alt="coding Image"></img>
                                </div>
                                <div className="col">
                                    <img className='service_image' src={seeds} alt="coding Image"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-5 text-center">
                    <div >
                        <img className='home_image' src={farmer1} alt="coding Image"></img>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h1 className="text-center">Services</h1>
            <div className="row">
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
            {/* <h1 className="text-center mt-4">Latest Blogs</h1>
            <div className="row justify-content-md-center">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <div className="col text-center mt-4">
                    <Button variant="outline-success">Load More....</Button>
                </div>

            </div> */}
        </div>


    );
}
export default Home;