import { join, parse } from 'path';
import { Config } from '../Config';
import { readDirectory, readFile, writeFile } from '../utils/fs';
import { interfaceName } from '../utils/naming';
import { v5Api } from '../utils/paths';
import { StrapiGenerator } from './StrapiGenerator';

export class StrapiV5Generator extends StrapiGenerator {
  constructor(private config: Config) {
    super(config);
  }

  generateDefaultInterfaces(): void {
    try {
      const v5Files = readDirectory(this.config.sourceFolder);
      console.log('v5Files:', v5Files);
      v5Files.forEach((file) => {
        const fileName = parse(file).name;
        console.log('fileNamesss:', fileName);
        const fileContent = readFile(join(this.config.sourceFolder, file));
        writeFile(join(this.config.outputDir, `${fileName}.ts`), fileContent);
      });
    } catch (error) {
      console.error('Error generating types from v5 folder:', error);
    }
  }
  generateCollections(): void {
    let apiFolders: string[] = [];

    apiFolders = readDirectory(v5Api).filter(
      (directory) => !directory.startsWith('.')
    );

    for (const apiFolder of apiFolders) {
      const iname = interfaceName(this.config, apiFolder);
      console.log('interfaceName:', iname);

      // const interfaceContent = createInterface(
      //   `./src/api/${apiFolder}/content-types/${apiFolder}/schema.json`,
      //   interfaceName,
      //   isV5
      // );
      // if (interfaceContent)
      //   fs.writeFileSync(`${outputDir}/${interfaceName}.ts`, interfaceContent);
    }
  }

  generateComponents(): void {
    throw new Error('Method not implemented.');
  }
  generateSingleTypes(): void {
    throw new Error('Method not implemented.');
  }
}
