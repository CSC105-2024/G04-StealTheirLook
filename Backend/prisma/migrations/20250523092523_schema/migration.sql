-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "joinDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Check" (
    "checkId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "Check_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("postId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SavedPost" (
    "savedPostId" TEXT NOT NULL PRIMARY KEY,
    "originalPost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "SavedPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SavedCheck" (
    "savedCheckId" TEXT NOT NULL PRIMARY KEY,
    "originalCheck" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "clothe" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "savedPostId" TEXT NOT NULL,
    CONSTRAINT "SavedCheck_savedPostId_fkey" FOREIGN KEY ("savedPostId") REFERENCES "SavedPost" ("savedPostId") ON DELETE RESTRICT ON UPDATE CASCADE
);
