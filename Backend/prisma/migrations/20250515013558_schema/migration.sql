/*
  Warnings:

  - You are about to drop the column `originalPost` on the `SavedCheck` table. All the data in the column will be lost.
  - Added the required column `originalCheck` to the `SavedCheck` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavedCheck" (
    "savedCheckId" TEXT NOT NULL PRIMARY KEY,
    "originalCheck" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "savedPostId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_savedPostId_fkey" FOREIGN KEY ("savedPostId") REFERENCES "SavedPost" ("savedPostId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedCheck" ("brand", "clothe", "completed", "savedCheckId", "savedPostId") SELECT "brand", "clothe", "completed", "savedCheckId", "savedPostId" FROM "SavedCheck";
DROP TABLE "SavedCheck";
ALTER TABLE "new_SavedCheck" RENAME TO "SavedCheck";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
