import React from 'react'
import {useRouter} from 'next/router'
// catch all routes /blog/2020/12/id
///blog/2020/id etc...

function BlogPosts() {
    const router=useRouter();
    console.log(router);
  return (
    <div>
        <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPosts