export async function customFetch(url: string, header: {key: string , value: string}) {
    try {
        let headers = new Headers({
            [header.key]: header.value 
         })
             const resultReq =  await fetch(url,{ method: 'GET',
             headers: headers,
             mode: 'cors',
             cache: 'default' })
          const result = await resultReq.json()
          return result
    } catch(error){
        console.log(error)
    }
}