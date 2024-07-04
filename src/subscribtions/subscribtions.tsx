import "./style.css";
import { SubItem } from "./components/subMain/subMain";
import { SubAdvanced } from "./components/subAdvanced/subAdvanced";
import type { ESubItem } from "./model/model";

interface ISubscriptions {
  mainList: ESubItem[];
  advancedList: ESubItem[];
}

export const Subscriptions = ({ mainList, advancedList }: ISubscriptions) => {
  return (
    <section className="subscriptions_container">
      <div className="row">
        {mainList.map((sub, i) => {
          return <SubItem props={sub} key={i} />;
        })}
      </div>
      <div className="row">
        {advancedList.map((sub, i) => {
          return <SubAdvanced props={sub} key={i} />;
        })}
      </div>
    </section>
  );
};
