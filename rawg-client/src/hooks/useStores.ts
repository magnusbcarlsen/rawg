import useData from "./useData";

export interface Store {
    image_background: string | undefined;
    id: number;
    name: string;
    slug: string;
   
}

const useStores = () => useData<Store>("/stores");
export default useStores;