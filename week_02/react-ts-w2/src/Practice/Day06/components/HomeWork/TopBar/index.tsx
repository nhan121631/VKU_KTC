import { SearchBar } from "./SearchBar";
import { StatusBar } from "./StatusBar";

type Props = {
  onSearch : (current:any) => void;
}
export const TopBar = ({onSearch}:Props) => {
  return <div>
    <StatusBar />
    <SearchBar onSearch={onSearch} />
  </div>;
};
