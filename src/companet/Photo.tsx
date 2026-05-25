import React from 'react'

interface Photos{
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string
}

interface Props{
photo: Photos[]
}

function Photo({photo}:Props) {
    console.log(photo);
    
  return (
    <div>
        {
            photo?.map((photo)=>{
                return <>
                    <ul key={photo.id}>
                        <li>{photo.title}</li>
                        <li><img src={photo.url} alt="error" width={200} height={200} /></li>
                    </ul>
                </>
            })
        }
    </div>
  )
}

export default Photo