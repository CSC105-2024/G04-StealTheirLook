/*
  Warnings:

  - Added the required column `originalPost` to the `SavedCheck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalPost` to the `SavedPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavedCheck" (
    "savedCheckId" TEXT NOT NULL PRIMARY KEY,
    "originalPost" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "savedPostId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_savedPostId_fkey" FOREIGN KEY ("savedPostId") REFERENCES "SavedPost" ("savedPostId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedCheck" ("brand", "clothe", "completed", "savedCheckId", "savedPostId") SELECT "brand", "clothe", "completed", "savedCheckId", "savedPostId" FROM "SavedCheck";
DROP TABLE "SavedCheck";
ALTER TABLE "new_SavedCheck" RENAME TO "SavedCheck";
CREATE TABLE "new_SavedPost" (
    "savedPostId" TEXT NOT NULL PRIMARY KEY,
    "originalPost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "SavedPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedPost" ("image", "savedPostId", "tag", "title", "userId") SELECT "image", "savedPostId", "tag", "title", "userId" FROM "SavedPost";
DROP TABLE "SavedPost";
ALTER TABLE "new_SavedPost" RENAME TO "SavedPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
