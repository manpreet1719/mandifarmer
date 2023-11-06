import '../styles/Mandi.css'
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import LineChart from './LineChart';
const Mandi = () => {

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        // Add more options as needed
    ];
    return (
        <div className='container mt-4'>
            <div className="mandi_description">
                <span className="mandi_description_title"><h1>Basmati Punjab(Jalalabad)West</h1></span>
                <span className='mandi_updated'><p>Price Updated at : 04-011-2023</p></span>
            </div>
            <div className='select_body'>
                <Select className='select_class'
                    options={options}
                    placeholder="Search for an option"
                    isSearchable
                />
                 <Select className='select_class'
                    options={options}
                    placeholder="Search for an option"
                    isSearchable
                />
                 <Select className='select_class'
                    options={options}
                    placeholder="Search for an option"
                    isSearchable
                />
                <div className='search_btn'>
                <Button  variant="outline-success" type="submit">Submit</Button>
                </div>
                
            </div>
            <hr></hr>

            <h3>Prices Details</h3>
            <LineChart />
        </div>

    );
}
export default Mandi;