import React from 'react'

const Client = async({params}) => {
    // NextJS allways pass the params as the object that contains a dynamic part
    
    let desc;

        if(params.client == 'vijay'){
            desc = 'A calm and composed café owner in Himachal Pradesh with a mysterious past. He lives a peaceful life with his family but is later revealed to be Leo Das, a former gangster with a violent history. His dual identity is central to the film'; 
        }else if(params.client == 'Trisha'){
            desc = 'Parthi supportive wife who stands by him through thick and thin. She is a loving mother and is unaware of Parthi past initially, but later plays a key role in supporting his decisions.';
        }else if(params.client == 'Sanjay'){
            desc = 'Leo estranged and ruthless father. A powerful gangster who resurfaces to drag Leo back into the underworld. His presence triggers the conflict in Leo peaceful life.';
        }else{
            desc = 'charector not available !';
        }
    
  return (
    <div className='flex flex-col gap-5 justify-center items-center py-50'>
      <h2 className='font-black text-3xl text-blue-400'>Actor Name: {params.client}</h2>
      <p className='px-50 py-10'>Role : {desc}</p>
    </div>
  )
}

export default Client
