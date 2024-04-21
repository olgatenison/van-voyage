import { Hero, Logo, RedbuttonHome } from './HomeStyled';

const Home = () => {
  return (
    <>
      <Hero>
        <div>
          <Logo>Van Voyage</Logo>
          <p>
            We started this journey years ago. Nothing is impossible for us,
            every new challenge helps us to improve day by day to offer the best
            to our customers and to be demanding of ourselves.
          </p>
          <RedbuttonHome to="/catalog">Start your journey!</RedbuttonHome>
        </div>
      </Hero>
    </>
  );
};

export default Home;
