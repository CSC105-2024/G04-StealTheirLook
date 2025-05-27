import { db } from '../index.js'

export const getCheckById = async (checkId: number) => {
    try {
        return await db.check.findUnique({
            where: { checkId }
        })
    } catch (error) {
        console.error("Error in getCheckById:", error)
        throw error
    }
}

export const editCheckBrand = async (body: { checkId: number; brand: string }) => {
    try {
        // Update the original check item
        await db.check.update({
            where: { checkId: body.checkId },
            data: { brand: body.brand },
        })

        // Update all saved versions of this check
        const updatedSavedChecks = await db.savedCheck.updateMany({
            where: { originalCheck: body.checkId },
            data: { brand: body.brand },
        })

        return {
            checkId: body.checkId,
            brand: body.brand,
            updatedSavedChecks: updatedSavedChecks.count
        }
    } catch (error) {
        console.error("Error in editCheckBrand:", error)
        throw error
    }
}

export const editCheckClothe = async (body: { checkId: number; clothe: string }) => {
    try {
        // Update the original check item
        await db.check.update({
            where: { checkId: body.checkId },
            data: { clothe: body.clothe },
        })

        // Update all saved versions of this check
        const updatedSavedChecks = await db.savedCheck.updateMany({
            where: { originalCheck: body.checkId },
            data: { clothe: body.clothe },
        })

        return {
            checkId: body.checkId,
            clothe: body.clothe,
            updatedSavedChecks: updatedSavedChecks.count
        }
    } catch (error) {
        console.error("Error in editCheckClothe:", error)
        throw error
    }
}