import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostagemComponent } from './add-postagem.component';

describe('AddPostagemComponent', () => {
  let component: AddPostagemComponent;
  let fixture: ComponentFixture<AddPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
