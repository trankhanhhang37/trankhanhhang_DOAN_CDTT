import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pageusservice from "../../../services/PageUsService";

function PageCreate() {
    const navigate = useNavigate ();
    const [pages,setPages]=useState([]);
    useEffect(function(){
        (async function(){
            await pageusservice.getAll().then(function(result){
                setPages(result.data.pages);
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

async function pageStore(event) {
    event.preventDefault();
    const image =document.querySelector("#image");
    //dùng để upload file lên
    var page= new FormData();

    page.append("name",name);
    page.append("slug",slug);
    page.append("title",title);
    page.append("type",type);
    page.append("sort_order",sort_order);
    page.append("metakey",metakey);
    page.append("metadesc",metadesc);
    page.append("detail",detail);
    page.append("status",status);
    if (image.files.length === 0) {
        alert("Xin thêm thông tin ảnh!");
    } 
    else {
        page.append("image", image.files[0]);

    }
    await pageusservice.create(page).then(function (res) {
        alert(res.data.message);
        navigate('../../admin/page',{replace:true});
    });

}

    return ( 
        <form onSubmit={pageStore} method="post" >
        <div className="card">
            <div className="card-header">
                <div className="row" >
                    <div className="col-md-6" >
                        <strong className="text-danger">Thêm Page</strong>

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
                            <label htmlFor="name">slug</label>
                            <input type="text"
                                name="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name">title</label>
                            <textarea 
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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

                        <div className="mb-3">
                            <label htmlFor="name">Kiểu</label>
                            <textarea 
                                name="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="form-control"></textarea>
                        </div>

                        <div className="md-3">
                            <label >Sắp xếp</label>
                            <select 
                                name="sort_order" 
                                value={sort_order} onChange={(e) => setSortOrder(e.target.value)} 
                                className="form-control">
                                <option value="0">None</option>
                                {pages.map(function(page,index){
                                    return(
                                        <option key={index} value={page.sort_order+1}>Sau :{page.name}</option>
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

export default PageCreate;