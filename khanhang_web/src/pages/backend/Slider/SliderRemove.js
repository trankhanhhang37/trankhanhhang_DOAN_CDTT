import { FaCloudDownloadAlt, FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useEffect, useState } from "react";
import sliderservice from "../../../services/SliderService";
import { Pagination } from "@mui/material";
function SliderRemove() {
    const [statusdel, setStatusDelete] =useState(0);

    const[sliders,setSlider]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await sliderservice.getListRemove(8, page).then(function (result) {
                setSlider(result.data.sliders);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page]);
    function sliderRestore(id) {
        sliderservice.restore(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }
    function sliderDelete(id){
        sliderservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <Link to="/admin/slider"><strong className="text-primary">SLIDER</strong></Link>
                        </div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/slider/create">
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
                        <th>Tên Slider</th>
                        <th>Đường Dẫn</th>
                        <th>Vị Trí</th>
                        <th>Ngày Tạo</th>
                        <th>Chức Năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {sliders.map(function(slider,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{slider.id}</td>
                            <td>
                                {slider.name}
                            </td>
                            <td>
                                {slider.link}
                            </td>
                            <td>
                                {slider.position}
                            </td>
                            <td>
                               {slider.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/slider/show/"+slider.id}>
                               <FaEye/> </Link>
                               <button onClick={() => sliderRestore(slider.id)} className="btn btn-sm btn-danger me-1">
                                            <FaCloudDownloadAlt /> </button>
                               <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default SliderRemove;