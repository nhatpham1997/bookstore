import api from "../../api/api";

const services = {
    listFn: async (filter = {}) => {
        const response = await api.get("/category", filter);
        return response;
    },

    findFn: async (id) => {
        const response = await api.get(`/category/${id}`);
        return response;
    },

    createFn: async (category) => {
        console.log(category);
        const response = await api.post("/category", category);
        return response;
    },

    updateFn: async (id, category) => {
        const response = await api.put(`/category/${id}`, category);
        return response;
    },

    destroyFn: async (id) => {
        const response = await api.delete(`/category/${id}`);
        return response;
    },
};

export { services };
