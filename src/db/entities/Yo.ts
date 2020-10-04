import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
} from "typeorm";

@Entity()
export class Yo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: "int"})
	exclamations: number;

	@Column({type: "varchar"})
	mood: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
