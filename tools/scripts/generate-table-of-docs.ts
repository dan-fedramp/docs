import * as fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';

interface DocInfo {
  name: string;
  short_name: string;
  current_release: string;
  types: string[];
  releases: Array<{
    id?: string;
    published_date: string;
    description: string;
  }>;
}

interface JsonContent {
  info: DocInfo;
}

async function generateDocsTable(): Promise<void> {
  try {
    // Find all FRMR*.json files in root directory
    const files = await glob('../FRMR*.json');
    
    // Table header
    let markdown = `| Markdown | PDF | Description | Version | Published Date |\n`;
    markdown += `|-----------|---|-------------|---------|----------------|\n`;
    
    for (const file of files) {
      const jsonContent: JsonContent = await fs.readJSON(file);
      const { info } = jsonContent;
      
      if (!info || !info.releases || !info.releases[0]) {
        console.warn(`Warning: Missing required info in ${file}`);
        continue;
      }
      
      const baseName = path.basename(file, '.json');
      const markdownLink = `https://github.com/FedRAMP/docs/tree/main/markdown/${baseName}.md`;
      const pdfLink = `https://github.com/FedRAMP/docs/blob/main/pdf/${baseName}.pdf`;
      
      // Build table row with linked materials
      const row = [
        `[${info.name} (${info.short_name})](${markdownLink})`,
        `[[PDF]](${ pdfLink })`,
        info.releases[0].description || 'N/A',
        info.releases[0].id || info.current_release || 'N/A',
        info.releases[0].published_date || 'N/A'
      ].map(cell => cell.replace(/\|/g, '\\|')); // Escape any pipe characters
      
      markdown += `| ${row.join(' | ')} |\n`;
    }
    
    // Output to console only
    console.log(markdown);
    
  } catch (error) {
    console.error('Error generating docs table:', error);
  }
}

// Execute the function
generateDocsTable();