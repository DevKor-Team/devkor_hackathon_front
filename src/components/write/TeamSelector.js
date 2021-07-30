import PropTypes from 'prop-types';

const TeamSelector = ({ placeholder }) => {
  //   const [teams, setTeam] = useTeams();
  return (
    <div>
      {placeholder}
      Teamselector
    </div>
  );
};

TeamSelector.propTypes = {
  placeholder: PropTypes.string,
};

export default TeamSelector;
