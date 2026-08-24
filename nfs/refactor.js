const fs = require('fs');
const path = require('path');

const dirs = [
    'src',
    'src/company',
    'src/Models',
    'src/Ex'
];

function refactorFile(filePath, level) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's already refactored
    if (content.includes('<Navbar />') && content.includes('<Footer />')) {
        return;
    }

    const navImport = level === 0 ? "import Navbar from './components/Navbar';" : "import Navbar from '../components/Navbar';";
    const footerImport = level === 0 ? "import Footer from './components/Footer';" : "import Footer from '../components/Footer';";

    // 1. Add imports if not present
    if (!content.includes('import Navbar')) {
        // Insert after the last import
        const importMatch = content.match(/import\s+.*?;?\n/g);
        if (importMatch) {
            const lastImport = importMatch[importMatch.length - 1];
            content = content.replace(lastImport, `${lastImport}${navImport}\n${footerImport}\n`);
        } else {
            content = `${navImport}\n${footerImport}\n` + content;
        }
    }

    // 2. Replace Header
    const headerRegex = /<header id="header">[\s\S]*?<\/header>/;
    content = content.replace(headerRegex, '<Navbar />');

    // 3. Replace Footer(s)
    // There are usually two footers in a row in the original code
    const footerRegex = /<footer className="footer">[\s\S]*?<\/footer>\s*<footer className="footer">[\s\S]*?<\/footer>/;
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, '<Footer />');
    } else {
        // Fallback for single footer
        const singleFooterRegex = /<footer className="footer">[\s\S]*?<\/footer>/;
        content = content.replace(singleFooterRegex, '<Footer />');
    }

    // 4. Clean up multiple <br /> tags used for spacing
    content = content.replace(/(<br\s*\/?>\s*){2,}/g, '');

    // Clean up single <br /> around hr tags or before divs
    content = content.replace(/<br\s*\/?>\s*<hr\s*\/?>/g, '<hr />');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored ${filePath}`);
}

dirs.forEach(dir => {
    const fullDir = path.join(__dirname, dir);
    if (!fs.existsSync(fullDir)) return;

    const files = fs.readdirSync(fullDir);
    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            const level = dir === 'src' ? 0 : 1;
            // Don't refactor components themselves!
            if (!dir.includes('components')) {
                refactorFile(path.join(fullDir, file), level);
            }
        }
    });
});
