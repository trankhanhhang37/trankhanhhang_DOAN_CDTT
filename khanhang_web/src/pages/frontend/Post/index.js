import React,{ useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import PostItem from "../../../Component/Home/PostItem";
import { Pagination } from "@mui/material";

function Post() {
    const [posts,setPosts] =useState([]);
    const[limit,setLimit]=useState(8);

    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };

    useEffect(function () {
        (function () {
            postservice.getPostAll(limit,page).then(function (result) {
                setPosts(result.data.posts);
                set_page_end(result.data.end)
            });
        })();
    }, [limit,page]);

    return ( 
    //     <section className="maincontent">
    //     <div className="container">
    //         <div className="post pt-2 pb-2 mt-1 text-center text-danger ">
    //             <h4 className="tetx-danger">TẤT CẢ BÀI VIẾT</h4>
                
    //             <div className="row">
    //                 {posts.map(function(post,index){
    //                     return <PostItem post={post} key={index}/>;
    //                 })}

    //             </div>
    //             <div className="row">
    //                 <div className="col-12 text-center">
    //                     <button className="btn btn-success" onClick={()=>setLimit(limit+8)}>Xem Thêm</button>

    //                 </div>

    //             </div>
    //         </div>
            

    //     </div>
    // </section>
    <div class="container-xxl py-6">
    <div class="container">
        <div class=" text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
            <h3 class="display-5 mb-3"><strong>Bài Viết</strong></h3>
            {/* <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p> */}
        </div>
        <div class="row g-4">
          {posts.map(function(post,index){
                        return <PostItem post={post} key={index}/>;
                    })}
   
            {/* <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
            </div> */}
                                <Pagination count={page_end} page={page} onChange={ChangePage} />

        </div>
    </div>
</div>


     );
}

export default Post;