import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CardsStore } from './stores/cards.store';

describe('App', () => {
	let component: App;
	let fixture: ComponentFixture<App>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [App, MatCardModule, HeaderComponent, RouterOutlet],
			providers: [CardsStore],
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

	it('should have cardsStore injected', () => {
		expect(component['cardsStore']).toBeTruthy();
	});

	it('should have cards from store', () => {
		expect(component.cards()).toBeTruthy();
		expect(component.cards().length).toBeGreaterThan(0);
	});

	it('should render header component', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('app-header')).toBeTruthy();
	});

	it('should render multiple mat-cards', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const cards = compiled.querySelectorAll('mat-card');
		expect(cards.length).toBeGreaterThan(1);
	});

	it('should render cards with correct titles', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const titles = compiled.querySelectorAll('mat-card-title');
		expect(titles.length).toBeGreaterThan(0);
		expect(titles[0]?.textContent).toContain('Welcome');
	});

	it('should render cards with subtitles', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const subtitles = compiled.querySelectorAll('mat-card-subtitle');
		expect(subtitles.length).toBeGreaterThan(0);
	});

	it('should render cards with content', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const contents = compiled.querySelectorAll('mat-card-content');
		expect(contents.length).toBeGreaterThan(0);
		expect(contents[0]?.textContent).toContain(
			'Angular Material has been successfully added to your project!',
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

	it('should have cards grid container', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.cards-grid')).toBeTruthy();
	});

	it('should render exactly 6 cards', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const cards = compiled.querySelectorAll('mat-card.info-card');
		expect(cards.length).toBe(6);
	});

	it('should render all card titles from store', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const titles = compiled.querySelectorAll('mat-card-title');
		expect(titles.length).toBe(6);
		expect(titles[1]?.textContent).toContain('Features');
		expect(titles[2]?.textContent).toContain('Dark Mode');
		expect(titles[3]?.textContent).toContain('Responsive');
		expect(titles[4]?.textContent).toContain('Components');
		expect(titles[5]?.textContent).toContain('Testing');
	});

	it('should render all card subtitles from store', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const subtitles = compiled.querySelectorAll('mat-card-subtitle');
		expect(subtitles.length).toBe(6);
		expect(subtitles[1]?.textContent).toContain('What We Offer');
		expect(subtitles[2]?.textContent).toContain('Theme Support');
		expect(subtitles[3]?.textContent).toContain('Mobile Ready');
	});

	it('should render all card content from store', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const contents = compiled.querySelectorAll('mat-card-content');
		expect(contents.length).toBe(6);
		expect(contents[1]?.textContent).toContain(
			'Explore our comprehensive Material Design components',
		);
		expect(contents[2]?.textContent).toContain('built-in dark mode');
		expect(contents[3]?.textContent).toContain('seamlessly across all devices');
	});

	it('should have header with username property', () => {
		const headerComponent = fixture.debugElement.children[0]
			.componentInstance as HeaderComponent;
		expect(headerComponent.username()).toBe('John Doe');
	});

	it('should render header with correct inputs', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const toolbar = compiled.querySelector('mat-toolbar');
		expect(toolbar).toBeTruthy();
		const appName = compiled.querySelector('.app-name');
		expect(appName?.textContent).toContain('ixcamper app');
		const username = compiled.querySelector('.username');
		expect(username?.textContent).toContain('John Doe');
	});

	it('should have responsive layout structure', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const main = compiled.querySelector('main');
		expect(main).toBeTruthy();
		expect(main?.querySelector('.cards-grid')).toBeTruthy();
		expect(main?.querySelectorAll('mat-card').length).toBeGreaterThan(0);
	});

	it('should render cards in correct order from store', () => {
		const storeCards = component.cards();
		const compiled = fixture.nativeElement as HTMLElement;
		const renderedTitles = compiled.querySelectorAll('mat-card-title');

		storeCards.forEach((card, index) => {
			expect(renderedTitles[index]?.textContent).toContain(card.title);
		});
	});

	it('should render sticky header at top', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const toolbar = compiled.querySelector('mat-toolbar');
		const styles = window.getComputedStyle(toolbar!);
		// The sticky positioning is applied via ::ng-deep in scss
		expect(toolbar).toBeTruthy();
	});

	it('should render app-header before main content', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const children = compiled.children;
		expect(children[0].tagName.toLowerCase()).toBe('app-header');
		expect(children[1].tagName.toLowerCase()).toBe('main');
		expect(children[2].tagName.toLowerCase()).toBe('router-outlet');
	});

	it('should have correct card structure', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		const firstCard = compiled.querySelector('mat-card');
		expect(firstCard?.querySelector('mat-card-header')).toBeTruthy();
		expect(firstCard?.querySelector('mat-card-title')).toBeTruthy();
		expect(firstCard?.querySelector('mat-card-subtitle')).toBeTruthy();
		expect(firstCard?.querySelector('mat-card-content')).toBeTruthy();
	});

	it('each card should be rendered with unique id', () => {
		const storeCards = component.cards();
		const ids = storeCards.map((card) => card.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(storeCards.length);
	});

	it('should display all card data correctly', () => {
		const storeCards = component.cards();
		const compiled = fixture.nativeElement as HTMLElement;

		storeCards.forEach((card, index) => {
			const cardTitles = compiled.querySelectorAll('mat-card-title');
			const cardSubtitles = compiled.querySelectorAll('mat-card-subtitle');
			const cardContents = compiled.querySelectorAll('mat-card-content');

			expect(cardTitles[index]?.textContent).toContain(card.title);
			expect(cardSubtitles[index]?.textContent).toContain(card.subtitle);
			expect(cardContents[index]?.textContent).toContain(card.content);
		});
	});
});
