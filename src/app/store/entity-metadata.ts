import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Issue: {
    filterFn: (issues, text) => {
      if (text) {
        const lowercased = text.toLowerCase();
        return issues.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(lowercased) ||
            description.toLowerCase().includes(lowercased)
        );
      } else {
        return issues;
      }
    }
  },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  entityHttpResourceUrls: {
    Issue: {
      collectionResourceUrl: '/api/issues/',
      entityResourceUrl: '/api/issues/'
    }
  }
}
