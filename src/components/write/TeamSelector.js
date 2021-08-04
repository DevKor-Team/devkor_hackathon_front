import PropTypes from 'prop-types';
import useMyTeamInfo from 'components/hooks/useMyTeamInfo';
import Select from 'react-select';
import useTeam from 'components/hooks/write/useTeam';

const TeamSelector = ({ placeholder }) => {
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
  };
  return (
    <Select
      value={currentOption}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      styles={style}
    />
  );
};

TeamSelector.propTypes = {
  placeholder: PropTypes.string,
};

export default TeamSelector;
