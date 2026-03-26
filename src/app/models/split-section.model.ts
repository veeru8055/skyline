export interface SplitSectionData {
    leftSide: {
        id: string;
        leftTitle: string;
        leftDescription: string;
    }[]

    middleCards: {
        id: string;
        title: string;
        image?: string;
        imageAlt?: string;
    }[];

    rightSide: {
        id: string;
        rightTitle: string;
        rightDescription: string;
    }[]

}