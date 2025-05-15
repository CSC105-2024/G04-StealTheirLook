import type { Context } from "hono";
import * as savedCheckModel from "../model/savedCheckModel.js"

type updateCheck = {
    savedCheckId: string
}

const updateCheck = async (c: Context) => {
    try {
        const body = await c.req.json<updateCheck>()
        if(body == null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }

        const updatedCheck = await savedCheckModel.updateCheck(body);
        return c.json({
            success: true,
            data: updatedCheck,
            msg: "updated saved check",
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

export { updateCheck }