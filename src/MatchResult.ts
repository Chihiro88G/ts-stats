
// object way: not very clear what the purpose of the object is
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// }

// enum way: signaling other engineers that it's a collection of closely related values
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}