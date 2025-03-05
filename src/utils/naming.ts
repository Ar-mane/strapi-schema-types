import { pascalCase } from 'change-case';
import { Config } from '../Config';

export function interfaceName(config: Config, apiFolder: string): string {
  return `${config.prefix}${pascalCase(apiFolder)}`;
}
