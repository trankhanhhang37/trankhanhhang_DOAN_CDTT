import httpAxios from "../httpAxios";

function getPostList(limit, type) {  //bao viet ơ trang chu
    return httpAxios.get(`post/post_list/${limit}/${type}`);
}

function getPostBySlug(slug) {
    return httpAxios.get(`post/post_detail/${slug}`);
}

function getPostByTopicId(limit,page, topic_id) {
    return httpAxios.get(`post/post_topic/${limit}/${page}/${topic_id}`);
}


function getAll() {
    return httpAxios.get('post/index');
}

function getPostAll(limit,page) {
    return httpAxios.get(`post/post_all/${limit}/${page}`);
}

function getById(id) {
    return httpAxios.get(`post/show/${id}`);


}
function create(post) {

    return httpAxios.post('post/store', post);

}

function update(post, id) {

    return httpAxios.post(`post/update/${id}`, post);

}
function remove(id) {
    
    return httpAxios.delete(`post/destroy/${id}`);
}

function get_byPage(limit, page) {

    return httpAxios.get(`post/get_byPage/${limit}/${page}`);

}


function getListRemove(limit, page) {
    return httpAxios.get(`post/getListRemove/${limit}/${page}`);

}

function delete_tam(id) {

    return httpAxios.put(`post/delete/${id}`);

}

function restore(id) {

    return httpAxios.put(`post/restore/${id}`);

}

const postservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    get_byPage: get_byPage,
    delete_tam: delete_tam,
    restore: restore,
    getListRemove: getListRemove,

    getPostList: getPostList,
    getPostAll: getPostAll,
    getPostBySlug: getPostBySlug,
    getPostByTopicId: getPostByTopicId,

}
export default postservice;



