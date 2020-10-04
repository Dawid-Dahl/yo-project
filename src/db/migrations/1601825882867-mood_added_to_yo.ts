import {MigrationInterface, QueryRunner} from "typeorm";

export class moodAddedToYo1601825882867 implements MigrationInterface {
    name = 'moodAddedToYo1601825882867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `yo` ADD `mood` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `yo` DROP COLUMN `mood`", undefined);
    }

}
