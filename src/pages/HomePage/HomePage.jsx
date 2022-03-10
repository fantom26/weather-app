// UI
import {Container, Popup} from "../../components/ui/";

// Common
import {ThisDay, ThisDayInfo, Tabs, Cards} from "../../components/common/";

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
