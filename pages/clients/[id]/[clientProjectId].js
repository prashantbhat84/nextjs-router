import React from 'react'
import { useRouter } from 'next/router'
const SelectedCLientProjectPage = () => {
    const {query,back}= useRouter();
    
    return (
        <div>
            <h2>Individual Project info for a client</h2>
            <h3>Client Id: {query.id}</h3>
            <p>Project Id:{query.clientProjectId}</p>

            <button onClick={()=>back()}>Go Back</button>
        </div>
    )
}

export default SelectedCLientProjectPage