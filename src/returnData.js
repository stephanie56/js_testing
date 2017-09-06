function returnData (data) {
  if (typeof data === 'object') {
    return Object.assign({}, data);
  }
  return data;
}

export default returnData;
