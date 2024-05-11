import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPlaylistComponent } from './session-playlist.component';

describe('SessionPlaylistComponent', () => {
  let component: SessionPlaylistComponent;
  let fixture: ComponentFixture<SessionPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionPlaylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
