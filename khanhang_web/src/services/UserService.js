import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('user/index');
}
function getCustomer() {
    return httpAxios.get('user/getCustomer');
}

function getById(id) {
    return httpAxios.get(`user/show/${id}`);


}

function register(user) {
    return httpAxios.post('user/register', user);

}
function login(user) {
    return httpAxios.post('user/login', user);

}


function create(user) {
    return httpAxios.post('user/store', user);

}
function update(user, id) {

    return httpAxios.post(`user/update/${id}`, user);

}
function remove(id) {
    return httpAxios.delete(`user/destroy/${id}`);
}

function get_byPage(limit, page) {
    return httpAxios.get(`user/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`user/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`user/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`user/restore/${id}`);

}

const userservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

    getCustomer: getCustomer,
    register: register,
    login: login,

}
export default userservice;



