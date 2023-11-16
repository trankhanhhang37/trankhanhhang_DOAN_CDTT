import httpAxios from "../httpAxios";
//backend
function getAll() {
    return httpAxios.get('menu/index');
}
function getById(id) {
    return httpAxios.get(`menu/show/${id}`);


}
function create(menu) {
    return httpAxios.post('menu/store', menu);

}
function update(menu, id) {

    return httpAxios.post(`menu/update/${id}`, menu);

}
function remove(id) {
    return httpAxios.delete(`menu/destroy/${id}`);
}

// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`menu/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`menu/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`menu/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`menu/restore/${id}`);

}

//frontend
function getByParentId(position, parent_id = 0)//truy van mau tin theo parent_id
{ //phuong thuc get tra ve du lieu 

    return httpAxios.get(`menu/menu_list/${position}/${parent_id}`);


}
const menuservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

    getByParentId: getByParentId
}
export default menuservice;



