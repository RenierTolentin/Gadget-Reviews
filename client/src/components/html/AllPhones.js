import {Link} from 'react-router-dom'

const AllPhones = ({mobileBlogList, showFullDetails, modalPopUp, path}) => {;

    if(modalPopUp === true){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

    return ( 
        <div className='phone-child'>
                    {mobileBlogList.map((mobileBlog) => {
                        return  <div key={mobileBlog._id } className='phone-grand-child'>
                                    <Link to={`${path + mobileBlog._id}`} onClick={showFullDetails}>
                                            <img src={`/uploadedImages/${mobileBlog.phoneImage}`} alt="" />
                                            <h3>{mobileBlog.title}</h3>
                                            <p>{mobileBlog.snippet}</p>
                                    </Link>
                                </div>  
                    })}
        </div>
    );
}
 
export default AllPhones;