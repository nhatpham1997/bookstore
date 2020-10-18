import api from '../../api/api';

const fetchSignin = async (values) => {
    console.log(values)
    const response = await api.post("/auth/login", values);
    return response;
}

export { fetchSignin };