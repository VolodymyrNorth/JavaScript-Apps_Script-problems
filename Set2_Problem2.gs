function rowToJson() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var range = sheet.getRange("A3:E3");
  var headers = sheet.getRange("A1:D1").getValues()[0];
  var values = range.getValues()[0];
  var rowObject = {}; 

  for (var i = 0; i < headers.length; i++) {
    rowObject[headers[i]] = values[i];
  }

  var rowJson = JSON.stringify(rowObject); //a very convenient standard function
  Logger.log(rowJson);
}
