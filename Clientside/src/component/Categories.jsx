import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({categories}) => {
    
  return (
     <section className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
       {Object.keys(categories).map((categorykey)=>{
        // console.log(categories[cat])
        return <Link to={'/categroyproduct'} state={{categorykey}}>
          <div key={categorykey} className="p-4 border rounded-md hover:shadow-md">
            <div className="text-4xl">{}</div>
            <p className="mt-2 font-medium">{categorykey}</p>
          </div>
        </Link>
       })

       }
      </section>
  )
} 

export default Categories