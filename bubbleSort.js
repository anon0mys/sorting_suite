const bubbleSort = (list) => {
  let swapped = false;
  for (var i = 0; i < list.length; i++) {
    if(list[i] > list[i + 1]) {
      var num = list[i + 1]
      list[i + 1] = list[i]
      list[i] = num
      swapped = true;
    }
  }
  if(swapped) {
    bubbleSort(list);
  }
  return list;
};

module.exports = bubbleSort
