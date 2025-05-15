/*
  Warnings:

  - The primary key for the `SavedCheck` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `checkId` on the `SavedCheck` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `SavedCheck` table. All the data in the column will be lost.
  - The primary key for the `SavedPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `postId` on the `SavedPost` table. All the data in the column will be lost.
  - Added the required column `savedCheckId` to the `SavedCheck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savedPostId` to the `SavedCheck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savedPostId` to the `SavedPost` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SavedCheck" (
    "savedCheckId" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "savedPostId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_savedPostId_fkey" FOREIGN KEY ("savedPostId") REFERENCES "SavedPost" ("savedPostId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedCheck" ("brand", "clothe", "completed") SELECT "brand", "clothe", "completed" FROM "SavedCheck";
DROP TABLE "SavedCheck";
ALTER TABLE "new_SavedCheck" RENAME TO "SavedCheck";
CREATE TABLE "new_SavedPost" (
    "savedPostId" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "SavedPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SavedPost" ("image", "tag", "title", "userId") SELECT "image", "tag", "title", "userId" FROM "SavedPost";
DROP TABLE "SavedPost";
ALTER TABLE "new_SavedPost" RENAME TO "SavedPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
