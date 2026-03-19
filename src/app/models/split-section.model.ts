export interface SplitSectionData {
    leftSide: {
        leftTitle: string;
        leftDescription: string;
    }[]

    middleCards: {
        title: string;
        image?: string;
    }[];

    rightSide: {
        rightTitle: string;
        rightDescription: string;
    }[]

}