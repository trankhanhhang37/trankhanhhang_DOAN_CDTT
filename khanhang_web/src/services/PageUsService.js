import httpAxios from "../httpAxios";
function getAll() {
    return httpAxios.get('page/index');
}


function getById(id) {
    return httpAxios.get(`page/show/${id}`);


}
function create(page) {
    return httpAxios.post('page/store', page);

}
function update(page, id) {

    return httpAxios.post(`page/update/${id}`, page);

}
function remove(id) {
    return httpAxios.delete(`page/destroy/${id}`);
}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`page/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`page/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`page/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`page/restore/${id}`);

}

const pageusservice = {
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
export default pageusservice;



