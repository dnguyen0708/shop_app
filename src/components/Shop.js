
import '../styles/shop.css';
import { data } from './data';
import { Item } from './Item';
const Shop = ({ addToCart }) => {


    const updateCartHandler = (e, itemKey) => {
        const item = data[itemKey - 1];
        addToCart(Item(item, e.target.nextSibling.value));
        e.target.nextSibling.value = 0;
    };


    return (
        <div className="shop-main">
            {/* <div className="side-content"></div> */}
            <div className="main-content">
                {data.map(lt => {
                    return (
                        <div key={lt.id} className="laptop-container">
                            <div className="laptop">
                                <img className='laptop-image' src={lt.image} alt={lt.id} />
                                <h1 className="details">{lt.info}</h1>
                            </div>
                            <div className="item-price">${lt.price}</div>
                            <div className="add-item-to-card">
                                <button className="add-item btn" onClick={(e) => updateCartHandler(e, lt.id)}>ADD TO CART</button>
                                <select id="amount">
                                    <option value="0">Qty:</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Shop;