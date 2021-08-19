import PropTypes from 'prop-types';
import useMyTeamInfo from 'components/hooks/useMyTeamInfo';
import Select from 'react-select';
import useTeam from 'components/hooks/write/useTeam';

const TeamSelector = ({ placeholder, customStyle = {}, readOnly = false }) => {
  const [teamInfo] = useMyTeamInfo();
  const options = teamInfo
    ? teamInfo.map((team) => {
        return {
          value: team,
          label: team.name,
        };
      })
    : [];
  const [team, setTeam] = useTeam();
  const currentOption = team
    ? {
        value: team,
        label: team.name,
      }
    : undefined;
  const handleChange = (selectedOption) => {
    setTeam(selectedOption.value);
  };

  const style = {
    container: (base) => ({
      ...base,
      width: '90%',
    }),
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none',
      textAlign: 'right',
    }),
    placeholder: (base) => ({
      ...base,
      right: '0px',
      textAlign: 'right',
    }),
    input: (base) => ({
      ...base,
      textAlign: 'right',
      right: '0px',
    }),
    singleValue: (base) => ({
      ...base,
      right: '0px',
      color: '#bbbbbb',
      textAlign: 'right',
    }),
    menuList: (base) => ({
      ...base,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    option: (base) => ({
      ...base,
      width: '95%',
    }),
    ...customStyle,
  };
  return (
    <Select
      value={currentOption}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      styles={style}
      isSearchable={false}
      menuIsOpen={readOnly ? false : undefined}
      isClearable={!readOnly}
      openMenuOnClick={!readOnly}
    />
  );
};

TeamSelector.propTypes = {
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  customStyle: PropTypes.object,
};

export default TeamSelector;
