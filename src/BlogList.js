import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogList({posts}) {
    return (
        <div>
            
            {
                posts.map((post, key) => (
                <div>
                    {/* <Link to="/blog/"><h3>{post.title}</h3> </Link> */}

                    
                    <Link
                    to={`/blog/${post.id}`}
                    key={key}>{post.title} </Link>

                   <p> { post.body} *** </p> 
                   <hr/>
                </div>
                ))
            }
        </div>
    )
}

