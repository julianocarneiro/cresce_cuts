import axios, { BASE_URL } from '../BaseService';

const RESOURCE = 'products';
const API_URL = `${BASE_URL}/${RESOURCE}`;

class ProductsApi
{

    static async getAll()
    {
        const apiUrl = `${API_URL}/`;
        let { data } = await axios.get(apiUrl);
        return  data;
    }

    static async getOne(id:number)
    {
        const apiUrl = `${API_URL}/${id}`;
        let { data } = await axios.get(apiUrl);
        return  data;
    }

    static async getSelect()
    {
        const apiUrl = `${API_URL}/list`;
        let { data } = await axios.get(apiUrl);
        return  data;
    }
    
    static async insert( dataForm: any)
    {
        const apiUrl = `${API_URL}/`;
        let { data } = await axios.post(apiUrl, dataForm);
        return  data;
    }
    
    static async update(id:number, dataForm: any)
    {
        const apiUrl = `${API_URL}/${id}`;
        let { data } = await axios.put(apiUrl, dataForm);
        return  data;
    }
    
    static async remove(id:number)
    {
        const apiUrl = `${API_URL}/${id}`;
        let { data } = await axios.delete(apiUrl);
        return  data;
    }

}

export default ProductsApi;


