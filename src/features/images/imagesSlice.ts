import {createSlice} from '@reduxjs/toolkit'

export type image = {
    id: number,
    photographer: string,
    imageURL: string,
    like: boolean
}
export type state =  {
    images: Array<image>,
    favoriteImages: Array<image>,
    trashImages: Array<image>,
    status: string
}
type action = {
    type: string, 
    payload: any,
}

const initialState: state = {
    images: [],
    favoriteImages: [],
    trashImages: [], 
    status: 'loading'
}

function setImages(state: state, action: action) {
    state.images = action.payload
}

function likeImage(state: state, action: action) {
  const index = action.payload.index
  state.images[index].like = true
  state.favoriteImages.unshift(state.images[index])

}

function deslikeImage(state: state, action: action) {
    const index = action.payload.index
    const newImages = state.images.map((element, indexElement) => {
        if(indexElement === index) {
            element.like = false 
            return  element
        } else {
            return element
        }
     })

     state.images  = [...newImages]

    state.favoriteImages = action.payload.newFavorites
}


function deleteImage(state: state, action: action) {
    state.trashImages.unshift(action.payload.deletedElement)
    state.favoriteImages =  action.payload.newFavorites
    state.images =  action.payload.newImages
  
  }
  
  function recoveryImage(state: state, action: action) {
      state.images =  action.payload.newImages
      state.trashImages = action.payload.newTrashImages
  }

const newStatus = (state: state, action: action) => {
state.status = action.payload
}
const counterSliceConfig = {
    name: "images",
    initialState,
    reducers: {
        setImages,
        newStatus,
        likeImage,
        deslikeImage,
        deleteImage,
        recoveryImage
    }
}
export const imagesSlice = createSlice(counterSliceConfig)

