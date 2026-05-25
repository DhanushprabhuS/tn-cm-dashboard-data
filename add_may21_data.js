const fs = require('fs');

const pressReleasesFile = 'c:\\PROJECT\\others\\data\\pressReleases.ts';
let content = fs.readFileSync(pressReleasesFile, 'utf8');

const may21DataStr = fs.readFileSync('c:\\Users\\DHANUS~1\\AppData\\Local\\Temp\\zencoder\\pasted\\files\\20260525054044-t7v0sb.txt', 'utf8');
const may21Data = JSON.parse(may21DataStr).press_releases;

let newEntriesStr = '';
let counterMap = {};

may21Data.forEach(item => {
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
console.log("Appended new entries for May 21");