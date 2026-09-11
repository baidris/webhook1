// GLOBE MASTER    
 var base_url = 'https://api.monday.com/v2';

//  var api_key ='eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjQ0MjgwOTc1MCwiYWFpIjoxMSwidWlkIjo0MDc5NzY3NywiaWFkIjoiMjAyNC0xMS0yOVQyMDo0MzozNS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTU1OTc4MTUsInJnbiI6ImV1YzEifQ.kDaFO4cuWLy4Q4PbCe7mLuAGvbRRZAshbvuRG-b3b6U';  

var api_key = PropertiesService.getScriptProperties().getProperty('MONDAY_API_KEY');

//var api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjcwMjI2NTQ2MCwiYWFpIjoxMSwidWlkIjoxMTU5ODk5NTIsImlhZCI6IjIwMjYtMDktMDlUMjA6MDM6MzAuODIwWiIsInBlciI6Im1lOndyaXRlIiwiYWN0aWQiOjM2ODI3NjQzLCJyZ24iOiJldWMxIn0.Y_DkbCak3Xq_FKFGW1OQW7k3rIUVKvWtWFhlezcgWuc' //    ICI LE TOKEN KEY DU ADMIN

// GLOBE MASTER    
  var brd_id_paie = "5103900660"
  var brd_id_personnel = "" 

function doPost9(challenge) {
  var payload = JSON.stringify(challenge.postData.contents);
  payload = JSON.parse(payload);
  Logger.log(payload);
  return ContentService.createTextOutput(payload)
}


function doPost(challenge) {
 
 var payload = JSON.parse(challenge.postData.contents);
 

 
 
 var pid  =    payload.event["pulseId"];
     brd_id_paie = payload.event["boardId"];


 var query = "mutation{create_item (board_id:5103900660, item_name: \"New Itemss\"){ id name }}"
  
    

 
 
// var variables ={"rowid" : pid}
 var headers = {
       'Authorization' : api_key,
       'Content-Type' : 'application/json',
         'API-Version': '2023-10'
  }
  
  var options = {
          headers : headers,
          method : 'POST',
          payload:JSON.stringify({ query: query})
  }
  var response = UrlFetchApp.fetch(base_url, options).getContentText();
  var result = JSON.parse(response);
  //let nom_groupe = result.data.items[0].group.title


 
}