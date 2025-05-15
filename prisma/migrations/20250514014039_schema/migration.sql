/*
  Warnings:

  - The primary key for the `SavedCheck` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SavedPost` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavedCheck" (
    "checkId" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_postId_fkey" FOREIGN KEY ("postId") REFERENCES "SavedPost" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedCheck" ("brand", "checkId", "clothe", "completed", "postId") SELECT "brand", "checkId", "clothe", "completed", "postId" FROM "SavedCheck";
DROP TABLE "SavedCheck";
ALTER TABLE "new_SavedCheck" RENAME TO "SavedCheck";
CREATE TABLE "new_SavedPost" (
    "postId" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "SavedPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedPost" ("image", "postId", "tag", "title", "userId") SELECT "image", "postId", "tag", "title", "userId" FROM "SavedPost";
DROP TABLE "SavedPost";
ALTER TABLE "new_SavedPost" RENAME TO "SavedPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
