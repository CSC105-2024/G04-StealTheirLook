import type { Context } from "hono";
import * as savedCheckModel from "../model/savedCheckModel.js"
import * as savedPostModel from "../model/savedPostModel.js"

type UpdateCheckBody = {
    savedCheckId: string,
    completed?: boolean
}

const updateCheck = async (c: Context) => {
    try {
        const body = await c.req.json<UpdateCheckBody>()
        const userId = c.get('userId')

        if (!body.savedCheckId) {
            return c.json(
                {
                    success: false,
                    error: "Missing saved check ID",
                },
                400
            );
        }

        // Get the saved check to verify ownership
        const savedCheck = await savedCheckModel.getSavedCheckById(body.savedCheckId)
        if (!savedCheck) {
            return c.json(
                {
                    success: false,
                    error: "Saved check item not found",
                },
                404
            );
        }

        // Verify the user owns the saved post containing this check
        const isOwner = await savedPostModel.verifySavedPostOwner({
            savedPostId: savedCheck.savedPostId,
            userId
        });

        if (!isOwner) {
            return c.json(
                {
                    success: false,
                    error: "Unauthorized - you can only update your own saved items",
                },
                403
            );
        }

        const updatedCheck = await savedCheckModel.updateCheck(body);
        return c.json({
            success: true,
            data: updatedCheck,
            message: "Saved check updated successfully",
        });
    }
    catch (error) {
        console.error("Error updating saved check:", error);
        return c.json(
            {
                success: false,
                error: "Failed to update saved check",
            },
            500
        )
    }
}

export { updateCheck }