import {Injectable} from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  query,
  updateDoc,
  where
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ImprovementDto} from "./improvement.dto";
import {Improvement} from "../data/improvement";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImprovementService {

  private readonly collectionRef: CollectionReference;
  private templateImprovementLists: Observable<ImprovementDto[]>;
  private userRef: DocumentReference;

  constructor(firestore: Firestore) {
    this.collectionRef = collection(firestore, 'improvements');
    this.userRef = doc(firestore, 'users/timon');

    const refq = query(this.collectionRef, where('user', '==', 'timon'));
    this.templateImprovementLists = collectionData(refq) as Observable<ImprovementDto[]>;
  }

  public getImprovements(): Observable<Improvement[]> {
    return this.templateImprovementLists.pipe(
      map(list => list.map(
        improvementDto => Improvement.fromDto(improvementDto))
      )
    );
  }

  public updatePoints(points: number): void {
    updateDoc(this.userRef, {points: points})
  }
}
