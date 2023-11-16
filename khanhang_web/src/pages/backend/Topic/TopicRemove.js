import { FaCloudDownloadAlt, FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useEffect, useState } from "react";
import topicservice from "../../../services/TopicService";
import { Pagination } from "@mui/material";
function TopicRemove() {
    const [statusdel, setStatusDelete] =useState(0);

    const[topics,setTopic]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await topicservice.getListRemove(8, page).then(function (result) {
                setTopic(result.data.topics);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page]);
    function topicRestore(id) {
        topicservice.restore(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }
    function topicDelete(id){
        topicservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <Link to="/admin/topic"><strong className="text-primary">CHỦ ĐỀ</strong></Link>
                        </div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/topic/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên Topic</th>
                        <th>Slug</th>
                        <th>Từ Khóa</th>
                        <th>Mô tả</th>

                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {topics.map(function(topic,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{topic.id}</td>
                            <td>
                                {topic.name}
                            </td>
                            <td>
                                {topic.slug}
                            </td>
                            <td>
                                {topic.metakey}
                            </td>
                            <td>
                                {topic.metadesc}
                            </td>

                            <td>
                               {topic.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/"+topic.id}>
                               <FaEye/> </Link>
                               <button onClick={() => topicRestore(topic.id)} className="btn btn-sm btn-danger me-1">
                                            <FaCloudDownloadAlt /> </button>
                               <button onClick={()=>topicDelete(topic.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            
                        </tr>);
                    }
                    )}
                   
                 </tbody>
                 </table>
                 <Pagination count={page_end} page={page} onChange={ChangePage} />
             </div>

        </div>
     );
}

export default TopicRemove;