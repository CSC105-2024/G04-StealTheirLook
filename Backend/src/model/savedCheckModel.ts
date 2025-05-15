import { db } from "../index.js"

const updateCheck = async(body: any) => {

    const prevState = await db.savedCheck.findFirst({
        where: {
            savedCheckId : body.savedCheckId
        },
        select: {
            completed : true
        }
    })

    const checked = await db.savedCheck.update({
        where : {
            savedCheckId : body.savedCheckId
        },
        data : {
            completed : {
                // @ts-ignore
                set : !prevState.completed
            }
        }
    })

    return checked;
}

export { updateCheck, }