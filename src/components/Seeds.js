import ServiceCard from "./ServiceCard";
import '../styles/Seeds.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
const Seeds = () => {

    const [items,setItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("http://localhost:3001/api/items")
        .then(response => response.json())
        .then(data => {
            if (data) {
               console.log(data);
               setItems(data);
            }
        })
        .catch((err) => {
            console.log(err);
        })

      }, []);
    return (
        <>
            <div className="container seeds_body">
                <div className="row">
                    {
                       items.map((items)=> <ServiceCard items={items}/>)
                    }
                </div>
            </div>
        </>
    );
}
export default Seeds;