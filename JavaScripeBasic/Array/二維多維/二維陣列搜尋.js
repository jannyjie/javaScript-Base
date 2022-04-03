var arr =
[{Key: "TEMP01", Type: "TEMP", TypeName: "溫度", Name: "0-9度"},
{Key: "TEMP02", Type: "TEMP", TypeName: "溫度", Name: "10-19度"},
{Key: "TEMP03", Type: "TEMP", TypeName: "溫度", Name: "20-29度"},
{Key: "WET01", Type: "WET", TypeName: "濕度", Name: "20%"},
{Key: "WET02", Type: "WET", TypeName: "濕度", Name: "50%"},
{Key: "WET03", Type: "WET", TypeName: "濕度", Name: "80%"}]

document.write(JSON.stringify(arr.map((el) => [el.Type, el.Name]).flat()))

// ["TEMP","0-9度","TEMP","10-19度","TEMP","20-29度","WET","20%","WET","50%","WET","80%"]