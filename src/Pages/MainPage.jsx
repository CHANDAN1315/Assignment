import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <h1 className="heading">⭐Welcome to Main Page !⭐</h1>
            <div className="btnwrap">
                <Link to={'./Todo'}>
                    <button className="btn">
                        TODO
                    </button>
                </Link>
                <Link to={'./Shopping'}>
                    <button className="btn">
                        SHOPPING CART
                    </button>
                </Link>
            </div>
        </>
    )
}

export default MainPage;