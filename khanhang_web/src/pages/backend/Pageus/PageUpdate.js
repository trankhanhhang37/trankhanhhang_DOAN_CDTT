import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pageusservice from "../../../services/PageUsService";

function PageUpdate() {

    const {id} =useParams('id');
    const navigate = useNavigate ();
    const [pages,setpages]=useState([]);
    useEffect(function(){
        (async function(){
            await pageusservice.getAll().then(function(result){
                setpages(result.data.pages);// pages  index 
            });
        })();

    },[]);

    useEffect(function(){
        (async function(){
            await pageusservice.getById(id).then(function(result){  //page show

                const tmp=result.data.page;
                // setCategory(tmp);
                setTitle(tmp.title);
                setName(tmp.name);
                setSlug(tmp.slug);
                setType(tmp.type);
                setDetail(tmp.detail);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setStatus(tmp.status);
                setSortOrder(tmp.sort_order);
             
            });
        })();

    },[]);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(0);
    const [sort_order, setSortOrder] = useState(0);



async function pageEdit(event) {
    event.preventDefault();
    const image =document.querySelector("#image"); // #image
    //dùng để upload file lên
    var page= new FormData();

    page.append("name",name);
    page.append("slug",slug);
    page.append("title",title);
    page.append("type",type);
    page.append("metakey",metakey);
    page.append("metadesc",metadesc);
    page.append("detail",detail);
    page.append("status",status);
    page.append("sort_order",sort_order);

    if (image.files.length === 0) {
        alert("Xin thêm thông tin ảnh!");
    } 
    else {
        page.append("image", image.files[0]);

    }
    await pageusservice.update(page,id).then(function (res) {
        alert(res.data.message);
        navigate('../../admin/page',{replace:true});
    });
    
}

    return ( 
        <form onSubmit={pageEdit} method="post" >
        <div className="card">
            <div className="card-header">
                <div className="row" >
                    <div className="col-md-6" >
                        <strong className="text-danger">Cập Nhật Bài Viết</strong>

                    </div>

                    <div className="col-md-6 text-end " >
                        <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                        <Link to="/admin/page" className="btn btn-sm btn-info">
                            Về danh sách
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        {/* <div className="md-3">
                                <label >Mã Topic</label>
                                <select
                                    name="topic_id" 
                                    value={topic_id} 
                                    onChange={(e) => setTopicId(e.target.value)} 
                                    className="form-control">
                                    <option value="0">None</option>
                                        {pages.map(function(pos,index){
                                            return(
                                                <option key={index} value={pos.topic_id+1}>Sau :{pos.name}</option>
                                            )
                                        })}

                                
                                </select>
                            </div> */}

                        
                        <div className="mb-3">
                            <label htmlFor="name">Tên Page</label>
                            <input type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Chủ đề</label>
                            <textarea 
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Slug</label>
                            <textarea 
                                name="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="form-control"></textarea>
                        </div>


                    </div>

                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="name">Chi tiết</label>
                            <textarea 
                                name="detail"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
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
                            <label >Sắp xếp</label>
                            <select 
                                name="sort_order" 
                                value={sort_order} onChange={(e) => setSortOrder(e.target.value)} 
                                className="form-control">
                                <option value="0">None</option>
                                {pages.map(function(pos,index){
                                    return(
                                        <option key={index} value={pos.sort_order+1}>Sau :{pos.name}</option>
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

export default PageUpdate;