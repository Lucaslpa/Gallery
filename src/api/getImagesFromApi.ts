
type obj = {
        id: number,
        photographer: string,
        imageURL: string,
        like: boolean
    }

export async function getImages(): Promise<Array<obj>> {
        /*const getImagesFromApi = await customFetch('https://api.pexels.com/v1/curated?page=2&per_page=6', {key:'Authorization',value: '563492ad6f91700001000001c5a0ddf811ff4db6a0f68275a78f4498'})

        const photosArray = getImagesFromApi.photos.map(function (photoDatas: any) {
               return {id: photoDatas.id ,photographer: photoDatas.photographer, imageURL: photoDatas.src.original}})*/
        
        
        
        return   [{ id: 8602180, photographer: "Ivan Xolod", imageURL: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg", like: false }, { id: 8624764, photographer: "Yura Forrat", imageURL: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", like: false }, { id: 8624947, photographer: "Yura Forrat", imageURL: "https://blog.pajaris.com.br/wp-content/uploads/2020/12/Foto-tumblr-casal.jpg", like: false }, { id: 3605435, photographer: "Raka Miftah", imageURL: "https://www.gettyimages.pt/gi-resources/images/500px/983794168.jpg", like: false }, { id: 7113845, photographer: "Raka Miftah", imageURL: "https://medias.cnnbrasil.com.br/fotografia-do-brasileiro-victor-lima-esta-entre-as-25-melhores-fotos-do-ano.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/03/39216_132E09CF04A2E018.jpg&width=804&height=452&resize=CROP", like: false },  { id: 2619263, photographer: "Cristyan Bohn", imageURL: "https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-pt.jpg", like: true }]
}