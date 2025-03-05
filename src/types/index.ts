interface StrapiSchema {
  kind: 'collectionType' | 'singleType';
  collectionName: string;
  info: {
    displayName: string;
    singularName: string;
    pluralName: string;
    description?: string;
  };
  options?: Record<string, any>;
  attributes: Record<string, Attribute>;
}

type Attribute =
  | StringAttribute
  | NumberAttribute
  | BooleanAttribute
  | DateAttribute
  | JSONAttribute
  | MediaAttribute
  | RelationAttribute
  | ComponentAttribute
  | DynamicZoneAttribute
  | CustomFieldAttribute
  | EnumerationAttribute;

interface BaseAttribute {
  required?: boolean;
  unique?: boolean;
  default?: any;
}

interface StringAttribute extends BaseAttribute {
  type: 'string' | 'text' | 'richtext' | 'email' | 'password' | 'uid';
  minLength?: number;
  maxLength?: number;
  regex?: string;
}

interface NumberAttribute extends BaseAttribute {
  type: 'integer' | 'biginteger' | 'float' | 'decimal';
  min?: string | number;
  max?: string | number;
}

interface BooleanAttribute extends BaseAttribute {
  type: 'boolean';
}

interface DateAttribute extends BaseAttribute {
  type: 'date' | 'datetime' | 'time' | 'timestamp';
}

interface JSONAttribute extends BaseAttribute {
  type: 'json';
}

interface MediaAttribute extends BaseAttribute {
  type: 'media';
  multiple?: boolean;
  allowedTypes?: string[];
}

interface RelationAttribute extends BaseAttribute {
  type: 'relation';
  relation: 'oneToOne' | 'oneToMany' | 'manyToOne' | 'manyToMany';
  target: string;
  inversedBy?: string;
  mappedBy?: string;
}

interface ComponentAttribute extends BaseAttribute {
  type: 'component';
  component: string;
  repeatable?: boolean;
}

interface DynamicZoneAttribute extends BaseAttribute {
  type: 'dynamiczone';
  components: string[];
  min?: number;
  max?: number;
}

interface CustomFieldAttribute extends BaseAttribute {
  type: 'customField';
  customField: string;
  options?: Record<string, any>;
}

interface EnumerationAttribute extends BaseAttribute {
  type: 'enumeration';
  enum: string[];
  enumName?: string;
}

export {
  StrapiSchema,
  Attribute,
  StringAttribute,
  NumberAttribute,
  BooleanAttribute,
  DateAttribute,
  JSONAttribute,
  MediaAttribute,
  RelationAttribute,
  ComponentAttribute,
  DynamicZoneAttribute,
  CustomFieldAttribute,
  EnumerationAttribute,
};
