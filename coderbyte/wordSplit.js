function WordSplit(strArr) { 
  let dict = new Set(strArr[1].split(','));
  
  for (let prefix of dict) {
    if (strArr[0].startsWith(prefix)) {
      let suffix = strArr[0].slice(prefix.length);
      if (dict.has(suffix)) {
        return prefix + ',' + suffix;
      }
    }
  }
  return 'not possible';
}
