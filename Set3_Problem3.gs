function sortSheetByBookedAndColumn3(sheetName) {
  // Get the sheet by name
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Input");
  
  // Get the range of data in the sheet starting from row 2
  var range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());

  // Sort the range by column 4 in descending order (booked items first), then by column 3
  range.sort([{column: 4, ascending: true}, {column: 3, ascending: true}]);
}

function addLeadIDs() {

  sortSheetByBookedAndColumn3("Input");

  var spreadsheet = SpreadsheetApp.getActive();
  var sourceSheet = spreadsheet.getSheetByName("Input"); 
  var outputSheet = spreadsheet.getSheetByName("Output"); 
  
  var range = "A1:D13"; 
  
  var data = sourceSheet.getRange(range).getValues(); 
  var result = [];
  
  for (var i = 0; i < data.length; i++) {
    var LeadID = data[i][0]; 
    var AnalyticsID = data[i][1]; 
    
    
    if (AnalyticsID) 
    {
      if (!result[AnalyticsID]) 
      {
        result[AnalyticsID] = "[";
      }
      
      result[AnalyticsID] += LeadID + ", ";
    }

  }

  
  var output = [];
  for (var AnalyticsID in result) {
    output.push([AnalyticsID, result[AnalyticsID]]);
  }
  
  outputSheet.clearContents(); 
  outputSheet.getRange(1, 1, output.length, 2).setValues(output); 

 var newData = outputSheet.getRange(range).getValues(); 

  outputSheet.getRange('B1').setValue("LeadID");

  for(var i = 2; i < newData.length - 1; i++) {
      var cell = "B" + i; 
      Logger.log(cell);
      var temp = outputSheet.getRange(cell).getValue();
      temp = temp.substring(0, temp.length-2);
      Logger.log(temp);
      temp += "]";

      outputSheet.getRange(cell).setValue(temp);
  }
}
