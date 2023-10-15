

import joinGroup from '../assets/JoinGroup.png'
import writePost from '../assets/WritePost.png'
import nav2 from '../assets/Nav2.png'

function Nav2() {
  return (
    <div className='flex flex-row justify-between items-center content-center mr-40 ml-40 mt-10 lg:hidden'>
        <div><img src={nav2}></img></div>
        <div className=''><img src={writePost}></img></div>
        <div className=''><img src={joinGroup}></img></div>

      
    </div>
  )
}

export default Nav2
