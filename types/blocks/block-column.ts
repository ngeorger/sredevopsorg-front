import type { File } from '../system';

export interface BlockColumn {
	headline?: string | null;
	id?: string;
	title?: string | null;
	rows?: (number | BlockColumnRow)[];
}

export interface BlockColumnRow {
	block_columns?: (string | BlockColumn) | null;
	content?: string | null;
	headline?: string | null;
	id?: string;
	image?: (string | File) | null;
	image_position?: string | null;
	title?: string | null;
}
