const fs = require('fs');

const path = 'c:\\PROJECT\\others\\data\\pressReleases.ts';
let content = fs.readFileSync(path, 'utf8');

const interfacePart = content.split('export const pressReleases')[0];
const arrayString = content.substring(content.indexOf('export const pressReleases: PressRelease[] = [') + 'export const pressReleases: PressRelease[] = '.length, content.lastIndexOf('];') + 1);

let arr;
eval('arr = ' + arrayString);

let counter21 = 1;
let counter22 = 1;

arr.forEach(item => {
    if (item.date === "May 21, 2026" || item.dateValue === "2026-05-21") {
        item.id = 20260521000 + counter21;
        counter21++;
    } else if (item.date === "May 22, 2026" || item.dateValue === "2026-05-22") {
        item.id = 20260522000 + counter22;
        counter22++;
    }
});

// Remove exact duplicates if there are identical items with same title and date
let seen = new Set();
let uniqueArr = [];
arr.forEach(item => {
    let key = item.dateValue + item.title;
    if (!seen.has(key)) {
        seen.add(key);
        uniqueArr.push(item);
    }
});

// Since the array could have been re-id'd, let's recalculate IDs to be sure there are no gaps
counter21 = 1;
counter22 = 1;
uniqueArr.forEach(item => {
    if (item.date === "May 21, 2026" || item.dateValue === "2026-05-21") {
        item.id = 20260521000 + counter21;
        counter21++;
    } else if (item.date === "May 22, 2026" || item.dateValue === "2026-05-22") {
        item.id = 20260522000 + counter22;
        counter22++;
    }
});

uniqueArr.push({
    id: 20260525001,
    dept: ["Education"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity issued appointment orders to six tailoring teachers selec ted through the Teachers Recruitment Board",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity issued appointment orders to six tailoring teachers selec ted through the Teachers Recruitment Board",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_sedu.jpg"],
    pdfUrls: []
});

uniqueArr.push({
    id: 20260525002,
    dept: ["Public Works"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Public Works and Sports Development presented financial assistance to aspiring olympians and interacted with young athletes at Nehru Indoor Stadium",
    summary: "Honble Minister for Public Works and Sports Development presented financial assistance to aspiring olympians and interacted with young athletes at Nehru Indoor Stadium",
    imageUrls: [
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd1.jpg",
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd2.jpg",
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd3.jpg",
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd4.jpg",
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd5.jpg"
    ],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_080.pdf"]
});

uniqueArr.push({
    id: 20260525003,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Chief Minister directed immediate legal action and strict punishment against heinous crimes",
    summary: "Honble Chief Minister directed immediate legal action and strict punishment against heinous crimes",
    imageUrls: [
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526a.jpg",
        "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526b.jpg"
    ],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_079.pdf"]
});

const newArrayStr = '[\n  ' + uniqueArr.map(item => {
    return '{\n' + Object.keys(item).map(key => {
        let val = item[key];
        if (key === 'id' || key === 'highlight') {
            return `    ${key}: ${val}`;
        } else if (Array.isArray(val)) {
            return `    ${key}: [${val.map(v => '"' + v + '"').join(', ')}]`;
        } else {
            return `    ${key}: "${val.replace(/"/g, '\\"')}"`;
        }
    }).join(',\n') + '\n  }';
}).join(',\n  ') + '\n]';

const updatedContent = interfacePart + 'export const pressReleases: PressRelease[] = ' + newArrayStr + ';\n';
fs.writeFileSync(path, updatedContent, 'utf8');
console.log('Successfully updated pressReleases.ts');
