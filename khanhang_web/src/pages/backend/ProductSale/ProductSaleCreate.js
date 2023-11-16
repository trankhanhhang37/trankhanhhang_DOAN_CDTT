import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productservice from "../../../services/ProductService";
function ProductSaleCreate() {
        const navigate = useNavigate ();
        const [products,setProducts]=useState([]);
        useEffect(function(){
            (async function(){
                await productservice.getAll().then(function(result){
                    setProducts(result.data.products);
                });
            })();
    
        },[]);
    
    
        const [category_id, setCategoryId] = useState(0);
        const [brand_id, setBrandId] = useState(0);
        const [name, setName] = useState('');
        const [slug, setSlug] = useState('');
        const [price, setPrice] = useState('');
        const [metakey, setMetakey] = useState('');
        const [metadesc, setMetadesc] = useState('');
        const [detail, setDetail] = useState('');
        const [status, setStatus] = useState(1);
    
    async function productStore(event) {
        event.preventDefault();
        const image =document.querySelector("#image");
        //dùng để upload file lên
        var product= new FormData();

        product.append("name",name);
        product.append("category_id",category_id);
        product.append("brand_id",brand_id);
        product.append("slug",slug);
        product.append("price",price);
        product.append("metakey",metakey);
        product.append("metadesc",metadesc);
        product.append("detail",detail);
        product.append("status",status);
        if (image.files.length === 0) {
            alert("Xin thêm thông tin ảnh!");
        } 
        else {
            product.append("image", image.files[0]);
    
        }
        await productservice.create(product).
        then(function (res) {
            alert(res.data.message);
            navigate('../../admin/product',{replace:true});
        });

    }

    

    return (
        <form onSubmit={productStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Cập Nhật Sản Phẩm</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                    <label >Mã Danh Mục</label>
                                    <input
                                        name="category_id" 
                                        value={category_id} 
                                        onChange={(e) => setCategoryId(e.target.value)} 
                                        className="form-control">

                                    
                                    </input>
                                </div>
                                <div className="md-3">
                                    <label >Mã Thương Hiệu</label>
                                    <input
                                        name="brand_id" 
                                        value={brand_id} 
                                        onChange={(e) => setBrandId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>


                            
                            <div className="mb-3">
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên skug Phẩm</label>
                                <input type="text"
                                    name="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Price</label>
                                <textarea 
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="name">setPriceSale</label>
                                <textarea 
                                    name="pricesale"
                                    value={pricesale}
                                    onChange={(e) => setPriceSale(e.target.value)}
                                    className="form-control"></textarea>
                            </div> */}


                        </div>

                        <div className="col-md-3">
                            {/* <div className="mb-3">
                                <label htmlFor="name">Số lượng</label>
                                <textarea 
                                    name="quality"
                                    value={quality}
                                    onChange={(e) => setQuality(e.target.value)}
                                    className="form-control"></textarea>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="name">Chi tiết</label>
                                <textarea 
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Từ Khóa</label>
                                <textarea 
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">Mô tả</label>
                                <textarea 
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                            <div className="md-3">
                                <label >Hình đại diện</label>
                                <input type="file" id="image" className="form-control"></input>
                            </div>


                            <div className="md-3">
                                <label >Trạng thái</label>
                                <select 
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} >

                                    <option value="1"> Xuất bản</option>


                                    <option value="2"> Chưa xuất bản</option>
                                </select>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default ProductSaleCreate;