import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import topicservice from "../../../services/TopicService";
function TopicCreate() {
    //function CategoryList() {
        const navigate = useNavigate ();
        const [topics,setTopics]=useState([]);
        useEffect(function(){
            (async function(){
                await topicservice.getAll().then(function(result){
                    setTopics(result.data.topics);
                });
            })();
    
        },[]);
    
    
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function topicStore(event) {
        event.preventDefault();
        //dùng để upload file lên
        var topic= new FormData();

        topic.append("name",name);
        topic.append("slug",slug);

        topic.append("metakey",metakey);
        topic.append("metadesc",metadesc);
        topic.append("status",status);
        topic.append("parent_id",parent_id);
        topic.append("sort_order",sort_order);

      //  category.append("image",image.files[0]); //để số 0 đuộc nhiệc thontin
        // if (image.files.length === 0) {
        //     alert("Xin thêm thông tin ảnh!");
        // } 
        // else {
        //     topic.append("image", image.files[0]);
        //     await topicservice.create(topic).then(function (res) {
        //         alert(res.data.message)
        //         navigate('../../admin/topic', { replace: true });
        //     });
        // }

        await topicservice.create(topic).
            then(function (res) {
                alert(res.data.message);
                navigate('../../admin/topic',{replace:true});
            });

    }

    return (
        <form onSubmit={topicStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Chủ Đề</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/topic" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Chủ Đề</label>
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
                                <label htmlFor="name">Slug</label>
                                <textarea 
                                    name="slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
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
                                    {topics.map(function(top,index){
                                        return(
                                            <option key={index} value={top.id}>{top.name}</option>
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
                                    {topics.map(function(top,index){ //bra=brand
                                        return(
                                            <option key={index} value={top.sort_order+1}>Sau :{top.name}</option>
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

export default TopicCreate;