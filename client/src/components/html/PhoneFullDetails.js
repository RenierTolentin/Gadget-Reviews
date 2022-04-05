import { Link } from "react-router-dom";

const PhoneFullDetails = ({mobileFullDetails, showFullDetails}) => {
    return ( 
         <div className="phone-full-details">
                        <Link to="#" onClick={showFullDetails}>Close</Link>
                        <div className='first-group'>
                            <img className='phone-banner' src={`/uploadedImages/${mobileFullDetails.phoneImage}`} alt="..." />
                            <h2><img src="/SVG/title.svg" alt="title" /> {mobileFullDetails.title} <span>{mobileFullDetails.snippet}</span></h2>

                            <div className='child'>
                                <img src="/SVG/screen.svg" alt="display" />
                                <p>{mobileFullDetails.display}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/dimensions.svg" alt="display" />
                                <p>{mobileFullDetails.dimensions}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/color.svg" alt="display" />
                                <p>{mobileFullDetails.color}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/cpu.svg" alt="display" />
                                <p>{mobileFullDetails.cpu}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/gpu.svg" alt="display" />
                                <p>{mobileFullDetails.gpu}</p>
                            </div>
                        </div>

                        <div className='second-group'>
                            <div className='child'>
                                <img src="/SVG/ram.svg" alt="display" />
                                <p>{mobileFullDetails.ram}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/rom.svg" alt="display" />
                                <p>{mobileFullDetails.rom}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/camera.svg" alt="display" />
                                <p>{mobileFullDetails.camera}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/battery.svg" alt="display" />
                                <p>{mobileFullDetails.battery}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/security-sensor.svg" alt="display" />
                                <p>{mobileFullDetails.securitySensor}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/added-feature.svg" alt="display" />
                                <p>{mobileFullDetails.features}</p>
                            </div>

                        
                            <div className='child'>
                                <img src="/SVG/sim.svg" alt="display" />
                                <p>{mobileFullDetails.sim}</p>
                            </div>

                            <div className='child'>
                                <img src="/SVG/bluetooth.svg" alt="display" />
                                <p>{mobileFullDetails.bluetooth}</p>
                            </div>

                            <div className='child'>
                                <p>{mobileFullDetails.body}</p>
                            </div>


                            <div className='child'>
                            <img src="/SVG/price.svg" alt="title" />
                            <h2>{mobileFullDetails.price}</h2>
                            </div>
                        </div>
                        
                    </div>
    );
}

export default PhoneFullDetails;