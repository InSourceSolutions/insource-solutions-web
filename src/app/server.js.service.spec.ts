import { TestBed } from '@angular/core/testing';

import { Server.JsService } from './server.js.service';

describe('Server.JsService', () => {
  let service: Server.JsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Server.JsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
