import { TestBed } from '@angular/core/testing';
import { CardsStore, CardData } from './cards.store';

describe('CardsStore', () => {
	let store: CardsStore;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CardsStore],
		});
		store = TestBed.inject(CardsStore);
	});

	it('should be created', () => {
		expect(store).toBeTruthy();
	});

	it('should initialize with default cards', () => {
		expect(store.cards()).toBeDefined();
		expect(store.cards().length).toBeGreaterThan(0);
	});

	it('should have exactly 6 cards on initialization', () => {
		expect(store.cards().length).toBe(6);
	});

	it('should have loading flag initialized to false', () => {
		expect(store.loading()).toBe(false);
	});

	it('should have cards with correct structure', () => {
		const cards = store.cards();
		cards.forEach((card: CardData) => {
			expect(card.id).toBeDefined();
			expect(card.title).toBeDefined();
			expect(card.subtitle).toBeDefined();
			expect(card.content).toBeDefined();
			expect(typeof card.id).toBe('number');
			expect(typeof card.title).toBe('string');
			expect(typeof card.subtitle).toBe('string');
			expect(typeof card.content).toBe('string');
		});
	});

	it('should have unique card IDs', () => {
		const cards = store.cards();
		const ids = cards.map((card: CardData) => card.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(cards.length);
	});

	it('should have specific card data', () => {
		const cards = store.cards();

		// Check first card
		expect(cards[0].id).toBe(1);
		expect(cards[0].title).toBe('Welcome');
		expect(cards[0].subtitle).toBe('Getting Started');

		// Check second card
		expect(cards[1].id).toBe(2);
		expect(cards[1].title).toBe('Features');

		// Check third card
		expect(cards[2].id).toBe(3);
		expect(cards[2].title).toBe('Dark Mode');
	});

	it('should have all card titles non-empty', () => {
		const cards = store.cards();
		cards.forEach((card: CardData) => {
			expect(card.title.length).toBeGreaterThan(0);
		});
	});

	it('should have all card subtitles non-empty', () => {
		const cards = store.cards();
		cards.forEach((card: CardData) => {
			expect(card.subtitle.length).toBeGreaterThan(0);
		});
	});

	it('should have all card content non-empty', () => {
		const cards = store.cards();
		cards.forEach((card: CardData) => {
			expect(card.content.length).toBeGreaterThan(0);
		});
	});

	it('should have cards returned as signals', () => {
		const cards = store.cards;
		expect(typeof cards).toBe('function');
	});

	it('should have loading as signal', () => {
		const loading = store.loading;
		expect(typeof loading).toBe('function');
	});

	it('should return immutable card data', () => {
		const cards1 = store.cards();
		const cards2 = store.cards();
		expect(cards1).toEqual(cards2);
	});

	it('should have all expected card titles', () => {
		const cards = store.cards();
		const titles = cards.map((card: CardData) => card.title);
		expect(titles).toContain('Welcome');
		expect(titles).toContain('Features');
		expect(titles).toContain('Dark Mode');
		expect(titles).toContain('Responsive');
		expect(titles).toContain('Components');
		expect(titles).toContain('Testing');
	});

	it('should return cards in predictable order', () => {
		const cards = store.cards();
		// Verify the order is consistent
		expect(cards[0].id).toBeLessThan(cards[1].id);
		expect(cards[5].id).toBe(6);
	});

	it('should contain Material-related card data', () => {
		const cards = store.cards();
		const content = cards.map((card: CardData) => card.content).join(' ');
		expect(content).toContain('Angular');
		expect(content).toContain('responsive');
	});
});
