export type DesktopPosition = {
    rowStart: number;
    rowFinish: number;
    colStart: number;
    colFinish: number;
};

export type MobilePosition = {
    row: number;
};

export type GridPosition = MobilePosition | DesktopPosition;

export type Breakpoint = 'mobile' | 'md' | 'lg' | 'xl' | 'projects';

export const MOBILE_GRID_ROWS = 15;

export const LYRICS_GRIDS: Record<
    Exclude<Breakpoint, 'mobile'>,
    DesktopPosition[]
> = {
    projects: [
        { rowStart: 14, rowFinish: 19, colStart: 16, colFinish: 21 },
        { rowStart: 14, rowFinish: 19, colStart: 1, colFinish: 6 },
        { rowStart: 19, rowFinish: 25, colStart: 16, colFinish: 21 },
        { rowStart: 19, rowFinish: 25, colStart: 1, colFinish: 6 },
    ],
    md: [
        { rowStart: 1, rowFinish: 5, colStart: 1, colFinish: 8 },
        { rowStart: 21, rowFinish: 25, colStart: 1, colFinish: 8 },
        { rowStart: 22, rowFinish: 25, colStart: 15, colFinish: 21 },
        { rowStart: 1, rowFinish: 5, colStart: 15, colFinish: 21 },
    ],

    lg: [
        {
            rowStart: 21,
            rowFinish: 25,
            colStart: 1,
            colFinish: 8,
        },
        {
            rowStart: 1,
            rowFinish: 5,
            colStart: 15,
            colFinish: 21,
        },
        {
            rowStart: 13,
            rowFinish: 22,
            colStart: 18,
            colFinish: 21,
        },
        {
            rowStart: 22,
            rowFinish: 26,
            colStart: 15,
            colFinish: 21,
        },
    ],

    xl: [
        {
            rowStart: 1,
            rowFinish: 3,
            colStart: 1,
            colFinish: 8,
        },
        {
            rowStart: 3,
            rowFinish: 7,
            colStart: 1,
            colFinish: 5,
        },
        {
            rowStart: 12,
            rowFinish: 20,
            colStart: 1,
            colFinish: 4,
        },
        {
            rowStart: 7,
            rowFinish: 13,
            colStart: 1,
            colFinish: 5,
        },
        {
            rowStart: 21,
            rowFinish: 25,
            colStart: 1,
            colFinish: 8,
        },
        {
            rowStart: 13,
            rowFinish: 17,
            colStart: 17,
            colFinish: 21,
        },
        {
            rowStart: 16,
            rowFinish: 22,
            colStart: 17,
            colFinish: 21,
        },
        {
            rowStart: 22,
            rowFinish: 25,
            colStart: 17,
            colFinish: 21,
        },
        {
            rowStart: 21,
            rowFinish: 25,
            colStart: 1,
            colFinish: 8,
        },
        {
            rowStart: 5,
            rowFinish: 12,
            colStart: 18,
            colFinish: 21,
        },
    ],
};
