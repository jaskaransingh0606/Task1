
import postCount from '../assets/PostCount.png'
import filterAll from '../assets/FilterAll.png'

function AndNav() {
  return (
    <div className='flex flex-row justify-between invisible mt-10 mr-40 ml-40 align-center content-center md:mr-10 md:ml-10 lg:visible sm:mr-5 sm:ml-5 jt:mr-1 jt:ml-1'>
        <div><img src={postCount}></img></div>
        <div><img src={filterAll}></img></div>
    </div>
  )
}

export default AndNav
