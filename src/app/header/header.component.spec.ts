import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderComponent, MatToolbarModule],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have default appName', () => {
		expect(component.appName()).toBe('ixcamper');
	});

	it('should have default username', () => {
		expect(component.username()).toBe('John Doe');
	});

	it('should render appName in toolbar', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.app-name')?.textContent).toContain('ixcamper');
	});

	it('should render username in toolbar', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.username')?.textContent).toContain('John Doe');
	});

	it('should accept custom appName input', () => {
		TestBed.resetTestingModule();
		TestBed.configureTestingModule({
			imports: [HeaderComponent, MatToolbarModule],
		});
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;

		fixture.componentRef.setInput('appName', 'Custom App');
		fixture.detectChanges();

		expect(component.appName()).toBe('Custom App');
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.app-name')?.textContent).toContain('Custom App');
	});

	it('should accept custom username input', () => {
		TestBed.resetTestingModule();
		TestBed.configureTestingModule({
			imports: [HeaderComponent, MatToolbarModule],
		});
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;

		fixture.componentRef.setInput('username', 'Jane Doe');
		fixture.detectChanges();

		expect(component.username()).toBe('Jane Doe');
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.username')?.textContent).toContain('Jane Doe');
	});

	it('should have mat-toolbar element', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
	});

	it('should have spacer element for layout', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.spacer')).toBeTruthy();
	});
});
