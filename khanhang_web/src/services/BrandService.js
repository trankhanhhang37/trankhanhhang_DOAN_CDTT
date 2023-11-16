import httpAxios from "../httpAxios";

function getAll()
{
    return httpAxios.get('brand/index');
}
function getById(id) {

    return httpAxios.get(`brand/show/${id}`);
}




function create(brand) {
    return httpAxios.post('brand/store',brand);

}
function update(brand,id) {
    return httpAxios.post(`brand/update/${id}`,brand);

}

function getBySlug(slug){
    return httpAxios.get(`brand/show/${slug}`);
}

function get_byPage(limit,page)
{
    return httpAxios.get(`brand/get_byPage/${limit}/${page}`);

}
function getListRemove(limit,page)
{
    return httpAxios.get(`brand/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`brand/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`brand/restore/${id}`);

}

function remove(id) {
    return httpAxios.delete(`brand/destroy/${id}`);

}

const brandservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    getListRemove:getListRemove,
    delete_tam:delete_tam,
    restore:restore,
    remove:remove,
    getBySlug:getBySlug,
    get_byPage:get_byPage


}
export default brandservice;



