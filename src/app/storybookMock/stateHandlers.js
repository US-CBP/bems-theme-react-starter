export const stateHandlers = {
  handleModifyLocalZuluToggle: ({ defns }) => payload => {
    const { localZuluToggle } = defns;
    const newDefns = Object.assign({}, { localZuluToggle: { ...localZuluToggle, payload } });
    return { defns: newDefns };
  },
  handleModifyYesNoToggle: ({ defns }) => payload => {
    const { yesNoToggle } = defns;
    const newDefns = Object.assign({}, { yesNoToggle: { ...yesNoToggle, payload } });
    return { defns: newDefns };
  },
  handleModifyBranchUnitLov: ({ defns }) => payload => {
    const { branchUnitLov } = defns;
    const newDefns = Object.assign({}, { branchUnitLov: { ...branchUnitLov, payload } });
    return { defns: newDefns };
  },
  handleModifyStandbyCb: ({ defns }) => payload => {
    const { standbyCb } = defns;
    const newDefns = Object.assign({}, { standbyCb: { ...standbyCb, payload } });
    return { defns: newDefns };
  }
};
