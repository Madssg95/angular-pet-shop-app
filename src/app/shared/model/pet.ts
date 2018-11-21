export class Pet {
  id: number;
  name: string;
  type: string;
  birthday?: Date;
  soldDate?: Date;
  color?: string;
  owner?: string;
  price?: number;
  pets?: Pet[];
}
