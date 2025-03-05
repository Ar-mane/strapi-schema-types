export interface IStrapiGenerator {
  generateDefaultInterfaces(): void;
  generateCollections(): void;
  generateComponents(): void;
  generateSingleTypes(): void;
  generateRoutes(): void;
}
