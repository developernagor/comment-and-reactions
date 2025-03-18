import React from 'react'

function Note() {
  return (
    <div>
      {/* .env.local => */}
      

      {/* add-task => */}
      const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
      const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

      {/* Image upload to imgbb and then get an url */}
      const imageFile = {image: data.image[0]}
      const res = await axios.post(image_hosting_api,imageFile,{
        headers: {
            'content-type': 'multipart/form-data'
        }
      })
      console.log(res.data)
    </div>
  )
}

export default Note
