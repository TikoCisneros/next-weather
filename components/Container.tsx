import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Paper p='lg' withBorder>
      {children}
    </Paper>
  );
};

export default Container;
