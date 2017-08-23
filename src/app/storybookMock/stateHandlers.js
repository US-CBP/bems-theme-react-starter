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
  handleModifyTitle: ({ defns }) => payload => {
    const { title } = defns;
    const newDefns = Object.assign({}, { title: { ...title, payload } });
    return { defns: newDefns };
  },
  handleModifyRemarks: ({ defns }) => payload => {
    const { remarks } = defns;
    const newDefns = Object.assign({}, { remarks: { ...remarks, payload } });
    return { defns: newDefns };
  },
  handleModifyStandbyCb: ({ defns }) => payload => {
    const { standbyCb } = defns;
    const newDefns = Object.assign({}, { standbyCb: { ...standbyCb, payload } });
    return { defns: newDefns };
  }
};
