import type {Context} from 'hono'
import * as checkModel from '../model/checkModel.js'

export const editCheckBrand = async (c: Context) => {
    const body = await c.req.json()
    const res = await checkModel.editCheckBrand(body)
    return c.json(res)
}

export const editCheckClothe = async (c: Context) => {
    const body = await c.req.json()
    const res = await checkModel.editCheckClothe(body)
    return c.json(res)
}