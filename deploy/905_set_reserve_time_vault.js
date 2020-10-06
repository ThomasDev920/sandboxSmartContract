module.exports = async ({deployments}) => {
  const {read, execute} = deployments;

  const salesDistribution = await deployments.get("SalesDistribution");

  const feeTimeVaultOwner = await read("ReserveTimeVault", "owner");
  await execute(
    "ReserveTimeVault",
    {from: feeTimeVaultOwner, skipUnknownSigner: true},
    "setFeeDistributor",
    salesDistribution.address
  );
};
