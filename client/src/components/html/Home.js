import '../css/Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <main>
            <div className='search-group'>
                <div className='search-group-child'>
                    <h1>Gadget Reviews</h1>
                    <div className="search">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eum dolor facere delectus molestias eligendi.</p>
                        <input type="text" placeholder='Search for a gadget' />
                        <button><img src="./img/search.png" alt="search" /> Find</button>
                        <button>Down <img src="./img/down-arrow.png" alt="search" /></button>
                    </div>
                </div>
            </div>

            <div className='feature-group'>
                <h2>Blog Features</h2>  
                <div className='feature-first-group'>
                    <div className='feature-child'>
                        <img src="./SVG/balance.svg" alt="update" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellat, aut consequatur repellendus possimus eligendi delectus quam placeat? Ut quasi nam illo fuga quam! Delectus quisquam explicabo ad nobis et?</p>
                    </div>

                    <div className='feature-child'>
                        <img src="./SVG/badge.svg" alt="update" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellat, aut consequatur repellendus possimus eligendi delectus quam placeat? Ut quasi nam illo fuga quam! Delectus quisquam explicabo ad nobis et?</p>
                    </div> 
                </div>
                
                <div className='feature-second-group'>
                    <div className='feature-child'>
                        <img src="./SVG/checked.svg" alt="update" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellat, aut consequatur repellendus possimus eligendi delectus quam placeat? Ut quasi nam illo fuga quam! Delectus quisquam explicabo ad nobis et?</p>
                    </div>

                    <div className='feature-child'>
                        <img src="./SVG/update.svg" alt="update" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis repellat, aut consequatur repellendus possimus eligendi delectus quam placeat? Ut quasi nam illo fuga quam! Delectus quisquam explicabo ad nobis et?</p>
                    </div> 
                </div>
            </div>


            <div className='content-group'>
                <div className='content-groups'>
                    <img src="./img/high-end1.jpg" alt="high-end" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora totam perspiciatis deleniti nisi sed, necessitatibus quia blanditiis, nesciunt, eligendi sequi praesentium asperiores fugiat? Vero voluptatibus modi quaerat! Nihil, neque quaerat consectetur illum magnam quibusdam, perspiciatis vel nulla, est aliquam ratione!
                        <button><Link to="./Flagship">See More</Link></button>
                    </p>
                </div>

                <div className='content-groups'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora totam perspiciatis deleniti nisi sed, necessitatibus quia blanditiis, nesciunt, eligendi sequi praesentium asperiores fugiat? Vero voluptatibus modi quaerat! Nihil, neque quaerat consectetur illum magnam quibusdam, perspiciatis vel nulla, est aliquam ratione!
                        <button><Link to="./MidRange">See More</Link></button>
                    </p>
                    <img src="./img/mid-range.jpg" alt="mid-range" />
                </div>

                <div className='content-groups'>
                    <img src="./img/entry-level.jpg" alt="entry-level" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora totam perspiciatis deleniti nisi sed, necessitatibus quia blanditiis, nesciunt, eligendi sequi praesentium asperiores fugiat? Vero voluptatibus modi quaerat! Nihil, neque quaerat consectetur illum magnam quibusdam, perspiciatis vel nulla, est aliquam ratione!
                        <button><Link to="./Entrylevel">See More</Link></button>
                    </p>
                </div>

                <div className='content-groups'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora totam perspiciatis deleniti nisi sed, necessitatibus quia blanditiis, nesciunt, eligendi sequi praesentium asperiores fugiat? Vero voluptatibus modi quaerat! Nihil, neque quaerat consectetur illum magnam quibusdam, perspiciatis vel nulla, est aliquam ratione!
                        <button>See more</button>
                    </p>
                    <img src="./img/laptop.jpg" alt="laptop" />
                </div>

                <div className='content-groups'>
                    <img src="./img/smart-watch-1.jpg" alt="smart-watch" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora totam perspiciatis deleniti nisi sed, necessitatibus quia blanditiis, nesciunt, eligendi sequi praesentium asperiores fugiat? Vero voluptatibus modi quaerat! Nihil, neque quaerat consectetur illum magnam quibusdam, perspiciatis vel nulla, est aliquam ratione!
                        <button>See more</button>
                    </p>
                </div>
            </div>

            <div className='author-group'>
                <h2>Author</h2>
                <div className="author-first-group">
                    <img src="./img/author.jpg" alt="author" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto cum quasi tempora quos illo illum recusandae incidunt explicabo veritatis nam impedit et ratione optio, minima sint cumque delectus tenetur.</p>
                </div>
            </div>
        </main>
    );
}
 
export default Home;