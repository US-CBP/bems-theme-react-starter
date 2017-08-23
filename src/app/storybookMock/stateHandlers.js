export const stateHandlers = {
  handleChangeLocalZulu: ({ defns }) => payload => {
    console.log('handleChangeLocalZulu defns=', defns);
    const { localZulu } = defns;
    const newDefns = Object.assign({}, defns, { localZulu: { ...localZulu, payload } });
    return { defns: newDefns };
  },
  handleChangeYesNo: ({ yesNoValue }) => yesNoValue => ({
    yesNoValue
  })
};
