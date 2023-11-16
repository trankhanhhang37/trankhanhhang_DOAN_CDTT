import httpAxios from "../httpAxios";



function getAll() {
    return httpAxios.get('info/index');
}


function getById(id) {
    return httpAxios.get(`info/show/${id}`);


}
function create(info) {
    return httpAxios.post('info/store', info);

}
function update(info, id) {

    return httpAxios.post(`info/update/${id}`, info);

}
function remove(id) {
    return httpAxios.delete(`info/destroy/${id}`);
}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`info/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`info/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`info/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`info/restore/${id}`);

}
const infoservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,


}
export default infoservice;



