/*
  Warnings:

  - You are about to drop the column `amounntStock` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `product` table. All the data in the column will be lost.
  - Added the required column `amountStock` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `amounntStock`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `amountStock` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
