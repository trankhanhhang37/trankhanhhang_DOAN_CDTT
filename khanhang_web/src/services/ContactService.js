import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('contact/index');
}
function getById(id) {
    return httpAxios.get(`contact/show/${id}`);
}
function create(contact) {
    return httpAxios.post('contact/store', contact);

}
function reply(contact, id) { /////////////////////////////////////
    return httpAxios.post(`contact/reply/${id}`, contact);
}


function update(contact, id) {
    return httpAxios.post(`contact/update/${id}`, contact);
}


// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,

function get_byPage(limit, page) {
    return httpAxios.get(`contact/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`contact/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`contact/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`contact/restore/${id}`);

}
function remove(id) {
    return httpAxios.delete(`contact/destroy/${id}`);
}
const contactservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    reply: reply,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

}
export default contactservice;



