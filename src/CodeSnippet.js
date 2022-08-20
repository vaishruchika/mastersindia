import React from 'react'

const CodeSnippet = ({name,snip}) => {
  

    return (<>
                 <div className='snip-container'>
                 <div>{name}</div>
                 <div className='code'>{snip.map((item)=>
                  <p>{item}</p>
                 )}</div>
                 <button>Save</button>
                 </div>
    </>

  )
}

export default CodeSnippet