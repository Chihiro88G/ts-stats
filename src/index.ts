import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";


// INHERITANCE APPROACH
// const reader = new MatchReader('football.csv');
// reader.read();

// let manUnitedWins = 0;

// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === 'A') {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} times`);



// INTERFACE (COMPOSITION) APPROACH
// create object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// create instance of MatchReader
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);

