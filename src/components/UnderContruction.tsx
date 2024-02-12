import {
  Box,
  Group,
  Text,
  Alert,
  StyleProp,
  DefaultMantineColor,
} from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import React from 'react';

type AppAlertProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  color?: StyleProp<DefaultMantineColor>;
};

export const AppAlert = ({
  title,
  description,
  icon = <IconBell size={24} />,
  color,
}: AppAlertProps) => {
  return (
    <Alert mt="xl" mb={56} c={color}>
      <Group>
        {icon}
        <Box>
          <Text mb={2}>{title}</Text>
          {description && (
            <Text size="xs" opacity={0.8}>
              {description}
            </Text>
          )}
        </Box>
      </Group>
    </Alert>
  );
};
