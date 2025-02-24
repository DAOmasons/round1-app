import {
  Affix,
  Box,
  Group,
  Paper,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { useVoting } from '../../hooks/useVoting';
import { VotingFormValues } from '../../pages/Vote';
import { useMobile } from '../../hooks/useBreakpoint';
import { formatEther } from 'viem';
import { VotingWeightProgress } from './VotingWeightProgress';

export const VoteAffix = ({ formValues }: { formValues: VotingFormValues }) => {
  const { userTokenData, tokenData, contest } = useVoting();
  const theme = useMantineTheme();

  const isMobile = useMobile();

  const shipPercs = formValues.ships.map((s) => s.shipPerc);

  const tooltipText = contest?.isSBTVoting
    ? `${tokenData.tokenSymbol} is a community voting SBT airdropped to help review GrantShips! Your voting power is equal to the amount of ${tokenData.tokenSymbol} that you hold.`
    : `Your voting power is equal to the amount of{' '}
                    ${tokenData.tokenSymbol} delegated to your address before
                    snapshot`;

  return (
    <Affix bottom={isMobile ? 54 : 32} right={isMobile ? 0 : 30}>
      <Paper bg={theme.colors.dark[6]} py={'sm'} px={'xl'}>
        <Group>
          <VotingWeightProgress
            shipVotePercs={{
              ship1: shipPercs[0] || 0,
              ship2: shipPercs[1] || 0,
              ship3: shipPercs[2] || 0,
            }}
          />
          <Text>
            Your Voting Power:{' '}
            <Tooltip
              offset={24}
              label={
                <Box w={200} p={'sm'}>
                  <Text className="ws-pre-wrap" fz="sm">
                    {tooltipText}
                  </Text>
                </Box>
              }
            >
              <Text c={theme.colors.blue[3]} component="span">
                {Number(
                  formatEther(userTokenData.totalUserTokenBalance)
                ).toFixed(2)}{' '}
                {tokenData.tokenSymbol}{' '}
              </Text>
            </Tooltip>
          </Text>
        </Group>
      </Paper>
    </Affix>
  );
};
