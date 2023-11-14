import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreUiComponent } from './core-ui.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('CoreUIComponent', () => {
  let component: CoreUiComponent;
  let fixture: ComponentFixture<CoreUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreUiComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
