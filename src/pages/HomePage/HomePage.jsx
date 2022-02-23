import {Container} from "../../components/ui/Container/Container";
import {ThisDay} from "../../components/common/ThisDay/ThisDay";
import {ThisDayInfo} from "../../components/common/ThisDayInfo/ThisDayInfo";
import {Popup} from "../../components/ui/Popup/Popup";
import {Tabs} from "../../components/common/Tabs/Tabs";
import {Cards} from "../../components/common/Cards/Cards";

export const HomePage = () => {

  return (
    <main className="home">
      <Container>
        <div className="home__wrapper">
          <ThisDay/>
          <ThisDayInfo/>
        </div>
        <Tabs/>
        <Cards/>
        {/*<Popup/>*/}
      </Container>
    </main>
  );
}
