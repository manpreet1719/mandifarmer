import '../styles/Mandi.css'
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import LineChart from './LineChart';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import translation from '../langugae/translation';
import { useLanguage } from '../utils/LanguageContext';
const Mandi = () => {
    const [priceDetails, setPriceDetails] = useState([]);
    const { language, changeLanguage } = useLanguage();
    const [state, setState] = useState('');
    const [mandi, setMandi] = useState('');
    const [commondity, setCommondity] = useState('');
    const [mandilist, setMandiList] = useState([]);
    const [commoditylist, setCommondityList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [allMandilistData, setAllMandiListData] = useState({});
    const [message, setMessage] = useState(translation[language]['CHECK_MANDI_PRICES']);
    const [updatedDate, setUpdatedDate] = useState('-');
    const [errormessage,setErrorMessage] = useState('');


    useEffect(() => {
        fetch("http://localhost:3001/api/getallmandilist")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setAllMandiListData(data);
                    let commoditylist = data.commonditylist.map(item => ({
                        value: item,
                        label: item
                    }));
                    setCommondityList(commoditylist);

                    //setting statelist
                    let statelist = Object.keys(data.mandiByState).map(item => ({
                        value: item,
                        label: item
                    }));
                    setStateList(statelist);

                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(()=>{
        setMessage(translation[language]['CHECK_MANDI_PRICES']);
    },language);
    const getMandiDetails = () => {
        let token = localStorage.getItem('token');
        const payload = {
            "commondity": commondity,
            "state": state,
            "mandi": mandi
        }
        fetch("http://localhost:3001/api/mandipricesdetails", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
              },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                if(data.error == "Authentication required"){
                      setErrorMessage("Please Login to get Price Details");
                      return;
                }
                if (data.result.length > 0) {
                    setPriceDetails(data.result[0].priceList)
                    setMessage(commondity + "(" + mandi + ")" + state);
                    setUpdatedDate(new Date(data.result[0].updatedAt).toLocaleDateString())
                } else {
                    setPriceDetails([])
                }

            }).catch(error => {
                console.error('Fetch error:', error);
            });

    }
    const handleChange = (selector, event) => {
        if (selector == 'commondity') {
            setCommondity(event.value);
        } else if (selector == 'state') {
            let mandionselect = allMandilistData.mandiByState[event.value].map(item => ({
                value: item,
                label: item
            }))
            setMandiList(mandionselect);
            setState(event.value);
        } else if (selector == 'mandi') {
            setMandi(event.value);
        }

    }
    return (
        <div className='container mt-4 mb-5'>
             {errormessage && <Alert variant="danger">{errormessage}</Alert>}
            <div className="mandi_description">
                <span className="mandi_description_title"><h1>{message}</h1></span>
                {priceDetails.length > 0 ? <span className='mandi_updated'><p>Price Updated at : {updatedDate}</p></span> : null}
            </div>
            <div className='select_body'>
                <Select className='select_class'
                    options={commoditylist}
                    placeholder="Search for an option"
                    isSearchable
                    onChange={event => handleChange("commondity", event)}
                />
                <Select className='select_class'
                    options={stateList}
                    placeholder="Search for an option"
                    isSearchable
                    onChange={event => handleChange("state", event)}
                />
                <Select className='select_class'
                    options={mandilist}
                    placeholder="Search for an option"
                    isSearchable
                    onChange={event => handleChange("mandi", event)}
                />
                <div className='search_btn'>
                    <Button variant="outline-success" onClick={getMandiDetails}>{translation[language]['SUBMIT']}</Button>
                </div>

            </div>
            <hr></hr>

            <h3>Prices Details</h3>
            <LineChart priceDetails={priceDetails} />
        </div>

    );
}
export default Mandi;