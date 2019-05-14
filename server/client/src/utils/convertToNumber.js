import _ from 'lodash';

export default stringedNumber => {
  if (_.toNumber(stringedNumber) === stringedNumber) {
    return stringedNumber;
  } else {
    stringedNumber = _.toNumber(stringedNumber.replace(/[^0-9.-]+/g, ''));
    return stringedNumber;
  }
};
