function addLeadIDs() {
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

























