// init Isotope
var $grid = $(".grid").isotope({
	itemSelector: ".element-item",
	layoutMode: "fitRows",
});
// filter functions
var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function () {
		var number = $(this).find(".number").text();
		return parseInt(number, 10) > 50;
	},
	// show if name ends with -ium
	ium: function () {
		var name = $(this).find(".name").text();
		return name.match(/ium$/);
	},
};

// bind filter on radio button click
$(".filters").on("click", "input", function () {
	// get filter value from input value
	var filterValue = this.value;
	// use filterFn if matches value
	filterValue = filterFns[filterValue] || filterValue;
	$grid.isotope({ filter: filterValue });
});
