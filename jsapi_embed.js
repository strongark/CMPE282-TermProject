// Initialize the viz variable
var viz;
window.onload= function() {
// When the webpage has loaded, load the viz
    var vizDiv = document.getElementById('myViz');
//     var vizURL ="https://10az.online.tableau.com/t/f22/views/SalesDashboard_0/SalesDashBoard?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no";
     var vizURL ="https://us-east-1.online.tableau.com/t/projectx/views/RockerGroup/Genderchart?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no";
     var options ={
      width: '700px',
      height: '700px',
      hideToolbar: true,
      hideTabs: true
};
 viz = new tableau.Viz(vizDiv, vizURL, options);
    };

// Switch the viz to the sheet specified
function switchView(sheetName) {
	var workbook =viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);

}

// Filter the specified dimension to the specified value(s)
function show(filterName, values) {
    var sheet =viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName,values,tableau.FilterUpdateType.REPLACE);
}

// Select the marks that have the specified value(s) for the specified dimension
function selectMarks(filterName, values) {
    var sheet =viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName,values,tableau.FilterUpdateType.REPLACE);
}
