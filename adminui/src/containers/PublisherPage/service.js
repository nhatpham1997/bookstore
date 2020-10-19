import api from "../../api/api";

const services = {
    listFn: async (filter = {}) => {
        const response = await api.get("/publisher", filter);
        return response;
    },

    findFn: async (id) => {
        const response = await api.get(`/publisher/${id}`);
        return response;
    },

    createFn: async (publisher) => {
        const response = await api.post("/publisher", publisher);
        return response;
    },

    updateFn: async (id, publisher) => {
        const response = await api.put(`/publisher/${id}`, publisher);
        return response;
    },

    destroyFn: async (id) => {
        const response = await api.delete(`/publisher/${id}`);
        return response;
    },
};

export { services };
