import '../css/EntryLevel.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import AllPhones from './AllPhones';
import PhoneFullDetails from './PhoneFullDetails';

const FlagShip = () => {
    const [mobileBlogList, setmobileBlogList] = useState([]);
    let [mobileFullDetails, setmobileFullDetails] = useState([]);
    const [modalPopUp, setmodalPopUp] = useState(false);
    const {id} = useParams();
    const path = "/FlagShip/";

    useEffect(() => {
        Axios.get('http://localhost:3001/FlagShip/')
            .then((response)=>{
                setmobileBlogList(response.data)
            })
    }, []);

    useEffect(() => {
        Axios.get(`http://localhost:3001/FlagShip/${id}`)
            .then((response)=>{
                setmobileFullDetails(response.data);
            })
    },[id]);

    const showFullDetails = () => {
        setmodalPopUp(!modalPopUp);
    }

    return (
        <>
            <section className='phone-group'>
                <h1><span>Flag Ship</span>Phones</h1>
                <AllPhones path={path} modalPopUp={modalPopUp} mobileBlogList={mobileBlogList} showFullDetails={showFullDetails}/>

                {modalPopUp && (
                   <PhoneFullDetails mobileFullDetails={mobileFullDetails} showFullDetails={showFullDetails}/> 
                )}
            </section>

            <div className="brands">
                <h2>Show by brand</h2>
                <div className="brand-first-group">
                    <Link to="/MidRange_Vivo"><img src="/SVG/vivo.svg" alt="vivo" /></Link>
                    <Link to="/MidRange_Oppo"><img src="/SVG/oppo.svg" alt="oppo" /></Link>
                    <Link to="/MidRange_Samsung"><img src="/SVG/samsung.svg" alt="samsung" /></Link>
                    <Link to="#"><img src="/SVG/huawei.svg" alt="huawei" /></Link>
                    <Link to="/MidRange_Xiaomi"><img src="/SVG/xiaomi.svg" alt="xiaomi" /></Link>
                    <Link to="/MidRange_Motorola"><img src="/SVG/motorola.svg" alt="" /></Link>
                    <Link to="/MidRange_Realme"><img src="/SVG/realme.svg" alt="realme" /></Link>
                </div>
            </div> 
        </>
    );
}
 
export default FlagShip;