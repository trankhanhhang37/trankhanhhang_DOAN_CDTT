import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import menuservice from "../../../services/MenuService";
function MenuShow() {
    const navigate= useNavigate();

    const {id} =useParams("id"); //"id" trong routes
    const [menu,setMenu]=useState([]);
    useEffect(function(){
        (async function(){
            await menuservice.getById(id).then(function(result){//// show controller 
                setMenu(result.data.menu);
            });
        })();
    },[]);
    function menuDelete(id){ 
        menuservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/menu', {replace:true});

        });
    }


    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT MENU</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+menu.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>menuDelete(menu.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                       
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{menu.id}</td>
                        </tr>
                        <tr>
                            <th>Tên liên hệ</th>
                            <td>{menu.name}</td>
                        </tr>
                        <tr>
                            <th>Liên Kết</th>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <th>Danh mục cha</th>
                            <td>{menu.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{menu.type}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{menu.created_at}</td>
                        </tr>
                        {/* <tr>
                            <th>User_id</th>
                            <td>{menu.user_id}</td>
                        </tr> */}

                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default MenuShow;