import instance from "../axios/instance";


async function createPropsal (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/new-proposal/"+data.customerId+"/"+data.email,
        method: "post",
        data:data
      })

    return res.data
}


async function acceptProposal (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/accept/"+data,
        method: "put"
      })

    return res.data
}

async function rejectPropsal (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/reject/"+data,
        method: "put"
      })

    return res.data
}

async function acceptDelivery (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/accept-delivery/"+data.id+"/"+data.ref,
        method: "put"
      })

    return res.data
}

async function rejectDelivery (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/reject-delivery/"+data.id+"/"+data.ref,
        method: "put"
      })

    return res.data
}

async function sendDeliveryOrder (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/sendDeliveryOrder/"+data.order_ref,
        method: "put",
        data:data
      })

    return res.data
}
export async function getGigByRef (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/get-gig-by-ref/"+data,
        method: "get"
    })

    return res.data
}

export async function uploadDeliveryFile (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "proposal/upload-file",
        method: "post",
        data
    })

    return res.data
}


export {
    createPropsal,
    acceptProposal,
    rejectPropsal,
    sendDeliveryOrder,
    acceptDelivery,
    rejectDelivery
}