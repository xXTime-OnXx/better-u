import {ImprovementCategory} from "../../data/improvement-category";

export interface ImprovementItem {
  text: string;
  category: ImprovementCategory;
  value: number;
  completed: boolean;
}
