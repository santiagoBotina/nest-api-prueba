/*
  Warnings:

  - Added the required column `full_name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wompi_aceptance_token` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "wompi_aceptance_token" TEXT NOT NULL;
