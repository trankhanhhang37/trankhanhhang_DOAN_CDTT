import ListPost from "./PostHome";
import ProductHome from "./Products/ProductHome";
import SliderShow from "./SliderShow";
import Menu from "../../../layouts/LayoutUI/Menu";
import ListCategory from "./CategoryList";

function Home() {
//     const [categories, setCategories] = useState([]);
//     useEffect(function () {
//         (async function () {
//             await categoryservice.getCategoryByParentId(0)
//             .then(function (result) {
//                 setCategories(result.data.categories);

//             });
//         })();
//     }, []);
// // 
    return (
        <section className="container"> 
        <div className="home-slide-cat">

            <ListCategory/>
             <SliderShow/>
             

             <ListPost/>
          
        </div>
        <Menu/>
            <ProductHome/>

        </section>
    );
}



export default Home;