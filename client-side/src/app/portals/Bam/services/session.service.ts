import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { BamUser } from '../models/bamuser.model';
import { Batch } from '../models/batch.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BatchType } from '../models/batchtype.model';

@Injectable()
export class SessionService {
  bamUser: BamUser;

  public selectedBatchSubject = new Subject<Batch>();

  constructor(private userService: UsersService) {
    this.bamUser = {
      'userId': 3,
      'fName': 'Ryan',
      'mName': null,
      'lName': 'Lessley',
      'email': 'rl@revature.com',
      'pwd': '1234',
      'role': 2,
      'batch': null,
      'phone': '1234567890',
      'phone2': '8675309',
      'skype': 'rl_skype',
      'pwd2': null,
      'minervaID': 9
    };
    sessionStorage.setItem('bamUser', JSON.stringify(this.bamUser));
  }

  /**
  * Puts a hard coded user into the session
  * @author James Holzer | Batch: 1712-dec10-java-steve
  * @returns
  */
  putUserInSession(): Observable<BamUser> {
    return this.userService.updateUser(this.bamUser).map(data => {
      sessionStorage.setItem('bamUser', JSON.stringify(this.bamUser));
      return data;
    });
  }

  /**
   * Returns the Bam user that is in the current session
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns BamUser
   */
  getUser(): BamUser {
    const current: BamUser = JSON.parse(sessionStorage.getItem('bamUser'));
    return current;
  }

  /**
   * Sets a batch into sessionStorage 'batch'
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns
   * @param selectedBatch: Batch
   */
  putSelectedBatchIntoSession(selectedBatch: Batch) {
    sessionStorage.setItem('batch', JSON.stringify(selectedBatch));
    this.selectedBatchSubject.next(selectedBatch);
  }

  /**
   * Gets a batch from sessionStorage 'batch'
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns Batch
   */
  getSelectedBatch(): Batch {
    return JSON.parse(sessionStorage.getItem('batch'));
  }

}
