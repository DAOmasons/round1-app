import { Avatar, Group, MantineSize, StyleProp, Text } from '@mantine/core';
import React, { ComponentProps } from 'react';
import { Address } from 'viem';
import { useEnsAvatar, useEnsName } from 'wagmi';
import { ensConfig } from '../utils/config';
import { mainnet } from 'viem/chains';
import { normalize } from 'path';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

export const AddressAvatar = ({
  address,
  size = 28,
  fz,
  displayText = true,
  canCopy,
}: {
  address: Address;
  size?: MantineSize | number;
  fz?: StyleProp<number | MantineSize>;
  displayText?: boolean;
  hideText?: boolean;
  canCopy?: boolean;
}) => {
  const { data: ensName } = useEnsName({
    address,
    config: ensConfig,
    chainId: mainnet.id,
  });

  const { copy } = useClipboard();

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
    config: ensConfig,
    chainId: mainnet.id,
  });

  const name = ensName || address.slice(0, 6) + '...' + address.slice(-4);
  const imgUrl = ensAvatar || `https://effigy.im/a/${address}.svg`;

  return (
    <Group
      style={{
        cursor: canCopy ? 'pointer' : 'default',
      }}
      onClick={() => {
        if (canCopy) {
          copy(address);
          notifications.show({
            title: 'Address Copied',
            message: `Address: ${address} has been copied to clipboard`,
          });
        }
      }}
    >
      <Avatar src={imgUrl} size={size} />
      {displayText && <Text fz={fz}>{name}</Text>}
    </Group>
  );
};

export const AddressAvatarGroup = ({
  avatarProps,
  addresses,
}: {
  avatarProps?: ComponentProps<typeof Avatar>;
  addresses: string[];
}) => {
  return (
    <Avatar.Group>
      {addresses.map((address) => (
        <AvatarGroupItem
          key={address}
          address={address}
          avatarProps={avatarProps}
        />
      ))}
    </Avatar.Group>
  );
};

export const AvatarGroupItem = ({
  address,
  avatarProps,
}: {
  address: string;
  avatarProps?: ComponentProps<typeof Avatar>;
}) => {
  const { data: ensName } = useEnsName({
    address: address as Address,
    config: ensConfig,
    chainId: mainnet.id,
  });

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName ? normalize(ensName) : undefined,
    config: ensConfig,
    chainId: mainnet.id,
  });

  const imgUrl = ensAvatar || `https://effigy.im/a/${address}.svg`;

  return <Avatar src={imgUrl} {...(avatarProps || {})} />;
};
