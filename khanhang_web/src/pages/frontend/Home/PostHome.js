import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import topicservice from "../../../services/TopicService";


function ListTopic() {

	const [listtopic, setListTopic] = useState([]);
	useEffect(function () {
		(async function () {
			try {
				const result = await topicservice.getTopicByParentId(0);//
				setListTopic(result.data.topics);
			}
			catch (error) {
				console.error(error);

			}
		})();
	}, []);


	return (
		<div class="col-md-3 mt-3">
			<aside class="special-home-right">
				<h6 class=" text-center text-dark ">Bài Đăng Mới</h6>

				<div class="card-banner ">
					<div class="py-3">
						<h6 class="card-title">Ưu Đãi Lễ Hội Trung Thu</h6>
						<a href="#" class="btn btn-sm btn-light"> Xem bài viết </a>
					</div>
					<img src={require("../../../assets/images/tt5.jpg")} style={{ height: '90px' }} class="img-bg" />
				</div>

				<div class="card-banner ">
					<div class="py-3" style={{ width: '80' }}>
						<ul>
							{listtopic.map(function (top, index) {
								return (<p key={index}>
									<h6 class="card-title">{top.name}</h6>
									{/* <a href="#" class="btn btn-sm btn-light"> Xem bài viết </a> */}
									<Link to={"/danh-muc-bai-viet/" + top.slug} class="btn btn-sm btn-light">Xem bài viết</Link>
								</p>
								)

							})}
							{/* <li>
                    <Link></Link>
                </li> */}
						</ul>
					</div>
				</div>
				
				<div class="card-banner">
					<div class="py-3" style={{ width: '80' }}>
						<h6 class="card-title">Ưu Đãi Khách Hàng</h6>
						<a href="#" class="btn  btn-sm btn-light"> Xem bài viết </a>
					</div>
					<img src={require("../../../assets/images/bk3.jpg")} style={{ height: '90px' }} class="img-bg" />
				</div>

			</aside>
			{/* <!-- col.// --> */}
		</div>
	);
}
export default ListTopic;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import topicservice from "../../../services/TopicService";

// function ListTopic() {
//     const [listtopic, setListTopic] = useState([]);
//     useEffect(function () {
//         (async function () {
//             try{
//             const result = await  topicservice.getTopicByParentId(0);//
//             setListTopic(result.data.topics);
//             }
//             catch(error){
//                 console.error(error);

//             }
//         })();
//     }, []);
//    // console.log(listcategory);
//     return (
//         <div className="listtopic mb-5">
//             <h5 className="bg-info p-3 m-0 text-center">Danh mục bài viết</h5>
//             <ul>
//                 {listtopic.map(function(top,index){
//                     return(<li key={index}>
//                         <Link to={"/danh-muc-bai-viet/"+top.slug}>{top.name}</Link>

//                     </li>)

//                 })}
//                 <li>
//                     <Link></Link>
//                 </li>
//             </ul>
//         </div>
//       );
// }

// export default ListTopic;