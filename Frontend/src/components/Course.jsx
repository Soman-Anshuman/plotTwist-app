import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {

  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="items-center justify-center text-center">
        <h1 className="pt-28 text-2xl md:text-4xl">
            We're delighted to have you <span className="text-pink-500 font-semibold">Here! :)</span>
        </h1>
        <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis rem ratione soluta non officia, iste minima omnis natus distinctio fugit officiis delectus dolores perferendis deleniti provident hic necessitatibus vitae amet illo saepe, cupiditate dolorem, harum exercitationem? Consectetur veritatis id voluptate provident ut quam repellendus iusto minus non deserunt, laborum reprehenderit.
        </p>

        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back to Home
          </button>
        </Link>
      </div>

      {/* courses */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item) => (
                <Cards item={item} key={item.id}/>
            ))
        }
      </div>
    </div>
  </>)
}

export default Course
