import {ITag} from "../../Interfaces/brands";

export interface BrandItemProps {
    name: string;
    logo?: string;
    tags: Array<ITag>;
}
