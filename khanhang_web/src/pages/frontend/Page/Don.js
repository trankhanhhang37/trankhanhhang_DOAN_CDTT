import { useState } from "react";
import { useEffect } from "react";
import postservice from "../../services/PostServices";
import { useParams } from "react-router-dom";
import { urlImage } from "../../config";

function Don() {
	// const rowpost = props.posts;
  const { slug } = useParams();
    const [data, setData] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getById(slug).then(function (res) {
                setData(res.data.post);
            })
        })();
    }, [slug]);
    return (
      <main id="main" className="">
			<div id="content" className="container content-area page-wrapper" role="main">
				<div className="row row-main">
					<div className="large-12 col">
						<div className="col-inner">
							<h2 className="text-center text-danger"><strong>{data.title}</strong></h2>
							<div className="row">
                <div className="col-md-3">
                <img src={urlImage + "post/" + data.image} alt="" className="img-fluid" />
                </div>
                <div className="col-md-9">
                  {data.detail}
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>


		</main>
  );}
export default Don;