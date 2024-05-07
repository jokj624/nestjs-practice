import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BaseRepository } from '../interfaces/base-repository.interface';

export abstract class BaseAbstractRepository<T> implements BaseRepository<T> {
  protected repository: Model<T>;

  constructor(repository: Model<T>) {
    this.repository = repository;
  }

  async create(payload: Partial<T>): Promise<T> {
    return await this.repository.create(payload);
  }

  async find(query?: any): Promise<T[]> {
    return await this.repository.find(query);
  }

  async findOne<K extends keyof T>(
    query: FilterQuery<T>,
    projection?: QueryOptions,
  ): Promise<Pick<T, K>> {
    return await this.repository.findOne(query, { ...projection, _id: 0 });
  }

  async updateOne(
    query: Record<string, unknown>,
    payload: Partial<T>,
  ): Promise<unknown> {
    return await this.repository.findOneAndUpdate(query, payload);
  }

  async deleteOne(query: Record<string, unknown>): Promise<unknown> {
    return await this.repository.findOneAndDelete(query);
  }
}
