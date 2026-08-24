const fs = require('fs');
const path = require('path');

const dirs = [
    'src',
    'src/company',
    'src/Models',
    'src/Ex'
];

function cleanupUnused(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove `import getCurrentDate from '../js/Date';` or similar
    content = content.replace(/import getCurrentDate from ['"].*?['"];?\n?/g, '');
    
    // Remove `const date = getCurrentDate();`
    content = content.replace(/const date = getCurrentDate\(\);\n?/g, '');

    // Remove unused link if it's there
    // We already added Navbar/Footer which use Links, so we might just leave other imports.

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Cleaned up ${filePath}`);
    }
}

dirs.forEach(dir => {
    const fullDir = path.join(__dirname, dir);
    if (!fs.existsSync(fullDir)) return;

    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            if (!dir.includes('components')) {
                cleanupUnused(path.join(fullDir, file));
            }
        }
    });
});
