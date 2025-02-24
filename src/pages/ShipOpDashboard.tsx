import {
  Avatar,
  Skeleton,
  Stack,
  Tabs,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { MainSection, PageTitle } from '../layout/Sections';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { DashShip, getShipDash } from '../queries/getShipDash';
import { AppAlert } from '../components/UnderContruction';
import { GrantCard } from '../components/dashboard/GrantCard';
import { useTx } from '../hooks/useTx';
import { notifications } from '@mantine/notifications';
import { UpdateInput } from '../components/forms/UpdateInput';
import { pinJSONToIPFS } from '../utils/ipfs/pin';
import {
  ContentSchema,
  basicUpdateSchema,
} from '../components/forms/validationSchemas/updateSchemas';
import ShipAbi from '../abi/GrantShip.json';
import { Tag } from '../constants/tags';
import { Address } from 'viem';
import { ZER0_ADDRESS } from '../constants/gameSetup';
import { PortfolioReport } from '../components/dashboard/ship/PortfolioReport';
import { ReportStatus } from '../types/common';
import { getRecentPortfolioReport } from '../queries/getRecordsByTag';
import { ADDR } from '../constants/addresses';

export const ShipOpDashboard = () => {
  const { id } = useParams();

  const {
    data: shipData,
    error: shipError,
    isLoading: shipLoading,
  } = useQuery({
    queryKey: [`ship-dash-${id}`],
    queryFn: () => getShipDash(id as string),
    enabled: !!id,
  });

  const { data: recentRecord, refetch: refetchRecentRecord } = useQuery({
    queryKey: [`ship-portfolio-${id}`],
    queryFn: () =>
      getRecentPortfolioReport(
        `${Tag.ShipSubmitReport}-${ADDR.VOTE_CONTEST}-${id}`
      ),
    enabled: !!id,
  });

  const porfolioGrants = shipData?.grants
    ? shipData.grants.filter((grant) => grant.grantStatus >= 5)
    : undefined;

  const reportStatus = recentRecord ? ReportStatus.Review : ReportStatus.Submit;

  return (
    <MainSection>
      <PageTitle title="Ship Dashboard" />
      <Link
        to={`/ship/${shipData?.id}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          textDecoration: 'none',
        }}
      >
        <Avatar size={30} src={shipData?.profileMetadata.imgUrl} mr={8} />
        <Text td="none" fz="sm">
          {shipData?.name}
        </Text>
      </Link>
      <Tabs defaultValue="grants">
        <Tabs.List mb="xl" grow>
          <Tabs.Tab value="grants">Grants</Tabs.Tab>
          <Tabs.Tab value="application">Portfolio Report</Tabs.Tab>
          <Tabs.Tab value="postUpdate">Post</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="grants">
          <GrantManager
            shipData={shipData}
            shipError={shipError}
            shipLoading={shipLoading}
          />
        </Tabs.Panel>
        <Tabs.Panel value="application">
          {id && (
            <PortfolioReport
              grants={porfolioGrants}
              isLoading={shipLoading}
              error={shipError}
              shipId={id}
              reportStatus={reportStatus}
              shipHatId={shipData?.hatId}
              onReportSubmit={() => {
                refetchRecentRecord();
              }}
              reportData={recentRecord}
            />
          )}
        </Tabs.Panel>
        <Tabs.Panel value="postUpdate">
          <PostUpdatePanel ship={shipData} />
        </Tabs.Panel>
      </Tabs>
    </MainSection>
  );
};

export const GrantManager = ({
  shipData,
  shipError,
  shipLoading,
}: {
  shipData?: DashShip;
  shipError: Error | null;
  shipLoading: boolean;
}) => {
  const theme = useMantineTheme();

  if (shipLoading)
    return (
      <Stack gap={'lg'}>
        <Skeleton w={'100%'} h={228} />
        <Skeleton w={'100%'} h={228} />
        <Skeleton w={'100%'} h={228} />
        <Skeleton w={'100%'} h={228} />
      </Stack>
    );

  if (shipError)
    return (
      <AppAlert
        title="Error"
        color={theme.colors.pink[6]}
        description={shipError.message || 'Error loading ship data'}
      />
    );

  if (!shipData)
    return (
      <AppAlert
        title={'Ship Not Found'}
        description={'The ship you are looking for does not exist.'}
      />
    );

  if (shipData.grants.length === 0)
    return (
      <AppAlert
        title={'No Grants'}
        description={'There are no grants for this ship.'}
      />
    );

  return (
    <Stack gap={'lg'}>
      {shipData?.grants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} view="ship-dash" />
      ))}
    </Stack>
  );
};

const PostUpdatePanel = ({ ship }: { ship?: DashShip }) => {
  const { tx } = useTx();

  const handlePostUpdate = async (text: string, clear: () => void) => {
    if (!ship || !ship.shipContractAddress) {
      notifications.show({
        title: 'Error',
        message: 'Ship ID is missing',
        color: 'red',
      });

      return;
    }

    if (text === '' || text === null) {
      notifications.show({
        title: 'Error',
        message: 'Update text is missing',
        color: 'red',
      });

      return;
    }

    const metadata = basicUpdateSchema.safeParse({
      text,
      contentSchema: ContentSchema.BasicUpdate,
    });

    if (!metadata.success) {
      notifications.show({
        title: 'Validation Error',
        message: "Update text doesn't match the schema",
        color: 'red',
      });

      return;
    }

    const pinRes = await pinJSONToIPFS(metadata.data);

    if (typeof pinRes.IpfsHash !== 'string' && pinRes.IpfsHash[0] !== 'Q') {
      notifications.show({
        title: 'IPFS Upload Error',
        message: pinRes.IpfsHash[1],
        color: 'red',
      });
      return;
    }

    tx({
      writeContractParams: {
        abi: ShipAbi,
        functionName: 'postUpdate',
        address: ship?.shipContractAddress as Address,
        args: [Tag.ShipPostUpdate, [1n, pinRes.IpfsHash], ZER0_ADDRESS],
      },
      onComplete() {
        clear?.();
      },
    });
  };

  return (
    <UpdateInput
      imgUrl={ship?.profileMetadata.imgUrl}
      onClick={handlePostUpdate}
    />
  );
};
