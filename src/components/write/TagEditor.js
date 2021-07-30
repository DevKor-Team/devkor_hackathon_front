import useTags from 'components/hooks/write/useTag';
import PropTypes from 'prop-types';

const TagEditor = ({ placeholder }) => {
  const [tags /* ,  setTags */] = useTags();
  return (
    <div>
      {placeholder}
      TagEditor
      {tags}
    </div>
  );
};

TagEditor.propTypes = {
  placeholder: PropTypes.string,
};

export default TagEditor;
