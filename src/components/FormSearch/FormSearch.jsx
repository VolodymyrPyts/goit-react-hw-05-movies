import { Wrapper, Input, Icon } from './FormSearch.styled';

export const FormSearch = ({ value, onChange }) => {
  return (
    <>
      <Wrapper>
        <Icon />
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={'enter the name of the movie'}
        />
      </Wrapper>
    </>
  )
}
