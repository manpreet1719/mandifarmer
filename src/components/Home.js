import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Home.css'
import farmer1 from '../assests/farmer1.jpg'
import seeds from '../assests/seeds.jpg'
import Button from 'react-bootstrap/Button';
import HomeCard from './HomeCard';
import { useState } from 'react';
import React from 'react';
import Select from 'react-select';
import CustomModal from './Modal';
import translation from '../langugae/translation';
import { useLanguage } from '../utils/LanguageContext';


import HomeCardData from '../assests/data/HomeCardData'

const Home = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validationMessage,setValidationMessage] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [mandilist, setMandiList] = useState([]);
    const { language, changeLanguage } = useLanguage();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      const phoneRegex = /^[0-9]{10}$/;
      if(!phoneRegex.test(phoneNumber)){
        setIsValid(phoneRegex.test(phoneNumber));
        if(phoneNumber == ''){
            setValidationMessage('Please enter Phone Number.')
        }
       return null;
      }else{
        setIsModalOpen(true);
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    // useEffect(() => {
    //     fetch("http://localhost:3001/api/allmandilistdata")
    //         .then(response => response.json())
    //         .then(data => {
    //             let mandionselect = data.map(item => ({
    //                 value: item,
    //                 label: item
    //             }))
    //             setMandiList(mandionselect);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])


    const sendNotification = () => {
        let payload = {
            message: "Price Details are :",
            phonenumberTo: phoneNumber,
        }
        fetch("http://localhost:3001/api/notification", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            }).catch(error => {
                console.error('Notification error:', error);
            });
    }

    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;
       
        setPhoneNumber(inputValue);

        // Basic phone number validation using a regular expression
        const phoneRegex = /^[0-9]{10}$/;
        setIsValid(phoneRegex.test(inputValue));
        setValidationMessage('Invalid Phone Number');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            sendNotification();
        }
    };
    const handleChange = (selector, event) => {
        console.log("change");

    }
    return (
        <div className='container' style={{ marginTop: '45px', marginBottom: '80px' }}>
            <div className="row">
                <div className="col-sm-6 col-lg-7 div1">
                    <div className='home_main'>
                        <div className='home_title'>
                            <h1>{translation[language]['MANDI_PRICES']}</h1>
                        </div>
                        <div className='home_description'>
                            <p>{translation[language]['JOIN_US']}</p>
                        </div>
                        <div className='home_subscribe'>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <form>
                                            <label style={{ marginRight: '8px' }}>{translation[language]['PHONE_NUMBER']} : </label>
                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                value={phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                                style={{ height: "38px" }}
                                            />
                                        </form>
                                        {!isValid && <p style={{ color: 'red' }}>{validationMessage}</p>}
                                       
                                    </div>
                                </div>
                                {/* <div className="col">
                                    <div className='select_body'>
                                        <Select 
                                            options={mandilist}
                                            placeholder="Search for an option"
                                            isSearchable
                                            onChange={event => handleChange("state", event)}
                                        />
                                    </div>
                                </div> */}
                                <div className="col">
                                    <div>
                                        <CustomModal isOpen={isModalOpen} onClose={closeModal}>
                                            <div className="mandi_description">
                                                <span className="mandi_description_title"><h3>Select Mandi For Notification</h3></span>
                                               
                                            </div>
                                        <div className='select_body'>
                                            <Select className='select_class'
                                                options={[]}
                                                placeholder="Search for an option"
                                                isSearchable
                                                onChange={event => handleChange("commondity", event)}
                                            />
                                            <Select className='select_class'
                                                options={[]}
                                                placeholder="Search for an option"
                                                isSearchable
                                                onChange={event => handleChange("state", event)}
                                            />
                                            <Select className='select_class'
                                                options={[]}
                                                placeholder="Search for an option"
                                                isSearchable
                                                onChange={event => handleChange("mandi", event)}
                                            />
                                           <Select className='select_class'
                                                options={[]}
                                                placeholder="Search for an option"
                                                isSearchable
                                                onChange={event => handleChange("mandi", event)}
                                            />
                                            </div>
                                            <div className='modal_Btn'>
                                            <div className='search_btn'>
                                                <Button variant="outline-success">{translation[language]['SUBMIT']}</Button>
                                            </div>
                                            <div className='search_btn'>
                                                <Button variant="outline-danger" onClick={closeModal}>Cancel</Button>
                                            </div>
                                            </div>
                                        </CustomModal>
                                    </div>
                                    <Button className="submit_Btn"variant="outline-success" type="submit"  onClick={openModal}>{translation[language]['SELECT_MANDI_PRICE']}</Button>
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
            <h1 className="text-center">{translation[language]['SERVICES']}</h1>
            <div className="row">
                {
                    HomeCardData[language].map((data)=>  <HomeCard data = {data}/>)
                }
               
            </div>
        </div>


    );
}
export default Home;