var merge = function (nums1, m, nums2, n) {
   nums1.splice(m,n,...nums2)
   nums1.splice(0,0,0)
   QuickSort(nums1, 1, nums1.length - 1)
   nums1.shift()
};
var QuickSort = function (arr, low, high) {
  if (low < high) {
    let privotloc = Partition(arr, low, high);
    QuickSort(arr, low, privotloc - 1);
    QuickSort(arr, privotloc + 1, high)
  }
}
var Partition = function (arr, low, high) {
  arr[0] = arr[low]
  let privotKey = arr[low]
  while (low < high) {
    while (low < high && arr[high] >= privotKey) high--;
    arr[low] = arr[high];
    while (low < high && arr[low] <= privotKey) low++;
    arr[high] = arr[low];
  }
  arr[low] = arr[0];
  return low;
}
