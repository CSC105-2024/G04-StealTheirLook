import { db } from '../index.js'

export const getSavedCheckById = async (savedCheckId: string) => {
    try {
        return await db.savedCheck.findUnique({
            where: { savedCheckId }
        })
    } catch (error) {
        console.error("Error in getSavedCheckById:", error)
        throw error
    }
}

export const updateCheck = async (body: { savedCheckId: string, completed?: boolean }) => {
    try {
        const savedCheck = await db.savedCheck.findUnique({
            where: { savedCheckId: body.savedCheckId },
            select: { completed: true },
        })

        if (!savedCheck) {
            throw new Error("Saved check not found")
        }

        // If completed is explicitly provided, use it, otherwise toggle the current value
        const newCompletedValue = body.completed !== undefined
            ? body.completed
            : !savedCheck.completed

        return await db.savedCheck.update({
            where: { savedCheckId: body.savedCheckId },
            data: { completed: newCompletedValue },
            select: {
                savedCheckId: true,
                brand: true,
                clothe: true,
                completed: true
            }
        })
    } catch (error) {
        console.error("Error in updateCheck:", error)
        throw error
    }
}