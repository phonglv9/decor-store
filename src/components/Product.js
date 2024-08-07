import UseFecthResult from "../hooks/UseFecthResult";
import cartReducer from "../Reducer/cartReducer";
import { useReducer } from 'react';
import { urlImage } from "../utility/const";
import { ADD_ITEM } from "../Reducer/cartReducer";

const Product = () => {

    const { loading, error, data } = UseFecthResult('https://6697754d02f3150fb66dace8.mockapi.io/product');
    const [state, dispatch] = useReducer(cartReducer, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (data.length < 1) return <div>No data.</div>;

    const handleAddToCart = (data) => {
        delete data.createdAt;
        dispatch({ type: ADD_ITEM, payload: data });

    }
    return (
        data.map((item) => (
            <div className="col-md-4" key={item.id}>
                <div className="card mb-2" >
                    <a href="shop.html">
                        <img className="card-img-top" src={`${urlImage}/pro_mau_tu_nhien_noi_that_moho_tu_dau_giuong_vienna_1_99b15ea3c1aa438784ed6db8b5ee4e2c_large.jpg`} alt="" />
                        <div className="card-body">
                            <p>{item.price}$</p>
                            <h4>{item.name}</h4>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center add-to-cart-container">
                        <button className="btn btn-sm btn-dark col-md-6 p-2 mb-2 add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to cart</button>
                    </div>
                </div>
            </div>
        ))

    )
}
export default Product;