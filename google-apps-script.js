/**
 * Quick Snatch – Registration Web App
 * Deployment Version 2 compatible
 */

function doPost(e) {
  try {
    // HARD BIND TO SHEET (REQUIRED)
    var sheet = SpreadsheetApp
      .openById("1THFI8cnYA9sd0KR-oxbSNyH1J_v8CaVvyZmn5n6TUfs")
      .getSheetByName("Sheet1");

    // PARSE BODY (JSON OR FORM)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (_) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    // CREATE HEADER ONCE
    if (sheet.getLastRow() < 1) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "College",
        "Category"
      ]);
    }

    // WRITE DATA
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.college || "",
      data.category || ""
    ]);

    // RESPONSE
    return ContentService
      .createTextOutput(
        JSON.stringify({ status: "success" })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(
        JSON.stringify({ status: "error", message: err.toString() })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
