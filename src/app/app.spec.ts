import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

describe('App', () => {
	let component: App;
	let fixture: ComponentFixture<App>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [App, MatCardModule, HeaderComponent, RouterOutlet],
		}).compileComponents();

		fixture = TestBed.createComponent(App);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should have title signal', () => {
		expect(component['title']()).toBe('ixcamper app');
	});

	it('should render header component', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('app-header')).toBeTruthy();
	});

	it('should render mat-card', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('mat-card')).toBeTruthy();
	});

	it('should render welcome card with title', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('mat-card-title')?.textContent).toContain('ixcamper app');
	});

	it('should render welcome card with subtitle', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain(
			'Welcome to Angular Material',
		);
	});

	it('should render welcome card content', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const content = compiled.querySelector('mat-card-content')?.textContent;
		expect(content).toContain('Angular Material has been successfully added to your project!');
		expect(content).toContain(
			'You can now use all Material Design components in your application.',
		);
	});

	it('should pass title to header component', async () => {
		const headerComponent = fixture.debugElement.children[0]
			.componentInstance as HeaderComponent;
		await fixture.whenStable();
		expect(headerComponent.appName()).toBe('ixcamper app');
	});

	it('should render router-outlet', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('router-outlet')).toBeTruthy();
	});

	it('should have main element', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('main')).toBeTruthy();
	});
});
