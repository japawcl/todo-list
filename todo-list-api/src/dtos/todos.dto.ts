import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsBoolean()
  public favorite: boolean;

  @IsString()
  public color: string;
}

export class UpdateTodoDto {
  @IsInt()
  public id: number;

  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsBoolean()
  public favorite: boolean;

  @IsString()
  public color: string;
}
