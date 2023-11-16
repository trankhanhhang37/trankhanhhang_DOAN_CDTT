import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('order/index');
}
function getById(id) {

    return httpAxios.get(`order/show/${id}`);

}
function create(order) {

    return httpAxios.post('order/store', order);
}
function update(order, id) {

    return httpAxios.post(`order/update/${id}`, order);

}
function remove(id) {
    return httpAxios.delete(`order/destroy/${id}`);
}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`order/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`order/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`order/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`order/restore/${id}`);

}

const orderservice = {
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
export default orderservice;



