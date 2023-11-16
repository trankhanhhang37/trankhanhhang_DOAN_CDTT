import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostService";
function PostCreate() {
        const navigate = useNavigate ();
        const [posts,setPosts]=useState([]);
        useEffect(function(){
            (async function(){
                await postservice.getAll().then(function(result){
                    setPosts(result.data.posts);
                });
            })();
    
        },[]);
    
    
        const [topic_id, setTopicId] = useState(0);
        // const [name, setName] = useState('');
        const [slug, setSlug] = useState('');
        const [title, setTitle] = useState('');
        const [type, setType] = useState('');
        const [metakey, setMetakey] = useState('');
        const [metadesc, setMetadesc] = useState('');
        const [detail, setDetail] = useState('');
        const [status, setStatus] = useState(1);
        const [sort_order, setSortOrder] = useState(0);
    
    async function postStore(event) {
        event.preventDefault();
        const image =document.querySelector("#image");
        //dùng để upload file lên
        var post= new FormData();

        // post.append("name",name);
        post.append("topic_id",topic_id);
        post.append("slug",slug);
        post.append("title",title);
        post.append("type",type);
        post.append("sort_order",sort_order);
        post.append("metakey",metakey);
        post.append("metadesc",metadesc);
        post.append("detail",detail);
        post.append("status",status);
        if (image.files.length === 0) {
            alert("Xin thêm thông tin ảnh!");
        } 
        else {
            post.append("image", image.files[0]);
    
        }
        await postservice.create(post).then(function (res) {
            alert(res.data.message);
            navigate('../../admin/post',{replace:true});
        });

    }

    

    return (
        <form onSubmit={postStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Sản Phẩm</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                                <div className="md-3">
                                    <label >Mã Topic</label>
                                    <input
                                        name="topic_id" 
                                        value={topic_id} 
                                        onChange={(e) => setTopicId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>


                            
                            {/* <div className="mb-3">
                                <label htmlFor="name">Tên Sản Phẩm</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div> */}
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
                                    {posts.map(function(pos,index){
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

export default PostCreate;