
interface AppLocalization {
	startSlideshow: string;
	startSlideshowInNewWinow: string;
	exit: string;
	endOfDeck: string;
	showExitButton: string;
	print: string;
	printPreview: string;
	close: string;

	printPreviewShownMessage: { start: string; actionLink: string; };

	exportPresentationAsHtml: string;
	exportPresentationSettings: string;

	switchViewsToShowNoteViewer: string;
	switchViewsToShowMarkdownViewer: string;
	unableToGetHtml: string;

	settingsPaneDescription: string;
	showSlidesOverflowSetting: string;
	hideToolbarButtonSetting: string;
	toolbarButtonLocationSetting__note: string;
	toolbarButtonLocationSetting__editor: string;
	toolbarButtonLocationSetting: string;
	showSpeakerNotesSetting: string;
	rememberSlideshowPositionSetting: string;
	rememberSlideshowPositionSetting__description: string;

	presentationTheme: string;
	presentationTheme__description: string;
	theme__matchJoplin: string;
	theme__dark: string;
	theme__light: string;
	theme__blackOnWhite: string;
	theme__graphPaper: string;
	theme__darkBlue: string;
	theme__lightBlue: string;
	theme__darkRed: string;

	showSlideNumbers: string;
	slideNumbers__none: string;
	slideNumbers__current: string;
	slideNumbers__currentAndTotal: string;
}

const defaultStrings: AppLocalization = {
	startSlideshow: 'Start slideshow',
	startSlideshowInNewWinow: 'Start slideshow (new window)',
	exit: 'Exit',
	endOfDeck: 'End of deck',
	showExitButton: 'Show exit button',
	print: 'Print',
	printPreview: 'Print preview',
	close: 'Close',

	printPreviewShownMessage: {
		start: 'A print preview dialog has been opened. It\'s also possible to ',
		actionLink: 'print directly from this page.',
	},
	exportPresentationSettings: 'Presentation export settings',
	exportPresentationAsHtml: 'Export presentation as HTML',

	switchViewsToShowNoteViewer: 'Please open the note viewer for the current note.',
	unableToGetHtml: 'Unable to get the HTML to present.',
	switchViewsToShowMarkdownViewer: [
		'The slides plugin was unable to get the rendered content of the current note. Showing the markdown viewer may help.',
		'Switch views to show the markdown viewer?'
	].join('\n'),

	settingsPaneDescription: 'Settings for RevealJS Integration. ' +
		'If a presentation is ongoing, it may need to be closed and re-opened ' +
		'for these settings to take effect.',
	hideToolbarButtonSetting: 'Hide slideshow button (requires restart)',
	toolbarButtonLocationSetting: 'Slideshow button location (requires restart)',
	toolbarButtonLocationSetting__note: 'Note toolbar',
	toolbarButtonLocationSetting__editor: 'Editor toolbar',
	showSlidesOverflowSetting: 'Allow scrolling large slides',
	showSpeakerNotesSetting: 'Show speaker notes (if any)',
	rememberSlideshowPositionSetting: 'Remember position in slideshow',
	rememberSlideshowPositionSetting__description:
		'For each note, saves the last open slide and navigates to it when starting a slideshow. This position syncs across devices.',

	presentationTheme: 'Default Theme',
	presentationTheme__description: 'The default theme to be used for displaying, exporting, and printing presentations. '
		+ 'Note that "Match Joplin" only applies to presentations started from within Joplin. Printing and exporting will use a light theme.',
	theme__matchJoplin: 'Match Joplin',
	theme__dark: 'Dark',
	theme__light: 'Light',
	theme__blackOnWhite: 'Black on white',
	theme__graphPaper: 'Graph paper',
	theme__darkBlue: 'Dark blue',
	theme__lightBlue: 'Light blue',
	theme__darkRed: 'Dark red',


	showSlideNumbers: 'Show slide numbers',
	slideNumbers__none: 'No',
	slideNumbers__current: 'Current slide number',
	slideNumbers__currentAndTotal: 'Current and total',
};

const localizations: Record<string, AppLocalization> = {
	en: defaultStrings,
	es: {
		...defaultStrings,
		close: 'Cerrar',
		exit: 'Salir',
		print: 'Imprimir',
	},
	hr: {
		startSlideshow: 'Pokreni prezentaciju',
		startSlideshowInNewWinow: 'Pokreni prezentaciju (novi prozor)',
		exit: 'Zatvori',
		endOfDeck: 'Kraj prezentacije',
		showExitButton: 'Prikaži gumb za zatvaranje',
		print: 'Ispiši',
		printPreview: 'Pregled ispisa',
		close: 'Zatvori',

		printPreviewShownMessage: {
			start: 'Otvoren je dijalog za pregled ispisa. Također je moguće ',
			actionLink: 'ispisati direktno s ove stranice.',
		},
		exportPresentationSettings: 'Postavke izvoza prezentacije',
		exportPresentationAsHtml: 'Izvezi prezentaciju kao HTML',

		switchViewsToShowNoteViewer: 'Otvori preglednik bilješki za trenutačnu bilješku.',
		unableToGetHtml: 'Nije moguće dobiti HTML za prikaz.',
		switchViewsToShowMarkdownViewer: [
			'Dodaci za prezentacije nisu uspjeli dohvatiti prikazani sadržaj trenutačne bilješke. Prikazivanje Markdown preglednika može pomoći.',
			'Promijeniti prikaz kako bi se pokazao Markdown preglednik?'
		].join('\n'),

		settingsPaneDescription: 'Postavke za RevealJS integraciju. ' +
			'Ako je prezentacija u tijeku, možda će se morati zatvoriti i ponovo otvoriti ' +
			'kako bi ove postavke stupile na snagu.',
		hideToolbarButtonSetting: 'Sakrij gumb za prezentaciju (zahtijeva ponovno pokretanje)',
		toolbarButtonLocationSetting: 'Mjesto gumba za prezentaciju (zahtijeva ponovno pokretanje)',
		toolbarButtonLocationSetting__note: 'Alatna traka bilješki',
		toolbarButtonLocationSetting__editor: 'Alatna traka uređivača',
		showSlidesOverflowSetting: 'Dozvoli klizanje pri velikim slajdovima',
		showSpeakerNotesSetting: 'Prikaži bilješke predavača (ako postoje)',
		rememberSlideshowPositionSetting: 'Zapamti položaj u prezentaciji',
		rememberSlideshowPositionSetting__description:
			'Za svaku bilješku sprema zadnji otvoreni slajd i prelazi na njega pri pokretanju prezentacije. Ovaj se položaj sinkronizira na svim uređajima.',

		presentationTheme: 'Zadana tema',
		presentationTheme__description: 'Zadana tema koja se koristi za prikaz, izvoz i ispis prezentacija. '
			+ 'Napomena: „Uskladi s Joplinom” se primjenjuje samo na prezentacije pokrenute unutar Joplina. Ispis i izvoz će koristiti svijetlu temu.',
		theme__matchJoplin: 'Uskladi s Joplinom',
		theme__dark: 'Tamna',
		theme__light: 'Svijetla',
		theme__blackOnWhite: 'Crno na bijelo',
		theme__graphPaper: 'Papir s kvadratićima',
		theme__darkBlue: 'Tamnoplava',
		theme__lightBlue: 'Svijetloplava',
		theme__darkRed: 'Tamnocrvena',

		showSlideNumbers: 'Prikaži brojeve slajdova',
		slideNumbers__none: 'Nema',
		slideNumbers__current: 'Trenutačni broj slajdova',
		slideNumbers__currentAndTotal: 'Trenutačno i ukupno',
	},
};

let localization: AppLocalization|undefined;

const languages = [...navigator.languages];
for (const language of navigator.languages) {
	const localeSep = language.indexOf('-');

	if (localeSep !== -1) {
		languages.push(language.substring(0, localeSep));
	}
}

for (const locale of languages) {
	if (locale in localizations) {
		localization = localizations[locale];
		break;
	}
}

if (!localization) {
	console.log('No supported localization found. Falling back to default.');
	localization = defaultStrings;
}

export default localization!;
