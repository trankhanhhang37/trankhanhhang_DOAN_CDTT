import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
function CategoryCreate() {
    //function CategoryList() {
        const navigate = useNavigate ();
        const [categories,setCategories]=useState([]);
        useEffect(function(){
            (async function(){
                await categoryservice.getAll().then(function(result){
                    setCategories(result.data.categories);
                });
            })();
    
        },[]);
    
    
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function categoryStore(event) {
        event.preventDefault();
        const image =document.querySelector("#image");
        //dùng để upload file lên
        var category= new FormData();

        category.append("name",name);
        category.append("metakey",metakey);
        category.append("metadesc",metadesc);
        category.append("sort_order",sort_order);
        category.append("status",1);
        category.append("parent_id",parent_id);
      //  category.append("image",image.files[0]); //để số 0 đuộc nhiệc thontin
        if (image.files.length === 0) {
            alert("Xin thêm thông tin ảnh!");
        } 
        else {
            category.append("image", image.files[0]);
            await categoryservice.create(category).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/category', { replace: true });
            });
        }

        // await categoryservice.create(category).
        //     then(function (res) {
        //         alert(res.data.message);
        //         navigate('../../admin/category',{replace:true});
        //     });

    }

    return (
        <form onSubmit={categoryStore} method="" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm danh mục</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/category" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên danh muc</label>
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
                            <div className="md-3">
                                <label >Danh mục cha</label>
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
                            </div>
                            <div className="md-3">
                                <label >Sắp xếp</label>
                                <select 
                                    name="sort_order" 
                                    value={sort_order} onChange={(e) => setSortOrder(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                    {categories.map(function(cat,index){
                                        return(
                                            <option key={index} value={cat.sort_order+1}>Sau :{cat.name}</option>
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

export default CategoryCreate;