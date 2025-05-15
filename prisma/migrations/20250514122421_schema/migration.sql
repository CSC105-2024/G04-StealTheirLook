/*
  Warnings:

  - You are about to alter the column `completed` on the `SavedCheck` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavedCheck" (
    "checkId" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_postId_fkey" FOREIGN KEY ("postId") REFERENCES "SavedPost" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedCheck" ("brand", "checkId", "clothe", "completed", "postId") SELECT "brand", "checkId", "clothe", "completed", "postId" FROM "SavedCheck";
DROP TABLE "SavedCheck";
ALTER TABLE "new_SavedCheck" RENAME TO "SavedCheck";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
