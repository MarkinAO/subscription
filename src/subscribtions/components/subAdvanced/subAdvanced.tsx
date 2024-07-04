import "./style.css";
import type { ESubItem } from "@/subscribtions/model/model";
import { SubBlock } from "../subBlock/subBlock";

interface ISubAdvanced {
  props: ESubItem;
}

export const SubAdvanced = ({ props }: ISubAdvanced) => {
  const { title, price, type } = props;
  return <SubBlock props={{ title, description: "", price, customClass: type }} />;
};
