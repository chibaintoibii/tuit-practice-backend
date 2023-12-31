import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Enrollment} from "src/enrollments/models/enrollment.model";
import {ReportStatus} from "src/shared/enums/report-status.enum";

@Table({
  tableName: "reports",
  timestamps: true,
})
export class Report extends Model<Report> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'report_id',
  })
  id: number;

  @ForeignKey(() => Enrollment)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'sender_id',
  })
  senderId: number;

  @BelongsTo(() => Enrollment)
  sender: Enrollment;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  rating: number;

  @Column({
    type: DataType.ENUM(...Object.values(ReportStatus)),
    allowNull: false,
    defaultValue: ReportStatus.HIDDEN
  })
  status: ReportStatus
}