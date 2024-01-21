import '@mantine/core/styles.css';
import {
  Button,
  Container,
  Flex,
  Grid,
  MantineProvider,
  NavLink,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { theme } from './theme';
import { useState } from 'react';
import { ADDR } from './constants/addresses';
import { pinJSONToIPFS } from './utils/ipfs/pin';
import { DesktopNav } from './layout/DesktopNav/DesktopNav';

export default function App() {
  return (
    <Layout>
      <Grid overflow="hidden">
        <Grid.Col span={6}>
          <TestCard
            title="Register GameManager Pool"
            description="This function sets up the GameManager Pool. It should be called once."
            onClick={() => {}}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TestCard
            title="Pin Test Data"
            description="This function pins test data to IPFS."
            onClick={() => pinJSONToIPFS({})}
          />
        </Grid.Col>
      </Grid>
    </Layout>
  );
}

export const TestCard = ({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => any | Promise<any> | PromiseLike<any>;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await onClick();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Paper p={'xl'}>
      <Text size="xl" fw={500} mb="md">
        {title}
        {ADDR.ALLO}
      </Text>
      <Text>{description}</Text>
      <Flex mt="xl">
        <Button ml="auto" onClick={handleClick}>
          Test
        </Button>
      </Flex>
    </Paper>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Container size={1200}>
        <Flex>
          <DesktopNav />
          {children}
        </Flex>
      </Container>
    </MantineProvider>
  );
};
