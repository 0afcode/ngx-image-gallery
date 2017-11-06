export interface GALLERY_CONF {
	imageBorderRadius?: string;
	imageOffset?: string;
	showDeleteControl?: boolean;
	showCloseControl?: boolean;
	showExtUrlControl?: boolean;
	showImageTitle?: boolean;
	showThumbnails?: boolean;
	closeOnEsc?: boolean;
	reactToKeyboard?: boolean;
	reactToMouseWheel?: boolean;
	reactToRightClick?: boolean;
	thumbnailSize?: number;
}

export interface GALLERY_IMAGE {
	_cached?: boolean;
	url: string;
	thumbnailUrl?: string;
	altText?: string;
	title?: string;
	extUrl?: string;
	extUrlTarget?: string;
}