import { Link } from "react-router-dom";
import Post from "../../pages/frontend/Post";
import { urlImage } from "../../config";


function PostItem(props) {
    return (
        // <div className="col-md-3 mb-4">
        //     <div className="post-item" >
        //         <figure>

        //             <div className="post-detail ">
        //                 <h5 className="post-name text-center text-success">
        //                     <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
        //                         {props.post.title}
        //                     </Link></h5>

        //                 <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
        //                     <img src={urlImage + "post/" + props.post.image} className="img-fluid " style={{ overflow: "hidden" }} alt="S" />

        //                 </Link>

        //                 <h4 className="post-name text-center text-success"> {props.post.name}</h4>

        //                 <i className=" fa-solid fa-heart fa-beat-fade fa-2xl" style={{ color: " #c75757" }}></i>


        //             </div>


        //         </figure>
        //     </div>
        //     </div>

            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <figure>
                    <Link to={"/chi-tiet-bai-viet/" + props.post.slug}>
             <img src={urlImage + "post/" + props.post.image} className="img-fluid " style={{ overflow: "hidden" }} alt="S" />
             </Link>
                    <div class="bg-light p-4">
                        <h5>
                            <Link to={"/chi-tiet-bai-viet/" + props.post.slug}> {props.post.title}
                            </Link> </h5>
                        <div class="text-muted border-top pt-4">
                            <medium class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</medium>
                            <medium class="me-3"><i class="fa fa-calendar text-primary me-2"></i>{props.post.created_at}</medium>
                            {/* <i className=" fa-solid fa-heart fa-beat-fade fa-2xl" style={{ color: " #c75757" }}></i> */}

                        </div>
                    </div>
                </figure>
            </div>

     

    );
}

export default PostItem;