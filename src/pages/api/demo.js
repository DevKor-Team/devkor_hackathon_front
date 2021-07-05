export default (req, res) => {
  return res.status(200).json({
    team: 'TestTeam1',
    title: 'test1',
    thumbnail: 'https://source.unsplash.com/random/200x200?sig=1',
    desc: 'hehehe',
    created_at: '2021-07-05',
    updated_at: '2021-07-06',
  });
};
