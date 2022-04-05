import {Link} from 'react-router-dom';

const Brands = () => {
    return ( 
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
            <Link to="#"><img src="/SVG/realme.svg" alt="realme" /></Link>
        </div>
    </div> 
    );
}
 
export default Brands;