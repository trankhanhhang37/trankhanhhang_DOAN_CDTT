import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postservice from "../../../services/PostService";
import { urlImage } from "../../../config";
import PostItem from "../../../Component/Home/PostItem";


function PostDetail() {
    const {slug} =useParams();
    const [post,setPost] =useState([]);
    const [post_other,setPostOther] =useState([]);
    useEffect(function () {
        (function () {
            postservice.getPostBySlug(slug).then(function (result) {
                if(result.data.success === true){
                    setPost(result.data.post);
                    setPostOther(result.data.post_other);

                }

            });
        })();
    }, [slug]);


    return ( 
        <section className="maincontent">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                 <img src={urlImage+"post/"+post.image} className="img-fluid  " alt="S" />
                </div>

                <div className="col-md-9">
                    <h3>{post.title}</h3>
                    <h6>{post.detail}</h6>


                </div>

                {/* <div className="col-md-6">
                    <h5>{product.price}</h5>

                </div>
                <div className="col-md-6">
                    <h5>{product.pricesale}</h5>

                </div> */}



            </div>

            {/* <div className="row">
                <div className="col-md-12">
                    <h5>{product.detail}</h5>

                </div>
            </div> */}
            <h1>Bài Viết Tương Tự</h1>

            <div className="row">
                {post_other.map(function(post,index){
                    return <PostItem key={index} post={post}/>
                })}



            </div>

        </div>
    </section>

     );
}

export default PostDetail;