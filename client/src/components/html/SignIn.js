import '../css/SignIn.css';
import { useState } from 'react';
import Axios from 'axios';

const SignIn = () => {

    const [title, setTitle] = useState('');
    const [phoneImage, setPhoneImage] = useState('');
    const [classType, setClassType] = useState('');
    const [brand, setBrand] = useState('')
    const [snippet, setSnippet] = useState('');
    const [display, setDisplay] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [color, setColor] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [ram, setRam] = useState('');
    const [rom, setRom] = useState('');
    const [camera, setCamera] = useState('');
    const [battery, setBattery] = useState('');
    const [securitySensor, setSecuritySensor] = useState('');
    const [features, setFeatures] = useState('');
    const [sim, setSim] = useState('');
    const [bluetooth, setBluetooth] = useState('');
    const [price, setPrice] = useState('');
    const [body, setBody] = useState('');


    const addNewBlog = () => {

        const formData = new FormData();

        formData.append('title', title);
        formData.append('classType', classType);
        formData.append('phoneImage', phoneImage);
        formData.append('brand', brand);
        formData.append('snippet', snippet);
        formData.append('display', display);
        formData.append('dimensions', dimensions)
        formData.append('color', color);
        formData.append('cpu', cpu);
        formData.append('gpu', gpu);
        formData.append('ram', ram);
        formData.append('rom', rom);
        formData.append('camera', camera);
        formData.append('battery', battery);
        formData.append('securitySensor', securitySensor);
        formData.append('features', features);
        formData.append('sim', sim);
        formData.append('bluetooth', bluetooth);
        formData.append('price', price);
        formData.append('body', body);

        Axios.post("http://localhost:3001/insert", formData);   
    }

    return ( 
        <div className='signin-group'>
            <form action="youserver:port/insert" method="POST">
            
                <div className='signin-first-group'>
                    <label htmlFor="title">Title</label>
                    <input required type="text" placeholder='(Ex. Samsung Galaxy S22 Ultra)' onChange={(event) => {setTitle(event.target.value);}}/>

                    <label htmlFor="phoneImage">Phone Banner</label>
                    <input required type="file" filename="phoneImage" onChange={(event) => {setPhoneImage(event.target.files[0]);}}/>
                    
                    <label htmlFor="classType">Class Type</label>
                    <input required type="text" placeholder='(Ex. entry-level, mid-range, high-end..)' onChange={(event) => {setClassType(event.target.value);}}/>
                    
                    <label htmlFor="brand">Brand</label>
                    <input required type="text" placeholder='(Ex. cherry-mobile, infinix, xiaomi..)' onChange={(event) => {setBrand(event.target.value);}}/>
                    
                    <label htmlFor="snippet">Snippet</label>
                    <input required type="text" placeholder='(Ex. Best of something)' onChange={(event) => {setSnippet(event.target.value);}}/>
                    
                    <label htmlFor="display">Display</label>
                    <input required type="text" placeholder='(Ex. Dimensions, Build quality, weight..)' onChange={(event) => {setDisplay(event.target.value);}}/>
                    
                    <label htmlFor="dimensions">Dimensions</label>
                    <input required type="text" placeholder='(Ex. Dimensions, Build quality, weight..)' onChange={(event) => {setDimensions(event.target.value);}}/>

                    <label htmlFor="color">Color</label>
                    <input required type="text" placeholder='color' onChange={(event) => {setColor(event.target.value)}} />

                    <label htmlFor="cpue">Central Processing Unit - CPU</label>
                    <input required type="text" placeholder='(Ex. Snapdragon, Mediatek, Exynos..)' onChange={(event) => {setCpu(event.target.value);}}/>

                    <label htmlFor="gpue">Graphic Processing Unit - GPU</label>
                    <input required type="text" placeholder='(Ex. Adreno, Mali..)' onChange={(event) => {setGpu(event.target.value);}}/>
                </div>

                <div className='signin-second-group'>
                    <label htmlFor="ram">Random Access Memory - RAM</label>
                    <input required type="text" placeholder='(Ex. 4GB, 6GB, 8GB + RAM Extention)' onChange={(event) => {setRam(event.target.value);}}/>
                    
                    <label htmlFor="rom">Read Only Memory - ROM</label>
                    <input required type="text" placeholder='(Ex. 64GB, 128GB, 256GB - RAM Extention)' onChange={(event) => {setRom(event.target.value);}}/>
                    
                    <label htmlFor="camera">Camera</label>
                    <input required type="text" placeholder='(Ex. Front, Back Camera type)' onChange={(event) => {setCamera(event.target.value);}}/>

                    <label htmlFor="battery">Battery</label>
                    <input required type="text" placeholder='battery' onChange={(event) => {setBattery(event.target.value)}} />

                    <label htmlFor="securitySensor">Security Sensor</label>
                    <input required type="text" placeholder='(Ex. Finger print, Facial Recognition)' onChange={(event) => {setSecuritySensor(event.target.value)}}/>

                    <label htmlFor="features">Features</label>
                    <input required type="text" placeholder='features' onChange={(event) => {setFeatures(event.target.value)}} />

                    <label htmlFor="sim">Sim Support</label>
                    <input required type="text" placeholder='(Ex. 5G, 4G, Hybrid)' onChange={(event) => {setSim(event.target.value);}}/>

                    <label htmlFor="price">Price</label>
                    <input required type="text" placeholder='price' onChange={(event) => {setPrice(event.target.value)}} />

                    <label htmlFor="bluetooth">Bluetooth</label>
                    <input required type="text" placeholder='(Ex. 5.0, 4.1..)' onChange={(event) => {setBluetooth(event.target.value);}}/>
                    
                    <label htmlFor="body">Body of the blog</label>
                    <input required type="text" placeholder='Main content' onChange={(event) => {setBody(event.target.value);}}/> 
                </div>

            </form>
                <button onClick={addNewBlog}>Add New</button>
        </div>
     );
}
 
export default SignIn;