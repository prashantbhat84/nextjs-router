
import Link from 'next/link'

const ClientsPage = () => {
  const routes=[
    {
      id:"prashant",name:"Prashant"
    },
    {
      id:"phanti",name:"Phanti"
    }
  ]
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
       {routes.map(route=>(
         <li key={route.id}>
           {/* <Link href={`/clients/${route.id}`}>{route.name}</Link> */}
           {/* alternative way of setting href */}
           <Link href={{
             pathname:'/clients/[id]',
             query:{
               id:route.id
             }
           }}>{route.name}</Link>
         </li>
       ))}
      </ul>
      </div>
  )
}

export default ClientsPage