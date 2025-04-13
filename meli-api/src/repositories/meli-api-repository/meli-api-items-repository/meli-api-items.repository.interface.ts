export interface MeliApiItemsRepositoryInterface {
  searchItems(query: string): Promise<any>;
  getItemById(id: string): Promise<any>;
  getItemDescription(id: string): Promise<any>;
}
