import React from 'react'

const TweetBox = () => {
  return (
    <div>
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt=""
      />
      <div>
        <form action="">
          <input type="text" placeholder="What's Happening?" />
          <div>
            <div>{/* Icons */}</div>
            <button>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
