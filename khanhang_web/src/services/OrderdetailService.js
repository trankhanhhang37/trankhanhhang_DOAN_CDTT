import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('orderdetail/index');
}
function getById(id) {

    return httpAxios.get(`orderdetail/show/${id}`);

}
function create(orderdetail) {

    return httpAxios.post('orderdetail/store', orderdetail);
}
function update(orderdetail, id) {

    return httpAxios.post(`orderdetail/update/${id}`, orderdetail);

}
function remove(id) {
    return httpAxios.delete(`orderdetail/destroy/${id}`);
}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`orderdetail/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`orderdetail/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`orderdetail/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`orderdetail/restore/${id}`);

}

const orderdetailservice = {
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
export default orderdetailservice;



