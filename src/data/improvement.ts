import {ImprovementCategory} from "./improvement-category";
import {ImprovementItem} from "../app/improvements/improvement-item.dto";
import {ImprovementDto} from "../service/improvement.dto";

export class Improvement {

  constructor(
    private text: string,
    private category: ImprovementCategory,
    private value: number,
    private user: string,
  ) {}

  public static fromDto(improvementDto: ImprovementDto): Improvement {
    return new Improvement(improvementDto.text, improvementDto.category, improvementDto.value, improvementDto.user);
  }

  public getValue(): number {
    return this.value;
  }

  public toItem(): ImprovementItem {
    return {
      text: this.text,
      category: this.category,
      value: this.value,
      completed: false
    }
  }
}
