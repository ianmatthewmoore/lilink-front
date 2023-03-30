import instance from "../axios/instance";


async function login (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "auth/login",
        method: "post",
        data:data
      })

    return res.data
}

async function Signup (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "auth/register",
        method: "post",
        data:data
      })

    return res.data
}

export {
    login,
    Signup
}