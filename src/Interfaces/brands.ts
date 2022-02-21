
export interface IBranch {
    name?: string;
}

export interface IItem {
    name: string;
    description?: string;
    price?: string;
}

export interface ITag {
    name?: string;
    image?: string;
}

export interface IBrand {
    name: string;
    logo?: string;
    description?: string;
    branches?: Array<IBranch>;
    items?: Array<IItem>;
    tags: Array<ITag>;
}
