import axios from "axios";
import iTodo from "./type";

const getTodos = async () => await axios.get<iTodo>('https://jsonplaceholder.typicode.com/todos')

//  const response: AxiosResponse<iTodo[]> = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

const apiServices = { getTodos }

export default apiServices