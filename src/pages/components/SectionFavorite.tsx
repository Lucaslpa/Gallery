import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import BlackHeart from '../../assets/blackHeart.svg'
import RedHeart from '../../assets/redHeart.svg'
import Trash from'../../assets/icons8-lixo.svg'


export function SectionFavorite()  {

    const favorites = useAppSelector((state) => state.images.favoriteImages)
    const dispatch  = useAppDispatch()

      
                       useEffect(() => {
console.log('meu favorites',favorites)                           
                       }, [favorites])
                       
                       
                       function LikeImage(index:number , id:number) {
                        const findedIndex = favorites.findIndex(e => e.id ===  id)
                        if(findedIndex === -1) {
                            return  dispatch({type:"images/likeImage", payload: {index}})
                        } else {
                           const newFavorites = favorites.filter(image => image.id !== id)
                           dispatch({type:"images/deslikeImage", payload: {index, newFavorites: newFavorites }})
                        }
                    }             



    
    return (
        <section className="imagesContainer">
        {favorites.length === 0 ? <h1>loading</h1> : favorites.map((image, index) => 
                  <div key={image.id} className='Image' onClick={() => {} }  >
                      <img alt=''  src={image.imageURL} ></img>
                      <div className='Infos' >
                            <span>{image.photographer}</span>
                            <div className='ImageButtons' >
                                  <button className='FavoriteButton' onClick={() => LikeImage(index, image.id)} >
                                      <img alt='like' src={image.like ? RedHeart : BlackHeart } />
                                  </button>
                                  <button className='TrashButton' >
                                      <img alt='delete' src={Trash} />
                                  </button>
                            </div>
                      </div>
                  </div>
                  )}
       </section>
    )
}