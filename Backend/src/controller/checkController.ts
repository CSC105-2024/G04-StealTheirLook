import type { Context } from "hono";
import * as checkModel from "../model/checkModel.js"
import * as postModel from "../model/postModel.js";

type editCheckBrand = {
    checkId: number,
    brand: string,
}

type editCheckClothe = {
    checkId: number,
    clothe: string,
}

const editCheckBrand = async (c: Context) => {
    try {
        const body = await c.req.json<editCheckBrand>()
        if(!body.checkId || !body.brand) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const editBrand = await checkModel.editCheckBrand(body)
        return c.json({
            success: true,
            data: editBrand,
            msg: "edited a brand of a check",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

const editCheckClothe = async (c: Context) => {
    try {
        const body = await c.req.json<editCheckClothe>()
        if(!body.checkId || !body.clothe) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const editClothe = await checkModel.editCheckClothe(body)
        return c.json({
            success: true,
            data: editClothe,
            msg: "edited a clothe of a check",
        });
    }
    catch (error) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${error}`,
            },
            500
        )
    }
}

export { editCheckBrand, editCheckClothe }