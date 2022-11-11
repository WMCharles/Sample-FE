import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesItem = ({ jobs }) => {

  const params = useParams()
  console.log(params)
  console.log(jobs)

  return (
    <div key={jobs.id}>

      {jobs.map(list => (
        list.id === parseInt(params.listId) &&

        <div className='categoriesitem'>
          <img alt={list.title} src={list.image}></img>
          <div className='details-categories'>
            <div>
              <h1>{list.title}</h1>
              <br></br>
            </div>

              <ul className='expand-div'>
              <h3>Location : </h3><p>{list.location}</p>
              <h3>Minimum Requirements : </h3><p>{list.requirements}</p>
              <h3>Application Deadline : </h3><p>{list.deadline}</p>
              <h3>Job Description : </h3><>{list.description}</>
              <h3>Salary : </h3><p id='salary'>Ksh {list.salary}</p>
              </ul>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesItem

