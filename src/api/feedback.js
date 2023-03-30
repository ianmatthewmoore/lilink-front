import instance from "../axios/instance"

export async function feedbackCreate (data){

    const res = await instance({
        // url of the api endpoint (can be changed)
        url: "/feedback/"+data.gig_id,
        method: "post",
        data:data
      })

    return res.data
}

/**communication_rating
service_rating
message
consultant_id
gig_id */