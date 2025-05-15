import { db } from "../index.js"

const editCheckBrand = async(body: any) => {

    const updateCheckBrand = await db.check.updateMany({
        where : {
            checkId: body.checkId
        },
        data : {
            brand: body.brand
        }
    })

    const updateSavedCheckBrand = await db.savedCheck.updateMany({
        where : {
            originalCheck: body.checkId
        },
        data : {
            brand: body.brand
        }
    })

    return updateCheckBrand

}

const editCheckClothe = async(body: any) => {

    const updateCheckClothe = await db.check.updateMany({
        where : {
            checkId: body.checkId
        },
        data : {
            clothe: body.clothe
        }
    })

    const updateSavedCheckClothe = await db.savedCheck.updateMany({
        where : {
            originalCheck: body.checkId
        },
        data : {
            clothe: body.clothe
        }
    })

    return updateCheckClothe

}

export { editCheckBrand, editCheckClothe}