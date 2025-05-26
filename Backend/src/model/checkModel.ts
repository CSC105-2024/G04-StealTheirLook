import { db } from '../index.js'

export const editCheckBrand = async (body: { checkId: number; brand: string }) =>
    db.check.updateMany({
        where: { checkId: body.checkId },
        data:  { brand: body.brand },
    }).then(() =>
        db.savedCheck.updateMany({
            where: { originalCheck: body.checkId },
            data:  { brand: body.brand },
        })
    )

export const editCheckClothe = async (body: { checkId: number; clothe: string }) =>
    db.check.updateMany({
        where: { checkId: body.checkId },
        data:  { clothe: body.clothe },
    }).then(() =>
        db.savedCheck.updateMany({
            where: { originalCheck: body.checkId },
            data:  { clothe: body.clothe },
        })
    )