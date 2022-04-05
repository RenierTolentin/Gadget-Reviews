import '../css/Page404.css';

const Page404 = () => {
    return ( 
        <div className="style-404">
            <h1>Page not found</h1>
            <div className="child-404">
                <p>The page that you are trying to access in not existing</p>
                <img src="/SVG/x-shape.svg" alt="x-shape" />
                <input type="text" placeholder="Search for a gadget" />
            </div>
        </div>
     );
}

export default Page404;