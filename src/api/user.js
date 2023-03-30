import instance from "../axios/instance";


async function getUserById (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "users",
        method: "get",
      })

    return res.data
}

async function updateData (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "users/update-user",
        method: "put",
        data
      })

    return res.data
}

async function updatePassword (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "users",
        method: "put",
      })

    return res.data
}

async function getUserByParams (id){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "users/"+id,
        method: "get",
      })

    return res.data
}



export {
    getUserById,
    getUserByParams,
    updateData,
    updatePassword
}