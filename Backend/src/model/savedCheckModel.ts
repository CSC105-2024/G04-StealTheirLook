import { db } from '../index.js'

export const updateCheck = async (body: { savedCheckId: string }) => {
    const prev = await db.savedCheck.findUnique({
        where: { savedCheckId: body.savedCheckId },
        select: { completed: true },
    })

    return db.savedCheck.update({
        where: { savedCheckId: body.savedCheckId },
        data:  { completed: { set: !prev?.completed } },
    })
}