import { useParams } from "react-router-dom";

const SeedsDetails = () => {
    const params= useParams();
    console.log(params);
    const {id} = params;
    return(
        <>
        <h1>Seeds Details id : {id}</h1>
        </>
    );
}

export default SeedsDetails;