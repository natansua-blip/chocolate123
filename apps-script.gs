// Google Sheet มี 2 แท็บ:
// Products: sku | name | price | image | stock   (image เช่น images/dark70.jpg หรือ URL raw ของ GitHub)
// Orders  : timestamp | order_id | name | phone | address | zip | sku | product | qty | total | status
const ADMIN_KEY = "เปลี่ยนรหัสนี้";
const rows_ = n => { const v = SpreadsheetApp.getActive().getSheetByName(n).getDataRange().getValues();
  const h = v.shift(); return v.map(r => Object.fromEntries(h.map((k,i)=>[k,r[i]]))); };
const json_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);

function doGet(e){
  const a = e.parameter.action;
  if (a === "products") return json_(rows_("Products"));
  if (a === "orders" && e.parameter.key === ADMIN_KEY) return json_(rows_("Orders"));
  return json_({error:"unauthorized"});
}
function doPost(e){
  const o = JSON.parse(e.postData.contents);
  const sh = SpreadsheetApp.getActive().getSheetByName("Orders");
  o.lines.forEach(l => sh.appendRow([new Date(), o.order_id, o.name, "'"+o.phone, o.address, "'"+o.zip,
    l.sku, l.product, l.qty, o.total, "new"]));
  return json_({ok:true, order_id:o.order_id});
}
