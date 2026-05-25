const fs = require('fs');

const file = 'c:\\PROJECT\\others\\data\\pressReleases.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace interface
content = content.replace(/dept:\s*string;/, 'dept: string[];');
content = content.replace(/url\?:\s*string;\s*\/\/ image or PDF link/, 'imageUrls?: string[];\n  pdfUrls?: string[];');

// Replace properties
content = content.replace(/dept:\s*"([^"]+)"/g, 'dept: ["$1"]');

content = content.replace(/url:\s*"([^"]*)"/g, (match, url) => {
    if (!url) {
        return 'imageUrls: [],\n    pdfUrls: []';
    }
    if (url.toLowerCase().endsWith('.pdf')) {
        return `imageUrls: [],\n    pdfUrls: ["${url}"]`;
    } else {
        return `imageUrls: ["${url}"],\n    pdfUrls: []`;
    }
});

fs.writeFileSync(file, content);
console.log("Done");