import axios from "axios";


export interface User {
id: number;
name: string;
email: string;
phone: string;
website: string;
company?: {
name: string;
};
address?: {
city: string;
};
}


export async function fetchUsers(): Promise<User[]> {
const res = await axios.get("https://jsonplaceholder.typicode.com/users");
return res.data;
}