import fs from 'fs';
import {
  getOutputDir,
  getPrefix,
  getSourceFolder,
  getStrapiVersion,
} from './arguments';
import { StrapiGenerator } from './generators/StrapiGenerator';
import { StrapiV5Generator } from './generators/StrapiV5Generator';
import { StrapiVersion } from './StrapiVersion';

const args = process.argv.slice(2);
const prefix = getPrefix(args);
const outputDir = getOutputDir(args);
const strapiVersion = getStrapiVersion(args);
const sourceFolder = getSourceFolder(args); // rename , something like commonFolderComponents

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let generator: StrapiGenerator;

switch (strapiVersion) {
  case StrapiVersion.v5:
    generator = new StrapiV5Generator({ prefix, outputDir, sourceFolder });
    break;
  case StrapiVersion.v4:
    // generator = new StrapiV4Generator({ prefix, outputDir, isV5: false });
    throw new Error('Strapi V4 is not yet supported');
    break;
  default:
    throw new Error('Unsupported Strapi version');
}

generator.generateDefaultInterfaces();
generator.generateCollections();
generator.generateComponents();
generator.generateSingleTypes();
