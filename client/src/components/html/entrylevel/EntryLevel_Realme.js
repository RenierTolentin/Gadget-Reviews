import '../../css/Brand.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import AllPhones from '../AllPhones';
import PhoneFullDetails from '../PhoneFullDetails';

const EntryLevel_Realme = () => {

    const [mobileBlogList, setmobileBlogList] = useState([]);
    let [mobileFullDetails, setmobileFullDetails] = useState([]);
    const [modalPopUp, setmodalPopUp] = useState(false);
    const {id} = useParams();
    let path = "/EntryLevel_Realme/";

    useEffect(() => {
        Axios.get('http://localhost:3001/EntryLevel_Realme')
            .then((response)=>{
                setmobileBlogList(response.data)
            })
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/EntryLevel_Realme/${id}`)
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
            <Link to="../EntryLevel">
                <h1><img src="/SVG/realme.svg" alt="realme"/> Phones</h1>
            </Link> 

            <AllPhones path={path} modalPopUp={modalPopUp} mobileBlogList={mobileBlogList} showFullDetails={showFullDetails}/>

            {modalPopUp && (
                <PhoneFullDetails path={path} mobileFullDetails={mobileFullDetails} showFullDetails={showFullDetails}/>
            )}
        </section>
    );
}
 
export default EntryLevel_Realme;