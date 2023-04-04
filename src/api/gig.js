import instance from "../axios/instance";

export async function gigCreate (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs",
        method: "post",
        data:data
      })

    return res.data
}

export async function uploadGigImage (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/upload-images",
        method: "post",
        data:data
      })

    return res.data
}

export async function deleteGigCurr (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/"+data,
        method: "delete",
      })

    return res.data
}
export async function getGigByByName (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/getGigByName/"+data,
        method: "get",
      })

    return res.data
}
export async function getGigById (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/getGigById/"+data,
        method: "get",
        data:data
      })

    return res.data
}
export async function getGigByAll (){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/get-all-gigs/",
        method: "get",
      })

    return res.data
}
export async function modifyGigById (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/gigs/update-gig/"+data.id,
        method: "put",
        data:data.newObj
      })

    return res.data
}

