import api from "../../api/api";

const services = {
    listFn: async (filter = {}) => {
        const response = await api.get("/author", filter);
        return response;
    },

    findFn: async (id) => {
        const response = await api.get(`/author/${id}`);
        return response;
    },

    createFn: async (author) => {
        console.log(author);
        const response = await api.post("/author", author);
        return response;
    },

    updateFn: async (id, author) => {
        const response = await api.put(`/author/${id}`, author);
        return response;
    },

    destroyFn: async (id) => {
        const response = await api.delete(`/author/${id}`);
        return response;
    },
};

export { services };
