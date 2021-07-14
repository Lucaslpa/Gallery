import {useAppDispatch, useAppSelector} from '../../app/hooks'
import BlackHeart from '../../assets/blackHeart.svg'
import RedHeart from '../../assets/redHeart.svg'
import Trash from'../../assets/icons8-lixo.svg'
import {image} from '../../features/images/imagesSlice'

export function Section({images}: {images: Array<image>})  {

    const favorites = useAppSelector((state) => state.images.favoriteImages)
    const imagesST = useAppSelector((state) => state.images.images)
    const dispatch  = useAppDispatch()

    window.onload = () =>  dispatch({type: "images/setImagesAsync"}); 
                            
    function LikeImage(index:number , id:number) {
         const findedIndex = favorites.findIndex(e => e.id ===  id)
         if(findedIndex === -1) {
             return  dispatch({type:"images/likeImage", payload: {index}})
         } else {
            const newFavorites = favorites.filter(image => image.id !== id)
            dispatch({type:"images/deslikeImage", payload: {index, newFavorites: newFavorites }})
         }
     } 
    function DeleteImage(index:number, id:number) {
         const deletedElement = images[index]
         const newFavorites = favorites.filter(image => image.id !== id)
         const newImages = imagesST.filter(image => image.id !== id)
         dispatch({type:"images/deleteImage", payload: {deletedElement, newFavorites, newImages}})
     }
    return (
        <section className="imagesContainer">
        {images.length === 0 ? <h1>loading</h1> : images.map((image, index) => 
                  <div key={image.id} className='Image' onClick={() => {} }  >
                      <img alt=''  src={image.imageURL} ></img>
                      <div className='Infos' >
                            <span>{image.photographer}</span>
                            <div className='ImageButtons' >
                                  <button className='FavoriteButton' onClick={() => LikeImage(index, image.id)} >
                                      <img alt='like' src={image.like ? RedHeart : BlackHeart } />
                                  </button>
                                  <button className='TrashButton' onClick={() => DeleteImage(index, image.id)}  >
                                      <img alt='delete' src={Trash} />
                                  </button>
                            </div>
                      </div>
                  </div>
                  )}
       </section>
    )
}