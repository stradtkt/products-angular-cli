import { Injectable } from '@angular/core';
import {Category} from '../models/Category';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesCollection: AngularFirestoreCollection<Product>;
  categoryDoc: AngularFirestoreDocument<Product>;
  categories: Observable<Product[]>;
  category: Observable<Product>;
  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = this.afs.collection('categories', ref => ref.orderBy('name', 'asc'));
  }
  getCategories(): Observable<Product[]> {
    this.categories = this.categoriesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.categories;
  }
}
