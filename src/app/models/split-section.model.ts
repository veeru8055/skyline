export interface ContentBlock {
    type: 'paragraph' | 'bulletList' | 'highlight' | 'keystat';
    content: string | string[];
}

export interface SkylineSection {
    id: string;
    title: string;
    subtitle?: string;
    content: ContentBlock[];
    backgroundColor?: 'primary' | 'dark' | 'light' | 'accent';
    icon?: string;
    layout?: 'standard' | 'compact' | 'feature';
}

export interface SplitSectionData {
    sections: SkylineSection[];
}