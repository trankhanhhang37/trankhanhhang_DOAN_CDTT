import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import topicservice from "../../../services/TopicService";
import postservice from "../../../services/PostService";

import ListTopic from "../Home/PostHome";
import PostItem from "../../../Component/Home/PostItem";
// import { info } from "node-sass";
import { Pagination } from "@mui/material";


function PostTopic() {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(2);
    const [title, setTitle] = useState('');
    document.title = title;
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };


    useEffect(function () { //try catch 
        (async function () {
            try {
                const infotopic = await topicservice.getBySlug(slug);
                const topicId = infotopic.data.topic.id; //lay ra id cua mau tin co slug=...
                setTitle(infotopic.data.topic.name);
                const infopost = await postservice.getPostByTopicId(limit, page, topicId);
                setPosts(infopost.data.post_topic);
                set_page_end(infopost.data.end)


            }
            catch (error) {
                console.error(error);

            }

        })();
    }, [limit, page, slug]);

    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <ListTopic />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center text-success " >{title}</h3>
                        <div className="row">
                            {posts.map(function (post, index) {
                                return <PostItem post={post} key={index} />;
                            })}
                        </div>

                        <div className="row">
                            {/* <div className="col-12 text-center my-4">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 2)}>Xem thêm</button>
                                </div> */}
                            <Pagination count={page_end} page={page} onChange={ChangePage} />

                        </div>


                    </div>


                </div>


            </div>
        </section>

    );
}

export default PostTopic;