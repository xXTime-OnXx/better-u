import {ImprovementCategory} from "../data/improvement-category";

export interface ImprovementDto {
  text: string;
  category: ImprovementCategory;
  value: number;
  user: string;
}
