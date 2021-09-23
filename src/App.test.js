import { render, screen } from '@testing-library/react';

import HomeComponent from "./Components/homeComponent";

test('renders learn react link', () => {
	render(<HomeComponent />);
	const linkElement = screen.getByText(/Meeting room occupancy/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
	render(<HomeComponent />);
	const linkElement = screen.getByText(/Show occupancy/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
	render(<HomeComponent />);
	const linkElement = screen.getByText(/Select a sensor:/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
	render(<HomeComponent />);
	const linkElement = screen.getByText(/Sensor XYZ/i);
	expect(linkElement).toBeInTheDocument();
});
