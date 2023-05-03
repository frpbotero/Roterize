import { productsType } from "../../types/types";
export function CardProduct({ name, description }: productsType) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
