
// bootstrap-select
$('select').selectpicker({
    mobile: false
  });

  function onSelect(elem) {
    console.log(elem);
      const paginationContainer = document.getElementsByClassName("pagination")[0];
      const as = paginationContainer.getElementsByTagName("a");
      Array.from(as).forEach((ele)=>ele.classList.remove("active")); // need to create an array from dom elements
      if (!elem.classList.contains("active")) {
        elem.classList.add("active");
      }
  }