import api from "../../api/api";

const services = {
    listFn: async (filter = {}) => {
        const response = await api.get("/book", filter);
        return response;
    },

    findFn: async (id) => {
        const response = await api.get(`/book/${id}`);
        return response;
    },

    createFn: async (book) => {
        console.log(book);
        const response = await api.post("/book", book);
        return response;
    },

    updateFn: async (id, book) => {
        const response = await api.put(`/book/${id}`, book);
        return response;
    },

    destroyFn: async (id) => {
        const response = await api.delete(`/book/${id}`);
        return response;
    },
};

export { services };
