import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by Name
      <StyledInput type="text" name="filter" onChange={e => onFilter(e)}></StyledInput>
    </FilterLabel>
  );
};
