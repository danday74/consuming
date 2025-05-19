import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ExampleEnhancedComponent } from './example-enhanced.component'

describe('ExampleEnhancedComponent', () => {
  let component: ExampleEnhancedComponent
  let fixture: ComponentFixture<ExampleEnhancedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleEnhancedComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(ExampleEnhancedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
