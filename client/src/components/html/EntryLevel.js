import '../css/EntryLevel.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import AllPhones from './AllPhones';
import PhoneFullDetails from './PhoneFullDetails';

const EntryLevel = () => {
    const [mobileBlogList, setmobileBlogList] = useState([]);
    let [mobileFullDetails, setmobileFullDetails] = useState([]);
    const [modalPopUp, setmodalPopUp] = useState(false);
    const {id} = useParams();
    const path = "/EntryLevel/";

    useEffect(() => {
        Axios.get('http://localhost:3001/EntryLevel/')
            .then((response)=>{
                setmobileBlogList(response.data)
            })
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/EntryLevel/${id}`)
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
        <>
            <section className='phone-group'>
                <h1><span>Entry Level</span>Phones</h1>
                <AllPhones path={path} modalPopUp={modalPopUp} mobileBlogList={mobileBlogList} showFullDetails={showFullDetails}/>

                {modalPopUp && (
                   <PhoneFullDetails mobileFullDetails={mobileFullDetails} showFullDetails={showFullDetails}/> 
                )}
            </section>

            <div className="brands">
                <h2>Show by brand</h2>
                <div className="brand-first-group">
                    <Link to="/EntryLevel_CherryMobile"><img src="/SVG/cherry.svg" alt="cherry" /></Link>
                    <Link to="/EntryLevel_Vivo"><img src="/SVG/vivo.svg" alt="vivo" /></Link>
                    <Link to="/EntryLevel_Oppo"><img src="/SVG/oppo.svg" alt="oppo" /></Link>
                    <Link to="/EntryLevel_Samsung"><img src="/SVG/samsung.svg" alt="samsung" /></Link>
                    <Link to="/EntryLevel_Infinix"><img src="/SVG/infinix.svg" alt="infinix" /></Link>
                    <Link to="/EntryLevel_TecnoMobile"><img src="/SVG/tecno.svg" alt="tecno" /></Link>
                    <Link to="/EntryLevel_Xiaomi"><img src="/SVG/xiaomi.svg" alt="xiaomi" /></Link>
                    <Link to="/EntryLevel_Realme"><img src="/SVG/realme.svg" alt="realme" /></Link>
                </div>
            </div> 
        </>
    );
}
 
export default EntryLevel;