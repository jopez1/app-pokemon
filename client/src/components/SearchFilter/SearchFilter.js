import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemons } from "../../redux/actions";
import {
  FilterContainer,
  CheckboxesContainer,
  SourceLabelCheckbox,
  SourceCheckbox,
  SourceLabel,
} from "./StyledSearchFilter";

const SearchFilter = ({ types }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    bySource: { api: true, db: true },
    byType: [],
  });
  const dispatch = useDispatch();
  
  const handleSourceCheck = (source) => {
    if (source === "db")
      setSelectedFilters({
        ...selectedFilters,
        bySource: {
          ...selectedFilters.bySource,
          db: !selectedFilters.bySource.db,
        },
      });
    else
      setSelectedFilters({
        ...selectedFilters,
        bySource: {
          ...selectedFilters.bySource,
          api: !selectedFilters.bySource.api,
        },
      });
  };
  useEffect(() => {
    if (mounted) {
      dispatch(filterPokemons(selectedFilters));
    } else {
      setMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedFilters]);
  return (
    <FilterContainer>
      <CheckboxesContainer>
        <SourceLabelCheckbox>
          <SourceLabel>Muestra los creados por el usuario:</SourceLabel>
          <SourceCheckbox
            type="checkbox"
            onChange={() => handleSourceCheck("api")}
            
          ></SourceCheckbox>
        </SourceLabelCheckbox>
        <SourceLabelCheckbox>
          <SourceLabel>Muestra los Pokemons de la Api:</SourceLabel>
          <SourceCheckbox
            type="checkbox"
            onChange={() => handleSourceCheck("db")}
            
          ></SourceCheckbox>
        </SourceLabelCheckbox>
      </CheckboxesContainer>
      
    </FilterContainer>
  );
};

export default SearchFilter;
