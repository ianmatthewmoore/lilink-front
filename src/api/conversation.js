import instance from "../axios/instance";


async function getConvUsers (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/conversation/get-conv/"+data,
        method: "get",
      })

    return res.data
}

export{
    getConvUsers
}