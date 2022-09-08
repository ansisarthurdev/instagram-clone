import React from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Category from '../components/Category'

//icons
import { PlayFill } from '@styled-icons/bootstrap/PlayFill'
import { CameraVideoFill } from '@styled-icons/bootstrap/CameraVideoFill'

const Discover = () => {

  const categories = [{
    name: 'For you',
    image: 'https://images.unsplash.com/photo-1600493572531-c056ef2eaac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Design',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
  },
  {
    name: 'Architecture',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80'
  },
  {
    name: 'Art',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80'
  },
  {
    name: 'Travel',
    image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Style',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Animals',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'
  },
  {
    name: 'See More',
    image: ''
  },
  ]

  return (
    <div className='profile'>
        <Navbar />
          <Wrapper>
            
            <Categories>
              {categories?.map(category => (
                <Category 
                  name={category?.name}
                  image={category?.image}
                />
              ))}
            </Categories>

            <DiscoverWrapper>
                <div className='top'>
                  <div className='highlight-big'>
                    <div className='highlight-big-img' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})`}}></div>
                    <div className='highlight-text'>
                      <PlayFill className='icon'/> <div className='heading'><p>Watch</p><p>Videos You Might Like</p></div>
                    </div>
                  </div>
                  <div className='highlight-small'>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>

                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>

                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>

                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                  </div>
                </div>
                <div className='bottom'>
                  <div className='discover-more'>
                    
                    {/* Start */}
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    <div className='img-container'>
                      <div className='img' style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1662436267866-c299b8bdce57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"})` }}></div>
                      <CameraVideoFill className='icon'/>
                    </div>
                    {/* End */}

                  </div>
                </div>
            </DiscoverWrapper>

          </Wrapper>
        <Footer />
    </div>
  )
}

const DiscoverWrapper = styled.div`
margin-top: 40px; 

.bottom {
  .discover-more {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .img-container {
      position: relative;
      width: 22vw;
      height: 220px;
      margin: 0 10px 20px 0;
      cursor: pointer;
      overflow: hidden;

      :hover {
        .img {
          transform: scale(1.2)
        }
      }

      .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: .2s ease-out;
      }

      .icon {
        width: 16px;
        height: 16px;
        color: white;
        background: #0000008a;
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 10px;
      }
    }
  }
}

.top {
  display: flex;
  justify-content: space-between; 

  .highlight-big {
    width: 40%;
    height: 450px;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    .highlight-text {
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      align-items: center;
      background: #0000008a;
      padding: 5px 20px;

      .icon {
      width: 20px;
      height: 20px;
      color: white;
      margin-right: 20px; 
      }

      .heading {
        color: white;
      }

      p:nth-child(2){
        font-weight: bold;
      }

    }

    :hover {
      .highlight-big-img {
        transform: scale(1.2);
      }
    }

    .highlight-big-img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      transition: .2s ease-out;
    }
  }

  .highlight-small {
    width: 58%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .img-container {
      position: relative;
      width: 26vw;
      height: 220px;
      margin: 0 10px 10px 0;
      cursor: pointer;
      overflow: hidden;

      :hover {
        .img {
          transform: scale(1.2)
        }
      }

      .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: .2s ease-out;
      }

      .icon {
        width: 16px;
        height: 16px;
        color: white;
        background: #0000008a;
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 10px;
      }
    }
  }
}
`

const Categories = styled.div`
display: flex;
overflow-x: scroll;
overflow-y: hidden;
padding: 0 50px;

::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 0px none #000000;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #1c1c1c;
}
::-webkit-scrollbar-thumb:active {
  background: #424242;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-track:hover {
  background: #ffffff;
}
::-webkit-scrollbar-track:active {
  background: #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`

const Wrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 20px 20px;
`

export default Discover