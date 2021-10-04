import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './hook/useFetch';

export default function Blog({posts}) {
    let { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://jsonplaceholder.typicode.com/posts/'+id);



    //console.log(blog);

    return (
        <div>
            {isPending && <div>Loading</div>}
            {error && <div> {error} </div>}

            {blog &&

            <article>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
            </article>
            

            }
            
        </div>
    )
}
