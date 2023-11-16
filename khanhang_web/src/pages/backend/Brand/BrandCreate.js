import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import brandservice from "../../../services/BrandService";
function BrandCreate() {
        const navigate = useNavigate ();
        const [brands,setBrands]=useState([]);
        useEffect(function(){
            (async function(){
                await brandservice.getAll().then(function(result){
                    setBrands(result.data.brands);
                });
            })();
    
        },[]);
    
    
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function brandStore(event) {
        event.preventDefault();
        const image =document.querySelector("#image");
        //dùng để upload file lên
        var brand= new FormData();

        brand.append("name",name);
        brand.append("metakey",metakey);
        brand.append("metadesc",metadesc);
        brand.append("sort_order",sort_order);
        brand.append("status",status);
      //  category.append("image",image.files[0]); //
        if (image.files.length === 0) {
            alert("Xin thêm thông tin ảnh!");
        } 
        else {
            brand.append("image", image.files[0]);
            await brandservice.create(brand).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/brand', { replace: true });
            });
        }

        // await categoryservice.create(category).
        //     then(function (res) {
        //         alert(res.data.message);
        //         navigate('../../admin/category',{replace:true});
        //     });

    }

    return (
        <form onSubmit={brandStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm thương hiệu</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
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

                        </div>

                        <div className="col-md-3">
                            {/* <div className="md-3">
                                <label >T cha</label>
                                <select 
                                    name="parent_id" 
                                    value={parent_id} 
                                    onChange={(e) => setParentId(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                    {categories.map(function(cat,index){
                                        return(
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })}
                                </select>
                            </div> */}
                            <div className="md-3">
                                <label >Sắp xếp</label>
                                <select 
                                    name="sort_order" 
                                    value={sort_order} onChange={(e) => setSortOrder(e.target.value)} 
                                    className="form-control"> 
                                    <option value="0">None</option>
                                    {brands.map(function(bra,index){ //bra=brand
                                        return(
                                            <option key={index} value={bra.sort_order+1}>Sau :{bra.name}</option>
                                        )
                                    })}

                                </select>
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

export default BrandCreate;