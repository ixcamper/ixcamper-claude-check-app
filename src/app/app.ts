import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { CardsStore } from './stores/cards.store';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, MatCardModule, HeaderComponent, CommonModule],
	templateUrl: './app.html',
	styleUrl: './app.scss',
	providers: [CardsStore],
})
export class App {
	protected readonly title = signal('ixcamper app');
	protected readonly cardsStore = inject(CardsStore);
	readonly cards = this.cardsStore.cards;
}
