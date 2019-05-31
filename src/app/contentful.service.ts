import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'sq8q430ms1x9',
  accessToken: 'ug0npJh-GnImGSpnXP5QOdXo_Q2Ki84zAZGiXFgJfzk',

  contentTypeIds: {
    product: 'product'
  }
};

@Injectable()
export class ContentfulService {

  private cdaClient = createClient({ space: CONFIG.space, accessToken: CONFIG.accessToken});

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({content_type: CONFIG.contentTypeIds.product}
    , query)).then(res => res.items);
  }

}
