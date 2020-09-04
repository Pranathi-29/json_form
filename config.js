var bf = brutusin["json-forms"].create({
    "$schema": "http://json-schema.org/draft-03/schema#",
    "type":"object",
  "properties":{
    "tenantId":{"type":"string",
    "enum":["pg"]
  },
  "moduleName":{"type":"string",
  "enum":["TradeLicense"]
},
  "Rebate":{"type":"array",
    "items":{
      "type":"object",
      "properties":{
        "rate":{"type":"number",
        "enum":[10]
      },
        "maxAmount":{"type":"string",
        "enum":[null]
      },
        "flatAmount":{"type":"number",
        "enum":[0.0]},
        "fromFY":{"type":"string",
        "enum":["2018-19","2019-20","2020-21"]},
        "endingDay":{"type":"string",
        "enum":["31/03"]}
      }
    }

  }

  }
  });
  var container = document.getElementById('container');
  bf.render(container);