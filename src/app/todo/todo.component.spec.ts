import { TestBed, async } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoComponent
      ],
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a newTodo todo`, async(() => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  }));

  it('should display "Todos" in h1 tag', async(() => {
    const fixture = TestBed.createComponent(TodoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));
});
