/**
 * County Island Community: website form handler.
 *
 * Paste this into Extensions > Apps Script on the CIC Google Sheet, then
 * Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Each website form (Join, Contact, Newsletter) gets its own tab, created on first use.
 * See docs/forms-setup.md.
 */

// Comma-separated addresses that get an email for each submission. Set to '' to turn off.
var NOTIFY_EMAIL = 'countyislandcommunity@gmail.com';

// Website form name -> sheet tab name.
var TABS = { join: 'Join', contact: 'Contact', newsletter: 'Newsletter' };

function doPost(e) {
  var params = (e && e.parameters) || {};
  var form = first(params._form);
  var tabName = TABS[form];

  // Unknown form or honeypot filled in (bots): accept quietly, store nothing.
  if (!tabName || first(params.website)) return done();

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = getTab(tabName);
    var fields = Object.keys(params).filter(function (k) { return k.charAt(0) !== '_' && k !== 'website'; });
    var headers = ensureHeaders(sheet, ['Submitted'].concat(fields));
    var row = headers.map(function (h) {
      if (h === 'Submitted') return new Date();
      return clean(params[h] ? params[h].join(', ') : '');
    });
    sheet.appendRow(row);

    if (NOTIFY_EMAIL) {
      var body = headers.map(function (h, i) { return h + ': ' + row[i]; }).join('\n');
      var mail = { to: NOTIFY_EMAIL, subject: 'New CIC website ' + tabName + ' submission', body: body };
      // Hitting Reply answers the person who filled in the form.
      var from = first(params.email);
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) mail.replyTo = from;
      MailApp.sendEmail(mail);
    }
  } finally {
    lock.releaseLock();
  }
  return done();
}

// Lets you check the deployment URL in a browser.
function doGet() {
  return ContentService.createTextOutput('CIC form handler is running.');
}

function getTab(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

// Header row grows when the website adds a field; existing columns keep their place.
function ensureHeaders(sheet, wanted) {
  var lastCol = sheet.getLastColumn();
  var headers = lastCol ? sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String) : [];
  wanted.forEach(function (h) { if (headers.indexOf(h) === -1) headers.push(h); });
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  return headers;
}

function first(v) { return v && v.length ? String(v[0]) : ''; }

// Stop values starting with = + - @ from running as spreadsheet formulas.
function clean(v) {
  v = String(v).slice(0, 5000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function done() {
  return HtmlService.createHtmlOutput(
    '<p style="font-family:sans-serif">Thanks! Your form was received. <a href="https://www.countyislandcommunity.com">Back to the site</a></p>'
  );
}
