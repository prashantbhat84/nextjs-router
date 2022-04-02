
import { useRouter } from 'next/router'

const ClientProjectPage = () => {
    
    const {query,push,back,asPath} = useRouter();
   

    const buttonClickHandler=(e)=>{
     // laod data ..
     push({
         pathname:`/clients/[id]/[clientProjectId]`,
         query:{
             clientProjectId: 'projectA',
             id: query.id
         }
     })
    }

    return (
        <div>
            <h2>List of projects for a {query.id}</h2>

            <p>Projects</p>
            <button onClick={buttonClickHandler}>
                Load Project A
            </button>
            <button onClick={()=>back()}>
                Go Back
            </button>

        </div>
    )
}

export default ClientProjectPage