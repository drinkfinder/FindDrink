import { TestBed } from '@angular/core/testing';

import { UserIngredientsService } from './user-ingredients.service';

describe('UserIngredientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserIngredientsService = TestBed.get(UserIngredientsService);
    expect(service).toBeTruthy();
  });
});
