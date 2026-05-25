const fs = require('fs');

const pressReleasesFile = 'c:\\PROJECT\\others\\data\\pressReleases.ts';
let content = fs.readFileSync(pressReleasesFile, 'utf8');

const may24Data = [
    {
      "title": "Honble Minister for Energy Resources and Law conducted a comprehensive inspection of the Puzhal Central Prison to review the operations and infrastructure of the Prisons Department",
      "date": "May 24 ,2026",
      "primary_link": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_077.pdf",
      "all_links": {
        "main": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_3.jpg",
        "pdfs": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_077.pdf"
        ],
        "images": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_3.jpg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_3.jpg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_2.jpg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_1.jpg"
        ]
      },
      "dept": "Electricity",
      "press_release_number": "077"
    },
    {
      "title": "Honble Minister for Hindu Religious and Charitable Endowments conducted inspection at various temples in Tiruchirappalli district",
      "date": "May 24 ,2026",
      "primary_link": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_076.pdf",
      "all_links": {
        "main": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce1.jpeg",
        "pdfs": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_076.pdf"
        ],
        "images": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce1.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce1.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce2.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce3.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce4.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce5.jpeg"
        ]
      },
      "dept": "General",
      "press_release_number": "076"
    },
    {
      "title": "The Tamil Nadu players who won the Squash World Cup called on the Honble Minister for Public Works and Sports at the Secretariat",
      "date": "May 24 ,2026",
      "primary_link": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_075.pdf",
      "all_links": {
        "main": "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd1.jpeg",
        "pdfs": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_075.pdf"
        ],
        "images": [
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd1.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd1.jpeg",
          "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd2.jpeg"
        ]
      },
      "dept": "Public Works",
      "press_release_number": "075"
    }
];

let may22DataStr = fs.readFileSync('c:\\Users\\DHANUS~1\\AppData\\Local\\Temp\\zencoder\\pasted\\files\\20260525051251-uxqunw.txt', 'utf8');

may22DataStr = may22DataStr.trim();
if (!may22DataStr.startsWith('[')) {
    may22DataStr = '[' + may22DataStr;
}
if (!may22DataStr.endsWith(']')) {
    may22DataStr = may22DataStr + ']';
}

const may22Data = JSON.parse(may22DataStr);

const allData = [...may22Data, ...may24Data];

let newEntriesStr = '';
let counterMap = {};

allData.forEach(item => {
    let dateStr = item.date.replace(/\s+/g, ' ').replace(' ,', ', '); 
    let d = new Date(dateStr);
    let dateValue = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    let dateKey = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    
    if (!counterMap[dateKey]) counterMap[dateKey] = 1;
    else counterMap[dateKey]++;
    
    let id = parseInt(dateKey + String(counterMap[dateKey]).padStart(3, '0'));
    
    let uniqueImages = [...new Set(item.all_links.images)];
    let uniquePdfs = [...new Set(item.all_links.pdfs)];
    
    let entry = `  {
    id: ${id},
    dept: ${JSON.stringify(Array.isArray(item.dept) ? item.dept : [item.dept])},
    date: "${dateStr}",
    dateValue: "${dateValue}",
    title: ${JSON.stringify(item.title)},
    summary: ${JSON.stringify(item.title)},
    imageUrls: ${JSON.stringify(uniqueImages)},
    pdfUrls: ${JSON.stringify(uniquePdfs)}
  }`;
    
    newEntriesStr += ',\n' + entry;
});

content = content.trim().replace(/}\s*\];?$/, '}');
content += newEntriesStr + '\n];\n';

fs.writeFileSync(pressReleasesFile, content);
console.log("Appended new entries");