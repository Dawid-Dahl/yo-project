import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1601825189272 implements MigrationInterface {
	name = "initial1601825189272";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"CREATE TABLE `yo` (`id` int NOT NULL AUTO_INCREMENT, `exclamations` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB CHARSET=utf8mb4",
			undefined
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("DROP TABLE `yo`", undefined);
	}
}
