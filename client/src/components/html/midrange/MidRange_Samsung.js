import '../../css/Brand.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import AllPhones from '../AllPhones';
import PhoneFullDetails from '../PhoneFullDetails';

const MidRange_Samsung = () => {

    const [mobileBlogList, setmobileBlogList] = useState([]);
    let [mobileFullDetails, setmobileFullDetails] = useState([]);
    const [modalPopUp, setmodalPopUp] = useState(false);
    const {id} = useParams();
    let path = "/MidRange_Samsung/";

    useEffect(() => {
        Axios.get('http://localhost:3001/MidRange_Samsung')
            .then((response)=>{
                setmobileBlogList(response.data)
            })
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/MidRange_Samsung/${id}`)
            .then((response)=>{
                setmobileFullDetails(response.data);
            })
    },[id]);

    const showFullDetails = () => {
        setmodalPopUp(!modalPopUp);
    }

    if(modalPopUp === true){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

    return ( 
        <section className="brand-group">
            <Link to="../MidRange">
                <h1><img src="/SVG/samsung.svg" alt="samsung"/> Phones</h1>
            </Link> 

            <AllPhones path={path} modalPopUp={modalPopUp} mobileBlogList={mobileBlogList} showFullDetails={showFullDetails}/>

            {modalPopUp && (
                <PhoneFullDetails path={path} mobileFullDetails={mobileFullDetails} showFullDetails={showFullDetails}/>
            )}
        </section>
    );
}
 
export default MidRange_Samsung;