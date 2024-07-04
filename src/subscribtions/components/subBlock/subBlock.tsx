import "./style.css";
import type { SubData } from "@/subscribtions/model/model";

interface ISubBlock {
  props: SubData;
}

export const SubBlock = ({ props }: ISubBlock) => {
  const { title, description, price, customClass } = props;
  return (
    <div className={`block_container ${customClass}`}>
      <div className="title">{title}</div>
      <div className="description">{description.length > 200 ? description.slice(0, 200) + "..." : description}</div>
      <div className="price">{price}</div>
      {description.length > 200 && <a className="link">Learn more...</a>}
    </div>
  );
};
