import {useAppDispatch, useAppSelector} from '../../app/hooks'
import Trash from'../../assets/icons8-lixo.svg'

export function SectionTrash()  {
    const trashImages = useAppSelector((state) => state.images.trashImages)
    const images = useAppSelector((state) => state.images.images)
    const dispatch = useAppDispatch()
    
    function DeleteImage(index:number, id:number) {
        const elementRecovery =  trashImages[index]
        const newTrashImages = trashImages.filter(image => image.id !== id)
        const newImages = [elementRecovery, ...images]
        dispatch({type:"images/recoveryImage", payload: {newTrashImages, newImages}})
    }
    return (
        <section className="imagesContainer">
        {trashImages.length === 0 ? <h1>Não temos nada na lixeira :/</h1> : trashImages.map((image, index) => 
                  <div key={image.id} className='Image' onClick={() => {} }  >
                      <img alt=''  src={image.imageURL} ></img>
                      <div className='Infos' >
                            <span>{image.photographer}</span>
                            <div className='ImageButtons' >
                                  
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