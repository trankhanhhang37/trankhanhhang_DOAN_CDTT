import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import { useEffect, useState } from "react";

function CategoryUpdate() {
    const {id} =useParams('id');
    const navigate = useNavigate ();
    // const [category,setCategory]=useState([]);
    const [categories,setCategories]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getAll().then(function(result){
                setCategories(result.data.categories);
            });
        })();

    },[]);

    useEffect(function(){
        (async function(){
            await categoryservice.getById(id).then(function(result){

                const tmp=result.data.category;
                // setCategory(tmp);
                setName(tmp.name);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setStatus(tmp.status);
                setParentId(tmp.parent_id);
                setSortOrder(tmp.sort_order);
             
            });
        })();

    },[]);


const [name, setName] = useState('');
const [metakey, setMetakey] = useState('');
const [metadesc, setMetadesc] = useState('');
const [parent_id, setParentId] = useState(0);
const [sort_order, setSortOrder] = useState(0);
const [status, setStatus] = useState(0);
async function categoryEdit(event) {
    event.preventDefault();
    const image =document.querySelector("#image");

    //dùng để upload file lên
    var category= new FormData();

    category.append("name",name);
    category.append("metakey",metakey);
    category.append("metadesc",metadesc);
    category.append("sort_order",sort_order);
    category.append("status",status);
    category.append("parent_id",parent_id);
    if (image.files.length === 0) {
        category.append("image","");
    } 
    else {
        category.append("image", image.files[0]);

    }
    await categoryservice.update(category,id).then(function (res) {
        alert(res.data.message)
        navigate('../../admin/category', { replace: true });
    });


    // await categoryservice.update(category,id).
    //     then(function (res) {
    //         alert(res.data.message);
    //         navigate('../../admin/category',{replace:true});
    //     });

}
    return ( 
        <form onSubmit={categoryEdit} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Them danh muc</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Luu</button>
                            <Link to="/admin/category" className="btn btn-sm btn-info">
                                Ve danh sach
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">Body
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Ten danh muc</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tu khoa</label>
                                <textarea 
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Mo Ta</label>
                                <textarea 
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label >Danh muc cha</label>
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
                                <label >sap xep</label>
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
                                <label >Hinh dai dien</label>
                                <input type="file" id="image" className="form-control"></input>
                            </div>
                            <div className="md-3">
                                <label >Trang thai</label>
                                <select 
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} >

                                    <option value="1"> Xuat ban</option>


                                    <option value="2"> Chua Xuat Ban</option>
                                </select>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default CategoryUpdate;