import _ from 'lodash';

export default stringedNumber => {
  stringedNumber = _.parseInt(stringedNumber.replace(/[^0-9.-]+/g, ''));
  return stringedNumber;
};
