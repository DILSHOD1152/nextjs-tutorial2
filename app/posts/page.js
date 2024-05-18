 import Link from "next/link";
 import axios from "axios";

 async function getData(){
    const {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    return data;
}

const PostPage = async ()=>{
    const data = await getData();
    return(
        <>
        <table border={1}>
            <thead>
            <th>id</th>
            <th>body</th>
            </thead>
            <tbody>
                {
                    data.map((a)=>(
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>
                                <Link href={`./posts/${a.id}`}>{a.body}</Link>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
};
export default PostPage;