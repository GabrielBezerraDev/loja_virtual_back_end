/*
  Warnings:

  - Added the required column `imgBase64` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `imgBase64` VARCHAR(191) NOT NULL;
