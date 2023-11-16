import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get('slider/index');
}
function getById(id) {
    return httpAxios.get(`slider/show/${id}`);


}
function create(slider) {
    return httpAxios.post('slider/store', slider);

}
function update(slider, id) {

    return httpAxios.post(`slider/update/${id}`, slider);

}
function remove(id) {
    return httpAxios.delete(`slider/destroy/${id}`);
}
// get_byPage:get_byPage,
// delete_tam:delete_tam,
// restore:restore,
// getListRemove:getListRemove,
function get_byPage(limit, page) {
    return httpAxios.get(`slider/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`slider/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`slider/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`slider/restore/${id}`);

}

function getSlider_byPosition(position) {
    return httpAxios.get(`slider/slider_list/${position}`);


}


const sliderservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

    getSlider_byPosition: getSlider_byPosition

}
export default sliderservice;



