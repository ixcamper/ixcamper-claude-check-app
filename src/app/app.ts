import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';

interface CardData {
	id: number;
	title: string;
	subtitle: string;
	content: string;
}

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, MatCardModule, HeaderComponent, CommonModule],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly title = signal('ixcamper app');
	protected readonly cards = signal<CardData[]>([
		{
			id: 1,
			title: 'Welcome',
			subtitle: 'Getting Started',
			content: 'Angular Material has been successfully added to your project!',
		},
		{
			id: 2,
			title: 'Features',
			subtitle: 'What We Offer',
			content: 'Explore our comprehensive Material Design components and utilities.',
		},
		{
			id: 3,
			title: 'Dark Mode',
			subtitle: 'Theme Support',
			content: 'Our application includes built-in dark mode with Material Design theming.',
		},
		{
			id: 4,
			title: 'Responsive',
			subtitle: 'Mobile Ready',
			content: 'Fully responsive design that works seamlessly across all devices.',
		},
		{
			id: 5,
			title: 'Components',
			subtitle: 'Rich UI Elements',
			content: 'Utilize Material Design components for a professional user interface.',
		},
		{
			id: 6,
			title: 'Testing',
			subtitle: 'Quality Assurance',
			content: 'Comprehensive unit tests ensure code quality and reliability.',
		},
	]);
}
