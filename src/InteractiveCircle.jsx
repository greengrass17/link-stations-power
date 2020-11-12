import { styled } from '@material-ui/core/styles';

export default styled('circle')((props) => ({
  '&:hover': {
    cursor: 'pointer',
  },
  opacity: props.selected ? 1 : 0.5,
}));
