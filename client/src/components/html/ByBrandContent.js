import { Link } from "react-router-dom";

const ByBrandContent = ({phones}) => {

    return (
        <div className='brand-first-group'>
                {phones.map((phone, key) => {
                    return  <div key={key} className="brand-child">
                                <Link to="#">
                                    <img src={`/uploadedImages/${phone.phoneImage}`} alt="..." />
                                    <h3>{phone.title}</h3>
                                    <p>{phone.snippet}</p>
                                </Link>
                            </div>  
                })}
        </div>  
    );
}
 
export default ByBrandContent;