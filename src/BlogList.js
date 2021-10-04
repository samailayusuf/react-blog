import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogList({posts}) {
    return (
        <div>
            
            {
                posts.map((post, key) => (
                <div style={{width:'70%', textAlign:'center', margin: 'auto'}}>
                    
                    <Link
                    style={{textDecoration:'none'}}
                    to={`/blog/${post.id}`}
                    key={key}>
                        <h3>{post.title}</h3> 
                    </Link>

                   <p> { post.body} </p> 
                   <hr/>
                </div>
                ))
            }
        </div>
    )
}

