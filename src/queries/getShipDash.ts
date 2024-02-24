import {
  GrantDashFragment,
  ShipDashFragment,
  getBuiltGraphSDK,
} from '../.graphclient';
import {
  ApplicationMetadata,
  DashGrant,
  ProjectMetadata,
  resolveGrantApplicationData,
  resolveProjectMetadata,
  resolveShipApprovalReason,
} from '../resolvers/grantResolvers';

export type DashShip = ShipDashFragment & {
  grants: DashGrant[];
};

const resolveGrants = async (grants: GrantDashFragment[]) => {
  const resolvedGrants = await Promise.all(
    grants.map(async (grant) => {
      const [profileMetadata, applicationData, shipApprovalReason] =
        await Promise.all([
          resolveProjectMetadata(grant?.projectId?.metadata?.pointer),
          resolveGrantApplicationData(grant.grantApplicationBytes),
          resolveShipApprovalReason(grant.shipApprovalReason?.pointer),
        ]);

      return {
        ...grant,
        projectMetadata: profileMetadata,
        applicationData,
        shipApprovalReason: shipApprovalReason
          ? (shipApprovalReason.reason as string)
          : null,
      };
    })
  );

  return resolvedGrants;
};

export const getShipDash = async (shipId: string): Promise<DashShip> => {
  const { getShipDash } = getBuiltGraphSDK();

  const res = await getShipDash({ id: shipId });

  if (!res.grantShip) {
    throw new Error('No grant ship found');
  }

  const unpackedGrantData = await resolveGrants(res.grantShip.grants);

  return { ...res.grantShip, grants: unpackedGrantData } as DashShip;
};
