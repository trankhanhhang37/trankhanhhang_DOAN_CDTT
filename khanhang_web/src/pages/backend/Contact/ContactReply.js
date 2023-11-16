import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import contactservice from "../../../services/ContactService";
function ContactReply() {
    const navigate = useNavigate();
    const { id } = useParams("id"); //"id" trong routes
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getById(id).then(function (result) {
                setContact(result.data.contact);
            });
        })();
    }, [id]);
    function contactDelete(id) {
        contactservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/contact', { replace: true });

        });
    }

    const [name, setName] = useState('Khánh Hằng'); ///////////////////////
    const [email, setEmail] = useState('khang37@gmail.com');////////////////////////////
    const [phone, setPhone] = useState('0256358964');///////////////////////////////////
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');
    const [status, setStatus] = useState(1);

    async function contactReply(event) {
        event.preventDefault();
        //dùng để upload file lên
        var contact = new FormData();

        contact.append("name", name);
        contact.append("user_id", 1);
        contact.append("email", email);
        contact.append("phone", phone); //

        contact.append("status", status);
        contact.append("title", title);
        contact.append("content", content);

        contact.append("reply_id", id); //


        await contactservice.create(contact).then(function (res) {
                alert(res.data.message);
                navigate('../../admin/contact', { replace: true });
            });

    }


    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Phản Hồi</strong></div>
                    <div className="col-md-6 text-end " >
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/" + contact.id}>
                            <FaEdit /> </Link>
                        <button onClick={() => contactDelete(contact.id)} className="btn btn-sm btn-danger me-2"><FaTrash /></button>
                        <Link to="/admin/contact" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                    </div>

                </div>
            </div>



            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{contact.id}</td>
                        </tr>
                        <tr>
                            <th>Tên liên hệ</th>
                            <td>{contact.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{contact.phone}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{contact.title}</td>
                        </tr>
                        <tr>
                            <th>Nội dung</th>
                            <td>{contact.content}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{contact.created_at}</td>
                        </tr>
                        <tr>
                            <th>User_id</th>
                            <td>{contact.user_id}</td>
                        </tr>


                    </tbody>
                </table>


                <form onSubmit={contactReply} method="post" >  


                    <div className="row">
                    <div className="row">
                                <div className="col-6">
                                    <strong className="text-primary">TRẢ LỜI LIÊN HỆ</strong></div>
                                <div className="col-md-6 text-end " >
                                    <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>

                                </div>

                            </div>

                        <div className="col-md-9">

                            <div className="md-3">
                                <label >Title</label>
                                <textarea
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="md-3">
                                <label >Content</label>
                                <textarea
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control">
                                </textarea>
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

                </form>


            </div>

        </div>


    );
}

export default ContactReply;