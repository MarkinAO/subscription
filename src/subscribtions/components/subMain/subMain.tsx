import "./style.css";
import type { ESubItem } from "@/subscribtions/model/model";
import { SubBlock } from "../subBlock/subBlock";

interface ISubMain {
  props: ESubItem;
}

export const SubItem = ({ props }: ISubMain) => {
  const { title, description, price, type } = props;
  return <SubBlock props={{ title, description, price, customClass: type }} />;
};
