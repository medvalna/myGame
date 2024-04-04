export class QuestionClass {
  constructor(
    public text: string,
    public cost: number,
    public answer: string,
    public asked: boolean,
    public theme: string,
    public uuid: string
  ) {}
}
