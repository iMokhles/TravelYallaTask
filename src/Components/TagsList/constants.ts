import {ITag} from "../../Interfaces/brands";

export interface TagsListProps {
    tags: Array<ITag>
    onTagChange?: (tag: ITag|null) => void;
}
