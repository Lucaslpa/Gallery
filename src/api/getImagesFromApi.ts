import {customFetch} from './customFetch'




export async function getImages() {
        const getImagesFromApi = await customFetch('https://api.pexels.com/v1/curated?page=2&per_page=6', {key:'Authorization',value: '563492ad6f91700001000001c5a0ddf811ff4db6a0f68275a78f4498'})

        const photosArray = getImagesFromApi.photos.map(function (photoDatas: any) {
               return {photographer: photoDatas.photographer, imageURL: photoDatas.src.original}})
        
        console.log(photosArray)
        
        return photosArray
}