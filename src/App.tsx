import { baseSubs, advancedSubs } from "@/subscribtions/mockData";
import { Subscriptions } from "./subscribtions/subscribtions";

function App() {
  return (
    <Subscriptions mainList={[...baseSubs]} advancedList={[...advancedSubs]} />
  );
}

export default App;
