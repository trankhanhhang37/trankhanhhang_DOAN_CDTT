import httpAxios from "../httpAxios";

function getTopicAll(limit) //lây tat ca bai viet
{
    return httpAxios.get(`topic/topic_all/${limit}`);
}
function getTopicByParentId(parent_id) {
    return httpAxios.get(`topic/topic_list/${parent_id}`);
}



function getAll() {
    return httpAxios.get('topic/index');
}
function getById(id) {
    return httpAxios.get(`topic/show/${id}`);


}
function getBySlug(slug) {
    return httpAxios.get(`topic/show/${slug}`);
}

function create(topic) {

    return httpAxios.post('topic/store', topic);
}
function update(topic, id) {

    return httpAxios.post(`topic/update/${id}`, topic);

}
function remove(id) {
    return httpAxios.delete(`topic/destroy/${id}`);
}

function get_byPage(limit, page) {
    return httpAxios.get(`topic/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`topic/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`topic/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`topic/restore/${id}`);

}


const topicservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

    getTopicAll: getTopicAll,
    getBySlug: getBySlug,
    getTopicByParentId: getTopicByParentId,

}
export default topicservice;



