import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../../services/MenuService";
function MenuUpdate() {
    //function CategoryList() {
        const {id} =useParams('id');
        const navigate = useNavigate ();
        const [menus,setMenus]=useState([]);
        useEffect(function(){
            (async function(){
                await menuservice.getAll().then(function(result){ //index
                    setMenus(result.data.menus);
                });
            })();
    
        },[]);

        useEffect(function(){
            (async function(){
                await menuservice.getById(id).then(function(result){ //show
    
                    const tmp=result.data.menu; 
                    setName(tmp.name);
                    setLink(tmp.link);
                    setType(tmp.type);
                    setParent_id(tmp.parent_id);
                    setStatus(tmp.status);
                 
                });
            })();
    
        },[]);
    
    
    
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState('');
    const [parent_id, setParent_id] = useState(0);
    const [status, setStatus] = useState(0);

    async function menuEdit(event) {
        event.preventDefault();
        //dùng để upload file lên
        var menu= new FormData();

        menu.append("name",name);
        menu.append("link",link);
        menu.append("type",type);
        menu.append("parent_id",parent_id);
        menu.append("status",status);
            await menuservice.update(menu,id).then(function (res) { /// cập nhật
                alert(res.data.message)
                navigate('../../admin/menu', { replace: true });
            });
        }

        // await categoryservice.create(category).
        //     then(function (res) {
        //         alert(res.data.message);
        //         navigate('../../admin/category',{replace:true});
        //     });

    

    return (
        <form onSubmit={menuEdit} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Chỉnh sửa menu</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">
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
                                <label htmlFor="name">Link</label>
                                <textarea 
                                    name="link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Kiểu</label>
                                <textarea 
                                    name="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label >Danh mục cha</label>
                                <select 
                                    name="table_id" 
                                    value={parent_id} 
                                    onChange={(e) => setParent_id(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                    {menus.map(function(men,index){
                                        return(
                                            <option key={index} value={men.id}>{men.name}</option>
                                        )
                                    })}
                                </select>
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

export default MenuUpdate;