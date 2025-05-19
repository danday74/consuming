import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ExampleSimpleComponent } from './example-simple.component'

describe('ExampleSimpleComponent', () => {
  let component: ExampleSimpleComponent
  let fixture: ComponentFixture<ExampleSimpleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSimpleComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(ExampleSimpleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
