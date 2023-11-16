import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pageusservice from "../../../services/PageUsService";
import { FaEdit, FaTrash } from "react-icons/fa";
import { urlImage } from "../../../config";

function PageShow() {

    const navigate = useNavigate();

    const { id } = useParams("id"); //"id" trong routes
    const [page, setPage] = useState([]);
    useEffect(function () {
        (async function () {
            await pageusservice.getById(id).then(function (result) {
                setPage(result.data.page);
            });
        })();
    }, []);
    function pageDelete(id) {
        pageusservice.delete_tam(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/page', { replace: true });

        });
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong></div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/page/update/" + page.id}>
                            <FaEdit /> </Link>
                        <button onClick={() => pageDelete(page.id)} className="btn btn-sm btn-danger me-2"><FaTrash /></button>
                        <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                        <Link to="/admin/page" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{page.id}</td>
                        </tr>
                        <tr>
                            <th>Tên</th>
                            <td>{page.name}</td>
                        </tr>
                        <tr>
                            <th>Chủ đề</th>
                            <td>{page.title}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{page.slug}</td>
                        </tr>
                        <tr>
                            <th>Chi tiết</th>
                            <td>{page.detail}</td>
                        </tr>
                        <tr>
                            <th>Kiểu</th>
                            <td>{page.type}</td>
                        </tr>
                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage + 'page/' + page.image} alt="hinh" className="img-fluid"
                                style={{ maxWidth: 100, maxHeight: 100 }} />
                        </tr>

                        <tr>
                            <th>Từ Khóa</th>
                            <td>{page.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{page.metadesc}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{page.created_at}</td>
                        </tr>

                        <tr>
                            <th>Sắp xếp</th>
                            <td>{page.sort_order}</td>
                        </tr>




                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default PageShow;