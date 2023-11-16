import httpAxios from "../httpAxios";



 function getNewProductAll(limit,page)////////
 {
     return httpAxios.get(`product/getNewProductAll/${limit}/${page}`);
 }

 function getNewProductByBrand(limit,page,slug)
 {
     return httpAxios.get(`product/getNewProductByBrand/${limit}/${page}/${slug}`);
 }

 
 function getNewProductByCategory(limit,page,slug)
 {
     return httpAxios.get(`product/getNewProductByCategory/${limit}/${page}/${slug}`);
 }


function getNew_product_all(limit,page)
{
    return httpAxios.get(`product/product_new/${limit}/${page}`);

}

function getSaleProduct(limit,page)
{
    return httpAxios.get(`product/getSaleProduct/${limit}/${page}`);


}


function getProductBySlug(slug,other_product_limit,comment_limit){   // chi tiet sp
    return httpAxios.get(`product/product_detail/${slug}/${other_product_limit}/${comment_limit}`);
}

function getProductByMetakey(metakey)
{
    return httpAxios.get(`product/getByMetakey/${metakey}`);

}


function getProductByCategoryId(limit,category_id)
{
    return httpAxios.get(`product/product_category/${limit}/${category_id}`);
}

function getProductByBrandId(limit,brand_id)
{
    return httpAxios.get(`product/product_brand/${limit}/${brand_id}`);
}



function getProductHome(limit,category_id=0){ 
    return httpAxios.get(`product/product_home/${limit}/${category_id}`);
}




function getAll()
{
    return httpAxios.get('product/index');
}
function getById(id) {

    return httpAxios.get(`product/show/${id}`);

}
function create(product) {
    return httpAxios.post('product/store',product);

}
function update(product,id) {

    return httpAxios.post(`product/update/${id}`,product);

}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit,page)
{
    return httpAxios.get(`product/get_byPage/${limit}/${page}`);

}


function getListRemove(limit,page)
{
    return httpAxios.get(`product/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`product/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`product/restore/${id}`);

}

function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);

}

const productservice={
    getNewProductAll:getNewProductAll,
    getNew_product_all:getNew_product_all,
    // get_ProductSale:get_ProductSale,
    getProductBySlug:getProductBySlug,
    // getProduct_all:getProduct_all,
    getNewProductByBrand:getNewProductByBrand,
    getNewProductByCategory:getNewProductByCategory,
    getSaleProduct:getSaleProduct,

    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    get_byPage:get_byPage,
    delete_tam:delete_tam,
    restore:restore,
    getListRemove:getListRemove,
    remove:remove,
    

    getProductHome:getProductHome,
    getProductBySlug:getProductBySlug,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductByMetakey:getProductByMetakey,
}
export default productservice;



