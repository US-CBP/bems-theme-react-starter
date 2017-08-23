export const stateHandlers = {
  handleChangeLocalZulu: ({ defns }) => payload => {
    const { localZulu } = defns;
    const newDefns = Object.assign({}, { localZulu: { ...localZulu, payload } });
    return { defns: newDefns };
  },
  handleChangeYesNo: ({ defns }) => payload => {
    const { yesNo } = defns;
    const newDefns = Object.assign({}, { yesNo: { ...yesNo, payload } });
    return { defns: newDefns };
  }
};
