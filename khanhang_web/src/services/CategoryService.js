import httpAxios from "../httpAxios";


function getCategoryByParentId(parent_id){
    return httpAxios.get(`category/category_list/${parent_id}`); 
}
function getAll()
{
    return httpAxios.get('category/index');
}
function getById(id) {
    return httpAxios.get(`category/show/${id}`);


}
function create(category) {

    return httpAxios.post('category/store',category);
}
function update(category,id) {

    return httpAxios.post(`category/update/${id}`,category);

}
function getBySlug(slug){
    return httpAxios.get(`category/show/${slug}`); 
}

function get_byPage(limit,page)
{
    return httpAxios.get(`category/get_byPage/${limit}/${page}`);

}
function getListRemove(limit,page)
{
    return httpAxios.get(`category/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`category/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`category/restore/${id}`);

}
function remove(id) {
    return httpAxios.delete(`category/destroy/${id}`);}

const categoryservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getCategoryByParentId:getCategoryByParentId,
    getBySlug:getBySlug,
    
    get_byPage:get_byPage,
    getListRemove:getListRemove,
    delete_tam:delete_tam,
    restore:restore


}
export default categoryservice;



