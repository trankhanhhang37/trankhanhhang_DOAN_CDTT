import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { urlImage } from "../../../config";
import {  BsCartX } from 'react-icons/bs';
function ShoppingCart() {


    const {
        isEmpty, //kiem tra trong cart co san pham nao khong
        items, // 1 item la 1 san pham
        cartTotal, //tong tien
        updateItemQuantity,//so luong
        removeItem, //xoa san pham khoi cart
        emptyCart, //xoa toan bo cart
    } = useCart(); //goi cart, may cai nay la ham co san, cart nhu 1 mang rong, click add thi no them thong tin vao

    return (
        <section class="section-content padding-y">
            <div class="container">

                <div class="row">
                    <main class="col-md-9">
                        <div class="card">

                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">name</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                       
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div style={{
                                                        background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                                        justifyContent: 'center', alignItems: 'center'
                                                    }}>
                                                        <div style={{ padding: '.5rem' }}>
                                                            <img src={urlImage + 'product/' + item.product_image} style={{ width: '4rem' }} alt={item.title} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis' }}>
                                                        {item.product_name}
                                                    </h6>
                                                </td>
                                                <td>{item.price}VNĐ    {item.price_sale && <del>{item.listed_price}</del>} </td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                                    <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                                    <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Xóa</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div class="card-body border-top">
                                {/* <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a> */}
                            </div>
                        </div>
                        {/* <!-- card.// --> */}
                        <Button variant="danger"
                                className="m-2"
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Xóa giỏ hàng
                            </Button>
                        <div class="alert alert-success mt-3">

                            <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                        </div>

                    </main>
                    {/* <!-- col.// --> */}
                    <aside class="col-md-3">
                        <div class="card mb-3">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Have coupon?</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                            <span class="input-group-append">
                                                <button class="btn btn-primary">Apply</button>
                                            </span>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                        {/* <!-- card .// --> */}
                        <div class="card">
                            <div class="card-body">
                                <dl class="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd class="text-right">{cartTotal}.VNĐ</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd class="text-right">0</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Total:</dt>
                                    <dd class="text-right  h5"><strong>{cartTotal}.VNĐ</strong></dd>
                                </dl>

                                <p class="text-center mb-3">
                                    <img src="images/misc/payments.png" height="26" />
                                </p>

                            </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                        {/* <!-- card .// --> */}
                    </aside>
                    {/* <!-- col.// --> */}
                </div>

            </div>
            {/* <!-- container .//  --> */}
        </section>


    );
}



export default ShoppingCart;