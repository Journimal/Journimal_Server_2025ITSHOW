/*
  Warnings:

  - You are about to drop the column `missionImage` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `mission_name` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `first_day` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `last_day` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `missionIcon` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missionName` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question1` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question2` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question3` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstDay` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastDay` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mission` DROP COLUMN `missionImage`,
    DROP COLUMN `mission_name`,
    ADD COLUMN `missionIcon` VARCHAR(191) NOT NULL,
    ADD COLUMN `missionName` VARCHAR(191) NOT NULL,
    ADD COLUMN `question1` VARCHAR(191) NOT NULL,
    ADD COLUMN `question2` VARCHAR(191) NOT NULL,
    ADD COLUMN `question3` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Trip` DROP COLUMN `first_day`,
    DROP COLUMN `last_day`,
    ADD COLUMN `firstDay` DATETIME(3) NOT NULL,
    ADD COLUMN `lastDay` DATETIME(3) NOT NULL;
