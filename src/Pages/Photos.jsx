import React, { useEffect, useState } from 'react'
import { getPhotos } from '../services/userService'
import Photo from '../companet/Photo'

function Photos() {
    const [photo,setPhoto] = useState(null)

    async function fechtPhotos(){
        let res = await getPhotos();
        setPhoto(res.data)
    }

    useEffect(()=>{
        fechtPhotos();
    })

  return (
    <div>
        <Photo photo={photo} />
    </div>
  )
}

export default Photos