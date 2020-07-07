function head(arr) {
  return Array.isArray(arr) && arr.length>0 ? arr[0] : undefined;
  }
 
  module.exports = head;