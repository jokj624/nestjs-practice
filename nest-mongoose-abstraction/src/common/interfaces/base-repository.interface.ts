import { FilterQuery, QueryOptions } from 'mongoose';

export interface BaseRepository<T> {
  create(payload: Partial<T>): Promise<T>;

  find(query?: any): Promise<T[]>;

  findOne<K extends keyof T>(
    query: FilterQuery<T>,
    projection?: QueryOptions,
  ): Promise<Pick<T, K>>;

  updateOne(
    query: Record<string, unknown>,
    payload: Partial<T>,
  ): Promise<unknown>;

  deleteOne(query?: Record<string, unknown>): Promise<unknown>;
}
