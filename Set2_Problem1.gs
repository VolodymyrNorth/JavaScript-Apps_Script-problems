function swapRowsAndColumns() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var range = sheet.getRange("A1:H8");
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  var values = range.getValues();
  var newValues = [];

  for (var i = 0; i < numCols; i++) {
    newValues[i] = [];
    for (var j = 0; j < numRows; j++) {
      newValues[i][j] = values[j][i];
      range.getCell(j+1, i+1).setValue(""); // erase original value from cell
    }
  }

  sheet.getRange(range.getColumn(), range.getRow(), numCols, numRows).setValues(newValues);
}
