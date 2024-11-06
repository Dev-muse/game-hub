import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>

      <GridItem area={'aside'} hideBelow={'lg'}>
        Aside
      </GridItem>

      <GridItem area={'main'}>main</GridItem>
    </Grid>
  );
};

export default App;
