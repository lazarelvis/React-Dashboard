import DBR from 'dynamsoft-javascript-barcode';
DBR.BarcodeReader.engineResourcePath =
  'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.3/dist/';
// Please visit https://www.dynamsoft.com/customer/license/trialLicense/?product=dbr&utm_source=github&package=js to get a trial license
DBR.BarcodeReader.productKeys =
  't0077xQAAAFnEEEmHMmlBSBqOAJVmwq+QEj2yOpgwgyUdH6ZjlCXl/7CGbl9cIZXqiv8lNgrOEZinJWMJu3d3sMIQE5qLhwWGIcGMBxBAKXo=';
// DBR.BarcodeReader._bUseFullFeature = true; // Control of loading min wasm or full wasm.
export default DBR;
